/**
 * @generated SignedSource<<437789ee8729995bc072d59f71a47fdc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type UserSnippet_user$data = {
  readonly avatar: string
  readonly id: string
  readonly handle: string
  readonly reputation: {
    readonly value: number
  }
  readonly ' $fragmentType': 'UserSnippet_user'
}
export type UserSnippet_user = UserSnippet_user$data
export type UserSnippet_user$key = {
  readonly ' $data'?: UserSnippet_user$data
  readonly ' $fragmentSpreads': FragmentRefs<'UserSnippet_user'>
}

const node: ReaderFragment = {
  argumentDefinitions: [],
  kind: 'Fragment',
  metadata: null,
  name: 'UserSnippet_user',
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
      name: 'id',
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
  type: 'User',
  abstractKey: null,
}

;(node as any).hash = '9527f755e8d470669805cdfd31f2f97e'

export default node
