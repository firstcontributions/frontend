const DEFAULT_EDITOR_CONTENT = {
  type: 'doc',
  content: [
    {
      type: 'heading',
      attrs: { level: 2 },
      content: [{ type: 'text', text: 'Title of the post' }],
    },
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'Content of the post',
        },
      ],
    },
  ],
}

export default DEFAULT_EDITOR_CONTENT
