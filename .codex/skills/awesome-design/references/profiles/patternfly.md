# PatternFly

**URL**: https://www.patternfly.org/
**Archetype**: enterprise-data / admin
**Stack**: React, HTML/CSS; used by Red Hat OpenShift, RHEL Web Console, Ansible, Quay

---

## 1. Visual Theme & Atmosphere
PatternFly is Red Hat's open enterprise design system — the backbone of OpenShift, RHEL web console, Ansible Automation Platform, and dozens of Red Hat products. It is purpose-built for data-heavy enterprise admin interfaces. The palette is functional: Red Hat Red as brand, utilitarian gray surfaces, and a system emphasising data density, progressive disclosure, and expert-user workflows. No decoration — every pixel earns its place.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Red Hat Red | `#EE0000` | Brand, destructive actions only |
| Red (darker) | `#C9190B` | Destructive button hover |
| Primary Blue | `#0066CC` | Interactive elements, CTAs |
| Blue Hover | `#004D99` | Button hover |
| Blue 50 | `#E7F1FA` | Selected row, info tint |
| Cyan | `#009596` | Informational, secondary |
| Green Success | `#3E8635` | Success status |
| Gold Warning | `#F0AB00` | Warning status |
| Red Danger | `#C9190B` | Error/danger status |
| Purple | `#6753AC` | Special callouts, badges |
| Chart Orange | `#EC7A08` | Chart color 2 |
| Chart Purple | `#7D1007` | Chart color 4 |
| Black | `#151515` | Primary text |
| Dark Gray | `#3C3F42` | Secondary text |
| Gray 600 | `#6A6E73` | Tertiary text |
| Gray 200 | `#D2D2D2` | Borders |
| Gray 100 | `#F0F0F0` | Alternate row, section bg |
| White | `#FFFFFF` | Page background |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| Display | Red Hat Display | 2.5rem | 700 |
| H1 | Red Hat Display | 2rem | 700 |
| H2 | Red Hat Display | 1.5rem | 500 |
| H3 | Red Hat Text | 1.25rem | 500 |
| Body (lg) | Red Hat Text | 1rem | 400 |
| Body (default) | Red Hat Text | 0.875rem | 400 |
| Small | Red Hat Text | 0.75rem | 400 |
| Code | Red Hat Mono | 0.875rem | 400 |
| Data label | Red Hat Mono | 0.75rem | 400 |

**Red Hat Display**: headings. **Red Hat Text**: body. **Red Hat Mono**: code, data labels, command lines.

---

## 4. Component Styling

**Data Table**
- Compact / default / comfortable row density options
- Sortable columns, bulk-select checkboxes
- Expandable rows for sub-detail
- Sticky header, horizontal scroll for wide tables
- Toolbar above: filter bar + bulk actions + pagination

**Navigation**
- Vertical sidebar: 200–300px
- Grouped items with expandable sub-nav
- Horizontal secondary nav (tabs) for sub-product areas
- Breadcrumb in main content area

**Master Detail**
- Split view: list left, detail right (OpenShift cluster management pattern)
- Drawer variant for temporary detail

**Status Icons**
- Green checkmark / Yellow warning triangle / Red X circle / Blue info circle
- Consistent iconography across all product families

---

## 5. Layout Principles
- **Page layout**: Page → PageHeader → PageSidebar → PageSection
- **Grid**: Bullseye/Grid layout components; 16px base gap
- **Spacing tokens**: `--pf-v5-global--spacer--xs` through `--pf-v5-global--spacer--4xl`
- **Content max**: 1280px for non-full-bleed admins; full-width for dashboards

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat | None | Main page, tables |
| Card | `0 0 8px rgba(3,3,3,0.08)` | panels, cards |
| Dropdown | `0 4px 12px rgba(3,3,3,0.15)` | Dropdowns, popovers |
| Drawer | `4px 0 8px rgba(0,0,0,0.12)` | Side drawers |
| Modal | `0 12px 32px rgba(0,0,0,0.25)` | Modals, wizards |

---

## 7. Do's and Don'ts

**Do**
- Use PatternFly layout primitives (Page, PageSection) for structural consistency
- Use compact density for data tables when rows = primary content
- Use status icon + colour redundancy always (never colour alone)
- Implement the master-detail pattern for list → detail workflows
- Use Red Hat Mono for all code, command, and data numeric values

**Don't**
- Use Red Hat Red `#EE0000` for normal interactive actions — it is destructive/brand only
- Create custom navigation patterns outside the sidebar/breadcrumb system
- Mix PatternFly with unrelated component libraries
- Use decorative imagery or gradients in admin interfaces

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 576px | Sidebar hidden, hamburger toggle |
| 576–768px | Collapsed sidebar, icon nav |
| 768–992px | Compact sidebar (icons + short labels) |
| ≥ 992px | Full sidebar (icons + labels) |

PatternFly is primarily a desktop-admin system. Responsive patterns exist but mobile is secondary.

---

## 9. Agent Prompt Guide

**When generating PatternFly-style UI:**
> Red Hat enterprise admin aesthetic. Blue `#0066CC` interactive, Red only destructive. Red Hat Display headings, Red Hat Text body, Red Hat Mono code/data. Compact data tables with toolbar + pagination. Vertical sidebar 200px. Status icons: green check / yellow triangle / red X / blue info. Gray `#F0F0F0` alt-row surfaces. PageSection layout. 0.875rem body density. CSS variable token system `--pf-v5-global--*`.

**Avoid**: Red for interactive actions, decorative imagery, custom nav patterns, mobile-first layout.
