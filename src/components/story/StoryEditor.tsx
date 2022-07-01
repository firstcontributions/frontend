import EditorJS, { LogLevels, OutputData } from '@editorjs/editorjs'
import { stripHtml } from 'string-strip-html'
import React, { useEffect, useRef, useState } from 'react'
import { graphql, useMutation } from 'react-relay'
import Button from '../Button'
import Card from '../Card'
import { EDITOR_JS_TOOLS } from './editorTools'
import { useRouter } from 'next/router'

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
    if (content.blocks[i].type == 'header' && content.blocks[i].data.text) {
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
      content.blocks[i].type == 'header' &&
      content.blocks[i].data.text &&
      !headerTaken
    ) {
      headerTaken = true
    } else if (
      content.blocks[i].type == 'header' ||
      content.blocks[i].type == 'paragraph'
    ) {
      abstract += stripHtml(content.blocks[i].data.text).result + ' '
    }
    if (abstract.length >= 200) break
  }
  return abstract
}

const getThubnail = (content: OutputData) => {
  for (let i = 0; i < content.blocks.length; i++) {
    if (content.blocks[i].type == 'image' && content.blocks[i].data.file.url) {
      return content.blocks[i].data.file.url
    }
  }
  return ''
}

const EDITTOR_HOLDER_ID = 'editorjs'

type EditorProps = {
  editable?: boolean
  body?: string
}

export default function Editor({ editable, body }: EditorProps) {
  const router = useRouter()
  const ejInstance = useRef<EditorJS | null>()

  const [editorData, setEditorData] = React.useState(
    (body && JSON.parse(body)) || DEFAULT_INITIAL_DATA
  )
  useEffect(() => {
    if (!ejInstance.current) {
      initEditor()
    }
    return () => {
      ejInstance?.current?.destroy()
      ejInstance.current = null
    }
  }, [])

  const initEditor = () => {
    const editor = new EditorJS({
      holder: EDITTOR_HOLDER_ID,
      data: editorData,
      onReady: () => {
        ejInstance.current = editor
      },
      onChange: async () => {
        const content = await editor.saver.save()
        setEditorData(content)
      },
      autofocus: true,
      tools: EDITOR_JS_TOOLS,
      inlineToolbar: true,
      readOnly: !editable,
    })
  }
  const [commitMutation, isMutationInFlight] = useMutation(
    graphql`
      mutation StoryEditorCreateMutation($input: StoryInput!) {
        createStory(story: $input) {
          id
        }
      }
    `
  )
  const handleStorySubmit = () => {
    const postTitle = getTitle(editorData)
    commitMutation({
      onCompleted: () => {
        router.push('/')
      },
      variables: {
        input: {
          title: postTitle,
          contentJson: JSON.stringify(editorData),
          abstractContent: getAbstract(editorData),
          urlSuffix: postTitle
            .toLowerCase()
            .replaceAll(' ', '-')
            .substring(0, 32),
          thumbnail: getThubnail(editorData),
        },
      },
    })
  }
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
        `}
      </style>
      {editable && <Button onClick={() => handleStorySubmit()}>Submit </Button>}
    </Card>
  )
}
