import { rollup } from "rollup";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { parseAst } from "rollup/parseAst";

const builder = await rollup({
  input: "lang.js",
  plugins: [nodeResolve()],
});

const { output } = await builder.generate({
  dir: "./dist",
});
builder.close();
const node = parseAst(output[0].code);

console.log(node);
