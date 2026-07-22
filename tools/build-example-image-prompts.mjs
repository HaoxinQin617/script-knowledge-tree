import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const base = join(root, "public", "illustrations", "example-pages");
const manifestPath = join(base, "manifest.json");
const promptDir = join(base, "prompts");

const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
await mkdir(promptDir, { recursive: true });

let count = 0;
for (const node of manifest.nodes) {
  const outline = JSON.parse(await readFile(join(base, "outlines", `${node.nodeId}.json`), "utf8"));
  node.galleryPages = outline.pages.map((page) => ({
    id: page.id,
    title: page.title,
    paragraphIndexes: page.paragraphIndexes,
    image: `./illustrations/example-pages/images/${page.id}.webp`,
    prompt: `./illustrations/example-pages/prompts/${page.id}.md`,
  }));
  for (const page of outline.pages) {
    const labels = page.panels.map((panel) => `${panel.order}. ${panel.label}`).join("\n");
    const drawings = page.panels.map((panel) => `${panel.order}. ${panel.drawing.replace(/^用简笔画表现：/, "")}`).join("\n");
    const relationships = page.panels.slice(0, -1).map((panel, index) => `${index + 1} → ${index + 2}: ${panel.relationToNext || "继续下一步"}`).join("\n");
    const prompt = `---
id: ${page.id}
node_id: ${node.nodeId}
language: zh-CN
aspect_ratio: "16:10"
backend: imagegen
reference_images: []
---

Use case: scientific-educational
Asset type: 口播讲解配套的单页多画面举例图
Primary request: 从零生成一张中文教学信息图，以多个简笔画场景完整讲清一个例子的线性逻辑。不要参考、模仿或编辑网站上已有的任何图片。

ZONES
- 顶部：只放简洁主题标题“${page.title}”，禁止放正文长句或关系说明。
- 中部：按照实际逻辑放置 ${page.panels.length} 个清晰分区。每个分区包含一个短标题和一个能独立说明该步骤的简笔画小场景。
- 分区必须按阅读顺序由完整箭头串联；箭头头部较小，线条清晰，不得与卡片、文字或插画重叠。
- 底部：用一句结论“${page.conclusion}”收束，不重复标题。

LABELS
以下中文标签必须逐字准确、完整显示，不得截断、省略或生成乱码：
${labels}

DRAWINGS
${drawings}

RELATIONSHIPS
${relationships || "两个分区之间用单向箭头表示因果或递进关系。"}

COLORS
- 白色或极浅暖白背景。
- 低饱和灰粉、淡紫、冰蓝为主，绿色只作为极少量辅助色。
- 文字深藏蓝或近黑，保证口播时远距离可读。

STYLE
- 克制的手绘教育插图与轻雾面玻璃卡片结合；保留少量玻璃层次，不要华丽高光。
- 插画应像教材里的简笔画：人物、物品、页面或流程均清楚具体。
- 不是发散式思维导图，而是由起点到结果的单向线性讲解。
- 留白充足，标题、图画、箭头互不遮挡；禁止水印、品牌标志、装饰性英文和无关文字。

ASPECT
- 16:10 横向，建议 1600 × 1000。
`;
    await writeFile(join(promptDir, `${page.id}.md`), prompt, "utf8");
    count += 1;
  }
}

await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

console.log(`Wrote ${count} reproducible prompts to ${promptDir}`);
