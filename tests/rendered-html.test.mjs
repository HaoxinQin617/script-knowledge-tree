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

test("keeps one visual and one reproducible prompt per script", async () => {
  const manifest = JSON.parse(await readFile(new URL("../public/illustrations/mindmaps/prompts.json", import.meta.url), "utf8"));
  assert.deepEqual(manifest.items.map((item) => item.id).sort(), [...ids].sort());
  assert.ok(manifest.items.every((item) => item.outline.length >= 4 && item.prompt.length > 40));
  await Promise.all(ids.map((id) => access(new URL(`../public/illustrations/mindmaps/${id}.png`, import.meta.url))));
  const blackwordManifest = JSON.parse(await readFile(new URL("../public/illustrations/mindmaps/blackwords-prompts.json", import.meta.url), "utf8"));
  assert.deepEqual(blackwordManifest.items.map((item) => item.id).sort(), [...blackwordIds].sort());
  await Promise.all(blackwordIds.map((id) => access(new URL(`../public/illustrations/mindmaps/${id}.png`, import.meta.url))));
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
