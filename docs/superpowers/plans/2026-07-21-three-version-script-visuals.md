# Three-Version Script Visuals Implementation Plan

> **For agentic workers:** Execute this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Keep the immutable original image above each script while presenting exactly two independently generated new-version previews in the desktop right rail and a mobile horizontal preview strip.

**Architecture:** Move visual-version paths into a typed manifest and render them through three focused components: a primary figure, a responsive preview rail, and a modal lightbox. Keep content-structure validation separate from UI rendering so missing, duplicated, or truncated assets fail tests before deployment.

**Tech Stack:** React 19, TypeScript, Next/Image, CSS, Node test runner, existing Vinext build, real-browser validation.

## Global Constraints

- The original image is immutable and is never an input to version 2 or version 3 generation.
- Every script has exactly three distinct paths: `original`, `version2`, `version3`.
- Desktop places version 2 and version 3 in the right rail; mobile places them in a horizontal strip below the original and before the script body.
- New image titles contain no ellipsis or truncation markers.
- Never use the prohibited unrelated product name described in `AGENTS.md` in UI, scripts, images, tests, or documentation.

---

### Task 1: Lock the three-version data contract with failing tests

**Files:**
- Create: `app/visual-data.ts`
- Modify: `tests/rendered-html.test.mjs`

**Interfaces:**
- Produces: `ScriptVisualVersions`, `visualVersionsById`, and `getVisualVersions(id)`.
- Consumes: `nodes` from `app/task-data.ts`.

- [ ] **Step 1: Add failing manifest and page-structure assertions**

Add tests that import/read the visual manifest and assert every node has exactly the keys below, all values are non-empty and unique, and all files exist:

```js
for (const node of nodes) {
  const visuals = visualVersionsById[node.id];
  assert.deepEqual(Object.keys(visuals), ["original", "version2", "version3"]);
  assert.equal(new Set(Object.values(visuals)).size, 3);
}
```

Also assert `page.tsx` contains `PrimaryScriptVisual` and `VisualPreviewRail` and no longer renders `style-2-visual` inside the article.

- [ ] **Step 2: Run the focused test and confirm it fails**

Run: `npm test`

Expected: failure because `app/visual-data.ts` and the two component names do not exist.

- [ ] **Step 3: Add the typed manifest**

Create `app/visual-data.ts` with the exact mapping:

```ts
import { nodes } from "./task-data";

export type ScriptVisualVersions = {
  original: string;
  version2: string;
  version3: string;
};

export const visualVersionsById: Record<string, ScriptVisualVersions> = Object.fromEntries(
  nodes.map((node) => [node.id, {
    original: `/illustrations/mindmaps/${node.id}.png`,
    version2: `/illustrations/mindmaps-from-text-style2/${node.id}.svg`,
    version3: `/illustrations/mindmaps-from-text-style3/${node.id}.svg`,
  }]),
);

export function getVisualVersions(id: string) {
  return visualVersionsById[id];
}
```

- [ ] **Step 4: Re-run tests and verify the manifest assertions pass**

Run: `npm test`

Expected: manifest/resource assertions pass; component assertions remain failing until Task 2.

- [ ] **Step 5: Commit the contract**

```bash
git add app/visual-data.ts tests/rendered-html.test.mjs
git commit -m "test: lock three-version visual contract"
```

---

### Task 2: Implement primary image, preview rail, and lightbox

**Files:**
- Create: `app/script-visuals.tsx`
- Modify: `app/page.tsx`
- Modify: `app/globals.css`
- Modify: `tests/rendered-html.test.mjs`

**Interfaces:**
- Consumes: `ScriptVisualVersions`, title, alt text.
- Produces: `PrimaryScriptVisual`, `VisualPreviewRail`, and `VisualLightbox`.

- [ ] **Step 1: Add failing responsive rendering assertions**

Assert the component source contains two labelled preview buttons, `aria-modal="true"`, Escape-key handling, a mobile scroll-snap container, and version labels `新版二` / `新版三`.

- [ ] **Step 2: Run tests and confirm the new assertions fail**

Run: `npm test`

Expected: failures for the missing visual components and CSS selectors.

- [ ] **Step 3: Implement focused visual components**

Create `app/script-visuals.tsx` as a client component. `PrimaryScriptVisual` renders only `visuals.original`. `VisualPreviewRail` renders exactly two buttons from this fixed list:

```ts
const previews = [
  { key: "version2", label: "新版二" },
  { key: "version3", label: "新版三" },
] as const;
```

Clicking either button sets the active preview; `VisualLightbox` displays the corresponding path, closes on the close button, backdrop click, or Escape, restores focus to the invoking preview, and locks only the modal overlay rather than changing the original figure.

- [ ] **Step 4: Integrate without changing script generation or input mode**

In `app/page.tsx`, replace the inline visual map with `getVisualVersions`. Render `PrimaryScriptVisual` in the current article position. Render `VisualPreviewRail` at the top of `.topic-rail` on desktop and once after the primary image using a mobile-only class. Remove the second full-width `style-2-visual` figure from the article.

- [ ] **Step 5: Add responsive CSS**

Add `.visual-preview-rail`, `.visual-preview-card`, `.mobile-visual-previews`, and `.visual-lightbox` styles. At widths above 980px, show the right-rail version and hide the mobile version. At widths at or below 980px, reverse that visibility and use:

