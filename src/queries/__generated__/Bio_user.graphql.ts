/**
 * @generated SignedSource<<660aaf242656c04d52eec753208295e9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type Bio_user$data = {
  readonly id: string
  readonly bio: string
  readonly ' $fragmentType': 'Bio_user'
}
export type Bio_user = Bio_user$data
export type Bio_user$key = {
  readonly ' $data'?: Bio_user$data
  readonly ' $fragmentSpreads': FragmentRefs<'Bio_user'>
}

const node: ReaderFragment = {
  argumentDefinitions: [],
  kind: 'Fragment',
  metadata: null,
  name: 'Bio_user',
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
      name: 'bio',
      storageKey: null,
    },
  ],
  type: 'User',
  abstractKey: null,
}

;(node as any).hash = '702b6c74cbf19da0031547570765388b'

export default node
