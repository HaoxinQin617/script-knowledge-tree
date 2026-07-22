# Homepage Explanation Gallery Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a homepage “讲解图” filter that lists every script with a generated example gallery, uses the gallery’s first page as its cover, and opens the existing script page.

**Architecture:** Derive a cross-level visual index from the existing `nodes`, `tasks`, and example-gallery manifest without adding a second content store. Extend the existing homepage filter and card renderer with one visual-specific branch; navigation continues through the existing `navigate(node.id)` path.

**Tech Stack:** React 19, TypeScript, Next Image, vinext, CSS, Node test runner.

## Global Constraints

- Do not change script text, generation mode, hierarchy, or existing category behavior.
- The explanation-gallery cover is always the first page of `galleryPages`.
- The explanation-gallery filter includes levels 1, 2, and 3 when gallery pages exist.
- Clicking a cover opens the existing script page, not a separate image-only route.
- Search, date filtering, and date sorting remain active.
- Desktop and mobile covers must use `object-fit: contain` so text and relationship lines are not cropped.

---

### Task 1: Cross-level explanation-gallery index

**Files:**
- Modify: `app/example-visual-data.ts`
- Test: `tests/rendered-html.test.mjs`

**Interfaces:**
- Consumes: `nodes: ScriptNode[]`, `tasks: TaskRecord[]`, and manifest `galleryPages`.
- Produces: `getExplanationGalleryIndex(): Array<{ task: TaskRecord; node: ScriptNode; root: ScriptNode; cover: ExampleVisualPage; pageCount: number }>`.

- [ ] **Step 1: Write the failing index test**

Add a test that imports `getExplanationGalleryIndex`, asserts the result is non-empty, confirms every entry has a first-page cover, confirms entries include levels above 1, and confirms no entry has zero pages.

```js
test("explanation gallery indexes every script with a first-page cover", async () => {
  const { getExplanationGalleryIndex } = await import("../app/example-visual-data.ts");
  const entries = getExplanationGalleryIndex();
  assert.ok(entries.length > 0);
  assert.ok(entries.some(({ node }) => node.level > 1));
  assert.ok(entries.every(({ cover, pageCount }) => cover.image && pageCount > 0));
});
```

- [ ] **Step 2: Run the targeted test and verify failure**

Run: `node --test --test-name-pattern="explanation gallery" tests/rendered-html.test.mjs`

Expected: FAIL because `getExplanationGalleryIndex` is not exported.

- [ ] **Step 3: Implement the derived index**

Import `nodes` and `tasks`, resolve each node’s root task by walking parents, exclude nodes without gallery pages, and use `pages[0]` as `cover`.

```ts
export type ExplanationGalleryEntry = {
  task: TaskRecord;
  node: ScriptNode;
  root: ScriptNode;
  cover: ExampleVisualPage;
  pageCount: number;
};

export function getExplanationGalleryIndex(): ExplanationGalleryEntry[] {
  return nodes.flatMap((node) => {
    const pages = getExampleVisuals(node.id);
    if (!pages.length) return [];
    let root = node;
    while (root.parent) root = nodes.find((item) => item.id === root.parent) ?? root;
    const task = tasks.find((item) => item.rootId === root.id);
    return task ? [{ task, node, root, cover: pages[0], pageCount: pages.length }] : [];
  });
}
```

- [ ] **Step 4: Run the targeted test and verify pass**

Run: `node --test --test-name-pattern="explanation gallery" tests/rendered-html.test.mjs`

Expected: PASS.

- [ ] **Step 5: Commit the index**

```bash
git add app/example-visual-data.ts tests/rendered-html.test.mjs
git commit -m "feat: index explanation gallery covers"
```

