/**
 * @generated SignedSource<<04cd624535ff8f18a884f6959ca5b042>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateUserInput = {
  id: string;
  avatar?: string | null;
  bio?: string | null;
  gitContributionStats?: GitContributionStatsInput | null;
  name?: string | null;
  reputation?: ReputationInput | null;
};
export type GitContributionStatsInput = {
  issues: number;
  pullRequests: number;
};
export type ReputationInput = {
  value: number;
};
export type BioUpdateMutation$variables = {
  input: UpdateUserInput;
};
export type BioUpdateMutationVariables = BioUpdateMutation$variables;
export type BioUpdateMutation$data = {
  readonly updateUser: {
    readonly id: string;
    readonly bio: string;
  };
};
export type BioUpdateMutationResponse = BioUpdateMutation$data;
export type BioUpdateMutation = {
  variables: BioUpdateMutationVariables;
  response: BioUpdateMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "user",
        "variableName": "input"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "updateUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "bio",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BioUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BioUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c9ff726a2f6dc96408af992a7feb462d",
    "id": null,
    "metadata": {},
    "name": "BioUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation BioUpdateMutation(\n  $input: UpdateUserInput!\n) {\n  updateUser(user: $input) {\n    id\n    bio\n  }\n}\n"
  }
};
})();

(node as any).hash = "bfb5ab301b7752b91f02630ae3cc718f";

export default node;
