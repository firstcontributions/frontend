import path from "path";
import {nextBuild} from "next/dist/cli/next-build";
async function globalSetup() {
  process.env.PLAYWRIGHT = "1";
  if (process.env.SKIP_BUILD === "1") {
    console.log("skipping build as SKIP_BUILD is set");
  } else {
    await nextBuild([path.join(__dirname, "..")]);
  }
}
module.exports = globalSetup;