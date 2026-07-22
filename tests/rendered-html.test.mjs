import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const ids = ["overview","api","self-host","hybrid","api-term","api-key","token","deployment","gpu","quantization","routing","embedding","reranker"];
const blackwordIds = ["blackwords-overview","bw-action","bw-model","bw-content","bw-agent","bw-openclaw","bw-skills","bw-mcp","bw-gacha","bw-context","bw-api","bw-generalization","bw-multimodal","bw-rag","bw-aigc","bw-token"];

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders the spoken-script knowledge tree", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /口播知识树/);
  assert.match(html, /把复杂资料/);
  assert.match(html, /第一层/);
  assert.match(html, /第三层/);
});

test("keeps original, style 2, and style 3 visuals plus one reproducible prompt per script", async () => {
  const manifest = JSON.parse(await readFile(new URL("../public/illustrations/mindmaps/prompts.json", import.meta.url), "utf8"));
  assert.deepEqual(manifest.items.map((item) => item.id).sort(), [...ids].sort());
  assert.ok(manifest.items.every((item) => item.outline.length >= 4 && item.prompt.length > 40));
  await Promise.all(ids.map((id) => access(new URL(`../public/illustrations/mindmaps/${id}.png`, import.meta.url))));
  await Promise.all(ids.map((id) => access(new URL(`../archive/legacy-visuals/mindmaps-style2/${id}.png`, import.meta.url))));
  await Promise.all(ids.map((id) => access(new URL(`../archive/legacy-visuals/mindmaps-style3/${id}.png`, import.meta.url))));
  const blackwordManifest = JSON.parse(await readFile(new URL("../public/illustrations/mindmaps/blackwords-prompts.json", import.meta.url), "utf8"));
  assert.deepEqual(blackwordManifest.items.map((item) => item.id).sort(), [...blackwordIds].sort());
  await Promise.all(blackwordIds.map((id) => access(new URL(`../public/illustrations/mindmaps/${id}.png`, import.meta.url))));
  await Promise.all(blackwordIds.map((id) => access(new URL(`../archive/legacy-visuals/mindmaps-style2/${id}.png`, import.meta.url))));
  await Promise.all(blackwordIds.map((id) => access(new URL(`../archive/legacy-visuals/mindmaps-style3/${id}.png`, import.meta.url))));
});

test("keeps one primary visual and places exactly two new previews outside the article flow", async () => {
  const [page, components, visualData, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/script-visuals.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/visual-data.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);
  assert.match(page, /PrimaryScriptVisual/);
  assert.match(page, /VisualPreviewRail/);
  assert.doesNotMatch(page, /style-2-visual|style-3-visual/);
  assert.match(components, /const previews = \[/);
  assert.equal((components.match(/label: "新版[二三]"/g) ?? []).length, 2);
  assert.match(components, /aria-modal="true"/);
  assert.match(components, /event\.key === "Escape"/);
  assert.match(visualData, /original:/);
  assert.match(visualData, /version2:/);
  assert.match(visualData, /version3:/);
  assert.match(css, /\.mobile-visual-previews/);
  assert.match(css, /scroll-snap-type:x mandatory/);
});

test("generates replacement diagrams from text-only blueprints", async () => {
  const blueprints = JSON.parse(await readFile(new URL("../public/illustrations/mindmap-text-only-blueprints.json", import.meta.url), "utf8"));
  const structures = JSON.parse(await readFile(new URL("../public/illustrations/mindmap-text-only-structure.json", import.meta.url), "utf8"));
  assert.equal(blueprints.length, 40);
  assert.equal(structures.length, 40);
  for (const blueprint of blueprints) {
    assert.equal(blueprint.constraints.input_mode, "text_only");
    assert.equal("source" in blueprint, false);
    assert.match(blueprint.targets.style2, /mindmaps-from-text-style2/);
    assert.match(blueprint.targets.style3, /mindmaps-from-text-style3/);
  }
});

test("homepage is a date-sortable first-layer task library", async () => {
  const [page, data] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/task-data.ts", import.meta.url), "utf8"),
  ]);
  assert.match(page, /dateFilter/);
  assert.match(page, /sortOrder/);
  assert.match(page, /第一层主题/);
  assert.match(data, /blackwords-overview/);
  assert.match(data, /2026-07-21T08:35:00-07:00/);
});

