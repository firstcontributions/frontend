/**
 * @generated SignedSource<<62b945a2aa6dd578449341f5433eaabc>>
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
      'RelevantIssues' | 'IssuesFromLastRepo' | 'IssuesFromRecentRepos'
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
    v1 = [
      {
        kind: 'Literal',
        name: 'first',
        value: 10,
      },
    ],
    v2 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'id',
      storageKey: null,
    },
    v3 = [
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
              v2 /*: any*/,
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
    v4 = [
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
            {
              alias: null,
              args: v1 /*: any*/,
              concreteType: 'IssuesConnection',
              kind: 'LinkedField',
              name: 'relevantIssues',
              plural: false,
              selections: v3 /*: any*/,
              storageKey: 'relevantIssues(first:10)',
            },
            {
              alias: null,
              args: v1 /*: any*/,
              filters: null,
              handle: 'connection',
              key: 'RelevantIssues__relevantIssues',
              kind: 'LinkedHandle',
              name: 'relevantIssues',
            },
            v2 /*: any*/,
            {
              alias: null,
              args: v4 /*: any*/,
              concreteType: 'IssuesConnection',
              kind: 'LinkedField',
              name: 'issuesFromLastRepo',
              plural: false,
              selections: v3 /*: any*/,
              storageKey: 'issuesFromLastRepo(first:2)',
            },
            {
              alias: null,
              args: v4 /*: any*/,
              filters: null,
              handle: 'connection',
              key: 'IssuesFromLastRepo__issuesFromLastRepo',
              kind: 'LinkedHandle',
              name: 'issuesFromLastRepo',
            },
            {
              alias: null,
              args: v4 /*: any*/,
              concreteType: 'IssuesConnection',
              kind: 'LinkedField',
              name: 'issuesFromOtherRecentRepos',
              plural: false,
              selections: v3 /*: any*/,
              storageKey: 'issuesFromOtherRecentRepos(first:2)',
            },
            {
              alias: null,
              args: v4 /*: any*/,
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
      cacheID: '6d644f6993a434478b15181c7c7c3ccf',
      id: null,
      metadata: {},
      name: 'issuesQuery',
      operationKind: 'query',
      text: 'query issuesQuery {\n  viewer {\n    handle\n    ...RelevantIssues\n    ...IssuesFromLastRepo\n    ...IssuesFromRecentRepos\n    id\n  }\n}\n\nfragment Issue_node on Issue {\n  repositoryAvatar\n  repository\n  title\n  url\n  labels\n  commentCount\n}\n\nfragment IssuesFromLastRepo on User {\n  issuesFromLastRepo(first: 2) {\n    edges {\n      node {\n        id\n        ...Issue_node\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment IssuesFromRecentRepos on User {\n  issuesFromOtherRecentRepos(first: 2) {\n    edges {\n      node {\n        id\n        ...Issue_node\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment RelevantIssues on User {\n  relevantIssues(first: 10) {\n    edges {\n      node {\n        id\n        ...Issue_node\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n',
    },
  }
})()

;(node as any).hash = '3f53fe47e8436877c7446ff7de2e961e'

export default node
