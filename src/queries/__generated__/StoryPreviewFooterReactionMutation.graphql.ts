/**
 * @generated SignedSource<<6465cc50e9f47ada8b2d512c171983c8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime'
export type ReactionInput = {
  storyID: string
}
export type StoryPreviewFooterReactionMutation$variables = {
  input: ReactionInput
}
export type StoryPreviewFooterReactionMutationVariables =
  StoryPreviewFooterReactionMutation$variables
export type StoryPreviewFooterReactionMutation$data = {
  readonly createReaction: {
    readonly id: string
  }
}
export type StoryPreviewFooterReactionMutationResponse =
  StoryPreviewFooterReactionMutation$data
export type StoryPreviewFooterReactionMutation = {
  variables: StoryPreviewFooterReactionMutationVariables
  response: StoryPreviewFooterReactionMutation$data
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
            name: 'reaction',
            variableName: 'input',
          },
        ],
        concreteType: 'Reaction',
        kind: 'LinkedField',
        name: 'createReaction',
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
      name: 'StoryPreviewFooterReactionMutation',
      selections: v1 /*: any*/,
      type: 'Mutation',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'StoryPreviewFooterReactionMutation',
      selections: v1 /*: any*/,
    },
    params: {
      cacheID: '71446a9dad88d73caef000df9a9deb91',
      id: null,
      metadata: {},
      name: 'StoryPreviewFooterReactionMutation',
      operationKind: 'mutation',
      text: 'mutation StoryPreviewFooterReactionMutation(\n  $input: ReactionInput!\n) {\n  createReaction(reaction: $input) {\n    id\n  }\n}\n',
    },
  }
})()

;(node as any).hash = '4fdf619624538c518378901803f896c4'

export default node
