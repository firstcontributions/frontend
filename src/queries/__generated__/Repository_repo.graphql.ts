/**
 * @generated SignedSource<<518436e8b6c89ed326e5932702cbd6f0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Repository_repo$data = {
  readonly id: string;
  readonly nameWithOwner: string;
  readonly url: any;
  readonly " $fragmentType": "Repository_repo";
};
export type Repository_repo = Repository_repo$data;
export type Repository_repo$key = {
  readonly " $data"?: Repository_repo$data;
  readonly " $fragmentSpreads": FragmentRefs<"Repository_repo">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Repository_repo",
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
      "name": "nameWithOwner",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "url",
      "storageKey": null
    }
  ],
  "type": "Repository",
  "abstractKey": null
};

(node as any).hash = "e45958fd20d94dfb1f6d3886d51c2b6d";

export default node;
