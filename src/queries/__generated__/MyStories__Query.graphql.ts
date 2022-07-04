/**
 * @generated SignedSource<<9c5cc1c556621ebef34adaa67a0740b8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type MyStories__Query$data = {
  readonly stories: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string
        readonly ' $fragmentSpreads': FragmentRefs<'StoryPreview_node'>
      }
    } | null>
  }
  readonly id: string
  readonly ' $fragmentType': 'MyStories__Query'
}
export type MyStories__Query = MyStories__Query$data
export type MyStories__Query$key = {
  readonly ' $data'?: MyStories__Query$data
  readonly ' $fragmentSpreads': FragmentRefs<'MyStories__Query'>
}

const node: ReaderFragment = (function () {
  var v0 = ['stories'],
    v1 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'id',
      storageKey: null,
    }
  return {
    argumentDefinitions: [
      {
        defaultValue: 10,
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
        fragmentPathInResult: ['node'],
        operation: require('./MyStoriesUser_Query.graphql'),
        identifierField: 'id',
      },
    },
    name: 'MyStories__Query',
    selections: [
      {
        alias: 'stories',
        args: null,
        concreteType: 'StoriesConnection',
        kind: 'LinkedField',
        name: '__UserQuery__stories_connection',
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
                  v1 /*: any*/,
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
      v1 /*: any*/,
    ],
    type: 'User',
    abstractKey: null,
  }
})()

;(node as any).hash = 'ee5d310ccaebb59e31b8ffa2e5e89ddb'

export default node
