/**
 * @generated SignedSource<<7632fbc4807b1794d988fd49be666db0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type Comment_node$data = {
  readonly contentJson: string
  readonly createdBy: {
    readonly id: string
    readonly avatar: string
    readonly handle: string
    readonly ' $fragmentSpreads': FragmentRefs<'UserSnippet_user'>
  }
  readonly ' $fragmentType': 'Comment_node'
}
export type Comment_node = Comment_node$data
export type Comment_node$key = {
  readonly ' $data'?: Comment_node$data
  readonly ' $fragmentSpreads': FragmentRefs<'Comment_node'>
}

const node: ReaderFragment = {
  argumentDefinitions: [],
  kind: 'Fragment',
  metadata: null,
  name: 'Comment_node',
  selections: [
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
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'id',
          storageKey: null,
        },
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
          args: null,
          kind: 'FragmentSpread',
          name: 'UserSnippet_user',
        },
      ],
      storageKey: null,
    },
  ],
  type: 'Comment',
  abstractKey: null,
}

;(node as any).hash = 'd3f5d775c9cbd2cd85f97f9555045a40'

export default node
