import Table from '@editorjs/table'
import List from '@editorjs/list'
import editorjsCodeflask from '@firstcontributions/editorjs-codeflask'
import Image from '@editorjs/image'
import Header from '@editorjs/header'

export const EDITOR_JS_TOOLS = {
  table: Table,
  list: List,
  code: editorjsCodeflask,
  image: {
    class: Image,
    config: {
      field: 'source',
      endpoints: {
        byFile: '/api/upload', // Your backend file uploader endpoint
        byUrl: '/api/upload_url',
      },
    },
  },
  header: Header,
}
