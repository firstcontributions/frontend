import EditorJS from '@editorjs/editorjs'; 
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Header from '@editorjs/header'
import Card from '../Card';


const DEFAULT_INITIAL_DATA = () => {
  return {
    "time": new Date().getTime(),
    "blocks": [
      {
        "type": "header",
        "data": {
          "text": "This is my awesome editor!",
          "level": 1
        }
      },
    ]
  }
}
 
const EDITTOR_HOLDER_ID = 'editorjs';

export default function Editor () {
    const [postTitle, setPostTitle] = useState('Enter Title')
    const ejInstance = useRef();
    const [editorData, setEditorData] = React.useState(DEFAULT_INITIAL_DATA);
   
    useEffect(() => {
      if (!ejInstance.current) {
        initEditor();
      }
      return () => {
        ejInstance.current.destroy();
        ejInstance.current = null;
      }
    }, []);
   
    const initEditor = () => {
      const editor = new EditorJS({
        holder: EDITTOR_HOLDER_ID,
        logLevel: "ERROR",
        data: editorData,
        onReady: () => {
          ejInstance.current = editor;
        },
        onChange: async () => {
          let content = await this.editorjs.saver.save();
          // Put your logic here to save this data to your DB
          setEditorData(content);
        },
        autofocus: true,
        tools: { 
          header: Header, 
        }, 
      });
    }; 
    const handleStorySubmit = () => {
        console.log(postTitle)
    }
    return (
        <Card classes="prose">
        <h2 contentEditable  onInput={(e) => setPostTitle(e.target.textContent)}>{postTitle}</h2>
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
        <button onClick={() => handleStorySubmit()}>submit </button>
        </Card>
    )

}