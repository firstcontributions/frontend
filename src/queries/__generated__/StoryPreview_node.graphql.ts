/**
 * @generated SignedSource<<670b6ad8c35a9c84d13213577375ed7e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type StoryPreview_node$data = {
  readonly id: string
  readonly abstractContent: string
  readonly thumbnail: string
  readonly timeCreated: any
  readonly title: string
  readonly urlSuffix: string
  readonly createdBy: {
    readonly ' $fragmentSpreads': FragmentRefs<'UserSnippet_user'>
  }
  readonly ' $fragmentType': 'StoryPreview_node'
}
export type StoryPreview_node = StoryPreview_node$data
export type StoryPreview_node$key = {
  readonly ' $data'?: StoryPreview_node$data
  readonly ' $fragmentSpreads': FragmentRefs<'StoryPreview_node'>
}

const node: ReaderFragment = {
  argumentDefinitions: [],
  kind: 'Fragment',
  metadata: null,
  name: 'StoryPreview_node',
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
      name: 'abstractContent',
      storageKey: null,
    },
    {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'thumbnail',
      storageKey: null,
    },
    {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'timeCreated',
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
      name: 'urlSuffix',
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
          args: null,
          kind: 'FragmentSpread',
          name: 'UserSnippet_user',
        },
      ],
      storageKey: null,
    },
  ],
  type: 'Story',
  abstractKey: null,
}

;(node as any).hash = '2788b8769164d7972fa3b6f9b8e5447b'

export default node
