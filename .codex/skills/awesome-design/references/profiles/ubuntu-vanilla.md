# Ubuntu Vanilla Framework

**URL**: https://vanillaframework.io/
**Archetype**: developer-minimal / docs-platform
**Stack**: Sass framework; utility + component classes

---

## 1. Visual Theme & Atmosphere
Vanilla is Canonical's design framework used across Ubuntu websites, docs, and product portals. It emphasizes clarity, openness, and pragmatic engineering style. Ubuntu Orange is the key brand accent, while layouts remain clean and content-first for technical and documentation-heavy use cases.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Ubuntu Orange | `#E95420` | Primary brand accent, CTAs |
| Orange Dark | `#C7451B` | Hover/active |
| Orange Light | `#FDEEE9` | Selected/accent tint |
| Aubergine | `#77216F` | Secondary brand accent |
| Dark Aubergine | `#2C001E` | Headers/hero dark sections |
| Link Blue | `#0066CC` | Links/info actions |
| Success Green | `#0E8420` | Success |
| Warning Amber | `#C98A00` | Warning |
| Error Red | `#C7162B` | Error/destructive |
| Ink | `#111111` | Primary text |
| Slate | `#4C4C4C` | Secondary text |
| Muted | `#767676` | Disabled text |
| Border | `#D9D9D9` | Dividers/inputs |
| Surface | `#FFFFFF` | Cards/content |
| Background | `#F7F7F7` | Page background |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| H1 | Ubuntu | 2.25rem | 500 |
| H2 | Ubuntu | 1.75rem | 500 |
| H3 | Ubuntu | 1.375rem | 500 |
| H4 | Ubuntu | 1.125rem | 500 |
| Body | Ubuntu | 1rem | 400 |
| Compact Body | Ubuntu | 0.875rem | 400 |
| Small | Ubuntu | 0.75rem | 400 |
| Label | Ubuntu | 0.875rem | 500 |
| Code | Ubuntu Mono | 0.875rem | 400 |

---

## 4. Component Styling

**Documentation Blocks**
- Content-first sections with clear heading hierarchy
- Code snippets and command blocks in mono

**Navigation Patterns**
- Global top nav + subnav tabs for products/docs
- Breadcrumbs for deep technical pages

**Cards and Panels**
- Minimal cards with border separation
- Feature panels for products and tutorials

**Form Controls**
- Straightforward, accessible defaults
- Inline validation and helper text

---

## 5. Layout Principles
- **Grid**: responsive columns with utility classes
- **Spacing**: tokenized spacing with clear rhythm
- **Content priority**: docs and technical text readability
- **Pattern**: overview -> install/use -> reference
- **Width**: constrained readable docs columns and wider product pages

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat | Border-led separation | Docs/content sections |
| Card | `0 2px 8px rgba(17,17,17,0.08)` | Feature panels |
| Popover | `0 4px 16px rgba(17,17,17,0.14)` | Menus/tooltips |
| Modal | `0 8px 24px rgba(17,17,17,0.2)` | Dialogs |

---

## 7. Do's and Don'ts

**Do**
- Keep technical content highly readable and scannable
- Use Ubuntu Orange for key actions and identity accents
- Maintain consistent docs and code block styling
- Favor simple, pragmatic UI patterns over decorative treatments

**Don't**
- Overuse aubergine/orange simultaneously on dense pages
- Hide critical install or command details in collapsed-only areas
- Replace Ubuntu/Ubuntu Mono typography with unrelated fonts
- Add heavy visual effects to documentation-heavy experiences

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 768px | Single-column docs and simplified nav |
| 768–1024px | Two-column content + contextual nav |
| ≥ 1024px | Full docs/product layouts with side navigation |

---

## 9. Agent Prompt Guide

**When generating Ubuntu Vanilla-style UI:**
> Open-source docs/product interface with pragmatic clarity. Ubuntu Orange `#E95420` accents, Ubuntu typography, Ubuntu Mono for code, and content-first layouts. Keep components simple, readable, and technically oriented. Prioritize docs navigation and code visibility.

**Avoid**: decorative-heavy styling, hidden technical details, inconsistent code formatting patterns.
