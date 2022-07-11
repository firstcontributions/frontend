/**
 * @generated SignedSource<<1e9f1f3733b08978b1d8ec02bbf030ff>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type Comments_storyQuery$variables = {
  count?: number | null
  cursor?: string | null
  id: string
}
export type Comments_storyQueryVariables = Comments_storyQuery$variables
export type Comments_storyQuery$data = {
  readonly node: {
    readonly ' $fragmentSpreads': FragmentRefs<'Comments_story'>
  } | null
}
export type Comments_storyQueryResponse = Comments_storyQuery$data
export type Comments_storyQuery = {
  variables: Comments_storyQueryVariables
  response: Comments_storyQuery$data
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
      {
        kind: 'Literal',
        name: 'sortBy',
        value: 'time_created',
      },
      {
        kind: 'Literal',
        name: 'sortOrder',
        value: 'desc',
      },
    ]
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Fragment',
      metadata: null,
      name: 'Comments_storyQuery',
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
              name: 'Comments_story',
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
      name: 'Comments_storyQuery',
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
                  args: null,
                  concreteType: 'User',
                  kind: 'LinkedField',
                  name: 'createdBy',
                  plural: false,
                  selections: [v3 /*: any*/],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: v4 /*: any*/,
                  concreteType: 'CommentsConnection',
                  kind: 'LinkedField',
                  name: 'comments',
                  plural: false,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: 'CommentEdge',
                      kind: 'LinkedField',
                      name: 'edges',
                      plural: true,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: 'Comment',
                          kind: 'LinkedField',
                          name: 'node',
                          plural: false,
                          selections: [
                            v3 /*: any*/,
                            {
                              alias: null,
                              args: null,
                              kind: 'ScalarField',
                              name: 'contentJson',
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
                                v3 /*: any*/,
                                {
                                  alias: null,
                                  args: null,
                                  kind: 'ScalarField',
                                  name: 'avatar',
                                  storageKey: null,
                                },
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
                      kind: 'ScalarField',
                      name: 'totalCount',
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
                  filters: ['sortBy', 'sortOrder'],
                  handle: 'connection',
                  key: 'Comments_story__comments',
                  kind: 'LinkedHandle',
                  name: 'comments',
                },
              ],
              type: 'Story',
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: 'c139cafe4695965b8204b2ae8e0a4c4e',
      id: null,
      metadata: {},
      name: 'Comments_storyQuery',
      operationKind: 'query',
      text: 'query Comments_storyQuery(\n  $count: Int = 10\n  $cursor: String\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...Comments_story_1G22uz\n    id\n  }\n}\n\nfragment Comment_node on Comment {\n  contentJson\n  createdBy {\n    id\n    avatar\n    handle\n    ...UserSnippet_user\n  }\n}\n\nfragment Comments_story_1G22uz on Story {\n  id\n  createdBy {\n    id\n  }\n  comments(first: $count, after: $cursor, sortBy: "time_created", sortOrder: desc) {\n    edges {\n      node {\n        id\n        ...Comment_node\n        __typename\n      }\n      cursor\n    }\n    totalCount\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment UserSnippet_user on User {\n  avatar\n  id\n  handle\n  bio\n  reputation {\n    value\n  }\n}\n',
    },
  }
})()

;(node as any).hash = 'daea4b03349903ad1ebc3a4208b5e997'

export default node
