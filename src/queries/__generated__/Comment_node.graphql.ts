/**
 * @generated SignedSource<<8e58adacc5b553c1d997504f5b6711c1>>
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

;(node as any).hash = '51939eeef1689032d4c56bdacc08604b'

export default node
