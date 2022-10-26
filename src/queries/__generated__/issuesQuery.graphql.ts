/**
 * @generated SignedSource<<bb4a7e978831128d691c33bc2da418cf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type issuesQuery$variables = {}
export type issuesQueryVariables = issuesQuery$variables
export type issuesQuery$data = {
  readonly viewer: {
    readonly handle: string
    readonly ' $fragmentSpreads': FragmentRefs<
      | 'UserDetails_user'
      | 'RelevantIssues'
      | 'IssuesFromLastRepo'
      | 'IssuesFromRecentRepos'
    >
  } | null
}
export type issuesQueryResponse = issuesQuery$data
export type issuesQuery = {
  variables: issuesQueryVariables
  response: issuesQuery$data
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
    v2 = [
      {
        kind: 'Literal',
        name: 'first',
        value: 5,
      },
    ],
    v3 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: '__typename',
      storageKey: null,
    },
    v4 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'cursor',
      storageKey: null,
    },
    v5 = {
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
    v6 = [
      {
        kind: 'Literal',
        name: 'first',
        value: 10,
      },
    ],
    v7 = [
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
              v3 /*: any*/,
            ],
            storageKey: null,
          },
          v4 /*: any*/,
        ],
        storageKey: null,
      },
      v5 /*: any*/,
    ],
    v8 = [
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
      name: 'issuesQuery',
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
      ],
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: [],
      kind: 'Operation',
      name: 'issuesQuery',
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
              name: 'bio',
              storageKey: null,
            },
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
              args: v2 /*: any*/,
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
                          name: 'linesOfCodeToNextLevel',
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'currentLevel',
                          storageKey: null,
                        },
                        v3 /*: any*/,
                      ],
                      storageKey: null,
                    },
                    v4 /*: any*/,
                  ],
                  storageKey: null,
                },
                v5 /*: any*/,
              ],
              storageKey: 'badges(first:5)',
            },
            {
              alias: null,
              args: v2 /*: any*/,
              filters: null,
              handle: 'connection',
              key: 'BadgeList__badges',
              kind: 'LinkedHandle',
              name: 'badges',
            },
            {
              alias: null,
              args: v6 /*: any*/,
              concreteType: 'IssuesConnection',
              kind: 'LinkedField',
              name: 'relevantIssues',
              plural: false,
              selections: v7 /*: any*/,
              storageKey: 'relevantIssues(first:10)',
            },
            {
              alias: null,
              args: v6 /*: any*/,
              filters: null,
              handle: 'connection',
              key: 'RelevantIssues__relevantIssues',
              kind: 'LinkedHandle',
              name: 'relevantIssues',
            },
            {
              alias: null,
              args: v8 /*: any*/,
              concreteType: 'IssuesConnection',
              kind: 'LinkedField',
              name: 'issuesFromLastRepo',
              plural: false,
              selections: v7 /*: any*/,
              storageKey: 'issuesFromLastRepo(first:2)',
            },
            {
              alias: null,
              args: v8 /*: any*/,
              filters: null,
              handle: 'connection',
              key: 'IssuesFromLastRepo__issuesFromLastRepo',
              kind: 'LinkedHandle',
              name: 'issuesFromLastRepo',
            },
            {
              alias: null,
              args: v8 /*: any*/,
              concreteType: 'IssuesConnection',
              kind: 'LinkedField',
              name: 'issuesFromOtherRecentRepos',
              plural: false,
              selections: v7 /*: any*/,
              storageKey: 'issuesFromOtherRecentRepos(first:2)',
            },
            {
              alias: null,
              args: v8 /*: any*/,
              filters: null,
              handle: 'connection',
              key: 'IssuesFromRecentRepos__issuesFromOtherRecentRepos',
              kind: 'LinkedHandle',
              name: 'issuesFromOtherRecentRepos',
            },
          ],
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: 'd555749e7d810728864c83550f20e2db',
      id: null,
      metadata: {},
      name: 'issuesQuery',
      operationKind: 'query',
      text: 'query issuesQuery {\n  viewer {\n    handle\n    ...UserDetails_user\n    ...RelevantIssues\n    ...IssuesFromLastRepo\n    ...IssuesFromRecentRepos\n    id\n  }\n}\n\nfragment BadgeList_user on User {\n  badges(first: 5) {\n    edges {\n      node {\n        id\n        ...Badge_node\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment Badge_node on Badge {\n  displayName\n  progressPercentageToNextLevel\n  linesOfCodeToNextLevel\n  currentLevel\n}\n\nfragment Bio_user on User {\n  id\n  bio\n}\n\nfragment Issue_node on Issue {\n  repositoryAvatar\n  repository\n  title\n  url\n  labels\n  commentCount\n}\n\nfragment IssuesFromLastRepo on User {\n  issuesFromLastRepo(first: 2) {\n    edges {\n      node {\n        id\n        ...Issue_node\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment IssuesFromRecentRepos on User {\n  issuesFromOtherRecentRepos(first: 2) {\n    edges {\n      node {\n        id\n        ...Issue_node\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment RelevantIssues on User {\n  relevantIssues(first: 10) {\n    edges {\n      node {\n        id\n        ...Issue_node\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment UserDetails_user on User {\n  id\n  handle\n  avatar\n  ...Bio_user\n  gitContributionStats {\n    issues\n    pullRequests\n  }\n  ...BadgeList_user\n}\n',
    },
  }
})()

;(node as any).hash = '7700ee1864e9ac59230266089ceda54e'

export default node
