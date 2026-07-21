# Atlassian Design System

Source: https://atlassian.design · By Atlassian

## 1) Visual Theme & Atmosphere
Atlassian's design system serves Jira, Confluence, Trello, Bitbucket, and the rest of the Atlassian suite. Its language is collaborative, structured, and functional. Colors communicate workflow state — progress, discovery, warning, success — not just brand.

Mood: collaborative, systematic, clear, multi-product-coherent
Archetype: `enterprise-data` with a softer, more collaborative tone than IBM
Density: comfortable by default; supports dense compact mode for issue trackers.

## 2) Color Palette & Roles
| Token | Hex | Role |
|---|---|---|
| `color.background.brand.bold` | `#0052CC` | Primary CTA, active nav |
| `color.background.accent.blue.bolder` | `#0747A6` | Deep links, hover |
| `color.text.link` | `#0C66E4` | Anchor links |
| `color.background.neutral` | `#F7F8F9` | Page background |
| `color.background.input` | `#FFFFFF` | Input fill |
| `color.border.input` | `#8590A2` | Input border |
| `color.text` | `#172B4D` | Primary body text |
| `color.text.subtle` | `#44546F` | Secondary/muted text |
| `color.background.accent.purple.subtlest` | `#F3F0FF` | Discovery/premium tint |
| `color.background.accent.teal.subtler` | `#C6EDFB` | Information tint |
| `color.background.success.bold` | `#1F845A` | Done/resolved |
| `color.background.warning.bold` | `#E2B203` | Attention/blocker |
| `color.background.danger.bold` | `#CA3521` | Error/overdue |
| `color.text.inverse` | `#FFFFFF` | Text on dark fills |

Status colors in Jira use a lozenge system: inProgress=blue, done=green, todo=neutral, blocked=red.

## 3) Typography Rules
Typefaces:
- Product UI: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", fallback stack (Atlassian does not mandate a custom display typeface in the product system).
- Marketing (Atlassian.com): "Charlie Text" and "Charlie Display" (proprietary).

Type scale:

| Token | Size | Weight | Line Height | Use |
|---|---:|---:|---:|---|
| font.size.50 | 11px | 700 | 16 | Micro label |
| font.size.75 | 12px | 400 | 16 | Small print |
| font.size.100 | 14px | 400 | 20 | Body default |
| font.size.200 | 16px | 400 | 24 | Large body |
| font.size.300 | 20px | 600 | 24 | H3 |
| font.size.400 | 24px | 600 | 28 | H2 |
| font.size.500 | 29px | 600 | 32 | H1 |
| font.size.600 | 35px | 600 | 40 | Display |

## 4) Component Stylings
Buttons:
- Primary: `#0052CC` fill, white text, 3px radius
- Default/Secondary: white fill, `#DFE1E6` border
- Subtle: transparent fill, hover reveals background
- Warning/Danger: fills use respective semantic color
- Size: default (32px height), compact (24px)

Inline editing (Jira-native):
- Hover reveals edit affordance on field
- Click converts label to input in-place

Lozenges (status badges):
- Pill shape (100px radius), 11px uppercase label, semantic fill colors
- Bold lozenges: saturated background, white text — for high-urgency

Flag (toast notifications):
- Bottom-left anchored, icon + message, auto-dismiss

## 5) Layout Principles
Grid: 8px base spacing, fluid 12-column grid. Atlassian uses tight internal gutters in product (8/16px).

Spacing scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64

Page layout:
- Board/List switcher (Jira) — top-level view control
- Side-panel modal for quick editing (inline task detail)
- Left navigation rail (colored to team/product)

## 6) Depth & Elevation
| Layer | Shadow |
|---|---|
| Card | `0 1px 1px rgba(9,30,66,0.25), 0 0 1px rgba(9,30,66,0.31)` |
| Overlay | `0 4px 8px -2px rgba(9,30,66,0.25), 0 0 1px rgba(9,30,66,0.31)` |
| Dialog | `0 8px 16px -4px rgba(9,30,66,0.25), 0 0 1px rgba(9,30,66,0.31)` |
| Modal | `-1px 0 40px rgba(9,30,66,0.25), 0 0 1px rgba(9,30,66,0.31)` |

Background: always slightly off-white (`#F7F8F9`) for workspace surfaces; white for cards.

## 7) Do's and Don'ts
Do:
- Use the lozenge for status labels — never custom-coloured pill/chip replacements.
- Keep primary actions singular on a view; secondary actions secondary.
- Surface workflow state through color (not just text).
- Use the Jira/Confluence blue for all navigation active states.

Don't:
- Do not use decorative illustration in dense issue/board views.
- Do not place >3 actions at the same visual weight.
- Do not use warning amber as a general accent.
- Do not combine Jira density with marketing-page whitespace.

## 8) Responsive Behavior
- Board views: horizontal scroll on narrow viewports (not collapse).
- Left nav collapses to icon-only rail at ≤1024px, drawer overlay below 768px.
- Touch targets: 40px minimum, 44px preferred.
- Breakpoints: 544, 768, 1024, 1280px.

## 9) Agent Prompt Guide
One-shot: "Use Atlassian design language: #0052CC primary blue, 8px spacing scale, 3px corner radius, semantic status lozenges (inProgress/done/blocking), Card/Overlay/Dialog/Modal shadow elevations, left navigation rail, subtle off-white workspace background (#F7F8F9), default body text in system font stack at 14px."

Negative: Avoid marketing-style gradients, avoid oversized whitespace, avoid non-semantic color usage for status indicators.
