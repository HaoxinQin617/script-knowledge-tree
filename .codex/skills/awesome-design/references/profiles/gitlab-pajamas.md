# GitLab Pajamas Design System

**URL**: https://design.gitlab.com/
**Archetype**: developer-minimal
**Stack**: Vue 3, GitLab UI component library, Pajamas CSS

---

## 1. Visual Theme & Atmosphere
Pajamas is GitLab's design system — the visual language of the complete DevSecOps platform. The atmosphere is professional, open-source-adjacent, and developer-first without being austere. Orange brand energy lifts an otherwise neutral-gray palette. The system handles enormously complex surfaces: code review diffs, CI/CD pipeline graphs, merge request threads, and security dashboards — all demanding strong information hierarchy and density control.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Orange 500 (brand) | `#FC6D26` | Primary brand, key CTAs |
| Orange 600 | `#E24329` | Hover state |
| Blue 500 | `#1F75CB` | Secondary interactive, links |
| Purple 600 | `#6B4FBB` | Premium / GitLab gold features |
| Green 500 | `#108548` | Success, merged state |
| Teal 500 | `#1F7A74` | Informational |
| Red 500 | `#DD2B0E` | Error, closed/failed states |
| Orange alert | `#FFC17E` | Warning bg |
| Gray 900 | `#1F1E24` | Dark surface/sidebar |
| Gray 700 | `#525252` | Body text |
| Gray 400 | `#868686` | Muted/secondary text |
| Gray 100 | `#ECECEC` | Secondary background |
| Gray 50 | `#F4F4F4` | Tertiary background |
| White | `#FFFFFF` | Page surface |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| H1 | GitLab Sans | 1.75rem | 600 |
| H2 | GitLab Sans | 1.375rem | 600 |
| H3 | GitLab Sans | 1.125rem | 600 |
| Body | GitLab Sans | 0.875rem | 400 |
| Small | GitLab Sans | 0.75rem | 400 |
| Code | GitLab Mono | 0.875rem | 400 |

GitLab Sans and GitLab Mono are open source (available via GitLab). Fallback: `'Helvetica Neue', Helvetica, Arial, sans-serif` / `'Menlo', 'Monaco', 'Courier New', monospace`. Base is 14px (0.875rem) — developer tool density. Code is monospace across all code-display contexts.

---

## 4. Component Styling

**Buttons**
- Primary: `#FC6D26` fill, white text, 4px radius
- Confirm: Blue `#1F75CB` fill (for positive-outcome confirmations)
- Secondary: white fill, `#BFBFBF` border
- Danger: Red `#DD2B0E` fill
- Sizes: sm / md / lg

**Pipeline Graph**
- Horizontal job pipeline visualization
- Each stage = column; each job = card
- Colors: pending gray, running blue, success green, failed red, canceled neutral
- Core layout pattern — not provided by most other systems

**Merge Request diff**
- Two-pane (side-by-side) or unified diff view
- Red background `rgba(221,43,14,0.1)` for removed lines
- Green background `rgba(16,133,72,0.1)` for added lines
- Line numbers left gutter; Comment add icon on hover

**Labels / Badges**
- Colored filled label pills; custom background colors set by users
- Priority labels with icon
- Status badges: Open (green), Closed (red/gray), Merged (purple)

---

## 5. Layout Principles
- **Grid**: Flexible; use responsive utility classes
- **Spacing**: 4px base; standard scale: 4/8/12/16/20/24/32px
- **Sidebar nav**: Dark `#1F1E24` left sidebar, collapsible, 220px
- **Content**: Full-width minus sidebar; responsive
- **Breakpoints**: xs(0) / sm(576px) / md(768px) / lg(992px) / xl(1200px)

---

## 6. Depth & Elevation

| Level | Shadow | Usage |
|---|---|---|
| 0 | none | Flat primary surfaces |
| 1 | `0 1px 4px rgba(0,0,0,0.08)` | Cards, panels |
| 2 | `0 2px 8px rgba(0,0,0,0.12)` | Dropdowns |
| 3 | `0 8px 16px rgba(0,0,0,0.15)` | Modals |

Dark sidebar: no shadow — borders separate sidebar from content.

---

## 7. Do's and Don'ts

**Do**
- Use orange `#FC6D26` for primary brand actions only (not secondary)
- Use the dark sidebar (`#1F1E24`) left navigation pattern
- Use monospace fonts for all code, file paths, commit SHAs
- Show pipeline stage columns in horizontal progression
- Use green/red/gray MR status colors exactly — they match platform conventions

**Don't**
- Use orange for error states (red only)
- Apply purple `#6B4FBB` to standard features (premium/Gold tier exclusive)
- Use rounded pill buttons (4px is standard)
- Build custom diff viewers — follow the line-level bg color convention
- Mix light/dark surfaces within a panel

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 576px | Single column; sidebar collapses to hamburger |
| 576–992px | Sidebar icon-only mode; condensed layout |
| ≥ 992px | Full sidebar + content |

- Code diff always scrollable horizontally
- Pipeline graph: horizontal scroll on mobile
- Merge request: unified diff on mobile (not side-by-side)

---

## 9. Agent Prompt Guide

**When generating GitLab Pajamas-style UI:**
> Apply GitLab's DevOps developer-platform aesthetic. White content surface, dark sidebar `#1F1E24`. Brand orange `#FC6D26` for primary CTAs. Blue `#1F75CB` for secondary interactive. GitLab Sans 14px body (or Helvetica Neue), monospace for code. 4px radius. Pipeline: horizontal stage columns, job cards with green/red/blue/gray state colors. MR diff: red/green line backgrounds. Status: Open=green, Closed=red, Merged=purple. Left dark sidebar navigation. No decorative gradients.

**Avoid**: Orange for errors, purple for non-premium, pill buttons, custom diff patterns, light sidebar.
