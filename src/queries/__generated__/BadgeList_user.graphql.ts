/**
 * @generated SignedSource<<684f07b2c0592ee803a9ca89999cd8a9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type BadgeList_user$data = {
  readonly badges: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string
        readonly ' $fragmentSpreads': FragmentRefs<'Badge_node'>
      }
    } | null>
  }
  readonly id: string
  readonly ' $fragmentType': 'BadgeList_user'
}
export type BadgeList_user = BadgeList_user$data
export type BadgeList_user$key = {
  readonly ' $data'?: BadgeList_user$data
  readonly ' $fragmentSpreads': FragmentRefs<'BadgeList_user'>
}

const node: ReaderFragment = (function () {
  var v0 = ['badges'],
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
        defaultValue: 5,
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
        operation: require('./BadgeList_userQuery.graphql'),
        identifierField: 'id',
      },
    },
    name: 'BadgeList_user',
    selections: [
      {
        alias: 'badges',
        args: null,
        concreteType: 'BadgesConnection',
        kind: 'LinkedField',
        name: '__BadgeList__badges_connection',
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
                    args: null,
                    kind: 'FragmentSpread',
                    name: 'Badge_node',
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

;(node as any).hash = '538319f030115861881c1c910899653c'

export default node