```css
.mobile-visual-previews {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(78%, 1fr);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  overscroll-behavior-inline: contain;
}
.mobile-visual-previews .visual-preview-card { scroll-snap-align: start; }
```

Ensure `body` has no horizontal overflow caused by the strip, buttons have a minimum 44px target, images use `object-fit: contain`, and the modal image remains fully visible.

- [ ] **Step 6: Run build, tests, and lint**

Run: `npm test`

Expected: all Node tests pass and the production build exits 0.

Run: `npm run lint`

Expected: exit 0 with no errors.

- [ ] **Step 7: Commit the UI implementation**

```bash
git add app/page.tsx app/script-visuals.tsx app/globals.css tests/rendered-html.test.mjs
git commit -m "feat: place new visual previews beside scripts"
```

---

### Task 3: Validate and repair the two new image sets from text-only structures

**Files:**
- Modify: `public/illustrations/mindmap-approved-structure.json`
- Modify: `public/illustrations/mindmap-text-only-structure.json`
- Modify: `tools/render-approved-grey-pink-mindmaps.py`
- Create: `tools/validate-script-visuals.mjs`
- Modify: `tests/rendered-html.test.mjs`
- Regenerate: `public/illustrations/mindmaps-from-text-style2/*.svg`
- Regenerate: `public/illustrations/mindmaps-from-text-style3/*.svg`

**Interfaces:**
- Consumes: full `title`, `summary`, and `body` for every node; no image files.
- Produces: two distinct SVGs and a validation report for each node.

- [ ] **Step 1: Add failing structure-quality checks**

Create `tools/validate-script-visuals.mjs` to parse both structure manifests and all SVGs. Fail on `…`, `...`, terminal ellipsis characters, duplicate paths, missing arrows between sequential nodes, text outside the 1600x1000 viewBox, or fewer than two stages for scripts whose approved outline contains four or more nodes.

- [ ] **Step 2: Run validation and record the exact failures**

Run: `node tools/validate-script-visuals.mjs`

Expected: current style 3 failures identify truncated labels such as the existing Chunk titles and summaries.

- [ ] **Step 3: Rebuild structure from complete script text**

For each node, derive complete short phrases from the full body. Preserve content-dependent stage count and relationship type. For `chunk-explained`, use complete labels such as `长文切成片段`, `沿语义边界下刀`, `控制片段长度`, `保留少量重叠`, `保存页码来源`, `用真实问题评估`; do not use clipped source sentences.

- [ ] **Step 4: Render two independent designs from blank canvases**

Version 2 uses the approved restrained gray-pink glass flow. Version 3 uses a distinct white frosted-glass composition with the same reviewed content structure but different spacing and grouping. Both use dark readable text, gray-pink gradient stage numbers and arrows, smaller arrowheads, safe gaps around cards, reduced green, and no source-image input.

- [ ] **Step 5: Run structural validation until clean**

Run: `node tools/validate-script-visuals.mjs`

Expected: 40 nodes × 2 new versions validated; zero truncated labels, missing files, duplicate paths, or structural failures.

- [ ] **Step 6: Render and visually inspect representative risk cases**

Inspect at least `chunk-explained`, `overview`, `codex-china-overview`, `figma-canva`, and the longest script. Verify no text/card overlap, arrows avoid cards, arrowheads do not cover targets, typography is readable, and each flow follows the approved structure. Repair any failure before continuing.

- [ ] **Step 7: Commit regenerated structures and assets**

```bash
git add public/illustrations/mindmap-approved-structure.json public/illustrations/mindmap-text-only-structure.json public/illustrations/mindmaps-from-text-style2 public/illustrations/mindmaps-from-text-style3 tools/render-approved-grey-pink-mindmaps.py tools/validate-script-visuals.mjs tests/rendered-html.test.mjs
git commit -m "fix: regenerate complete script visual versions"
```

---

### Task 4: Real-browser acceptance, deployment, and evidence

**Files:**
- Create: `docs/qa/three-version-visuals-checklist.md`
- Modify if required by findings: `app/globals.css`, `app/script-visuals.tsx`

**Interfaces:**
- Consumes: production build and deployed URL.
- Produces: desktop/mobile screenshots and a line-by-line acceptance record.

- [ ] **Step 1: Run the complete local gate**

Run: `npm test && npm run lint && node tools/validate-script-visuals.mjs`

Expected: all commands exit 0 with no test failures.

- [ ] **Step 2: Verify desktop at 1440px**

Open `#chunk-explained`. Confirm one original image above the text, exactly two labelled previews in the right rail, no new-version full image inside the article, correct lightbox image for both buttons, no clipping/overlap, and no console errors.

- [ ] **Step 3: Verify mobile at 390px**

Confirm one original image above the text, exactly two horizontally scrollable previews below it, no page-level horizontal overflow, correct lightbox behavior, 44px controls, and no console errors.

- [ ] **Step 4: Record evidence**

Create `docs/qa/three-version-visuals-checklist.md` containing the tested commit, URLs, viewport sizes, resource status for all three images, console result, and screenshot paths. Every criterion from the design spec must be checked explicitly.

- [ ] **Step 5: Deploy and repeat the same checks on the live URL**

Deploy only after local evidence is clean. Reload the deployed site without relying on cached assets and repeat Tasks 4.2–4.4.

- [ ] **Step 6: Commit QA evidence and push**

```bash
git add docs/qa/three-version-visuals-checklist.md app/globals.css app/script-visuals.tsx
git commit -m "test: verify three-version visuals in browsers"
git push origin main
```

