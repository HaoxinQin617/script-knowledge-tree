# Branch Visuals and Example Gallery Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move level guidance above the right-side visual rail, make the homepage definition filter index all three levels, guarantee independent visuals for every node, and add logic-driven multi-panel example galleries.

**Architecture:** Keep spoken-script data immutable in `task-data.ts`, derive navigation and definition-index records through focused selectors, and expose every node’s visual assets through one typed manifest. A deterministic analysis script will produce reviewed example-page outlines and reproducible prompt files; generated raster pages will be consumed by an isolated gallery component rather than spread through the article body.

**Tech Stack:** React 19, TypeScript, vinext/Vite, CSS, Node test runner, Python generation helpers, Codex imagegen, GitHub Pages, OpenAI Sites.

## Global Constraints

- Preserve existing spoken-script text, input behavior, and three-level relationships.
- Keep the old primary image above the spoken-script text and separate from new visuals.
- Generate new visuals only from the current node’s complete script and reviewed outline; never edit or use existing site images as references.
- Determine logical stages and panel counts from each script; never force fixed three-stage or “logic 1/2/3” structures.
- Never use “卷册” in examples; use another app, restaurant, travel, office, or daily-life scenario.
- On-image titles must be concise topic labels, not truncated body sentences or relationship descriptions.
- Keep arrows complete, directional, smaller-headed, and clear of cards, icons, and text.
- Hide example pages behind one gallery entry; never lay every example page open in the article.
- Desktop and mobile must both load every asset without overlap or horizontal overflow.

---

## File Structure

- `app/knowledge-selectors.ts`: pure node ancestry, level-guide, and cross-level definition-index selectors.
- `app/example-visual-data.ts`: typed example gallery manifest and lookup function.
- `app/example-gallery.tsx`: gallery entry card, modal viewer, keyboard controls, and touch gestures.
- `app/script-visuals.tsx`: right-rail level guidance and composition of structure previews plus example gallery.
- `app/page.tsx`: route rendering and homepage filtering; no asset-path guessing.
- `app/globals.css`: desktop rail, mobile order, gallery card, modal, and swipe-safe layout.
- `tools/analyze-example-logic.mjs`: deterministic script analysis into editable logical sections.
- `tools/build-example-image-prompts.mjs`: writes one saved prompt per multi-panel page.
- `tools/validate-example-visuals.mjs`: verifies manifest, prompt, generated file, labels, and paragraph coverage.
- `public/illustrations/example-pages/manifest.json`: approved gallery-page metadata.
- `public/illustrations/example-pages/outlines/*.json`: editable logic breakdown per qualifying node.
- `public/illustrations/example-pages/prompts/*.md`: reproducible image-generation prompts.
- `public/illustrations/example-pages/images/*`: generated 16:10 raster pages.
- `tests/rendered-html.test.mjs`: source-level and built-page contract tests.

---

### Task 1: Pure Knowledge Selectors and Cross-Level Definition Index

**Files:**
- Create: `app/knowledge-selectors.ts`
- Modify: `app/task-data.ts`
- Modify: `tests/rendered-html.test.mjs`

**Interfaces:**
- Consumes: `nodes: ScriptNode[]`, `tasks: TaskRecord[]` from `app/task-data.ts`.
- Produces: `getAncestors(nodeId: string): ScriptNode[]`, `getLevelGuide(nodeId: string): LevelGuideItem[]`, and `getDefinitionIndex(): DefinitionIndexItem[]`.

- [ ] **Step 1: Write failing selector contract tests**

Add assertions that `knowledge-selectors.ts` exports all three functions, that `getDefinitionIndex()` includes level 1, 2, and 3 records under definition roots, and that each returned item exposes `node`, `root`, `task`, and `level`.

```js
const selectors = await readFile(new URL("../app/knowledge-selectors.ts", import.meta.url), "utf8");
assert.match(selectors, /export function getAncestors/);
assert.match(selectors, /export function getLevelGuide/);
assert.match(selectors, /export function getDefinitionIndex/);
assert.match(selectors, /level: node\.level/);
```

- [ ] **Step 2: Run the focused tests and verify failure**

Run: `node --test --test-name-pattern="definition index|level guide" tests/rendered-html.test.mjs`

Expected: FAIL because `app/knowledge-selectors.ts` does not exist.

- [ ] **Step 3: Implement the selectors**

Create types and pure functions with these exact signatures:

```ts
export type LevelGuideItem = { level: 1 | 2 | 3; label: string; nodeId?: string; active: boolean };
export type DefinitionIndexItem = { node: ScriptNode; root: ScriptNode; task: TaskRecord; level: 1 | 2 | 3 };

export function getAncestors(nodeId: string): ScriptNode[];
export function getLevelGuide(nodeId: string): LevelGuideItem[];
export function getDefinitionIndex(): DefinitionIndexItem[];
```

