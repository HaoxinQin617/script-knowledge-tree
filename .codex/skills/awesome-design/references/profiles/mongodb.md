# MongoDB Documentation / Atlas Design System

**URL**: https://www.mongodb.com/docs/
**Archetype**: developer-minimal / docs-forward
**Stack**: React; Gatsby (docs); Atlas Cloud dashboard uses React

---

## 1. Visual Theme & Atmosphere
MongoDB's design presents a crisp, modern developer-documentation aesthetic anchored by its iconic leaf-green. The docs site prioritizes scannable content with strong typographic hierarchy. Atlas (the cloud product) extends this into a clean SaaS dashboard with white surfaces and green accents. The tone is technical and approachable — empowering developers without feeling cold.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Evergreen | `#00ED64` | Brand primary, CTAs, highlights |
| Forest Green | `#00684A` | Hover, dark variant of Evergreen |
| Green Dark | `#023430` | Footer, dark section backgrounds |
| Blue | `#016BF8` | Links, secondary interactive |
| Purple | `#7B61FF` | Accent, new feature callouts |
| Yellow | `#FFDD49` | Warning, beta badges |
| Red | `#CF3D30` | Error, destructive |
| Slate | `#1C2D38` | Primary text, headings |
| Dark Gray | `#3D4F58` | Body text |
| Gray | `#889397` | Secondary/muted text |
| Light Gray | `#E8EDEB` | Borders, dividers |
| Background | `#FBFCFC` | Page background |
| White | `#FFFFFF` | Card, surface |
| Code bg | `#1E2A32` | Code block background |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| Display | Euclid Circular A | 3rem | 700 |
| H1 | Euclid Circular A | 2rem | 700 |
| H2 | Euclid Circular A | 1.5rem | 700 |
| H3 | Euclid Circular A | 1.25rem | 600 |
| H4 | Euclid Circular A | 1.125rem | 600 |
| Body | Euclid Circular A | 1rem | 400 |
| Small | Euclid Circular A | 0.875rem | 400 |
| Code | Source Code Pro | 0.875rem | 400 |

Docs body max-width: 800px centered. Code blocks: dark `#1E2A32` bg, green `#00ED64` syntax highlights for keywords.

---

## 4. Component Styling

**Code Blocks**
- Dark `#1E2A32` background, 8px radius
- Line numbers in muted gray
- Copy-to-clipboard button top-right (hidden, reveals on hover)
- Language tab label: small gray pill
- Green for query keywords, white for field values, coral for strings

**Callout / Admonitions**
- Note: blue left border `#016BF8`
- Warning: yellow left border `#FFDD49`
- Important: green left border `#00ED64`
- Danger: red left border `#CF3D30`
- 4px left border, tinted background of same color at 8% opacity

**Tabbed Code Examples**
- Language switcher tabs: flat pills, green underline on active
- Synchronized scrolling across language tabs

**Cards (Atlas)**
- 4px radius, 1px border `#E8EDEB`, 16px padding
- Icon with title row; metric value; action link bottom

---

## 5. Layout Principles
- **Docs**: Left nav (fixed, 280px), content area (max 800px), optional right ToC (220px)
- **Atlas**: Left sidebar nav (220px) + top header bar + content area
- **Grid**: 12-column; product pages use 8+4 column (content + sidebar code)
- **Spacing scale**: 4px base (4, 8, 12, 16, 24, 32, 48, 64)

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat | None | Text, inline elements |
| Card | `0 2px 8px rgba(28,45,56,0.08)` | Feature cards |
| Dropdown | `0 4px 16px rgba(28,45,56,0.15)` | Navigation popovers |
| Modal | `0 8px 32px rgba(28,45,56,0.25)` | Dialogs |

---

## 7. Do's and Don'ts

**Do**
- Use Evergreen `#00ED64` for primary CTAs on dark backgrounds (great contrast on dark green)
- Apply dark code blocks consistently — never mix light/dark code blocks
- Use the admonition pattern for important docs callouts
- Provide language-switcher tabs for all code examples
- Use Euclid Circular A — it's a licensed brand font

**Don't**
- Use Evergreen on white for body text (insufficient contrast — decorative/icon only)
- Make Atlas dashboards scrollable left-right — horizontal overflow = bug
- Use more than one primary CTA per section
- Use `#00ED64` as the only visual differentiator in charts without redundancy

---

## 8. Responsive Behavior

| Breakpoint | Layout |
|---|---|
| < 768px | Hamburger nav, full-width content |
| 768–1024px | Sidebar collapses to overlay |
| ≥ 1024px | Three-panel (left nav, content, right ToC) |
| ≥ 1440px | Wider content max-width, larger headings |

---

## 9. Agent Prompt Guide

**When generating MongoDB-style UI:**
> Developer docs / cloud SaaS aesthetic. Evergreen `#00ED64` brand accent (dark bg CTAs only). Slate `#1C2D38` headings. Euclid Circular A typeface. Dark code blocks `#1E2A32` with green syntax. 4px border-radius. 4-color admonition callouts (note/warn/important/danger). Left nav 280px + 800px content max-width. Spacing: 4px grid. White cards with `#E8EDEB` borders.

**Avoid**: Light code blocks, Evergreen on white text, horizontal scroll in dashboards.
