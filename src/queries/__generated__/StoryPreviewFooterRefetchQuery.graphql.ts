/**
 * @generated SignedSource<<833b552ba8165058a3fa42c9e39f5c62>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type StoryPreviewFooterRefetchQuery$variables = {
  id: string
}
export type StoryPreviewFooterRefetchQueryVariables =
  StoryPreviewFooterRefetchQuery$variables
export type StoryPreviewFooterRefetchQuery$data = {
  readonly node: {
    readonly ' $fragmentSpreads': FragmentRefs<'StoryPreviewFooter_story'>
  } | null
}
export type StoryPreviewFooterRefetchQueryResponse =
  StoryPreviewFooterRefetchQuery$data
export type StoryPreviewFooterRefetchQuery = {
  variables: StoryPreviewFooterRefetchQueryVariables
  response: StoryPreviewFooterRefetchQuery$data
}

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'id',
      },
    ],
    v1 = [
      {
        kind: 'Variable',
        name: 'id',
        variableName: 'id',
      },
    ],
    v2 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'totalCount',
      storageKey: null,
    }
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Fragment',
      metadata: null,
      name: 'StoryPreviewFooterRefetchQuery',
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: null,
          kind: 'LinkedField',
          name: 'node',
          plural: false,
          selections: [
            {
              args: null,
              kind: 'FragmentSpread',
              name: 'StoryPreviewFooter_story',
            },
          ],
          storageKey: null,
        },
      ],
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'StoryPreviewFooterRefetchQuery',
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: null,
          kind: 'LinkedField',
          name: 'node',
          plural: false,
          selections: [
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: '__typename',
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
              kind: 'InlineFragment',
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: 'ReactionsConnection',
                  kind: 'LinkedField',
                  name: 'reactions',
                  plural: false,
                  selections: [
                    v2 /*: any*/,
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'hasViewerAssociation',
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: 'CommentsConnection',
                  kind: 'LinkedField',
                  name: 'comments',
                  plural: false,
                  selections: [v2 /*: any*/],
                  storageKey: null,
                },
              ],
              type: 'Story',
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: '8e69d3c9765f3aff433d311778fa1e25',
      id: null,
      metadata: {},
      name: 'StoryPreviewFooterRefetchQuery',
      operationKind: 'query',
      text: 'query StoryPreviewFooterRefetchQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...StoryPreviewFooter_story\n    id\n  }\n}\n\nfragment StoryPreviewFooter_story on Story {\n  id\n  reactions {\n    totalCount\n    hasViewerAssociation\n  }\n  comments {\n    totalCount\n  }\n}\n',
    },
  }
})()

;(node as any).hash = '91a67ba23e3d12e2abf0423b653933a2'

export default node