`getDefinitionIndex()` must iterate only tasks whose category is `definition`, traverse every descendant from each task root, deduplicate by node ID, and retain the root task date for sorting.

- [ ] **Step 4: Run tests**

Run: `npm test`

Expected: build succeeds and all selector contracts pass.

- [ ] **Step 5: Commit**

```bash
git add app/knowledge-selectors.ts app/task-data.ts tests/rendered-html.test.mjs
git commit -m "feat: index definition nodes across all levels"
```

---

### Task 2: Move Level Guidance Into the Visual Rail

**Files:**
- Modify: `app/script-visuals.tsx`
- Modify: `app/page.tsx`
- Modify: `app/globals.css`
- Modify: `tests/rendered-html.test.mjs`

**Interfaces:**
- Consumes: `getLevelGuide(current.id)` from Task 1 and `ScriptVisualVersions` from `app/visual-data.ts`.
- Produces: `LevelGuide({ items }: { items: LevelGuideItem[] })` and a `VisualPreviewRail` prop `levelGuide: LevelGuideItem[]`.

- [ ] **Step 1: Write failing layout tests**

Assert that `page.tsx` no longer renders the existing guide in the article header, and that `script-visuals.tsx` renders `LevelGuide` before the preview list.

```js
assert.doesNotMatch(page, /className="article-level-guide"/);
assert.match(visuals, /<LevelGuide items={levelGuide}\/>[\s\S]*新版结构图/);
assert.match(css, /\.visual-rail-level-guide/);
```

- [ ] **Step 2: Run focused test and verify failure**

Run: `node --test --test-name-pattern="visual rail level guide" tests/rendered-html.test.mjs`

Expected: FAIL because the guide remains in the article flow.

- [ ] **Step 3: Implement desktop and mobile composition**

Add this prop boundary:

```ts
type VisualPreviewRailProps = VisualProps & {
  mobile?: boolean;
  levelGuide: LevelGuideItem[];
  examples?: ExampleVisualPage[];
};
```

Desktop order must be `LevelGuide → 新版二 → 新版三 → 举例图集`; mobile order must be `old primary image → LevelGuide → horizontal previews → article text`.

- [ ] **Step 4: Add responsive CSS**

Create `.visual-rail-level-guide`, `.level-guide-item`, and active/linked states. At widths below 980px, hide the desktop rail, show the mobile guide, allow horizontal scrolling, and preserve minimum 44px touch targets.

- [ ] **Step 5: Run tests**

Run: `npm test && npm run lint`

Expected: build and lint succeed; layout tests pass.

- [ ] **Step 6: Commit**

```bash
git add app/script-visuals.tsx app/page.tsx app/globals.css tests/rendered-html.test.mjs
git commit -m "feat: move level guidance above visual previews"
```

---

### Task 3: Render the Homepage Definition Filter Across Three Levels

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/globals.css`
- Modify: `tests/rendered-html.test.mjs`

**Interfaces:**
- Consumes: `getDefinitionIndex()` from Task 1.
- Produces: homepage result records with `node`, `root`, `task`, and `level` while preserving first-layer records for `all` and `use-ai`.

- [ ] **Step 1: Write failing filter tests**

```js
assert.match(page, /categoryFilter === "definition"\s*\? getDefinitionIndex\(\)/);
assert.match(page, /所属主题/);
assert.match(page, /第 \{item\.level\} 层/);
```

Also assert that the default/all branch still maps from `tasks` and task roots only.

- [ ] **Step 2: Run focused test and verify failure**

Run: `node --test --test-name-pattern="homepage definition filter" tests/rendered-html.test.mjs`

Expected: FAIL because the current filter checks only `task.category`.

- [ ] **Step 3: Implement a discriminated homepage record**

```ts
type LibraryItem = {
  node: ScriptNode;
  root: ScriptNode;
  task: TaskRecord;
  level: 1 | 2 | 3;
};
```

Use definition-index records only when the category filter is `definition`. Apply search to node title, summary, and root title; apply date filter and sort through the root task’s date.

- [ ] **Step 4: Update card copy and badges**

Definition result cards show `第 N 层`, `所属主题：root.title`, date, duration, node title, and node summary. Clicking opens `#node.id` directly.

- [ ] **Step 5: Run tests**

Run: `npm test && npm run lint`

Expected: all tests pass with unchanged default/all behavior.

- [ ] **Step 6: Commit**

```bash
git add app/page.tsx app/globals.css tests/rendered-html.test.mjs
git commit -m "feat: browse definition scripts across all levels"
```

---

### Task 4: Analyze Example Logic and Create Editable Page Outlines

