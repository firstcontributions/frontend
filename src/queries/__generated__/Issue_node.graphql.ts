/**
 * @generated SignedSource<<e458200204871dbe5318b664057216bd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type Issue_node$data = {
  readonly repositoryAvatar: string
  readonly repository: string
  readonly title: string
  readonly url: string
  readonly labels: ReadonlyArray<string | null>
  readonly commentCount: number
  readonly ' $fragmentType': 'Issue_node'
}
export type Issue_node = Issue_node$data
export type Issue_node$key = {
  readonly ' $data'?: Issue_node$data
  readonly ' $fragmentSpreads': FragmentRefs<'Issue_node'>
}

const node: ReaderFragment = {
  argumentDefinitions: [],
  kind: 'Fragment',
  metadata: null,
  name: 'Issue_node',
  selections: [
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
  ],
  type: 'Issue',
  abstractKey: null,
}

;(node as any).hash = '8c1c59521938708beb63f0c108eb1f72'

export default node
