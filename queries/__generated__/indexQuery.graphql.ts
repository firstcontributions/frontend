/**
 * @generated SignedSource<<5ef0451ad1b35b86672567d7b398ce57>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type indexQuery$variables = {};
export type indexQueryVariables = indexQuery$variables;
export type indexQuery$data = {
  readonly viewer: {
    readonly login: string;
  };
};
export type indexQueryResponse = indexQuery$data;
export type indexQuery = {
  variables: indexQueryVariables;
  response: indexQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "indexQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/)
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
    "name": "indexQuery",
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
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "fa69dc48ee1f0976b13a18cc42ad9d17",
    "id": null,
    "metadata": {},
    "name": "indexQuery",
    "operationKind": "query",
    "text": "query indexQuery {\n  viewer {\n    login\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "1ea795ec9479c8d672112757459b6da8";

export default node;
