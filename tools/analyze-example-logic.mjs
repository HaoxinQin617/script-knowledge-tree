import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import ts from "typescript";

const root = path.resolve(import.meta.dirname, "..");
const examplePagesDir = path.join(root, "public", "illustrations", "example-pages");
const outputDir = path.join(examplePagesDir, "outlines");
const forbiddenApp = "\u5377\u518c";

async function importTypeScript(sourcePath, importMap = {}) {
  const source = await readFile(sourcePath, "utf8");
  let javascript = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
    fileName: sourcePath,
  }).outputText;
  for (const [specifier, replacement] of Object.entries(importMap)) {
    javascript = javascript.replaceAll(`from "${specifier}"`, `from "${replacement}"`);
  }
  const url = `data:text/javascript;base64,${Buffer.from(javascript).toString("base64")}`;
  return import(url);
}

async function loadNodes() {
  const scriptDataPath = path.join(root, "app", "script-data.ts");
  const scriptData = await importTypeScript(scriptDataPath);
  const scriptDataUrl = `data:text/javascript;base64,${Buffer.from(
    `export const nodes=${JSON.stringify(scriptData.nodes)};`,
  ).toString("base64")}`;
  const taskData = await importTypeScript(path.join(root, "app", "task-data.ts"), {
    "./script-data": scriptDataUrl,
  });
  return taskData.nodes;
}

const exampleSignal = /(\u4f8b\u5982|\u6bd4\u5982|\u4e3e\u4e2a\u4f8b\u5b50|\u5047\u8bbe|\u4ee5.{0,18}\u4e3a\u4f8b|\u62ff.{0,18}\u6765\u8bf4|\u53ef\u4ee5\u7406\u89e3\u6210|\u66f4\u50cf|\u5c31\u50cf|\u597d\u6bd4|\u7c7b\u4f3c\u4e8e)/;
const continuationSignal = /^(\u8fd9\u65f6|\u8fd9\u6837|\u5176\u4e2d|\u968f\u540e|\u7136\u540e|\u63a5\u7740|\u6700\u540e|\u6574\u4e2a|\u5728\u8fd9\u4e2a|\u5b83|\u7528\u6237|\u7cfb\u7edf)/;
const sceneTerms = [
  "\u9910\u5385", "\u53a8\u623f", "\u533b\u9662", "\u5ba2\u670d", "\u8bba\u6587", "\u5496\u5561\u5e97", "\u65c5\u884c", "\u9500\u552e", "\u5929\u6c14",
  "\u94f6\u884c", "\u5feb\u9012", "\u56fe\u4e66", "App", "\u7f51\u9875", "PDF", "\u4f1a\u8bae", "\u8868\u683c",
];

