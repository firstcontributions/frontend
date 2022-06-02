/**
 * @generated SignedSource<<69823c1cb2ea7cb5c6031581cc15986a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type pages_UserQuery$variables = {};
export type pages_UserQueryVariables = pages_UserQuery$variables;
export type pages_UserQuery$data = {
  readonly viewer: {
    readonly handle: string;
    readonly " $fragmentSpreads": FragmentRefs<"BadgeList_user" | "IssueList">;
  } | null;
};
export type pages_UserQueryResponse = pages_UserQuery$data;
export type pages_UserQuery = {
  variables: pages_UserQueryVariables;
  response: pages_UserQuery$data;
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
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v5 = {
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
},
v6 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pages_UserQuery",
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
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "IssueList"
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
    "name": "pages_UserQuery",
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
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v4/*: any*/)
                ],
                "storageKey": null
              },
              (v5/*: any*/)
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
          (v2/*: any*/),
          {
            "alias": null,
            "args": (v6/*: any*/),
            "concreteType": "IssuesConnection",
            "kind": "LinkedField",
            "name": "relevantIssues",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "IssueEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Issue",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "repositoryAvatar",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "repository",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "title",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "url",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "labels",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "commentCount",
                        "storageKey": null
                      },
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v4/*: any*/)
                ],
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": "relevantIssues(first:10)"
          },
          {
            "alias": null,
            "args": (v6/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "IssueList__relevantIssues",
            "kind": "LinkedHandle",
            "name": "relevantIssues"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2ec28aa879fdb4b20169f46a8b98078a",
    "id": null,
    "metadata": {},
    "name": "pages_UserQuery",
    "operationKind": "query",
    "text": "query pages_UserQuery {\n  viewer {\n    handle\n    ...BadgeList_user\n    ...IssueList\n    id\n  }\n}\n\nfragment BadgeList_user on User {\n  badges(first: 2) {\n    edges {\n      node {\n        id\n        ...Badge_node\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment Badge_node on Badge {\n  displayName\n  progressPercentageToNextLevel\n}\n\nfragment IssueList on User {\n  relevantIssues(first: 10) {\n    edges {\n      node {\n        id\n        ...Issue_node\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment Issue_node on Issue {\n  repositoryAvatar\n  repository\n  title\n  url\n  labels\n  commentCount\n}\n"
  }
};
})();

(node as any).hash = "e78d6f0813d20cce0f6994c014b1426b";

export default node;
