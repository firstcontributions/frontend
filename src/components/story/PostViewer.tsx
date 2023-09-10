import { useEditor, EditorContent } from '@tiptap/react'
import { TiptapExtensions } from './extensions'
import DEFAULT_EDITOR_CONTENT from './defaultContent'

const Tiptap = () => {
  const editor = useEditor({
    extensions: TiptapExtensions,
    editable: false,
    content: DEFAULT_EDITOR_CONTENT,
  })

  return (
    <div className="relative min-h-[500px] w-full max-w-screen-lg border-stone-200 bg-white  dark:text-gray-300 dark:bg-dark-600 p-12 px-8 sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:px-12 sm:shadow-lg prose dark:prose-invert">
      <EditorContent editor={editor} />
    </div>
  )
}

export default Tiptap
