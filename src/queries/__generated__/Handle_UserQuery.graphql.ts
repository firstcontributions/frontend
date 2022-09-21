/**
 * @generated SignedSource<<76d0c709d486f383818e9bcd9f2cb487>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type Handle_UserQuery$variables = {
  handle: string
}
export type Handle_UserQueryVariables = Handle_UserQuery$variables
export type Handle_UserQuery$data = {
  readonly user: {
    readonly handle: string
    readonly ' $fragmentSpreads': FragmentRefs<
      'UserDetails_user' | 'MyStories__Query'
    >
  }
}
export type Handle_UserQueryResponse = Handle_UserQuery$data
export type Handle_UserQuery = {
  variables: Handle_UserQueryVariables
  response: Handle_UserQuery$data
}

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'handle',
      },
    ],
    v1 = [
      {
        kind: 'Variable',
        name: 'handle',
        variableName: 'handle',
      },
    ],
    v2 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'handle',
      storageKey: null,
    },
    v3 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'id',
      storageKey: null,
    },
    v4 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'avatar',
      storageKey: null,
    },
    v5 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'bio',
      storageKey: null,
    },
    v6 = [
      {
        kind: 'Literal',
        name: 'first',
        value: 5,
      },
    ],
    v7 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: '__typename',
      storageKey: null,
    },
    v8 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'cursor',
      storageKey: null,
    },
    v9 = {
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
    v10 = [
      {
        kind: 'Literal',
        name: 'first',
        value: 10,
      },
    ],
    v11 = [
      {
        kind: 'Literal',
        name: 'first',
        value: 1,
      },
    ],
    v12 = {
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
      name: 'Handle_UserQuery',
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: 'User',
          kind: 'LinkedField',
          name: 'user',
          plural: false,
          selections: [
            v2 /*: any*/,
            {
              args: null,
              kind: 'FragmentSpread',
              name: 'UserDetails_user',
            },
            {
              args: null,
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
      name: 'Handle_UserQuery',
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: 'User',
          kind: 'LinkedField',
          name: 'user',
          plural: false,
          selections: [
            v2 /*: any*/,
            v3 /*: any*/,
            v4 /*: any*/,
            v5 /*: any*/,
            {
              alias: null,
              args: null,
              concreteType: 'GitContributionStats',
              kind: 'LinkedField',
              name: 'gitContributionStats',
              plural: false,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'issues',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'pullRequests',
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: v6 /*: any*/,
              concreteType: 'BadgesConnection',
              kind: 'LinkedField',
              name: 'badges',
              plural: false,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: 'BadgeEdge',
                  kind: 'LinkedField',
                  name: 'edges',
                  plural: true,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: 'Badge',
                      kind: 'LinkedField',
                      name: 'node',
                      plural: false,
                      selections: [
                        v3 /*: any*/,
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'displayName',
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'progressPercentageToNextLevel',
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'currentLevel',
                          storageKey: null,
                        },
                        v7 /*: any*/,
                      ],
                      storageKey: null,
                    },
                    v8 /*: any*/,
                  ],
                  storageKey: null,
                },
                v9 /*: any*/,
              ],
              storageKey: 'badges(first:5)',
            },
            {
              alias: null,
              args: v6 /*: any*/,
              filters: null,
              handle: 'connection',
              key: 'BadgeList__badges',
              kind: 'LinkedHandle',
              name: 'badges',
            },
            {
              alias: null,
              args: v10 /*: any*/,
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
                            v4 /*: any*/,
                            v3 /*: any*/,
                            v2 /*: any*/,
                            v5 /*: any*/,
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
                          args: v11 /*: any*/,
                          concreteType: 'ReactionsConnection',
                          kind: 'LinkedField',
                          name: 'reactions',
                          plural: false,
                          selections: [
                            v12 /*: any*/,
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
                          args: v11 /*: any*/,
                          concreteType: 'CommentsConnection',
                          kind: 'LinkedField',
                          name: 'comments',
                          plural: false,
                          selections: [v12 /*: any*/],
                          storageKey: 'comments(first:1)',
                        },
                        v7 /*: any*/,
                      ],
                      storageKey: null,
                    },
                    v8 /*: any*/,
                  ],
                  storageKey: null,
                },
                v9 /*: any*/,
              ],
              storageKey: 'stories(first:10)',
            },
            {
              alias: null,
              args: v10 /*: any*/,
              filters: null,
              handle: 'connection',
              key: 'UserQuery__stories',
              kind: 'LinkedHandle',
              name: 'stories',
            },
          ],
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: '597da444eeeb526b26e2f7262393192f',
      id: null,
      metadata: {},
      name: 'Handle_UserQuery',
      operationKind: 'query',
      text: 'query Handle_UserQuery(\n  $handle: String!\n) {\n  user(handle: $handle) {\n    handle\n    ...UserDetails_user\n    ...MyStories__Query\n    id\n  }\n}\n\nfragment BadgeList_user on User {\n  badges(first: 5) {\n    edges {\n      node {\n        id\n        ...Badge_node\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment Badge_node on Badge {\n  displayName\n  progressPercentageToNextLevel\n  currentLevel\n}\n\nfragment Bio_user on User {\n  id\n  bio\n}\n\nfragment MyStories__Query on User {\n  stories(first: 10) {\n    edges {\n      node {\n        id\n        ...StoryPreview_node\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment StoryPreviewFooter_story on Story {\n  id\n  reactions(first: 1) {\n    totalCount\n    hasViewerAssociation\n  }\n  comments(first: 1) {\n    totalCount\n  }\n}\n\nfragment StoryPreview_node on Story {\n  id\n  abstractContent\n  thumbnail\n  timeCreated\n  title\n  urlSuffix\n  createdBy {\n    ...UserSnippet_user\n    id\n  }\n  ...StoryPreviewFooter_story\n}\n\nfragment UserDetails_user on User {\n  id\n  handle\n  avatar\n  ...Bio_user\n  gitContributionStats {\n    issues\n    pullRequests\n  }\n  ...BadgeList_user\n}\n\nfragment UserSnippet_user on User {\n  avatar\n  id\n  handle\n  bio\n  reputation {\n    value\n  }\n}\n',
    },
  }
})()

;(node as any).hash = '00515e0f17713f10b2139a205e51e146'

export default node
