import path from "path";
import { execWait, getCommandLineArg } from "./utils.mjs";
import open from "open";

const pathName = `./dist`;

await execWait(
  `esbuild-visualizer --metadata ${pathName}/meta.json --filename ${pathName}/bundle.html`
);

const bundlePath = path.resolve(`${pathName}/bundle.html`);
open(bundlePath);
