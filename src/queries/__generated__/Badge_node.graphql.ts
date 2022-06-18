/**
 * @generated SignedSource<<a3f797988b8d38425969742e8384f623>>
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
  readonly currentLevel: number;
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "currentLevel",
      "storageKey": null
    }
  ],
  "type": "Badge",
  "abstractKey": null
};

(node as any).hash = "b4178a517768c6c4e2dd534e287d4cc5";

export default node;