**Files:**
- Create: `tools/analyze-example-logic.mjs`
- Create: `public/illustrations/example-pages/manifest.json`
- Create: `public/illustrations/example-pages/outlines/*.json`
- Modify: `tests/rendered-html.test.mjs`

**Interfaces:**
- Consumes: every `ScriptNode.body` paragraph from `app/task-data.ts`.
- Produces: `ExampleOutline` records with exact schema below.

```ts
type ExamplePanel = { order: number; label: string; drawing: string; relationToNext?: string };
type ExamplePageOutline = { id: string; title: string; paragraphIndexes: number[]; panels: ExamplePanel[]; conclusion: string };
type ExampleOutline = { nodeId: string; pages: ExamplePageOutline[] };
```

- [ ] **Step 1: Write failing analysis tests**

Assert that the analyzer exists, each qualifying page has at least two panels, panel counts are not globally fixed, paragraph indexes exist in the source node, and scripts without concrete scenarios may have zero pages.

- [ ] **Step 2: Run focused test and verify failure**

Run: `node --test --test-name-pattern="example logic outlines" tests/rendered-html.test.mjs`

Expected: FAIL because no analyzer or outlines exist.

- [ ] **Step 3: Implement deterministic candidate extraction**

Detect explicit markers (`例如`, `比如`, `假设`, `以…为例`) and concrete scenario patterns, then group adjacent paragraphs that explain one process, comparison, or cause-result chain. The script must write editable JSON and never call an image backend.

- [ ] **Step 4: Review generated outlines against source text**

Run: `node tools/analyze-example-logic.mjs`

Expected: the command prints node count, qualifying node count, page count, panel-count distribution, and no outline uses the prohibited example name.

Inspect every outline title, paragraph range, panel label, relation, and conclusion. Correct incorrect grouping in the JSON before image prompting.

- [ ] **Step 5: Run tests**

Run: `npm test`

Expected: every outline points to valid source paragraphs and every page has a complete multi-panel logic chain.

- [ ] **Step 6: Commit**

```bash
git add tools/analyze-example-logic.mjs public/illustrations/example-pages tests/rendered-html.test.mjs
git commit -m "feat: outline multi-panel example explanations"
```

---

### Task 5: Save Reproducible Prompts and Generate Example Pages

**Files:**
- Create: `tools/build-example-image-prompts.mjs`
- Create: `tools/validate-example-visuals.mjs`
- Create: `public/illustrations/example-pages/prompts/*.md`
- Create: `public/illustrations/example-pages/images/*`
- Modify: `public/illustrations/example-pages/manifest.json`
- Modify: `tests/rendered-html.test.mjs`

**Interfaces:**
- Consumes: approved `ExampleOutline` JSON from Task 4.
- Produces: one prompt and one 16:10 raster image per `ExamplePageOutline`; manifest records use `{ id, nodeId, title, paragraphIndexes, image, prompt }`.

- [ ] **Step 1: Write failing asset-validation tests**

Assert every manifest page has a prompt file, image file, non-empty title, at least two panels in its outline, and a unique ID. Assert no prompt references existing mindmap image paths or the prohibited example name.

- [ ] **Step 2: Run focused test and verify failure**

Run: `node --test --test-name-pattern="example page assets" tests/rendered-html.test.mjs`

Expected: FAIL because prompt and image files do not yet exist.

- [ ] **Step 3: Build all prompt files before generation**

Each prompt must contain `ZONES`, `LABELS`, `DRAWINGS`, `RELATIONSHIPS`, `COLORS`, `STYLE`, and `ASPECT` sections. Require multiple simple drawings per page, exact short Chinese labels, clear directional relationships, pale frosted-glass framing, and no reference-image input.

- [ ] **Step 4: Confirm image settings before rendering**

Present the resolved settings: mixed infographic/scene, per-logical-section density, restrained hand-drawn editorial style, soft white/blush/lilac/ice-blue palette, Chinese labels, imagegen backend, 16:10 aspect ratio, batch size 4. Do not invoke imagegen until the user approves these settings.

- [ ] **Step 5: Generate images from saved prompts in batches of four**

Use Codex imagegen only after every prompt in the current batch exists. Pass no existing site image as a reference. Retry a failed item once without regenerating successful items. Preserve flawed text candidates under a new filename rather than painting over them.

- [ ] **Step 6: Validate all generated assets**

Run: `node tools/validate-example-visuals.mjs`

Expected: `Validated N example pages for M nodes; 0 missing prompts; 0 missing images; 0 invalid paragraph ranges`.

- [ ] **Step 7: Commit**

```bash
git add tools/build-example-image-prompts.mjs tools/validate-example-visuals.mjs public/illustrations/example-pages tests/rendered-html.test.mjs
git commit -m "feat: generate multi-panel example visual pages"
```

