/**
 * @generated SignedSource<<71449875479c1c3a7a7c3f10e87d2bd0>>
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
  readonly progressPercentageToNextLevel: number;
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "progressPercentageToNextLevel",
      "storageKey": null
    }
  ],
  "type": "Badge",
  "abstractKey": null
};

(node as any).hash = "514594cb70814cc4cae96f7fa526d30e";

export default node;
