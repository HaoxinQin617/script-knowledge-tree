# Blueprint.js — Palantir Design System

**URL**: https://blueprintjs.com/
**Archetype**: enterprise-data
**Stack**: React, TypeScript; no CSS-in-JS — plain Sass

---

## 1. Visual Theme & Atmosphere
Blueprint is built for intelligence analysis, data exploration, and operational awareness tools at Palantir. The atmosphere is clinical, information-dense, and dark-first — designed for analysts spending long hours in complex dashboards, not casual users. The visual language is restrained and systematic with a blue accent that signals interaction against neutral dark surfaces. Blueprint assumes high competency users; progressive disclosure is less emphasized than complete data availability.

---

## 2. Color Palette & Roles

Blueprint ships full light and dark themes:

| Token | Light | Dark | Role |
|---|---|---|---|
| Intent Primary | `#2D72D2` | `#4C90F0` | Primary interactive |
| Intent Success | `#23A26D` | `#32A467` | Success status |
| Intent Warning | `#C87619` | `#EC9A3C` | Warning |
| Intent Danger | `#CD4246` | `#E76A6E` | Error/danger |
| Background | `#FFFFFF` | `#1C2127` | Page surface |
| Background Card | `#F6F7F9` | `#252A31` | Card surface |
| Background Hover | `#EDEFF2` | `#30404D` | Hover background |
| Border Default | `rgba(17,20,24,0.2)` | `rgba(255,255,255,0.2)` | Borders |
| Text Primary | `#1C2127` | `#F6F7F9` | Primary text |
| Text Muted | `rgba(28,33,39,0.62)` | `rgba(246,247,249,0.6)` | Secondary text |
| Dark Blue BG | `#1C2127` | — | Dark appchrome background |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| H1 | -apple-system stack | 36px | 600 |
| H2 | Same | 28px | 600 |
| H3 | Same | 22px | 600 |
| H4 | Same | 18px | 600 |
| H5 | Same | 16px | 600 |
| Body | Same | 14px | 400 |
| Small | Same | 12px | 400 |
| Code | Monospace stack | 14px | 400 |

Font stack: `-apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "Icons16", sans-serif`. Base 14px — dense by design. All sizing in `px`, not `rem`, to prevent system font scaling interference.

---

## 4. Component Styling

**Buttons**
- Primary: `#2D72D2` fill, white text, 3px radius
- Default: `#F6F7F9` fill (light) / `#404854` fill (dark), themed border
- Minimal: transparent, no border
- Outlined: transparent with border
- Intent variants: success/warning/danger on all button types
- Size: small (24px) / regular (30px) / large (40px)

**Table (HTMLTable + TanStack)**
- Blueprint provides `HTMLTable` — minimal wrapper with `bp5-html-table-*` modifiers
- Striped, condensed, bordered, interactive row variants
- Dedicated `Table2` component: virtualized, column resizing, cell editing

**Popover**
- Tethered with Popper.js; intent-colored arrow stroke
- Portal rendering to body
- Dark theme: `bp5-dark` class at root

**Tag**
- Small colored chips for entity labels, intent badges
- Removable (x) variant; minimal (no fill) variant
- Sizes: small / regular / large

**Tree**
- Hierarchical tree for navigation and query building
- Collapsible nodes; icon support; right-aligned secondary labels
- Signature Blueprint pattern for Palantir graph/entity navigation

---

## 5. Layout Principles
- **Grid**: No built-in layout grid — uses Blueprint CSS utility classes and Flexbox
- **Spacing**: 5px base unit (Blueprint legacy); steps: 5/10/15/20/30/40px
- **App shell**: Dark sidebar nav + main content (common Palantir pattern)
- **Dense mode**: Most components have a size=SMALL prop for maximum density
- **Panel stack**: Supports stacked panels (drill-down UI) natively via `PanelStack`

---

## 6. Depth & Elevation

| Level | Shadow | Usage |
|---|---|---|
| 0 | none | Flat surfaces |
| 1 | `0 0 0 1px rgba(17,20,24,0.1), 0 1px 1px rgba(17,20,24,0.2)` | Cards |
| 2 | `0 0 0 1px rgba(17,20,24,0.1), 0 2px 4px rgba(17,20,24,0.2), 0 8px 24px rgba(17,20,24,0.2)` | Popovers |
| 3 | Heavier multi-layer | Dialogs |
| 4 | Deepest multi-layer | Overlays |

Dark theme elevation is identical but the base surface is dark.

---

## 7. Do's and Don'ts

**Do**
- Use `bp5-dark` class for dark theme; not a separate stylesheet — same stylesheet, dark class toggle
- Use the Tree component for hierarchical entity navigation
- Use intent colors consistently (never use danger-red for non-error situations)
- Use small/condensed button sizes in toolbars to maximize information
- Use Popover for inline contextual actions — dialogs only for confirmations

**Don't**
- Override Blueprint CSS specificity (use the design token customization approach)
- Use 16px base font — 14px is the system baseline
- Apply decorative colors outside the intent palette
- Create custom navigation patterns — use Navbar + Menu combination
- Mix dark and light themed components on the same surface

---

## 8. Responsive Behavior

Blueprint is primarily a desktop-only design system:

| Size | Behavior |
|---|---|
| < 768px | Not officially supported; use at own risk |
| 768–1024px | Condensed but functional |
| ≥ 1024px | Full intended design |

Blueprint explicitly does not target mobile-first. It is designed for desktop analyst workstations and monitoring dashboards.

---

## 9. Agent Prompt Guide

**When generating Blueprint / Palantir-style UI:**
> Apply Blueprint's clinical intelligence-platform aesthetic. Dark mode default: `#1C2127` background, `#252A31` card surfaces. Intent blue `#4C90F0` for interactions in dark / `#2D72D2` in light. 14px base font, `-apple-system` stack, 3px radius. Dense: use SIZE=SMALL on components. Tree navigation for hierarchical data. Popover for contextual actions. 5px spacing unit. Box shadows: multi-layer subtle. No decorative colors outside intent palette. Data tables with sorting, striping, resizable columns.

**Avoid**: Mobile-first patterns, 16px base font, gradient fills, rounded-pill buttons, custom navigation structures.
