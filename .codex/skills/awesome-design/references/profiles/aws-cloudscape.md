# AWS Cloudscape Design System

**URL**: https://cloudscape.design/
**Archetype**: enterprise-data
**Stack**: React, open-sourced from AWS Console

---

## 1. Visual Theme & Atmosphere
Cloudscape is built for cloud infrastructure management — the visual language of AWS Console. The atmosphere is highly structured, information-dense, and task-oriented. White surfaces, blue-gray neutrals, and a focused blue primary create a calm, trustworthy backdrop for complex multi-service workflows. Every component is optimised for power users managing infrastructure at scale.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| AWS Blue (interactive) | `#0972D3` | Primary action, links |
| AWS Blue (hover) | `#033160` | Button hover |
| Background | `#FFFFFF` | Page surface |
| Background Secondary | `#F4F4F4` | Table rows alt, sidebars |
| Border Default | `#C6C6C6` | Input, card borders |
| Text Primary | `#000000` | Body text |
| Text Secondary | `#5F6B7A` | Labels, captions |
| Text Disabled | `#9BA7B6` | Disabled state |
| Success | `#037F0C` | Status badge green |
| Error | `#D91515` | Error state |
| Warning | `#7D3F00` | Warning text |
| Warning bg | `#FFF7E6` | Warning banner background |
| Info | `#0972D3` | Info alerts |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| Page Title | Amazon Ember / System | 28px | 700 |
| Section Header | Amazon Ember / System | 20px | 700 |
| Subsection | Amazon Ember / System | 16px | 700 |
| Body | Amazon Ember / System | 14px | 400 |
| Small / label | Amazon Ember / System | 12px | 400 |
| Code | Courier Prime / monospace | 14px | 400 |

System stack: `'Amazon Ember', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`. Base is 14px — Cloudscape inherits the dense console baseline.

---

## 4. Component Styling

**Buttons**
- Primary: `#0972D3` fill, white text, 4px radius, `0 2px 0 0 #033160` bottom border (raised look)
- Normal: white fill, `#AAB7B8` border
- Link: no border/fill, blue text
- Danger: primary color switches to red for destructive actions

**Table**
- Fixed header; resizable columns; sortable
- Striped rows optional (alternating `#F4F4F4`)
- Inline filtering + search
- Pagination below
- Supports expandable rows and nested resource metadata

**Breadcrumb**
- Always used in console-style navigation
- `>` separator, current page not linked

**Flashbar / Alert**
- Full-width notification bar at page top
- Icons: ✓ (success), ✗ (error), ⚠ (warning), ℹ (info) — fixed colors per type

**Split Panel**
- Collapsible right-side detail panel — core to Cloudscape's resource-detail pattern

---

## 5. Layout Principles
- **Shell**: App layout = top navigation + side navigation + content + optional tools panel
- **Grid**: Flexible columns; uses CSS Grid internally
- **Spacing**: 4px base, standard steps: 4/8/12/16/20/24/32px
- **Content width**: Standard content max 1400px; narrative pages max 67ch
- **Side navigation**: 240px; collapsible

---

## 6. Depth & Elevation

| Level | Shadow | Usage |
|---|---|---|
| Card | `0 1px 1px rgba(0,0,0,0.1)` | Container surfaces |
| Popover | `0 4px 20px rgba(0,0,0,0.15)` | Dropdowns, tooltips |
| Modal | `0 25px 50px rgba(0,0,0,0.25)` | Dialog overlay |

No material/blur effects. Flat-first with minimal box-shadow.

---

## 7. Do's and Don'ts

**Do**
- Use the split-panel pattern for resource detail views
- Use flashbar for system-level notifications (not toasts)
- Include breadcrumbs — essential for hierarchy in deep console navigation
- Use status badges with semantic color, not custom colors
- Apply the `awsui-context-content-header` for all page titles

**Don't**
- Use gradients or visual flourishes
- Create custom navigation — use the provided app layout
- Use font sizes below 12px
- Use color outside the semantic token set for new states
- Show more than one primary action per page region

---

## 8. Responsive Behavior

Cloudscape is desktop-first; cloud console users are primarily desktop/laptop.

| Breakpoint | Behavior |
|---|---|
| < 688px | Side nav collapses; content full-width |
| 688–1080px | Condensed layout, some panels hidden |
| ≥ 1080px | Full multi-panel app shell |

Touch support is provided but secondary — mobile is not the primary surface.

---

## 9. Agent Prompt Guide

**When generating AWS Cloudscape-style UI:**
> Apply AWS Console's enterprise-infrastructure aesthetic. White page surface, `#F4F4F4` secondary backgrounds. Primary interactive blue `#0972D3`. Amazon Ember (or system sans) at 14px base. 4px radius on all interactive elements. App shell: top nav + 240px side nav + main content + optional right split-panel. Tables with fixed headers, sorting, inline search, pagination. Flashbar for notifications. Breadcrumbs on all interior pages. Status badges: green/red/gray/orange. No gradients, no decorative shadows.

**Avoid**: Large decorative type, gradients, custom navigation, toasts (use flashbar instead), font below 12px.
