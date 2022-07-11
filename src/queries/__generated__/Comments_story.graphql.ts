/**
 * @generated SignedSource<<dcd3edaa29ed8743422c3f184c76339a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type Comments_story$data = {
  readonly id: string
  readonly createdBy: {
    readonly id: string
  }
  readonly comments: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string
        readonly ' $fragmentSpreads': FragmentRefs<'Comment_node'>
      }
    } | null>
    readonly totalCount: number
  }
  readonly ' $fragmentType': 'Comments_story'
}
export type Comments_story = Comments_story$data
export type Comments_story$key = {
  readonly ' $data'?: Comments_story$data
  readonly ' $fragmentSpreads': FragmentRefs<'Comments_story'>
}

const node: ReaderFragment = (function () {
  var v0 = ['comments'],
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
        operation: require('./Comments_storyQuery.graphql'),
        identifierField: 'id',
      },
    },
    name: 'Comments_story',
    selections: [
      v1 /*: any*/,
      {
        alias: null,
        args: null,
        concreteType: 'User',
        kind: 'LinkedField',
        name: 'createdBy',
        plural: false,
        selections: [v1 /*: any*/],
        storageKey: null,
      },
      {
        alias: 'comments',
        args: [
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
        ],
        concreteType: 'CommentsConnection',
        kind: 'LinkedField',
        name: '__Comments_story__comments_connection',
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
                  v1 /*: any*/,
                  {
                    args: null,
                    kind: 'FragmentSpread',
                    name: 'Comment_node',
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
        storageKey:
          '__Comments_story__comments_connection(sortBy:"time_created",sortOrder:"desc")',
      },
    ],
    type: 'Story',
    abstractKey: null,
  }
})()

;(node as any).hash = 'daea4b03349903ad1ebc3a4208b5e997'

export default node
