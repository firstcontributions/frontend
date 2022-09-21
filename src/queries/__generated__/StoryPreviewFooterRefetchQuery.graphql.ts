/**
 * @generated SignedSource<<efbec626d13566fc0aa009a2a7d93164>>
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
    v2 = [
      {
        kind: 'Literal',
        name: 'first',
        value: 1,
      },
    ],
    v3 = {
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
                  args: v2 /*: any*/,
                  concreteType: 'ReactionsConnection',
                  kind: 'LinkedField',
                  name: 'reactions',
                  plural: false,
                  selections: [
                    v3 /*: any*/,
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'hasViewerAssociation',
                      storageKey: null,
                    },
                  ],
                  storageKey: 'reactions(first:1)',
                },
                {
                  alias: null,
                  args: v2 /*: any*/,
                  concreteType: 'CommentsConnection',
                  kind: 'LinkedField',
                  name: 'comments',
                  plural: false,
                  selections: [v3 /*: any*/],
                  storageKey: 'comments(first:1)',
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
      cacheID: '085fb4ff369fe2abbdb7e8598b674c37',
      id: null,
      metadata: {},
      name: 'StoryPreviewFooterRefetchQuery',
      operationKind: 'query',
      text: 'query StoryPreviewFooterRefetchQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...StoryPreviewFooter_story\n    id\n  }\n}\n\nfragment StoryPreviewFooter_story on Story {\n  id\n  reactions(first: 1) {\n    totalCount\n    hasViewerAssociation\n  }\n  comments(first: 1) {\n    totalCount\n  }\n}\n',
    },
  }
})()

;(node as any).hash = '3ccb284d1a73a72541ab02b62dd437bf'

export default node
