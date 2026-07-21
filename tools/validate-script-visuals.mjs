import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const structures = JSON.parse(await readFile(new URL("public/illustrations/mindmap-approved-structure.json", root), "utf8"));
const forbidden = /(?:\.\.\.|…|â€¦|\.\.\b)/;
let checked = 0;

assert.equal(structures.length, 40, "expected 40 reviewed script structures");

for (const record of structures) {
  assert.ok(record.nodes.length >= 3, `${record.id}: too few nodes`);
  assert.ok(record.groups.length >= 2, `${record.id}: too few stages`);
  for (const node of record.nodes) {
    assert.ok(node.label.trim().length >= 2, `${record.id}: empty label`);
    assert.doesNotMatch(node.label, forbidden, `${record.id}: truncated label ${node.label}`);
  }
  for (const folder of ["mindmaps-from-text-style2", "mindmaps-from-text-style3"]) {
    const file = new URL(`public/illustrations/${folder}/${record.id}.svg`, root);
    await access(file);
    const svg = await readFile(file, "utf8");
    assert.match(svg, /viewBox="0 0 1600 1000"/, `${record.id}: wrong canvas`);
    assert.doesNotMatch(svg, forbidden, `${record.id}: truncated SVG text`);
    for (const node of record.nodes) {
      assert.ok(svg.includes(node.label), `${record.id}: missing label ${node.label} in ${folder}`);
    }
    checked += 1;
  }
}

console.log(`Validated ${structures.length} structures and ${checked} independent new-version SVGs`);
