/**
 * @generated SignedSource<<fc64f6aece06acc79dbe000d3c61118c>>
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
    readonly " $fragmentSpreads": FragmentRefs<"BadgeList_user" | "RelevantIssues" | "IssuesFromLastRepo" | "IssuesFromRecentRepos">;
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
],
v7 = [
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
v8 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 3
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
            "name": "RelevantIssues"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "IssuesFromLastRepo"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "IssuesFromRecentRepos"
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
            "selections": (v7/*: any*/),
            "storageKey": "relevantIssues(first:10)"
          },
          {
            "alias": null,
            "args": (v6/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "RelevantIssues__relevantIssues",
            "kind": "LinkedHandle",
            "name": "relevantIssues"
          },
          {
            "alias": null,
            "args": (v8/*: any*/),
            "concreteType": "IssuesConnection",
            "kind": "LinkedField",
            "name": "issuesFromLastRepo",
            "plural": false,
            "selections": (v7/*: any*/),
            "storageKey": "issuesFromLastRepo(first:3)"
          },
          {
            "alias": null,
            "args": (v8/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "IssuesFromLastRepo__issuesFromLastRepo",
            "kind": "LinkedHandle",
            "name": "issuesFromLastRepo"
          },
          {
            "alias": null,
            "args": (v8/*: any*/),
            "concreteType": "IssuesConnection",
            "kind": "LinkedField",
            "name": "issuesFromOtherRecentRepos",
            "plural": false,
            "selections": (v7/*: any*/),
            "storageKey": "issuesFromOtherRecentRepos(first:3)"
          },
          {
            "alias": null,
            "args": (v8/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "IssuesFromRecentRepos__issuesFromOtherRecentRepos",
            "kind": "LinkedHandle",
            "name": "issuesFromOtherRecentRepos"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "69ab33aa79a0cd921f0e20b478f46ce3",
    "id": null,
    "metadata": {},
    "name": "pages_UserQuery",
    "operationKind": "query",
    "text": "query pages_UserQuery {\n  viewer {\n    handle\n    ...BadgeList_user\n    ...RelevantIssues\n    ...IssuesFromLastRepo\n    ...IssuesFromRecentRepos\n    id\n  }\n}\n\nfragment BadgeList_user on User {\n  badges(first: 2) {\n    edges {\n      node {\n        id\n        ...Badge_node\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment Badge_node on Badge {\n  displayName\n  progressPercentageToNextLevel\n}\n\nfragment Issue_node on Issue {\n  repositoryAvatar\n  repository\n  title\n  url\n  labels\n  commentCount\n}\n\nfragment IssuesFromLastRepo on User {\n  issuesFromLastRepo(first: 3) {\n    edges {\n      node {\n        id\n        ...Issue_node\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment IssuesFromRecentRepos on User {\n  issuesFromOtherRecentRepos(first: 3) {\n    edges {\n      node {\n        id\n        ...Issue_node\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment RelevantIssues on User {\n  relevantIssues(first: 10) {\n    edges {\n      node {\n        id\n        ...Issue_node\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n"
  }
};
})();

(node as any).hash = "5a4ed8bdfb573b8a256218a59e89462e";

export default node;
