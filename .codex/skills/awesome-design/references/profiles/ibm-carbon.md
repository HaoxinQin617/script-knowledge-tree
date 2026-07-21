# IBM Carbon Design System

Source: https://carbondesignsystem.com · By IBM

## 1) Visual Theme & Atmosphere
Carbon is IBM's enterprise design system. It communicates precision, density, and systematic thinking. Everything is grid-aligned, data can be surface-dense, and the aesthetic privileges function over decoration.

Mood: analytical, purposeful, controlled, trustworthy, slightly cool
Archetype: `enterprise-data`
Density: supports three formal sizes — comfortable (32px rows), default/condensed (24px), compact (20px).

## 2) Color Palette & Roles
| Token | Hex | Role |
|---|---|---|
| `interactive-01` | `#0f62fe` | Primary action, links |
| `interactive-02` | `#393939` | Secondary action |
| `ui-background` | `#ffffff` | Default screen (White theme) |
| `ui-background (g100)` | `#161616` | Default screen (Gray-100 dark) |
| `ui-01` | `#f4f4f4` | Primary container background |
| `ui-05` | `#161616` | Highest-emphasis text, borders |
| `text-01` | `#161616` | Primary text |
| `text-02` | `#525252` | Secondary text |
| `text-placeholder` | `#a8a8a8` | Placeholder |
| `support-error` | `#da1e28` | Error |
| `support-success` | `#198038` | Success |
| `support-warning` | `#f1c21b` | Warning (used with dark text) |
| `support-info` | `#0043ce` | Informational |
| `focus` | `#0f62fe` | Keyboard focus |

Four official Carbon themes: White, Gray 10, Gray 90, Gray 100 (dark).

## 3) Typography Rules
Typeface system:
- UI + Body: IBM Plex Sans
- Code: IBM Plex Mono
- Editorial long-form: IBM Plex Serif

Type scale (productive):

| Role | Size | Weight | Leading |
|---|---:|---:|---:|
| body-compact-01 | 14px | 400 | 18 |
| body-01 | 14px | 400 | 20 |
| body-compact-02 | 16px | 400 | 22 |
| body-02 | 16px | 400 | 24 |
| heading-01 | 14px | 600 | 18 |
| heading-02 | 16px | 600 | 22 |
| heading-03 | 20px | 400 | 28 |
| heading-04 | 28px | 400 | 36 |
| heading-05 | 36px | 300 | 44 |
| heading-06 | 42px | 300 | 50 |
| heading-07 | 54px | 300 | 64 |

Rules:
- Sentence case everywhere. IBM Plex is the only permitted typeface in Carbon.
- Productive type uses tighter line heights; expressive type uses looser.
- Minimum body size 12px, never below.

## 4) Component Stylings
Buttons:
- Primary: `interactive-01` fill, white text, 0px radius (square corners), 16px horizontal padding
- Secondary: `ui-01` fill, `text-01` text, 1px `ui-04` border
- Tertiary: transparent with `interactive-01` border and text
- Ghost: transparent, `interactive-01` text only
- Danger: `support-error` fill, white text

Inputs:
- Height 40px (default), or 32px (sm), 48px (xl)
- Bottom border only in default state (`ui-04`)
- Blue bottom border + label lifted on focus
- Error replaces bottom border with full red border + error icon

Data tables:
- Three density modes: compact/default/comfortable
- Sticky first column supported
- Sort indicators inline with header
- Batch action toolbar slides in above when rows selected

Notifications inline/toast:
- Left-border only, neutral background, icon for type

## 5) Layout Principles
Grid: 2x column grid system — 4-column (mobile) / 8-column (md) / 16-column (lg+)
Gutter: 16px or 32px (`--cds-grid-gutter`)
Max width: no hard max, but container typically 1584px at 2xl

Spacing scale: 2, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 160 (2px base unit)
Component padding tokens: `--cds-spacing-03` (8px) through `--cds-spacing-07` (32px) common

Shell layout: two-panel — SideNav (256px) + main content, or full-screen with breadcrumb nav. Shell headers are 48px tall.

## 6) Depth & Elevation
Shadow scale:
- layer (1px border): `0 1px 1px 0 rgba(0,0,0,.1)`
- overlay: `0 2px 6px rgba(0,0,0,.3)`
- modal: `0 4px 16px rgba(0,0,0,.3)`

Dark mode uses no traditional shadow — elevation expressed through layered grays (`ui-01` > `ui-02` > `ui-03`). Light mode uses subtle shadows.

## 7) Do's and Don'ts
Do:
- Align everything strictly to 8px grid — no half-pixel rounding.
- Use formal Carbon density size classes; do not create custom sizes.
- Follow zoning pattern: left nav → header → main → side panel.
- Reserve `interactive-01` blue exclusively for actions.

Don't:
- Do not use color outside the Carbon token system.
- Do not round corners (Carbon uses 0px radius on most components).
- Do not use decorative illustration or gradients on data surfaces.
- Do not mix productive and expressive type scales on one screen.

## 8) Responsive Behavior
Breakpoints:
- sm: 320px (4 cols)
- md: 672px (8 cols)
- lg: 1056px (16 cols)
- xl: 1312px (16 cols)
- 2xl: 1584px (16 cols)

- SideNav collapses to icon-only rail at md, becomes drawer below sm.
- Data tables become single-column card stacks below sm.
- Touch target: 44px minimum on touch devices.

## 9) Agent Prompt Guide
One-shot: "Use IBM Carbon design language: IBM Plex Sans typeface family, #0f62fe primary blue, square corners (0px radius), horizontal spacing multiples of 8px, enterprise-dense tables with compact/default/comfortable size modes, Gray 10 or Gray 100 theme, left-side navigation shell."

Negative: Avoid rounded corners, avoid decorative gradients, avoid colorful illustration, avoid non-IBM-Plex typefaces.

QA checklist:
- Square corners on all buttons/inputs?
- Text set in IBM Plex family?
- Colors only from Carbon token set?
- Grid aligned to 8px base unit?
