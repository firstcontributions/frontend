/**
 * @generated SignedSource<<16d62d2fbbbcb2712ae430a0c4287658>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type MyStoriesUser_Query$variables = {
  count?: number | null
  cursor?: string | null
  id: string
}
export type MyStoriesUser_QueryVariables = MyStoriesUser_Query$variables
export type MyStoriesUser_Query$data = {
  readonly node: {
    readonly ' $fragmentSpreads': FragmentRefs<'MyStories__Query'>
  } | null
}
export type MyStoriesUser_QueryResponse = MyStoriesUser_Query$data
export type MyStoriesUser_Query = {
  variables: MyStoriesUser_QueryVariables
  response: MyStoriesUser_Query$data
}

const node: ConcreteRequest = (function () {
  var v0 = [
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
      {
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'id',
      },
    ],
    v1 = [
      {
        kind: 'Variable',
        name: 'id',
        variableName: 'id',
      },
    ],
    v2 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: '__typename',
      storageKey: null,
    },
    v3 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'id',
      storageKey: null,
    },
    v4 = [
      {
        kind: 'Variable',
        name: 'after',
        variableName: 'cursor',
      },
      {
        kind: 'Variable',
        name: 'first',
        variableName: 'count',
      },
    ],
    v5 = [
      {
        kind: 'Literal',
        name: 'first',
        value: 1,
      },
    ],
    v6 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'totalCount',
      storageKey: null,
    }
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Fragment',
      metadata: null,
      name: 'MyStoriesUser_Query',
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: null,
          kind: 'LinkedField',
          name: 'node',
          plural: false,
          selections: [
            {
              args: [
                {
                  kind: 'Variable',
                  name: 'count',
                  variableName: 'count',
                },
                {
                  kind: 'Variable',
                  name: 'cursor',
                  variableName: 'cursor',
                },
              ],
              kind: 'FragmentSpread',
              name: 'MyStories__Query',
            },
          ],
          storageKey: null,
        },
      ],
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'MyStoriesUser_Query',
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: null,
          kind: 'LinkedField',
          name: 'node',
          plural: false,
          selections: [
            v2 /*: any*/,
            v3 /*: any*/,
            {
              kind: 'InlineFragment',
              selections: [
                {
                  alias: null,
                  args: v4 /*: any*/,
                  concreteType: 'StoriesConnection',
                  kind: 'LinkedField',
                  name: 'stories',
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
                            v3 /*: any*/,
                            {
                              alias: null,
                              args: null,
                              kind: 'ScalarField',
                              name: 'abstractContent',
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: 'ScalarField',
                              name: 'thumbnail',
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: 'ScalarField',
                              name: 'timeCreated',
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: 'ScalarField',
                              name: 'title',
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: 'ScalarField',
                              name: 'urlSuffix',
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: 'User',
                              kind: 'LinkedField',
                              name: 'createdBy',
                              plural: false,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: 'ScalarField',
                                  name: 'avatar',
                                  storageKey: null,
                                },
                                v3 /*: any*/,
                                {
                                  alias: null,
                                  args: null,
                                  kind: 'ScalarField',
                                  name: 'handle',
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: 'ScalarField',
                                  name: 'bio',
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: 'Reputation',
                                  kind: 'LinkedField',
                                  name: 'reputation',
                                  plural: false,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: 'ScalarField',
                                      name: 'value',
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: v5 /*: any*/,
                              concreteType: 'ReactionsConnection',
                              kind: 'LinkedField',
                              name: 'reactions',
                              plural: false,
                              selections: [
                                v6 /*: any*/,
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
                              args: v5 /*: any*/,
                              concreteType: 'CommentsConnection',
                              kind: 'LinkedField',
                              name: 'comments',
                              plural: false,
                              selections: [v6 /*: any*/],
                              storageKey: 'comments(first:1)',
                            },
                            v2 /*: any*/,
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
                {
                  alias: null,
                  args: v4 /*: any*/,
                  filters: null,
                  handle: 'connection',
                  key: 'UserQuery__stories',
                  kind: 'LinkedHandle',
                  name: 'stories',
                },
              ],
              type: 'User',
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: '99504fa10a391045f5c2418f926560f6',
      id: null,
      metadata: {},
      name: 'MyStoriesUser_Query',
      operationKind: 'query',
      text: 'query MyStoriesUser_Query(\n  $count: Int = 10\n  $cursor: String\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...MyStories__Query_1G22uz\n    id\n  }\n}\n\nfragment MyStories__Query_1G22uz on User {\n  stories(first: $count, after: $cursor) {\n    edges {\n      node {\n        id\n        ...StoryPreview_node\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment StoryPreviewFooter_story on Story {\n  id\n  reactions(first: 1) {\n    totalCount\n    hasViewerAssociation\n  }\n  comments(first: 1) {\n    totalCount\n  }\n}\n\nfragment StoryPreview_node on Story {\n  id\n  abstractContent\n  thumbnail\n  timeCreated\n  title\n  urlSuffix\n  createdBy {\n    ...UserSnippet_user\n    id\n  }\n  ...StoryPreviewFooter_story\n}\n\nfragment UserSnippet_user on User {\n  avatar\n  id\n  handle\n  bio\n  reputation {\n    value\n  }\n}\n',
    },
  }
})()

;(node as any).hash = 'ee5d310ccaebb59e31b8ffa2e5e89ddb'

export default node
