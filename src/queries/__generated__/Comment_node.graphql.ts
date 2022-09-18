/**
 * @generated SignedSource<<9244ab9c95b68d52886b709beffd92ec>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type Comment_node$data = {
  readonly abstractContent: string
  readonly contentJson: string
  readonly createdBy: {
    readonly avatar: string
    readonly name: string
    readonly handle: string
  }
  readonly id: string
  readonly timeCreated: any
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
      name: 'abstractContent',
      storageKey: null,
    },
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
          name: 'avatar',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'name',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'handle',
          storageKey: null,
        },
      ],
      storageKey: null,
    },
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
      name: 'timeCreated',
      storageKey: null,
    },
  ],
  type: 'Comment',
  abstractKey: null,
}

;(node as any).hash = '41e33f4c95ec230e9c22824185d7db1d'

export default node
