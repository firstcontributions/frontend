/**
 * @generated SignedSource<<3e8e81e49f9e2d8e79c32a24715449f5>>
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

;(node as any).hash = 'a6cfa2b89ab85e087e26da903d3d983e'

export default node
