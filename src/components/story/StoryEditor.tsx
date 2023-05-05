'use client'

import EditorJS, { OutputData } from '@editorjs/editorjs'
import { stripHtml } from 'string-strip-html'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  Environment,
  graphql,
  RelayEnvironmentProvider,
  useMutation,
} from 'react-relay'
import Button from '../Button'
import Card from '../Card'
import { EDITOR_JS_TOOLS } from './editorTools'
import { getCurrentEnvironment } from 'src/relay/environment'

const DEFAULT_INITIAL_DATA = (): OutputData => {
  return {
    time: new Date().getTime(),
    blocks: [
      {
        type: 'header',
        data: {
          text: 'Your title goes here',
          level: 1,
        },
      },
    ],
  }
}

const getTitle = (content: OutputData) => {
  for (let i = 0; i < content.blocks.length; i++) {
    if (content.blocks[i].type === 'header' && content.blocks[i].data.text) {
      return content.blocks[i].data.text
    }
  }
  return ''
}
const getAbstract = (content: OutputData) => {
  let abstract = ''
  let headerTaken = false
  for (let i = 0; i < content.blocks.length; i++) {
    if (
      content.blocks[i].type === 'header' &&
      content.blocks[i].data.text &&
      !headerTaken
    ) {
      headerTaken = true
    } else if (
      content.blocks[i].type === 'header' ||
      content.blocks[i].type === 'paragraph'
    ) {
      abstract += stripHtml(content.blocks[i].data.text).result + ' '
    }
    if (abstract.length >= 200) break
  }
  return abstract
}

const getThubnail = (content: OutputData) => {
  for (let i = 0; i < content.blocks.length; i++) {
    if (content.blocks[i].type === 'image' && content.blocks[i].data.file.url) {
      return content.blocks[i].data.file.url
    }
  }
  return ''
}

const EDITTOR_HOLDER_ID = 'editorjs'

type EditorProps = {
  editable?: boolean
  body?: string
  requestCookie?: string | null
}
let isEditorInitialized = false

export default function StoryEditor({
  editable,
  body,
  requestCookie,
}: EditorProps) {
  const environment = getCurrentEnvironment(requestCookie ?? '') as Environment
  return (
    <RelayEnvironmentProvider environment={environment as Environment}>
      <Editor editable={editable} body={body} />
    </RelayEnvironmentProvider>
  )
}

function Editor({ editable, body }: EditorProps) {
  const editorRef = useRef<EditorJS>()

  const [editorData] = useState(
    (body && JSON.parse(body)) || DEFAULT_INITIAL_DATA
  )

  const getEditorContent = useCallback(async () => {
    const content = await editorRef.current?.save()
    return content
  }, [])
  const initEditor = useCallback(() => {
    const editor = new EditorJS({
      holder: EDITTOR_HOLDER_ID,
      data: editorData,
      placeholder: 'title',
      defaultBlock: 'paragraph',
      onReady: () => {
        editorRef.current = editor
      },
      autofocus: true,
      tools: EDITOR_JS_TOOLS,
      inlineToolbar: true,
      readOnly: !editable,
    })
  }, [editable, editorData])
  useEffect(() => {
    if (!editorRef.current && !isEditorInitialized) {
      initEditor()
      isEditorInitialized = true
    }
    return () => {
      editorRef?.current?.destroy()
      editorRef.current = undefined
    }
  }, [editorRef, initEditor])

  const [commitMutation] = useMutation(
    graphql`
      mutation StoryEditorCreateMutation($input: StoryInput!) {
        createStory(story: $input) {
          id
        }
      }
    `
  )
  const handleStorySubmit = useCallback(async () => {
    const editorContent = await getEditorContent()
    if (editorContent) {
      const postTitle = getTitle(editorContent)
      commitMutation({
        variables: {
          input: {
            title: postTitle,
            contentJson: JSON.stringify(editorContent),
            abstractContent: getAbstract(editorContent),
            urlSuffix: postTitle
              .toLowerCase()
              .replaceAll(' ', '-')
              .substring(0, 32),
            thumbnail: getThubnail(editorContent),
          },
        },
      })
    }
  }, [commitMutation, getEditorContent])
  return (
    <Card classes="prose max-w-none dark:prose-invert">
      <div className="prose-code">
        <div id={EDITTOR_HOLDER_ID}> </div>
      </div>
      <style jsx>
        {`
          .prose-code {
            --tw-prose-code: none;
            --tw-prose-pre-code: none;
            --tw-prose-pre-bg: none;
          }

          .dark .ce-inline-tool,
          .dark .ce-toolbar__plus,
          .dark .ce-toolbar__settings-btn {
            @apply text-gray-400;
          }

          .dark .ce-inline-toolbar,
          .dark .ce-conversion-toolbar,
          .dark .ce-toolbox,
          .dark .ce-popover,
          .dark .ce-settings {
            @apply bg-dark-600 border-dark-500;
          }

          .dark .ce-popover__item-icon {
            @apply bg-dark-500;
          }

          .dark .ce-block--selected {
            @apply bg-dark-500 text-gray-800;
          }
        `}
      </style>
      {editable && <Button onClick={handleStorySubmit}>Submit </Button>}
    </Card>
  )
}