---

### Task 6: Add Typed Example Manifest and Gallery Viewer

**Files:**
- Create: `app/example-visual-data.ts`
- Create: `app/example-gallery.tsx`
- Modify: `app/script-visuals.tsx`
- Modify: `app/page.tsx`
- Modify: `app/globals.css`
- Modify: `tests/rendered-html.test.mjs`

**Interfaces:**
- Consumes: `public/illustrations/example-pages/manifest.json`.
- Produces: `getExampleVisuals(nodeId: string): ExampleVisualPage[]` and `ExampleGallery({ title, pages }: { title: string; pages: ExampleVisualPage[] })`.

```ts
export type ExampleVisualPage = {
  id: string;
  title: string;
  paragraphIndexes: number[];
  image: string;
};
```

- [ ] **Step 1: Write failing gallery tests**

Assert there is exactly one gallery entry per qualifying page, no inline map that expands all example images, and component source includes previous, next, Escape, ArrowLeft, ArrowRight, touch start/end, `第 {index + 1} / {pages.length} 页`, and focus restoration.

- [ ] **Step 2: Run focused test and verify failure**

Run: `node --test --test-name-pattern="example gallery" tests/rendered-html.test.mjs`

Expected: FAIL because gallery files do not exist.

- [ ] **Step 3: Implement typed lookup and gallery component**

Render a single stacked-cover card labeled `举例图集 · N 页`. The modal shows one page at a time, title, paragraph range, count, previous/next buttons, close button, keyboard navigation, backdrop close, and swipe navigation with a 48px threshold.

- [ ] **Step 4: Integrate without spreading images through the article**

Call `getExampleVisuals(current.id)` once in `page.tsx` and pass the result into desktop and mobile `VisualPreviewRail`. Do not render `pages.map(...)` inside the article body.

- [ ] **Step 5: Add accessible responsive styles**

Use 44px minimum controls, visible focus outlines, `overscroll-behavior: contain`, `touch-action: pan-y`, and `object-fit: contain`. Keep the gallery cover after version three in the rail.

- [ ] **Step 6: Run tests**

Run: `npm test && npm run lint && node tools/validate-example-visuals.mjs`

Expected: all commands succeed.

- [ ] **Step 7: Commit**

```bash
git add app/example-visual-data.ts app/example-gallery.tsx app/script-visuals.tsx app/page.tsx app/globals.css tests/rendered-html.test.mjs
git commit -m "feat: add compact example visual galleries"
```

---

### Task 7: Full Regression, Browser QA, and Publication

**Files:**
- Modify only files required by failures discovered in this task.

**Interfaces:**
- Consumes: complete implementation from Tasks 1–6.
- Produces: verified GitHub and Sites deployments from the same commit.

- [ ] **Step 1: Run the full local verification suite**

Run: `npm test && npm run lint && node tools/validate-script-visuals.mjs && node tools/validate-example-visuals.mjs && git diff --check`

Expected: every command exits 0.

- [ ] **Step 2: Check desktop behavior in a real browser**

Verify a first-, second-, and third-level route. Confirm the old image is above text; the level guide is above right-side previews; version two, version three, and one gallery cover are visible; modal paging and keyboard controls work; no image overlaps another card.

- [ ] **Step 3: Check mobile behavior in a real browser**

At 390×844, verify old image → level guide → horizontal new previews/gallery → article text order, swipe navigation, no page-wide horizontal overflow, and readable 44px controls.

- [ ] **Step 4: Check homepage filters**

Confirm `全部` and `使用 AI` remain first-layer libraries. Confirm `定义` contains levels 1, 2, and 3; date, search, and sorting work; a third-level card opens its exact route.

- [ ] **Step 5: Commit any verified corrections**

```bash
git add app/page.tsx app/script-visuals.tsx app/example-gallery.tsx app/globals.css public/illustrations/example-pages/manifest.json tools/validate-example-visuals.mjs tests/rendered-html.test.mjs
git commit -m "fix: complete cross-level visual QA"
```

- [ ] **Step 6: Push and publish the exact verified commit**

Push `main` to GitHub, wait for GitHub Pages success, package the same commit for the existing Sites project, save one version, deploy it to the existing public access level, and poll until succeeded.

- [ ] **Step 7: Re-open the production route and inspect asset dimensions**

For one route with multiple example pages, confirm every displayed image reports `complete: true` and `naturalWidth > 0`, the gallery count matches the manifest, and the public URL shows the new level-guide placement.

- [ ] **Step 8: Remove only temporary deployment archives**

Delete the validated temporary archive from `.openai/` after deployment. Preserve source images, prompts, outlines, manifests, and committed history.
