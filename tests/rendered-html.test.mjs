import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

const ids = ["overview","api","self-host","hybrid","api-term","api-key","token","deployment","gpu","quantization","routing","embedding","reranker"];

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
  const promptFiles = await readdir(new URL("../public/illustrations/prompts/", import.meta.url));
  assert.equal(promptFiles.filter((name) => name.endsWith(".md")).length, ids.length);
  await Promise.all(ids.map((id) => access(new URL(`../public/illustrations/${id}.webp`, import.meta.url))));
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
