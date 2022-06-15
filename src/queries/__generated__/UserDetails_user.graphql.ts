/**
 * @generated SignedSource<<2c6fdb3b8a74b0214e3d18f11baaeba8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserDetails_user$data = {
  readonly id: string;
  readonly handle: string;
  readonly avatar: string;
  readonly gitContributionStats: {
    readonly issues: number;
    readonly pullRequests: number;
  };
  readonly " $fragmentSpreads": FragmentRefs<"Bio_user" | "BadgeList_user">;
  readonly " $fragmentType": "UserDetails_user";
};
export type UserDetails_user = UserDetails_user$data;
export type UserDetails_user$key = {
  readonly " $data"?: UserDetails_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserDetails_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserDetails_user",
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
      "name": "handle",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "avatar",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Bio_user"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "GitContributionStats",
      "kind": "LinkedField",
      "name": "gitContributionStats",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "issues",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "pullRequests",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BadgeList_user"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "1d7440ab5c9f7b60969d01101001a5d7";

export default node;