test("definition index and level guide expose pure cross-level selectors", async () => {
  const selectors = await readFile(new URL("../app/knowledge-selectors.ts", import.meta.url), "utf8");
  assert.match(selectors, /export function getAncestors/);
  assert.match(selectors, /export function getLevelGuide/);
  assert.match(selectors, /export function getDefinitionIndex/);
  assert.match(selectors, /task\.category !== "definition"/);
  assert.match(selectors, /visited\.has\(node\.id\)/);
  assert.match(selectors, /level: node\.level/);
  assert.match(selectors, /node,\s*root,\s*task/);
});

test("homepage definition filter indexes every knowledge level without changing root-only views", async () => {
  const [page, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /import \{ getDefinitionIndex, getLevelGuide \} from "\.\/knowledge-selectors"/);
  assert.match(page, /const definitionIndex = useMemo\(\(\) => getDefinitionIndex\(\), \[\]\)/);
  assert.match(page, /categoryFilter === "definition"\s*\? definitionIndex/);
  assert.match(page, /root\.title/);
  assert.match(page, /node\.eyebrow/);
  assert.match(page, /所属主题/);
  assert.match(page, /第 \{node\.level\} 层/);
  assert.match(page, /node\.duration/);
  assert.match(page, /onClick=\{\(\) => navigate\(node\.id\)\}/);
  assert.match(css, /\.definition-card-meta/);
  assert.match(css, /\.definition-root/);
});

test("moves the level guide above the new visual previews on desktop and mobile", async () => {
  const [page, components, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/script-visuals.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);
  assert.match(page, /import \{[^}]*getLevelGuide[^}]*\} from "\.\/knowledge-selectors"/);
  assert.match(page, /const levelGuide = getLevelGuide\(current\.id\)/);
  assert.doesNotMatch(page, /<div className="reading-progress"/);
  assert.equal((page.match(/levelGuide=\{levelGuide\}/g) ?? []).length, 2);
  assert.match(components, /export function LevelGuide/);
  assert.match(components, /className="reading-progress"/);
  assert.match(components, /<LevelGuide[\s\S]*?<div className=\{mobile \? "mobile-visual-previews" : "visual-preview-rail"\}/);
  assert.match(css, /\.script-visual-preview-group/);
  assert.match(css, /\.mobile-script-visual-preview-group \.reading-progress/);
});

test("preserves raw script data while emphasis stays in the view", async () => {
  const [page, data] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/script-data.ts", import.meta.url), "utf8"),
  ]);
  assert.match(page, /function RichParagraph/);
  assert.match(page, /navigator\.clipboard\.writeText/);
  assert.match(page, /location\.hash/);
  assert.doesNotMatch(data, /<mark|term-mark|paragraph-key/);
});

test("keeps detail-page mind maps fully visible", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(css, /\.script-visual \.mindmap-link img/);
  assert.match(css, /height:auto!important/);
  assert.match(css, /aspect-ratio:auto!important/);
  assert.match(css, /object-fit:contain!important/);
});

test("builds variable-panel example-page outlines from complete script logic", async () => {
  const base = new URL("../public/illustrations/example-pages/outlines/", import.meta.url);
  const manifest = JSON.parse(await readFile(new URL("../public/illustrations/example-pages/manifest.json", import.meta.url), "utf8"));
  const analyzer = await readFile(new URL("../tools/analyze-example-logic.mjs", import.meta.url), "utf8");

  assert.equal(manifest.schemaVersion, 1);
  assert.ok(manifest.nodes.length > 0);
  assert.ok(manifest.totalPages > 0);
  assert.equal(manifest.totalPages, manifest.nodes.reduce((sum, node) => sum + node.pageCount, 0));
  assert.match(analyzer, /sceneKey/);
  assert.match(analyzer, /mergeAdjacentSceneParagraphs/);

  const panelCounts = new Set();
  for (const entry of manifest.nodes) {
    assert.equal(entry.outline, `./outlines/${entry.nodeId}.json`);
    const outline = JSON.parse(await readFile(new URL(`${entry.nodeId}.json`, base), "utf8"));
    assert.equal(outline.nodeId, entry.nodeId);
    assert.equal(outline.pages.length, entry.pageCount);
    assert.equal(outline.pages.length, entry.pages.length);
    for (const page of outline.pages) {
      assert.ok(page.id && page.title && page.conclusion);
      assert.doesNotMatch(page.title, /[\u2026\u22ef]/);
      assert.doesNotMatch(page.conclusion, /[\u2026\u22ef]/);
      assert.ok(Array.isArray(page.paragraphIndexes) && page.paragraphIndexes.length > 0);
      assert.ok(Array.isArray(page.panels) && page.panels.length >= 2);
      assert.deepEqual(page.panels.map((panel) => panel.order), page.panels.map((_, index) => index + 1));
      assert.ok(page.panels.every((panel) => panel.label && panel.drawing));
      assert.ok(page.panels.every((panel) => !/[\u2026\u22ef]/.test(panel.label)));
      panelCounts.add(page.panels.length);
    }
    assert.doesNotMatch(JSON.stringify(outline), /\u5377\u518c/);
  }
  assert.ok(panelCounts.size >= 2, "panel count must follow logic instead of a fixed template");
});

