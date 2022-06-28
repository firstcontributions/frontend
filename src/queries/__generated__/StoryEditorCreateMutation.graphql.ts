/**
 * @generated SignedSource<<04e48cd791c251ffd5112a274e3455c0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime'
export type StoryInput = {
  abstractContent: string
  contentJson: string
  thumbnail: string
  title: string
  urlSuffix: string
}
export type StoryEditorCreateMutation$variables = {
  input: StoryInput
}
export type StoryEditorCreateMutationVariables =
  StoryEditorCreateMutation$variables
export type StoryEditorCreateMutation$data = {
  readonly createStory: {
    readonly id: string
  }
}
export type StoryEditorCreateMutationResponse = StoryEditorCreateMutation$data
export type StoryEditorCreateMutation = {
  variables: StoryEditorCreateMutationVariables
  response: StoryEditorCreateMutation$data
}

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'input',
      },
    ],
    v1 = [
      {
        alias: null,
        args: [
          {
            kind: 'Variable',
            name: 'story',
            variableName: 'input',
          },
        ],
        concreteType: 'Story',
        kind: 'LinkedField',
        name: 'createStory',
        plural: false,
        selections: [
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'id',
            storageKey: null,
          },
        ],
        storageKey: null,
      },
    ]
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Fragment',
      metadata: null,
      name: 'StoryEditorCreateMutation',
      selections: v1 /*: any*/,
      type: 'Mutation',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'StoryEditorCreateMutation',
      selections: v1 /*: any*/,
    },
    params: {
      cacheID: '4d0438c4e76f418e737bed4515f824ae',
      id: null,
      metadata: {},
      name: 'StoryEditorCreateMutation',
      operationKind: 'mutation',
      text: 'mutation StoryEditorCreateMutation(\n  $input: StoryInput!\n) {\n  createStory(story: $input) {\n    id\n  }\n}\n',
    },
  }
})()

;(node as any).hash = '7257711acc2b8d3178238d03736b336b'

export default node
