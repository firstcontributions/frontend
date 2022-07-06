/**
 * @generated SignedSource<<c7db7467316e5385b5e1bd156d8fe5a4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime'
export type CommentInput = {
  abstractContent: string
  contentJson: string
  storyID: string
}
export type NewCommentMutation$variables = {
  input: CommentInput
}
export type NewCommentMutationVariables = NewCommentMutation$variables
export type NewCommentMutation$data = {
  readonly createComment: {
    readonly id: string
  }
}
export type NewCommentMutationResponse = NewCommentMutation$data
export type NewCommentMutation = {
  variables: NewCommentMutationVariables
  response: NewCommentMutation$data
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
            name: 'comment',
            variableName: 'input',
          },
        ],
        concreteType: 'Comment',
        kind: 'LinkedField',
        name: 'createComment',
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
      name: 'NewCommentMutation',
      selections: v1 /*: any*/,
      type: 'Mutation',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'NewCommentMutation',
      selections: v1 /*: any*/,
    },
    params: {
      cacheID: '77c8850b7aa83c310819062a920891af',
      id: null,
      metadata: {},
      name: 'NewCommentMutation',
      operationKind: 'mutation',
      text: 'mutation NewCommentMutation(\n  $input: CommentInput!\n) {\n  createComment(comment: $input) {\n    id\n  }\n}\n',
    },
  }
})()

;(node as any).hash = 'e23768c6d0e7d7e367eb6ace3e9d2df1'

export default node
