/**
 * @generated SignedSource<<44802beb18064bf1945a94917410b1fe>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Badge_node$data = {
  readonly displayName: string;
  readonly " $fragmentType": "Badge_node";
};
export type Badge_node = Badge_node$data;
export type Badge_node$key = {
  readonly " $data"?: Badge_node$data;
  readonly " $fragmentSpreads": FragmentRefs<"Badge_node">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Badge_node",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "displayName",
      "storageKey": null
    }
  ],
  "type": "Badge",
  "abstractKey": null
};

(node as any).hash = "ca0d51d4b7cf86d3e970e8dc2e175867";

export default node;
