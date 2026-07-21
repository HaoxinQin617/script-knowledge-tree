# Salesforce Lightning Design System (SLDS)

Source: https://lightningdesignsystem.com · By Salesforce

## 1) Visual Theme & Atmosphere
SLDS powers Salesforce CRM and all Salesforce Lightning platform apps. Its vocabulary is CRM-dense: records, related lists, activity timelines, approval process flows. Spring/Summer/Winter release themes systematically update component tokens. The feel is enterprise-serious, action-rich, and data-heavy.

Mood: enterprise, systematic, information-dense, action-oriented, CRM-native
Archetype: `enterprise-data`
Density: compact multi-column by default; accommodates both casual users and power users.

## 2) Color Palette & Roles
| Token | Hex | Role |
|---|---|---|
| `$color-brand` | `#0176D3` | Primary action (Lightning Blue) |
| `$color-brand-dark` | `#014486` | Hover/active primary |
| `$color-brand-light` | `#EAF5FE` | Brand surface tint |
| `$color-text-default` | `#181818` | Primary body text |
| `$color-text-weak` | `#3E3E3C` | Secondary text |
| `$color-text-placeholder` | `#9F9E9C` | Placeholder |
| `$color-background` | `#FFFFFF` | Card background |
| `$color-background-alt` | `#F3F3F3` | Page/section bg |
| `$color-border` | `#DDDBDA` | Borders |
| `$color-border-input` | `#DDDBDA` | Input borders |
| Success | `#2E844A` | |
| Warning | `#FE9339` | |
| Error | `#C23934` | |
| Offline | `#444444` | |

Themed editions: Salesforce, Neutral (internal tools), Success (Trailhead), Industry Cloud variants.

## 3) Typography Rules
Typeface: Salesforce Sans (proprietary, similar to system-ui). Web fallback: -apple-system, Segoe UI, Roboto.

Scale:

| Token | Size | Weight | Use |
|---|---:|---:|---|
| text_title_small | 13px | 700 | Card/panel labels |
| text_body_regular_small | 13px | 400 | Compact cells |
| text_body_regular | 14px | 400 | Primary body |
| text_body_medium | 15px | 400 | Loose body |
| text_section_heading | 16px | 700 | Section headers |
| text_heading_small | 18px | 700 | Panel/record heading |
| text_heading_medium | 20px | 700 | Page heading alternative |
| text_heading_large | 24px | 300 | Major headings |
| text_display_small | 28px | 300 | Dashboard hero |

## 4) Component Stylings
Buttons:
- Neutral: white bg, dark border, dark text — default
- Brand: `$color-brand` fill, white text
- Destructive: error fill, white text
- Border radius: 4px on all buttons
- Height: 32px (small), 40px (regular)

Pills (related record links):
- Rounded 999px badges with remove icon for tag/filter patterns

Tabs:
- Top-aligned, underline active indicator, neutral/brand
- Sub-tabs for record detail sub-sections

Record form (page layout):
- Two-column grid of editable fields
- Lightning record page: three-column layout (related lists right)
- Highlight panel at top: avatar + key fields + actions

Action menus:
- Global Action bar (Quick Actions), action popover, context menus
- Always truncate long labels with ellipsis

## 5) Layout Principles
Grid: 12-column with 1.5% gutter. Desktop max-width unconstrained (fluid CRM workspace).
Record page: 8/4 split (main + sidebar), configurable via App Builder.
Density modes: Comfy / Compact (controlled globally per org setting).
Spacing: 4px base, multiples: 4, 8, 12, 16, 24, 32, 48.

## 6) Depth & Elevation
| Token | Shadow |
|---|---|
| `shadow-small` | `0 2px 2px 0 rgba(0,0,0,0.10)` |
| `shadow-medium` | `0 2px 14px 0 rgba(0,0,0,0.16)` |
| `shadow-large` | `0 2px 20px 0 rgba(0,0,0,0.16)` |

Page header is flat sticky. Cards use small shadow. Modals use large shadow with overlay.

## 7) Do's and Don'ts
Do:
- Build around the record page paradigm: header fields → tabs → related lists.
- Use Lightning utility icon sprites — Salesforce apps always use the official icon library.
- Follow the three density modes (comfy/compact) rather than customising heights.

Don't:
- Do not override brand blue for interactive elements in Lightning context.
- Do not create non-tabbed record structures in CRM contexts.
- Do not use decorative illustration in relationship/record views.

## 8) Responsive Behavior
- Record pages: 3-column collapses to 1-column below 1024px.
- Navigation: collapsible left nav (App Launcher sidebar).
- Touch: Salesforce Mobile has its own dedicated component set; touch targets 44px.

## 9) Agent Prompt Guide
One-shot: "Use Salesforce Lightning Design System: Salesforce brand blue #0176D3, 4px corner radius, compact 12-column grid, Record page structure (highlight panel + tabs + related lists), Salesforce Sans or system-ui typeface, small card shadows, 32/40px button heights, Lightning utility icon vocabulary."

Negative: Avoid custom icon sets, avoid non-record-oriented page structures for CRM use cases, avoid heavy gradient fills.