test("ships every example page as one compact pageable gallery", async () => {
  const [gallery, visualData, visuals, page, css, manifest] = await Promise.all([
    readFile(new URL("../app/example-gallery.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/example-visual-data.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/script-visuals.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    JSON.parse(await readFile(new URL("../public/illustrations/example-pages/manifest.json", import.meta.url), "utf8")),
  ]);

  assert.match(visualData, /export function getExampleVisuals/);
  assert.match(visuals, /<ExampleGallery title=\{title\} pages=\{examples\}/);
  assert.equal((page.match(/examples=\{exampleVisuals\}/g) ?? []).length, 2);
  assert.match(gallery, /举例图集 · \{pages\.length\} 页/);
  assert.match(gallery, /第 \{index \+ 1\} \/ \{pages\.length\} 页/);
  assert.match(gallery, /ArrowLeft/);
  assert.match(gallery, /ArrowRight/);
  assert.match(gallery, /touchStart/);
  assert.match(gallery, /Math\.abs\(distance\) >= 48/);
  assert.match(gallery, /requestAnimationFrame\(\(\) => trigger\.current\?\.focus\(\)\)/);
  assert.match(css, /\.example-gallery-card/);
  assert.match(css, /\.example-gallery-modal/);

  let pages = 0;
  for (const node of manifest.nodes) {
    assert.equal(node.galleryPages.length, node.pageCount);
    for (const entry of node.galleryPages) {
      await access(new URL(`../public/${entry.image.replace(/^\.\//, "")}`, import.meta.url));
      await access(new URL(`../public/${entry.prompt.replace(/^\.\//, "")}`, import.meta.url));
      pages += 1;
    }
  }
  assert.equal(pages, manifest.totalPages);
});

test("adds a Codex installation topic with a practical guide", async () => {
  const [page, tasks, guide] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/task-data.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/guide-data.ts", import.meta.url), "utf8"),
  ]);
  assert.match(tasks, /codex-china-overview/);
  assert.match(page, /GuideDocument/);
  assert.match(page, /逐步操作文档/);
  assert.match(page, /GuideRailCard/);
  assert.match(page, /level-back-button/);
  assert.match(page, /parent\?\.id \?\? null/);
  assert.match(guide, /npm install -g @openai\/codex/);
  assert.match(guide, /learn\.chatgpt\.com\/docs\/codex\/cli/);
  await Promise.all([
    "codex-china-overview", "codex-desktop", "codex-cli-guide", "codex-ide-guide",
  ].map((id) => access(new URL(`../public/illustrations/mindmaps/${id}.png`, import.meta.url))));
});

test("adds homepage categories, new definition topics, and official resource rails", async () => {
  const [page, tasks, resources, rules] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/task-data.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/resource-data.ts", import.meta.url), "utf8"),
    readFile(new URL("../AGENTS.md", import.meta.url), "utf8"),
  ]);
  assert.match(page, /categoryFilter/);
  assert.match(page, /使用 AI/);
  assert.match(page, /ResourceCards/);
  assert.match(tasks, /figma-overview/);
  assert.match(tasks, /canva-overview/);
  assert.match(tasks, /figma-canva/);
  assert.match(tasks, /chunk-explained/);
  assert.match(tasks, /rerank-explained/);
  assert.match(tasks, /vector-db-explained/);
  assert.match(resources, /figma\.com\/design/);
  assert.match(resources, /canva\.com\/create/);
  assert.match(rules, /Never use/);
  await Promise.all(["figma-overview","canva-overview","figma-canva","rag-building-blocks","chunk-explained","rerank-explained","vector-db-explained"].map((id) => access(new URL(`../public/illustrations/mindmaps/${id}.png`, import.meta.url))));
});
