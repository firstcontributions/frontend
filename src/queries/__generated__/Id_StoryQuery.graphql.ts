/**
 * @generated SignedSource<<23dcf195094daf0940ad35c7a68eadfb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime'
export type Id_StoryQuery$variables = {
  id: string
}
export type Id_StoryQueryVariables = Id_StoryQuery$variables
export type Id_StoryQuery$data = {
  readonly node: {
    readonly id?: string
    readonly contentJson?: string
  } | null
}
export type Id_StoryQueryResponse = Id_StoryQuery$data
export type Id_StoryQuery = {
  variables: Id_StoryQueryVariables
  response: Id_StoryQuery$data
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
      name: 'id',
      storageKey: null,
    },
    v3 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'contentJson',
      storageKey: null,
    }
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Fragment',
      metadata: null,
      name: 'Id_StoryQuery',
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
              kind: 'InlineFragment',
              selections: [v2 /*: any*/, v3 /*: any*/],
              type: 'Story',
              abstractKey: null,
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
      name: 'Id_StoryQuery',
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
            v2 /*: any*/,
            {
              kind: 'InlineFragment',
              selections: [v3 /*: any*/],
              type: 'Story',
              abstractKey: null,
            },
          ],
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: 'd56fd8bb97e0fe074b72ceac2e619f48',
      id: null,
      metadata: {},
      name: 'Id_StoryQuery',
      operationKind: 'query',
      text: 'query Id_StoryQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on Story {\n      id\n      contentJson\n    }\n    id\n  }\n}\n',
    },
  }
})()

;(node as any).hash = '7e343f7893d28eb8cca2025f975e11f3'

export default node
