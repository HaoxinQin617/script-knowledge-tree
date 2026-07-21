# VMware Clarity Design System

**URL**: https://clarity.design/
**Archetype**: enterprise-data / admin
**Stack**: Angular (primary), React; CSS; Clarity Core (Web Components)

---

## 1. Visual Theme & Atmosphere
VMware Clarity is a mature enterprise design system purpose-built for cloud infrastructure management, virtualisation, and Kubernetes-era admin UIs. Clarity Blue anchors the system, with angular, structured component patterns reflecting the precision required in infrastructure tooling. Now maintained as Clarity Core (web components), it supports both Angular-heavy VMware products and newer React environments.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Clarity Blue | `#0079B8` | Primary interactive, links, CTAs |
| Blue Dark | `#004E8A` | Hover, active |
| Blue Light | `#E9F4F9` | Selected tint, info bg |
| Action Blue | `#007CBB` | Button primary |
| Dark Navy | `#004572` | Dark sidebar, section headers |
| Text | `#313131` | Primary text |
| Text Secondary | `#565656` | Labels, metadata |
| Disabled | `#9A9A9A` | Disabled states |
| Border | `#CCCCCC` | Default borders |
| Border Dark | `#9A9A9A` | Input borders, separator |
| Background | `#FAFAFA` | Page background |
| Background Alt | `#F4F4F4` | Section, alt row |
| White | `#FFFFFF` | Card, surface |
| Success | `#318700` | Success states |
| Warning | `#FFA500` | Warning states |
| Error | `#E62700` | Error, danger |
| Info | `#0079B8` | Info messages |
| Alert Yellow | `#F5B700` | Warning alert bg |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| H1 | Metropolis | 2.25rem | 300 |
| H2 | Metropolis | 1.75rem | 300 |
| H3 | Metropolis | 1.375rem | 300 |
| H4 | Metropolis | 1.125rem | 400 |
| H5 | Metropolis | 1rem | 400 |
| H6 | Metropolis | 0.875rem | 500 |
| Body | Metropolis | 0.875rem | 400 |
| Small | Metropolis | 0.75rem | 400 |
| Button | Metropolis | 0.875rem | 500 |
| Code | Courier New, monospace | 0.875rem | 400 |

**Metropolis**: VMware's custom typeface — geometric, clean, slightly condensed. Light weights (300) for large headings create an airy enterprise aesthetic. Fallback: Arial.

---

## 4. Component Styling

**Data Grid**
- Striped rows: `#FAFAFA` / `#FFFFFF`
- Sortable column headers with carets
- Row action buttons (Edit, Delete, Move) revealed on hover
- Pagination below the grid
- Column chooser in header toolbar

**Wizard**
- Multi-step form in a modal
- Left side-step navigator: numbered circles + labels
- Right content area adjusts per step
- Footer: Back / Next / Finish actions

**Alert**
- 4 types: info / success / warning / error
- Compact and standard sizes
- Closeable with × icon
- Stacks at top of page for global alerts

**Datagrid Signpost**
- Contextual popover with additional info
- Triggered by `?` icon inline in cell

---

## 5. Layout Principles
- **Nav**: Left sidebar (vertical nav, 220px) with header bar
- **Subnav**: Horizontal tabs below header for product areas
- **Content area**: padded 24px, full-width within container
- **Spacing**: 12px base with 6px micro (6, 12, 18, 24, 36, 48)
- **Wizard pattern**: Primary multi-step interaction pattern for complex forms

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat | `1px solid #CCCCCC` border | Tables, cards |
| Panel | `0 1px 3px rgba(0,0,0,0.15)` | Sidebar, content panels |
| Dropdown | `0 2px 8px rgba(0,0,0,0.2)` | Context menus |
| Modal | `0 4px 16px rgba(0,0,0,0.3)` | Wizards, dialogs |

---

## 7. Do's and Don'ts

**Do**
- Use Wizard component for 3+ step configuration workflows
- Use Data Grid with row actions and column chooser for entity lists
- Use Metropolis Light (300) for section headings — it's part of the Clarity aesthetic
- Support the Alert stack for page-level system messages
- Use icon + text for all primary navigation items

**Don't**
- Use Clarity Blue for warnings (it conflicts with info semantics)
- Create custom wizard flows with individual pages — use the Wizard component
- Use shadows heavier than the system tokens
- Mix Clarity with Material Design components — the paradigms conflict

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 544px | Sidebar overlays as drawer, hamburger |
| 544–768px | Icon-only compressed sidebar |
| 768–1024px | Compact sidebar (icons + labels) |
| ≥ 1024px | Full sidebar with labels |

Clarity is primarily desktop-admin. Mobile is supported but secondary.

---

## 9. Agent Prompt Guide

**When generating Clarity-style UI:**
> VMware enterprise cloud admin aesthetic. Clarity Blue `#0079B8` interactive. Dark Navy `#004572` sidebar. Metropolis Light for headings (300 weight). 0.875rem body density. Data Grid with striped rows + row hover actions. Wizard pattern for multi-step forms. Alert stack for system messages. Borders `#CCCCCC` as primary depth cue. Compact 12px spacing grid. Infrastructure management precision.

**Avoid**: Blue for warnings, custom wizard flows, heavy shadows, mobile-first layouts.
