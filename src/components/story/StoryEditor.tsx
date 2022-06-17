import EditorJS from '@editorjs/editorjs'; 
import React, { useEffect, useRef, useState } from 'react';
import { graphql, useMutation } from 'react-relay';
import Card from '../Card';
import { EDITOR_JS_TOOLS } from './editorTools';

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

const getAbstract = (content) => {
  let abstract = ''
  for(let i =0; i< content.blocks.length; i++){
    if (content.blocks[i].type == "header" || content.blocks[i].type =="paragraph") {
      abstract += content.blocks[i].data.text
    }
    if (abstract.length >= 200) break;
  }
  return abstract;
}
 
const EDITTOR_HOLDER_ID = 'editorjs';

export default function Editor () {
    const [postTitle, setPostTitle] = useState('Your Title Goes Here')
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
          let content = await editor.saver.save();
          // Put your logic here to save this data to your DB
          setEditorData(content);
        },
        autofocus: true,
        tools: EDITOR_JS_TOOLS, 
        inlineToolbar: true,
        placehodler: 'water'
      });
    }; 
    const [commitMutation, isMutationInFlight] = useMutation(
        graphql`
          mutation StoryEditorCreateMutation($input: StoryInput!) {
            createStory(story:$input) {
              id
            }
          }
        `
    );
    const handleStorySubmit = () => {
        commitMutation({
            variables: {
              input: {
                title: postTitle, 
                contentJson: JSON.stringify(editorData), 
                abstractContent: getAbstract(editorData), 
                urlSuffix: postTitle.toLowerCase().replace(" ", "-").substring(0, 32), 
                thumbnail: ''
              },
            },
        })
    }
    return (
        <Card classes="prose">
        <h1 contentEditable  onInput={(e) => setPostTitle(e.target.textContent)}>{postTitle}</h1>
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