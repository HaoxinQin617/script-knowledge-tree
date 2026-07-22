import { access, readFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const base = join(root, "public", "illustrations", "example-pages");
const manifest = JSON.parse(await readFile(join(base, "manifest.json"), "utf8"));
const seen = new Set();
let pages = 0;
let missingPrompts = 0;
let missingImages = 0;

for (const node of manifest.nodes) {
  const outline = JSON.parse(await readFile(join(base, "outlines", `${node.nodeId}.json`), "utf8"));
  for (const page of outline.pages) {
    if (seen.has(page.id)) throw new Error(`Duplicate page id: ${page.id}`);
    seen.add(page.id);
    if (!page.title || page.panels.length < 2) throw new Error(`Invalid outline: ${page.id}`);
    const promptPath = join(base, "prompts", `${page.id}.md`);
    const imagePath = join(base, "images", `${page.id}.webp`);
    try {
      const prompt = await readFile(promptPath, "utf8");
      if (/mindmaps|卷册/.test(prompt)) throw new Error(`Forbidden prompt reference: ${page.id}`);
    } catch (error) {
      if (error.code === "ENOENT") missingPrompts += 1;
      else throw error;
    }
    try { await access(imagePath); } catch { missingImages += 1; }
    pages += 1;
  }
}

console.log(`Validated ${pages} example pages for ${manifest.nodes.length} nodes; ${missingPrompts} missing prompts; ${missingImages} missing images`);
if (missingPrompts || missingImages) process.exitCode = 1;
