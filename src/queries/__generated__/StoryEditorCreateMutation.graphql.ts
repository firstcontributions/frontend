/**
 * @generated SignedSource<<9d1e32a9f684303a0547221f12e903b0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type StoryInput = {
  abstractContent: string;
  contentJson: string;
  thumbnail: string;
  title: string;
  urlSuffix: string;
};
export type StoryEditorCreateMutation$variables = {
  input: StoryInput;
};
export type StoryEditorCreateMutationVariables = StoryEditorCreateMutation$variables;
export type StoryEditorCreateMutation$data = {
  readonly createStory: {
    readonly title: string;
  };
};
export type StoryEditorCreateMutationResponse = StoryEditorCreateMutation$data;
export type StoryEditorCreateMutation = {
  variables: StoryEditorCreateMutationVariables;
  response: StoryEditorCreateMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "story",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "StoryEditorCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Story",
        "kind": "LinkedField",
        "name": "createStory",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "StoryEditorCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Story",
        "kind": "LinkedField",
        "name": "createStory",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b92456e688a6fd289ff34a69d162cf15",
    "id": null,
    "metadata": {},
    "name": "StoryEditorCreateMutation",
    "operationKind": "mutation",
    "text": "mutation StoryEditorCreateMutation(\n  $input: StoryInput!\n) {\n  createStory(story: $input) {\n    title\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "1f1e4d00a0a756a1a7b351496d4a44b8";

export default node;
