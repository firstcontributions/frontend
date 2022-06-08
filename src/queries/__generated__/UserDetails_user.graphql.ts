/**
 * @generated SignedSource<<c6da7ee94f1bc0ebf680226139588b18>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserDetails_user$data = {
  readonly handle: string;
  readonly avatar: string;
  readonly bio: string;
  readonly gitContributionStats: {
    readonly issues: number;
    readonly pullRequests: number;
  };
  readonly " $fragmentSpreads": FragmentRefs<"BadgeList_user">;
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "bio",
      "storageKey": null
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

(node as any).hash = "7c175f8c06b74e3ba265b6c490063b9a";

export default node;
