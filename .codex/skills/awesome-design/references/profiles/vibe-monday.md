# Vibe Design System (monday.com)

**URL**: https://style.monday.com/
**Archetype**: enterprise-data / work OS
**Stack**: React; CSS variables; Storybook

---

## 1. Visual Theme & Atmosphere
monday.com's Vibe is designed for the "Work OS" — a flexible platform accommodating project management, CRM, software development, and countless custom workflows. The aesthetic is energetic and colourful: a signature trio of Iris purple, Lipstick pink, and Egg Yolk yellow creates an immediately recognisable palette. Dark purple sidebar. The system must accommodate extreme user customisation (custom column types, board views, colour tags) while maintaining coherent visual identity.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Iris | `#6161FF` | Primary brand, CTAs, interactive |
| Iris Dark | `#4C3ECC` | Hover, active |
| Iris Light | `#EEEBFF` | Selected, tint bg |
| Lipstick | `#FF158A` | Accent, new items, notifications |
| Egg Yolk | `#FFCB00` | Another brand accent, alerts, starred |
| Dark Purple | `#2B2C5E` | Sidebar, dark surfaces |
| Success Green | `#00CA72` | Completed, done |
| Going Dark | `#007038` | Success hover |
| Negative Red | `#E2445C` | Errors, blockers, stuck |
| Working Orange | `#FDAB3D` | In progress, warnings |
| Dark | `#323338` | Primary text |
| Dark 80 | `#676879` | Secondary text |
| Dark 60 | `#9699A6` | Tertiary text |
| Dark 40 | `#C5C7D4` | Borders, disabled |
| Dark 20 | `#DCE0E8` | Light borders |
| Light Gray | `#F5F6F8` | Page background |
| White | `#FFFFFF` | Board surface |

**Status colour system** (user-customisable): 20+ named status colors — Done (green), Working on it (orange), Stuck (red), Blank (gray), etc.

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| Display | Poppins | 2.5rem | 700 |
| H1 | Poppins | 2rem | 700 |
| H2 | Poppins | 1.5rem | 700 |
| H3 | Poppins | 1.25rem | 600 |
| H4 | Poppins | 1rem | 600 |
| Body | Poppins | 0.875rem | 400 |
| Small | Poppins | 0.75rem | 400 |
| Label / cell | Poppins | 0.8125rem | 400 |
| Number | Poppins | 0.875rem | 600 |

**Poppins** — geometric sans with excellent readability at small sizes. The rounded letterforms contribute to the energetic, friendly feel.

---

## 4. Component Styling

**Board / Spreadsheet Grid**
- Sticky first column (item name), variable-width columns
- Row height: 36px default
- Status columns: full-cell colour fill (Lipstick, Green, Orange, Red, etc.)
- Group headers: full-width colored strip with group name

**Pulse (Row Item)**
- Item name cell: link behavior, opens item detail panel
- Status badge (fill colour): spans full cell height
- Person column: circular avatar 24px

**Item Detail Panel**
- Slide in from right, 440px wide
- Tab bar: Updates / Info / Files
- Activity feed with rich text updates

**Command K / Search**
- Full-overlay spotlight-style search
- Dark overlay, white searchbox center
- Recent items, commands, filters

---

## 5. Layout Principles
- **Navigation**: Dark Purple `#2B2C5E` left sidebar (220px)
- **Top bar**: White / light, current board name + views switcher
- **Board area**: Full-width, horizontal scroll for wide boards
- **Spacing**: 8px base (4, 8, 12, 16, 20, 24, 32, 48)
- **Max-width**: None — boards are full-bleed

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat | 1px `#DCE0E8` border | Table cells, inputs |
| Card | `0 2px 8px rgba(50,51,56,0.1)` | Panels, cards |
| Dropdown | `0 4px 16px rgba(50,51,56,0.18)` | Menus |
| Side Panel | `4px 0 16px rgba(50,51,56,0.15)` | Item detail panel |
| Modal | `0 8px 32px rgba(50,51,56,0.25)` | Create item modal |

---

## 7. Do's and Don'ts

**Do**
- Use color-filled status cells as the primary status indicator
- Support the full 20+ status colour system — users rely on it
- Open item detail in a side panel, not a modal — it's the monday.com way
- Use Iris `#6161FF` for primary CTAs and interactive focus
- Show board views (Board / Timeline / Calendar / Chart) in tab bar

**Don't**
- Use text-only status — the colour-fill cell is essential
- Use Lipstick pink for errors — it's an accent, not a semantic error colour
- Override user-configured status colours with system defaults
- Make the board grid scrollable vertically without sticky group headers

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 768px | Sidebar hidden, hamburger, mobile-optimised board |
| 768–1024px | Icon sidebar (collapsed) |
| ≥ 1024px | Full sidebar + board |
| ≥ 1440px | Multi-panel layouts, side panel + board simultaneously |

---

## 9. Agent Prompt Guide

**When generating Vibe/monday.com-style UI:**
> Work OS platform aesthetic. Iris `#6161FF` CTAs. Dark Purple `#2B2C5E` sidebar. Poppins typeface. Status cells: full-colour fill (Done green, Working orange, Stuck red). Board grid: sticky first column, compact 36px rows. Group headers: coloured strips. Light gray `#F5F6F8` bg. White board surface. Item detail → right panel 440px. Energetic three-accent palette (Iris + Lipstick + Egg Yolk).

**Avoid**: Text-only status, modal for item detail (use panel), ignoring status colour system.
