/**
 * @generated SignedSource<<96d68f85c81b4c44678b6f8ad960ddfa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type StoryPreviewFooter_story$data = {
  readonly id: string
  readonly reactions: {
    readonly totalCount: number
    readonly hasViewerAssociation: boolean
  }
  readonly comments: {
    readonly totalCount: number
  }
  readonly ' $fragmentType': 'StoryPreviewFooter_story'
}
export type StoryPreviewFooter_story = StoryPreviewFooter_story$data
export type StoryPreviewFooter_story$key = {
  readonly ' $data'?: StoryPreviewFooter_story$data
  readonly ' $fragmentSpreads': FragmentRefs<'StoryPreviewFooter_story'>
}

const node: ReaderFragment = (function () {
  var v0 = [
      {
        kind: 'Literal',
        name: 'first',
        value: 1,
      },
    ],
    v1 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'totalCount',
      storageKey: null,
    }
  return {
    argumentDefinitions: [],
    kind: 'Fragment',
    metadata: {
      refetch: {
        connection: null,
        fragmentPathInResult: ['node'],
        operation: require('./StoryPreviewFooterRefetchQuery.graphql'),
        identifierField: 'id',
      },
    },
    name: 'StoryPreviewFooter_story',
    selections: [
      {
        alias: null,
        args: null,
        kind: 'ScalarField',
        name: 'id',
        storageKey: null,
      },
      {
        alias: null,
        args: v0 /*: any*/,
        concreteType: 'ReactionsConnection',
        kind: 'LinkedField',
        name: 'reactions',
        plural: false,
        selections: [
          v1 /*: any*/,
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'hasViewerAssociation',
            storageKey: null,
          },
        ],
        storageKey: 'reactions(first:1)',
      },
      {
        alias: null,
        args: v0 /*: any*/,
        concreteType: 'CommentsConnection',
        kind: 'LinkedField',
        name: 'comments',
        plural: false,
        selections: [v1 /*: any*/],
        storageKey: 'comments(first:1)',
      },
    ],
    type: 'Story',
    abstractKey: null,
  }
})()

;(node as any).hash = '3ccb284d1a73a72541ab02b62dd437bf'

export default node
