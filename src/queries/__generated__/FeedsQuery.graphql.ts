/**
 * @generated SignedSource<<74585384ab64a7c682d1a7ebee31a13d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type FeedsQuery$data = {
  readonly feeds: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string
        readonly ' $fragmentSpreads': FragmentRefs<'StoryPreview_node'>
      }
    } | null>
  }
  readonly ' $fragmentType': 'FeedsQuery'
}
export type FeedsQuery = FeedsQuery$data
export type FeedsQuery$key = {
  readonly ' $data'?: FeedsQuery$data
  readonly ' $fragmentSpreads': FragmentRefs<'FeedsQuery'>
}

const node: ReaderFragment = (function () {
  var v0 = ['feeds']
  return {
    argumentDefinitions: [
      {
        defaultValue: 4,
        kind: 'LocalArgument',
        name: 'count',
      },
      {
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'cursor',
      },
    ],
    kind: 'Fragment',
    metadata: {
      connection: [
        {
          count: 'count',
          cursor: 'cursor',
          direction: 'forward',
          path: v0 /*: any*/,
        },
      ],
      refetch: {
        connection: {
          forward: {
            count: 'count',
            cursor: 'cursor',
          },
          backward: null,
          path: v0 /*: any*/,
        },
        fragmentPathInResult: [],
        operation: require('./FeedsRoot_Query.graphql'),
      },
    },
    name: 'FeedsQuery',
    selections: [
      {
        alias: 'feeds',
        args: null,
        concreteType: 'StoriesConnection',
        kind: 'LinkedField',
        name: '__RootQuery__feeds_connection',
        plural: false,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'StoryEdge',
            kind: 'LinkedField',
            name: 'edges',
            plural: true,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: 'Story',
                kind: 'LinkedField',
                name: 'node',
                plural: false,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'id',
                    storageKey: null,
                  },
                  {
                    args: null,
                    kind: 'FragmentSpread',
                    name: 'StoryPreview_node',
                  },
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: '__typename',
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'cursor',
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: 'PageInfo',
            kind: 'LinkedField',
            name: 'pageInfo',
            plural: false,
            selections: [
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'endCursor',
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'hasNextPage',
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      },
    ],
    type: 'Query',
    abstractKey: null,
  }
})()

;(node as any).hash = 'ba6f92757b35ee6d6d0693e711c322d2'

export default node
