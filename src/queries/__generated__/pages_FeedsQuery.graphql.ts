/**
 * @generated SignedSource<<50e04796baae048b1c9a902561a39b6a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type pages_FeedsQuery$variables = {};
export type pages_FeedsQueryVariables = pages_FeedsQuery$variables;
export type pages_FeedsQuery$data = {
  readonly viewer: {
    readonly handle: string;
    readonly " $fragmentSpreads": FragmentRefs<"BadgeList_user">;
  } | null;
};
export type pages_FeedsQueryResponse = pages_FeedsQuery$data;
export type pages_FeedsQuery = {
  variables: pages_FeedsQueryVariables;
  response: pages_FeedsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "handle",
  "storageKey": null
},
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 2
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pages_FeedsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "BadgeList_user"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pages_FeedsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "BadgesConnection",
            "kind": "LinkedField",
            "name": "badges",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "BadgeEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Badge",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "displayName",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "progressPercentageToNextLevel",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endCursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasNextPage",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "badges(first:2)"
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "BadgeList__badges",
            "kind": "LinkedHandle",
            "name": "badges"
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "43f55020408b65f40bc372130b8e0ff8",
    "id": null,
    "metadata": {},
    "name": "pages_FeedsQuery",
    "operationKind": "query",
    "text": "query pages_FeedsQuery {\n  viewer {\n    handle\n    ...BadgeList_user\n    id\n  }\n}\n\nfragment BadgeList_user on User {\n  badges(first: 2) {\n    edges {\n      node {\n        id\n        ...Badge_node\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment Badge_node on Badge {\n  displayName\n  progressPercentageToNextLevel\n}\n"
  }
};
})();

(node as any).hash = "7af46c1b13e4cf9435bffbcab91ef4fd";

export default node;