function clean(text) {
  return text
    .replaceAll(forbiddenApp, "\u77e5\u8bc6\u5e94\u7528")
    .replace(/[\u2026\u22ef]+/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function sceneKey(text) {
  return sceneTerms.find((term) => text.includes(term)) ?? "";
}

function isExampleParagraph(text) {
  return exampleSignal.test(text);
}

function mergeAdjacentSceneParagraphs(body) {
  const groups = [];
  for (let index = 0; index < body.length; index += 1) {
    if (!isExampleParagraph(body[index])) continue;
    const group = { paragraphIndexes: [index], scene: sceneKey(body[index]) };
    while (index + 1 < body.length) {
      const next = body[index + 1];
      const nextScene = sceneKey(next);
      const sameScene = group.scene && nextScene === group.scene;
      const continuesScene = continuationSignal.test(next) && (!nextScene || nextScene === group.scene);
      if (!sameScene && !continuesScene) break;
      index += 1;
      group.paragraphIndexes.push(index);
      if (!group.scene) group.scene = nextScene;
    }
    groups.push(group);
  }
  return groups;
}

function splitLogic(text) {
  let units = text.split(/(?<=[\u3002\uff01\uff1f])/).map(clean).filter(Boolean);
  if (units.length < 2) {
    units = text.split(/[\uff1b\uff1a]/).map(clean).filter((item) => item.length >= 6);
  }
  if (units.length < 2) {
    units = text.split(/(?=\u7136\u540e|\u518d|\u6700\u540e|\u4f46|\u800c)/).map(clean).filter((item) => item.length >= 6);
  }
  if (units.length < 2) {
    const midpoint = Math.max(6, Math.round(text.length / 2));
    units = [clean(text.slice(0, midpoint)), clean(text.slice(midpoint))].filter(Boolean);
  }
  while (units.length > 5) {
    const tail = units.pop();
    units[units.length - 1] = clean(`${units.at(-1)}${tail}`);
  }
  return units;
}

function shortLabel(text, order) {
  const stripped = clean(text)
    .replace(/^(\u4f8b\u5982|\u6bd4\u5982|\u5047\u8bbe|\u4e3e\u4e2a\u4f8b\u5b50)[\uff0c\uff1a]?/, "")
    .replace(/[\u3002\uff01\uff1f]$/u, "");
  const clause = stripped.split(/[\uff0c\uff1b\uff1a]/)[0];
  if (clause.length <= 18) return clause || `\u903b\u8f91\u9636\u6bb5 ${order}`;
  const semanticRules = [
    [/(\u7528\u6237|\u987e\u5ba2).*(\u63d0\u95ee|\u8f93\u5165|\u70b9\u51fb|\u53d1\u9001)/, "\u7528\u6237\u53d1\u8d77\u8bf7\u6c42"],
    [/(\u524d\u7aef|\u7f51\u9875).*(\u63a5\u6536|\u53d1\u9001|\u5c55\u793a|\u5f00\u59cb)/, "\u524d\u7aef\u63a5\u6536\u5e76\u4f20\u9012\u5185\u5bb9"],
    [/\u540e\u7aef.*(\u68c0\u67e5|\u6574\u7406|\u8865\u4e0a|\u8bb0\u5f55)/, "\u540e\u7aef\u68c0\u67e5\u5e76\u6574\u7406\u8bf7\u6c42"],
    [/API.*(\u8c03\u7528|\u4f20\u9012|\u4ea4\u7ed9|\u8fd4\u56de)/i, "\u901a\u8fc7 API \u4f20\u9012\u8bf7\u6c42\u4e0e\u7ed3\u679c"],
    [/(\u6a21\u578b|AI).*(\u8bfb\u53d6|\u5904\u7406|\u751f\u6210|\u56de\u7b54)/i, "\u6a21\u578b\u8bfb\u53d6\u4fe1\u606f\u5e76\u751f\u6210\u7ed3\u679c"],
    [/(\u6587\u4ef6|\u8d44\u6599).*(\u8bfb\u53d6|\u5207\u5206|\u6574\u7406|\u4fdd\u5b58)/, "\u8bfb\u53d6\u5e76\u6574\u7406\u539f\u59cb\u8d44\u6599"],
    [/(\u68c0\u7d22|\u5bfb\u627e|\u641c\u7d22).*(\u7247\u6bb5|\u8bc1\u636e|\u7ed3\u679c)/, "\u68c0\u7d22\u53ef\u80fd\u76f8\u5173\u7684\u8bc1\u636e"],
    [/(\u6392\u5e8f|\u91cd\u6392|Rerank)/i, "\u91cd\u65b0\u6bd4\u8f83\u5e76\u6392\u5e8f\u5019\u9009\u8bc1\u636e"],
    [/(\u5931\u8d25|\u8d85\u65f6|\u62a5\u9519)/, "\u8bc6\u522b\u5931\u8d25\u5e76\u8fdb\u5165\u5907\u7528\u8def\u7ebf"],
    [/(\u7ed3\u679c|\u56de\u7b54|\u6210\u54c1).*(\u68c0\u67e5|\u8fd4\u56de|\u5c55\u793a|\u5bfc\u51fa)/, "\u68c0\u67e5\u5e76\u4ea4\u4ed8\u6700\u7ec8\u7ed3\u679c"],
    [/(\u4f46|\u800c\u4e0d\u662f|\u5374)/, "\u5bf9\u7167\u9519\u8bef\u7406\u89e3\u4e0e\u6b63\u786e\u505a\u6cd5"],
  ];
  for (const [pattern, label] of semanticRules) {
    if (pattern.test(stripped)) return label;
  }
  const fallback = ["\u5efa\u7acb\u573a\u666f\u8d77\u70b9", "\u6267\u884c\u5173\u952e\u52a8\u4f5c", "\u89c2\u5bdf\u4e2d\u95f4\u53d8\u5316", "\u5904\u7406\u8f6c\u6298\u4e0e\u7ea6\u675f", "\u5f97\u51fa\u5e76\u9a8c\u8bc1\u7ed3\u679c"];
  return fallback[Math.min(order - 1, fallback.length - 1)];
}

function relationFor(text, isLast) {
  if (isLast) return undefined;
  if (/(\u56e0\u6b64|\u6240\u4ee5|\u7ed3\u679c)/.test(text)) return "\u5bfc\u5411\u7ed3\u679c";
  if (/(\u4f46|\u7136\u800c|\u5374)/.test(text)) return "\u51fa\u73b0\u8f6c\u6298";
  if (/(\u6bd4\u8f83|\u800c\u4e0d\u662f|\u76f8\u6bd4)/.test(text)) return "\u5bf9\u7167\u540e\u9009\u62e9";
  return "\u7ee7\u7eed\u4e0b\u4e00\u6b65";
}

function createPage(node, group, pageIndex) {
  const text = clean(group.paragraphIndexes.map((index) => node.body[index]).join(" "));
  const units = splitLogic(text);
  const panels = units.map((unit, index) => ({
    order: index + 1,
    label: shortLabel(unit, index + 1),
    drawing: `\u7528\u7b80\u7b14\u753b\u8868\u73b0\uff1a${clean(unit)}`,
    ...(index < units.length - 1 ? { relationToNext: relationFor(unit, false) } : {}),
  }));
  const scene = group.scene || node.title;
  return {
    id: `${node.id}-example-${String(pageIndex + 1).padStart(2, "0")}`,
    title: `${scene}\u6848\u4f8b\u7684\u5b8c\u6574\u903b\u8f91`,
    paragraphIndexes: group.paragraphIndexes,
    panels,
    conclusion: clean(units.at(-1)),
  };
}

async function main() {
  const nodes = await loadNodes();
  await mkdir(outputDir, { recursive: true });
  const manifestNodes = [];
  const panelDistribution = {};
  let totalPages = 0;
  let exampleParagraphs = 0;

  for (const node of nodes) {
    const groups = mergeAdjacentSceneParagraphs(node.body);
    if (!groups.length) continue;
    const pages = groups.map((group, index) => createPage(node, group, index));
    const outline = { schemaVersion: 1, nodeId: node.id, nodeTitle: clean(node.title), pages };
    await writeFile(path.join(outputDir, `${node.id}.json`), `${JSON.stringify(outline, null, 2)}\n`, "utf8");
    for (const page of pages) {
      const count = page.panels.length;
      panelDistribution[count] = (panelDistribution[count] ?? 0) + 1;
      exampleParagraphs += page.paragraphIndexes.length;
    }
    totalPages += pages.length;
    manifestNodes.push({
      nodeId: node.id,
      nodeTitle: clean(node.title),
      level: node.level,
      pageCount: pages.length,
      pages: pages.map((page) => page.id),
      outline: `./outlines/${node.id}.json`,
    });
  }

  const manifest = {
    schemaVersion: 1,
    generatedFrom: "ScriptNode.body",
    sourceNodeCount: nodes.length,
    nodeCount: manifestNodes.length,
    totalPages,
    exampleParagraphs,
    panelDistribution,
    nodes: manifestNodes,
  };
  await writeFile(path.join(examplePagesDir, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  console.log(JSON.stringify(manifest, null, 2));
}

await main();
