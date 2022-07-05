/**
 * @generated SignedSource<<673dbcea58ab77d0654b61a5f090e243>>
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
  var v0 = {
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
        args: null,
        concreteType: 'ReactionsConnection',
        kind: 'LinkedField',
        name: 'reactions',
        plural: false,
        selections: [
          v0 /*: any*/,
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'hasViewerAssociation',
            storageKey: null,
          },
        ],
        storageKey: null,
      },
      {
        alias: null,
        args: null,
        concreteType: 'CommentsConnection',
        kind: 'LinkedField',
        name: 'comments',
        plural: false,
        selections: [v0 /*: any*/],
        storageKey: null,
      },
    ],
    type: 'Story',
    abstractKey: null,
  }
})()

;(node as any).hash = '91a67ba23e3d12e2abf0423b653933a2'

export default node
