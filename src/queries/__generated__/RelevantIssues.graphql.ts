/**
 * @generated SignedSource<<db517511e8814ee4632004aebf4c17e1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type RelevantIssues$data = {
  readonly relevantIssues: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string
        readonly ' $fragmentSpreads': FragmentRefs<'Issue_node'>
      }
    } | null>
  }
  readonly id: string
  readonly ' $fragmentType': 'RelevantIssues'
}
export type RelevantIssues = RelevantIssues$data
export type RelevantIssues$key = {
  readonly ' $data'?: RelevantIssues$data
  readonly ' $fragmentSpreads': FragmentRefs<'RelevantIssues'>
}

const node: ReaderFragment = (function () {
  var v0 = ['relevantIssues'],
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
        operation: require('./RelevantIssues_Query.graphql'),
        identifierField: 'id',
      },
    },
    name: 'RelevantIssues',
    selections: [
      {
        alias: 'relevantIssues',
        args: null,
        concreteType: 'IssuesConnection',
        kind: 'LinkedField',
        name: '__RelevantIssues__relevantIssues_connection',
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

;(node as any).hash = 'c597db62bba9905565005cddf068a932'

export default node
