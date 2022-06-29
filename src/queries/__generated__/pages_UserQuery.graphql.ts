/**
 * @generated SignedSource<<afa691d0e08b62f54705909211a21600>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type pages_UserQuery$variables = {}
export type pages_UserQueryVariables = pages_UserQuery$variables
export type pages_UserQuery$data = {
  readonly viewer: {
    readonly handle: string
    readonly ' $fragmentSpreads': FragmentRefs<
      | 'UserDetails_user'
      | 'RelevantIssues'
      | 'IssuesFromLastRepo'
      | 'IssuesFromRecentRepos'
    >
  } | null
  readonly ' $fragmentSpreads': FragmentRefs<'FeedsQuery'>
}
export type pages_UserQueryResponse = pages_UserQuery$data
export type pages_UserQuery = {
  variables: pages_UserQueryVariables
  response: pages_UserQuery$data
}

const node: ConcreteRequest = (function () {
  var v0 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'handle',
      storageKey: null,
    },
    v1 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'id',
      storageKey: null,
    },
    v2 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'avatar',
      storageKey: null,
    },
    v3 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'bio',
      storageKey: null,
    },
    v4 = [
      {
        kind: 'Literal',
        name: 'first',
        value: 5,
      },
    ],
    v5 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: '__typename',
      storageKey: null,
    },
    v6 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'cursor',
      storageKey: null,
    },
    v7 = {
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
    v8 = [
      {
        kind: 'Literal',
        name: 'first',
        value: 10,
      },
    ],
    v9 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'title',
      storageKey: null,
    },
    v10 = [
      {
        alias: null,
        args: null,
        concreteType: 'IssueEdge',
        kind: 'LinkedField',
        name: 'edges',
        plural: true,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'Issue',
            kind: 'LinkedField',
            name: 'node',
            plural: false,
            selections: [
              v1 /*: any*/,
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'repositoryAvatar',
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'repository',
                storageKey: null,
              },
              v9 /*: any*/,
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'url',
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'labels',
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'commentCount',
                storageKey: null,
              },
              v5 /*: any*/,
            ],
            storageKey: null,
          },
          v6 /*: any*/,
        ],
        storageKey: null,
      },
      v7 /*: any*/,
    ],
    v11 = [
      {
        kind: 'Literal',
        name: 'first',
        value: 2,
      },
    ]
  return {
    fragment: {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'pages_UserQuery',
      selections: [
        {
          alias: null,
          args: null,
          concreteType: 'User',
          kind: 'LinkedField',
          name: 'viewer',
          plural: false,
          selections: [
            v0 /*: any*/,
            {
              args: null,
              kind: 'FragmentSpread',
              name: 'UserDetails_user',
            },
            {
              args: null,
              kind: 'FragmentSpread',
              name: 'RelevantIssues',
            },
            {
              args: null,
              kind: 'FragmentSpread',
              name: 'IssuesFromLastRepo',
            },
            {
              args: null,
              kind: 'FragmentSpread',
              name: 'IssuesFromRecentRepos',
            },
          ],
          storageKey: null,
        },
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'FeedsQuery',
        },
      ],
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: [],
      kind: 'Operation',
      name: 'pages_UserQuery',
      selections: [
        {
          alias: null,
          args: null,
          concreteType: 'User',
          kind: 'LinkedField',
          name: 'viewer',
          plural: false,
          selections: [
            v0 /*: any*/,
            v1 /*: any*/,
            v2 /*: any*/,
            v3 /*: any*/,
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
              args: v4 /*: any*/,
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
                        v1 /*: any*/,
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
                        v5 /*: any*/,
                      ],
                      storageKey: null,
                    },
                    v6 /*: any*/,
                  ],
                  storageKey: null,
                },
                v7 /*: any*/,
              ],
              storageKey: 'badges(first:5)',
            },
            {
              alias: null,
              args: v4 /*: any*/,
              filters: null,
              handle: 'connection',
              key: 'BadgeList__badges',
              kind: 'LinkedHandle',
              name: 'badges',
            },
            {
              alias: null,
              args: v8 /*: any*/,
              concreteType: 'IssuesConnection',
              kind: 'LinkedField',
              name: 'relevantIssues',
              plural: false,
              selections: v10 /*: any*/,
              storageKey: 'relevantIssues(first:10)',
            },
            {
              alias: null,
              args: v8 /*: any*/,
              filters: null,
              handle: 'connection',
              key: 'RelevantIssues__relevantIssues',
              kind: 'LinkedHandle',
              name: 'relevantIssues',
            },
            {
              alias: null,
              args: v11 /*: any*/,
              concreteType: 'IssuesConnection',
              kind: 'LinkedField',
              name: 'issuesFromLastRepo',
              plural: false,
              selections: v10 /*: any*/,
              storageKey: 'issuesFromLastRepo(first:2)',
            },
            {
              alias: null,
              args: v11 /*: any*/,
              filters: null,
              handle: 'connection',
              key: 'IssuesFromLastRepo__issuesFromLastRepo',
              kind: 'LinkedHandle',
              name: 'issuesFromLastRepo',
            },
            {
              alias: null,
              args: v11 /*: any*/,
              concreteType: 'IssuesConnection',
              kind: 'LinkedField',
              name: 'issuesFromOtherRecentRepos',
              plural: false,
              selections: v10 /*: any*/,
              storageKey: 'issuesFromOtherRecentRepos(first:2)',
            },
            {
              alias: null,
              args: v11 /*: any*/,
              filters: null,
              handle: 'connection',
              key: 'IssuesFromRecentRepos__issuesFromOtherRecentRepos',
              kind: 'LinkedHandle',
              name: 'issuesFromOtherRecentRepos',
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: v8 /*: any*/,
          concreteType: 'StoriesConnection',
          kind: 'LinkedField',
          name: 'feeds',
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
                    v9 /*: any*/,
                    {
                      alias: null,
                      args: null,
                      concreteType: 'User',
                      kind: 'LinkedField',
                      name: 'createdBy',
                      plural: false,
                      selections: [
                        v2 /*: any*/,
                        v1 /*: any*/,
                        v0 /*: any*/,
                        v3 /*: any*/,
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
                    v5 /*: any*/,
                  ],
                  storageKey: null,
                },
                v6 /*: any*/,
              ],
              storageKey: null,
            },
            v7 /*: any*/,
          ],
          storageKey: 'feeds(first:10)',
        },
        {
          alias: null,
          args: v8 /*: any*/,
          filters: null,
          handle: 'connection',
          key: 'RootQuery__feeds',
          kind: 'LinkedHandle',
          name: 'feeds',
        },
      ],
    },
    params: {
      cacheID: '5176a90694c993036e67cd57673fc15c',
      id: null,
      metadata: {},
      name: 'pages_UserQuery',
      operationKind: 'query',
      text: 'query pages_UserQuery {\n  viewer {\n    handle\n    ...UserDetails_user\n    ...RelevantIssues\n    ...IssuesFromLastRepo\n    ...IssuesFromRecentRepos\n    id\n  }\n  ...FeedsQuery\n}\n\nfragment BadgeList_user on User {\n  badges(first: 5) {\n    edges {\n      node {\n        id\n        ...Badge_node\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment Badge_node on Badge {\n  displayName\n  progressPercentageToNextLevel\n  currentLevel\n}\n\nfragment Bio_user on User {\n  id\n  bio\n}\n\nfragment FeedsQuery on Query {\n  feeds(first: 10) {\n    edges {\n      node {\n        id\n        ...StoryPreview_node\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment Issue_node on Issue {\n  repositoryAvatar\n  repository\n  title\n  url\n  labels\n  commentCount\n}\n\nfragment IssuesFromLastRepo on User {\n  issuesFromLastRepo(first: 2) {\n    edges {\n      node {\n        id\n        ...Issue_node\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment IssuesFromRecentRepos on User {\n  issuesFromOtherRecentRepos(first: 2) {\n    edges {\n      node {\n        id\n        ...Issue_node\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment RelevantIssues on User {\n  relevantIssues(first: 10) {\n    edges {\n      node {\n        id\n        ...Issue_node\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment StoryPreview_node on Story {\n  id\n  abstractContent\n  thumbnail\n  timeCreated\n  title\n  createdBy {\n    ...UserSnippet_user\n    id\n  }\n}\n\nfragment UserDetails_user on User {\n  id\n  handle\n  avatar\n  ...Bio_user\n  gitContributionStats {\n    issues\n    pullRequests\n  }\n  ...BadgeList_user\n}\n\nfragment UserSnippet_user on User {\n  avatar\n  id\n  handle\n  bio\n  reputation {\n    value\n  }\n}\n',
    },
  }
})()

;(node as any).hash = '678367eac36d0d008d7eaff4376d2797'

export default node
