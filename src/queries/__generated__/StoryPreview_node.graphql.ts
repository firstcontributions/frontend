/**
 * @generated SignedSource<<09d7f148844683fb5e3419bb36ed50cc>>
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
  readonly ' $fragmentSpreads': FragmentRefs<'StoryPreviewFooter_story'>
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
    {
      args: null,
      kind: 'FragmentSpread',
      name: 'StoryPreviewFooter_story',
    },
  ],
  type: 'Story',
  abstractKey: null,
}

;(node as any).hash = '63468627b5b05754efc601e975751963'

export default node
