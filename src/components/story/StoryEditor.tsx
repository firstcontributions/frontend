import EditorJS, { LogLevels, OutputData } from '@editorjs/editorjs'
import { Http2ServerRequest } from 'http2'
import React, { useEffect, useRef, useState } from 'react'
import { graphql, useMutation } from 'react-relay'
import Button from '../Button'
import Card from '../Card'
import { EDITOR_JS_TOOLS } from './editorTools'

const DEFAULT_INITIAL_DATA = (): OutputData => {
  return {
    time: new Date().getTime(),
    blocks: [
      {
        type: 'header',
        data: {
          text: 'This is my awesome editor!',
          level: 1,
        },
      },
    ],
  }
}

const getAbstract = (content: OutputData) => {
  let abstract = ''
  for (let i = 0; i < content.blocks.length; i++) {
    if (
      content.blocks[i].type == 'header' ||
      content.blocks[i].type == 'paragraph'
    ) {
      abstract += content.blocks[i].data.text
    }
    if (abstract.length >= 200) break
  }
  return abstract
}

const EDITTOR_HOLDER_ID = 'editorjs'

type EditorProps = {
  title?: string
  body?: string
}

export default function Editor({ title, body }: EditorProps) {
  const [postTitle, setPostTitle] = useState(title || 'Your Title Goes Here')
  const ejInstance = useRef<EditorJS | null>()

  const [editorData, setEditorData] = React.useState(
    (body && JSON.parse(decodeURI(body))) || DEFAULT_INITIAL_DATA
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
    commitMutation({
      variables: {
        input: {
          title: postTitle,
          contentJson: JSON.stringify(editorData),
          abstractContent: getAbstract(editorData),
          urlSuffix: postTitle.toLowerCase().replace(' ', '-').substring(0, 32),
          thumbnail: '',
        },
      },
    })
  }
  return (
    <Card classes="prose max-w-none">
      <div>
        <div id={EDITTOR_HOLDER_ID}> </div>
      </div>
      <style jsx>
        {`
          [contenteditable]:focus {
            outline: 0px solid transparent;
            border-bottom: 1px dashed #aaa;
          }
        `}
      </style>
      <Button onClick={() => handleStorySubmit()}>Submit </Button>
    </Card>
  )
}
