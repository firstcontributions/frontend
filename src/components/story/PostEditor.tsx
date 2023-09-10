'use client'

import { useEditor, EditorContent, JSONContent } from '@tiptap/react'
import { TiptapExtensions } from './extensions'
import DEFAULT_EDITOR_CONTENT from './defaultContent'
import Button from '../Button'
import { useCallback, useState } from 'react'
import {
  Environment,
  graphql,
  RelayEnvironmentProvider,
  useMutation,
} from 'react-relay'
import { getCurrentEnvironment } from 'src/relay/environment'

const Tiptap = () => {
  const [editorContent, setEditorContent] = useState<null | JSONContent>(null)
  const editor = useEditor({
    extensions: TiptapExtensions,
    content: DEFAULT_EDITOR_CONTENT,
    onUpdate: ({ editor }) => {
      setEditorContent(editor.getJSON())
    },
  })

  const [commitMutation] = useMutation(
    graphql`
      mutation PostEditorCreateMutation($input: StoryInput!) {
        createStory(story: $input) {
          id
        }
      }
    `
  )

  const getTitle = (editorContent: JSONContent[]) => {
    const titleBlock = editorContent.find(
      (block) => block.type === 'heading'
    )?.content
    if (titleBlock && titleBlock.length > 0) {
      return titleBlock[0].text
    }
  }

  const getAbstract = (editorContent: JSONContent[]) => {
    const paragraphs = editorContent.filter(
      (block) => block.type === 'paragraph' && block?.content?.length
    )
    return paragraphs
      .map((paragraph) =>
        paragraph.content?.length ? paragraph.content[0].text : ''
      )
      .join(' ')
  }

  const handleStorySubmit = useCallback(async () => {
    console.log(editorContent)
    if (editorContent) {
      const postTitle = editorContent.content
        ? getTitle(editorContent.content)
        : ''
      const abstractContent = editorContent.content
        ? getAbstract(editorContent.content)
        : ''
      commitMutation({
        variables: {
          input: {
            title: postTitle,
            contentJson: JSON.stringify(editorContent),
            abstractContent: abstractContent,
            urlSuffix: postTitle
              ?.toLowerCase()
              .replaceAll(' ', '-')
              .substring(0, 32),
            thumbnail: '',
          },
        },
      })
    }
  }, [editorContent, commitMutation])

  return (
    <div className="relative min-h-[500px] w-full max-w-screen-lg border-stone-200 bg-white  dark:text-gray-300 dark:bg-dark-600 p-12 px-8 sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:px-12 sm:shadow-lg prose dark:prose-invert">
      <EditorContent editor={editor} />
      <Button onClick={handleStorySubmit}>Submit </Button>
    </div>
  )
}

export default function PostEditor({
  requestCookie,
}: {
  requestCookie: string | null
}) {
  const environment = getCurrentEnvironment(requestCookie ?? '') as Environment
  return (
    <RelayEnvironmentProvider environment={environment as Environment}>
      <Tiptap />
    </RelayEnvironmentProvider>
  )
}
