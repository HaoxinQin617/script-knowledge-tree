# Semi Design

**URL**: https://semi.design/
**Archetype**: enterprise-data / product-platform
**Stack**: React component library by ByteDance

---

## 1. Visual Theme & Atmosphere
Semi Design is ByteDance's open-source enterprise component system. It balances modern visual polish with high-density product workflows, and is well-suited for international and CJK-heavy products. The aesthetic is clean, rounded, and token-driven with strong support for configurable themes and scalable design language across product lines.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Semi Blue | `#0077FA` | Primary interactive, links |
| Blue Dark | `#005DD1` | Hover/active |
| Blue Light | `#EAF2FF` | Selected/info tint |
| Green | `#00B578` | Success |
| Orange | `#FF9F00` | Warning |
| Red | `#F93920` | Error/destructive |
| Purple | `#7A4CFF` | Secondary accent |
| Gray 900 | `#1D2129` | Primary text |
| Gray 700 | `#4E5969` | Secondary text |
| Gray 500 | `#86909C` | Muted text |
| Gray 200 | `#E5E6EB` | Borders |
| Gray 100 | `#F2F3F5` | Background surfaces |
| White | `#FFFFFF` | Primary surface |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| H1 | system sans | 2rem | 700 |
| H2 | system sans | 1.5rem | 700 |
| H3 | system sans | 1.25rem | 600 |
| H4 | system sans | 1rem | 600 |
| Body | system sans | 0.875rem | 400 |
| Body compact | system sans | 0.8125rem | 400 |
| Small | system sans | 0.75rem | 400 |
| Label | system sans | 0.8125rem | 500 |
| Code | ui-monospace | 0.8125rem | 400 |

CJK-friendly defaults prioritize readability in multilingual enterprise dashboards.

---

## 4. Component Styling

**Data Table**
- Dense mode with compact row heights
- Sorting/filtering built in
- Sticky columns and summary rows

**Form Controls**
- Label + help text pattern
- Inline validation and status indicators
- Multi-step forms with stepper components

**Navigation**
- Side navigation with grouped sections
- Top tabs for sub-areas
- Breadcrumb support for deep hierarchies

**Feedback Components**
- Notification, Toast, Modal, Drawer
- Semantic color-coded statuses

---

## 5. Layout Principles
- **Grid**: 24-column style compatibility for dense enterprise layouts
- **Spacing**: tokenized spacing scale with 4px increments
- **Density**: configurable compact/default modes
- **Shell**: Left nav + top utility bar + content
- **Patterns**: list-detail, dashboard cards, analytics panels

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat | `1px solid #E5E6EB` | Surface separation |
| Card | `0 2px 8px rgba(29,33,41,0.08)` | Cards/panels |
| Popover | `0 4px 16px rgba(29,33,41,0.14)` | Menus/tooltips |
| Modal | `0 8px 24px rgba(29,33,41,0.2)` | Dialogs/drawers |

---

## 7. Do's and Don'ts

**Do**
- Use token-driven theming for consistent product branding
- Leverage compact density for data-heavy enterprise screens
- Support multilingual text expansion and CJK typography needs
- Keep interaction patterns predictable across modules
- Use semantic feedback components consistently

**Don't**
- Hardcode spacing/colors instead of theme tokens
- Mix unrelated UI libraries in core workflows
- Ignore localization edge cases in table/form layouts
- Over-style data-heavy screens with decorative elements

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 768px | Simplified single-column modules |
| 768–1024px | Two-column dashboards |
| ≥ 1024px | Full enterprise layout with side nav |

---

## 9. Agent Prompt Guide

**When generating Semi Design-style UI:**
> ByteDance enterprise UI aesthetic with clean rounded components, Semi Blue `#0077FA` as primary action color, tokenized spacing/color system, and compact-ready data tables/forms. Prioritize multilingual/CJK-friendly readability and predictable dashboard workflows.

**Avoid**: hardcoded styles, decorative-first layout decisions, inconsistent feedback semantics.
