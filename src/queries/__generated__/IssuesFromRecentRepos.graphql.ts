/**
 * @generated SignedSource<<0b27b3359b3de93a76644e8724ec89db>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type IssuesFromRecentRepos$data = {
  readonly issuesFromOtherRecentRepos: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string
        readonly ' $fragmentSpreads': FragmentRefs<'Issue_node'>
      }
    } | null>
  }
  readonly id: string
  readonly ' $fragmentType': 'IssuesFromRecentRepos'
}
export type IssuesFromRecentRepos = IssuesFromRecentRepos$data
export type IssuesFromRecentRepos$key = {
  readonly ' $data'?: IssuesFromRecentRepos$data
  readonly ' $fragmentSpreads': FragmentRefs<'IssuesFromRecentRepos'>
}

const node: ReaderFragment = (function () {
  var v0 = ['issuesFromOtherRecentRepos'],
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
        defaultValue: 2,
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
        operation: require('./IssuesFromRecentRepos_Query.graphql'),
        identifierField: 'id',
      },
    },
    name: 'IssuesFromRecentRepos',
    selections: [
      {
        alias: 'issuesFromOtherRecentRepos',
        args: null,
        concreteType: 'IssuesConnection',
        kind: 'LinkedField',
        name: '__IssuesFromRecentRepos__issuesFromOtherRecentRepos_connection',
        plural: false,
        selections: [
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
                    args: null,
                    kind: 'FragmentSpread',
                    name: 'Issue_node',
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

;(node as any).hash = '2459acd8cae083e81dcd0118403d60dd'

export default node