### Task 2: Homepage filter and cover cards

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/globals.css`
- Test: `tests/rendered-html.test.mjs`

**Interfaces:**
- Consumes: `getExplanationGalleryIndex()` from Task 1.
- Produces: homepage category state supporting `"explanation"` and cards using `cover.image`.

- [ ] **Step 1: Write the failing homepage behavior test**

Add source-level assertions for the new filter label, derived index branch, first-page cover, page count, existing `navigate(node.id)`, and non-cropping CSS.

```js
test("homepage explanation filter uses first gallery pages as covers", async () => {
  const [page, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);
  assert.match(page, /讲解图/);
  assert.match(page, /categoryFilter === "explanation"\s*\? explanationIndex/);
  assert.match(page, /cover\.image/);
  assert.match(page, /pageCount/);
  assert.match(page, /navigate\(node\.id\)/);
  assert.match(css, /\.explanation-card[\s\S]*object-fit:contain/);
});
```

- [ ] **Step 2: Run the targeted test and verify failure**

Run: `node --test --test-name-pattern="homepage explanation" tests/rendered-html.test.mjs`

Expected: FAIL because the filter and card branch do not yet exist.

- [ ] **Step 3: Extend category state and candidates**

Update the category union to include `"explanation"`, memoize `getExplanationGalleryIndex()`, and select it before the existing definition/root branches.

```ts
const [categoryFilter, setCategoryFilter] = useState<"all" | "definition" | "use-ai" | "explanation">("all");
const explanationIndex = useMemo(() => getExplanationGalleryIndex(), []);
const candidates = categoryFilter === "explanation"
  ? explanationIndex
  : categoryFilter === "definition"
    ? definitionIndex
    : rootEntries;
```

Keep the shared date, search, and sort pipeline unchanged.

- [ ] **Step 4: Add the filter button and visual card branch**

Add a `讲解图` button beside `使用 AI`. In the card map, read optional `cover` and `pageCount`; use `cover.image` only for the explanation filter, retain the existing primary visual elsewhere, and keep `onClick={() => navigate(node.id)}`.

```tsx
<button className={categoryFilter === "explanation" ? "active" : ""} onClick={() => setCategoryFilter("explanation")}>讲解图</button>

<Image
  src={categoryFilter === "explanation" && cover ? cover.image : getVisualVersions(node.id).original}
  alt={categoryFilter === "explanation" ? `${node.title}讲解图集封面` : `${node.title}口播首图`}
  width={1584}
  height={990}
  unoptimized
/>
```

For explanation cards, display `第 {node.level} 层`, duration, and `共 {pageCount} 页`, with footer copy `进入口播查看全部内容`.

- [ ] **Step 5: Add responsive visual-card styles**

Add `.explanation-card` modifiers so the cover remains 16:10, uses a quiet white backing, and applies `object-fit: contain`. At `max-width: 680px`, preserve the existing one-column card layout and minimum 44px click target.

```css
.topic-card.explanation-card .card-visual{background:rgba(255,255,255,.72)}
.topic-card.explanation-card .card-visual img{aspect-ratio:16/10;object-fit:contain;background:#fff}
.explanation-page-count{display:inline-flex;align-items:center;min-height:28px;padding:0 9px;border-radius:999px;background:#eee8f5;color:#67587f;font-size:10px;font-weight:800}
```

- [ ] **Step 6: Run the targeted test and verify pass**

Run: `node --test --test-name-pattern="homepage explanation" tests/rendered-html.test.mjs`

Expected: PASS.

- [ ] **Step 7: Run full verification**

Run: `npm test`

Expected: all tests pass and the production build succeeds.

Run: `npm run lint`

Expected: exit code 0 with no lint errors.

Run: `node tools/validate-example-visuals.mjs`

Expected: `Validated 28 example pages for 21 nodes; 0 missing prompts; 0 missing images`.

- [ ] **Step 8: Commit the homepage feature**

```bash
git add app/page.tsx app/globals.css tests/rendered-html.test.mjs
git commit -m "feat: add homepage explanation gallery"
```

### Task 3: Publish the validated site

**Files:**
- No product source changes.

**Interfaces:**
- Consumes: the validated Git commit from Task 2.
- Produces: an updated public deployment at the existing site URL.

- [ ] **Step 1: Push the exact validated commit to GitHub and the existing Sites source**

Expected: both remotes point to the same HEAD commit.

- [ ] **Step 2: Package and save one Sites version**

Use the existing `.openai/hosting.json` project ID and the official Sites packaging helper.

Expected: Sites returns one saved version for the current commit.

- [ ] **Step 3: Deploy the saved version and poll status**

Expected: deployment status is `succeeded` and the existing public URL remains `https://script-knowledge-tree.hxqin.chatgpt.site`.

- [ ] **Step 4: Remove the temporary deployment archive and confirm a clean worktree**

Run: `git status --short`

Expected: no output.
