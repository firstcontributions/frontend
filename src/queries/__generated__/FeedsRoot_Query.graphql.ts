/**
 * @generated SignedSource<<338a45aa61e63842774d8294f735a5f2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime'
import { FragmentRefs } from 'relay-runtime'
export type FeedsRoot_Query$variables = {
  count?: number | null
  cursor?: string | null
}
export type FeedsRoot_QueryVariables = FeedsRoot_Query$variables
export type FeedsRoot_Query$data = {
  readonly ' $fragmentSpreads': FragmentRefs<'FeedsQuery'>
}
export type FeedsRoot_QueryResponse = FeedsRoot_Query$data
export type FeedsRoot_Query = {
  variables: FeedsRoot_QueryVariables
  response: FeedsRoot_Query$data
}

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        defaultValue: 4,
        kind: 'LocalArgument',
        name: 'count',
      },
      {
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'cursor',
      },
    ],
    v1 = [
      {
        kind: 'Variable',
        name: 'after',
        variableName: 'cursor',
      },
      {
        kind: 'Variable',
        name: 'first',
        variableName: 'count',
      },
    ],
    v2 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'id',
      storageKey: null,
    },
    v3 = [
      {
        kind: 'Literal',
        name: 'first',
        value: 1,
      },
    ],
    v4 = {
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
      name: 'FeedsRoot_Query',
      selections: [
        {
          args: [
            {
              kind: 'Variable',
              name: 'count',
              variableName: 'count',
            },
            {
              kind: 'Variable',
              name: 'cursor',
              variableName: 'cursor',
            },
          ],
          kind: 'FragmentSpread',
          name: 'FeedsQuery',
        },
      ],
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'FeedsRoot_Query',
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: 'StoriesConnection',
          kind: 'LinkedField',
          name: 'feeds',
          plural: false,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: 'StoryEdge',
              kind: 'LinkedField',
              name: 'edges',
              plural: true,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: 'Story',
                  kind: 'LinkedField',
                  name: 'node',
                  plural: false,
                  selections: [
                    v2 /*: any*/,
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
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'avatar',
                          storageKey: null,
                        },
                        v2 /*: any*/,
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
                          kind: 'ScalarField',
                          name: 'bio',
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
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: v3 /*: any*/,
                      concreteType: 'ReactionsConnection',
                      kind: 'LinkedField',
                      name: 'reactions',
                      plural: false,
                      selections: [
                        v4 /*: any*/,
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
                      args: v3 /*: any*/,
                      concreteType: 'CommentsConnection',
                      kind: 'LinkedField',
                      name: 'comments',
                      plural: false,
                      selections: [v4 /*: any*/],
                      storageKey: 'comments(first:1)',
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: '__typename',
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'cursor',
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: 'PageInfo',
              kind: 'LinkedField',
              name: 'pageInfo',
              plural: false,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'endCursor',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'hasNextPage',
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: v1 /*: any*/,
          filters: null,
          handle: 'connection',
          key: 'RootQuery__feeds',
          kind: 'LinkedHandle',
          name: 'feeds',
        },
      ],
    },
    params: {
      cacheID: 'e87deb866a6d35129c5d51eccd034618',
      id: null,
      metadata: {},
      name: 'FeedsRoot_Query',
      operationKind: 'query',
      text: 'query FeedsRoot_Query(\n  $count: Int = 4\n  $cursor: String\n) {\n  ...FeedsQuery_1G22uz\n}\n\nfragment FeedsQuery_1G22uz on Query {\n  feeds(first: $count, after: $cursor) {\n    edges {\n      node {\n        id\n        ...StoryPreview_node\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment StoryPreviewFooter_story on Story {\n  id\n  reactions(first: 1) {\n    totalCount\n    hasViewerAssociation\n  }\n  comments(first: 1) {\n    totalCount\n  }\n}\n\nfragment StoryPreview_node on Story {\n  id\n  abstractContent\n  thumbnail\n  timeCreated\n  title\n  urlSuffix\n  createdBy {\n    ...UserSnippet_user\n    id\n  }\n  ...StoryPreviewFooter_story\n}\n\nfragment UserSnippet_user on User {\n  avatar\n  id\n  handle\n  bio\n  reputation {\n    value\n  }\n}\n',
    },
  }
})()

;(node as any).hash = 'ba6f92757b35ee6d6d0693e711c322d2'

export default node
