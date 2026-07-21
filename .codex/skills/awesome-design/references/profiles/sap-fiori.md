# SAP Fiori

**URL**: https://experience.sap.com/fiori-design-web/
**Archetype**: enterprise-data / ERP
**Stack**: UI5 Web Components, SAPUI5, SAP Fiori for Web; SAP Theming Base Content

---

## 1. Visual Theme & Atmosphere
SAP Fiori is the design system for SAP's enterprise suite — S/4HANA, SuccessFactors, Ariba, and 10,000+ enterprise applications. It prioritises expert-user efficiency at density, extreme accessibility for global compliance, and role-based workflows. The Morning Horizon theme (2022+) brightens the formerly navy palette to a cleaner, lighter system. The atmosphere is serious, functional, and globally oriented: everything must work for a procurement manager in Munich, Shanghai, and São Paulo.

---

## 2. Color Palette & Roles

| Token | Hex (Morning Horizon) | Role |
|---|---|---|
| Shell Blue | `#1873B4` | Global navigation bar, brand |
| Fiori Blue | `#0070F2` | Primary interactive, links |
| Blue Dark | `#0040B0` | Hover, active |
| Blue Tint | `#EBF5FE` | Selected row, info bg |
| Accent Gold | `#F0AB00` | SAP product accents, warnings |
| Success | `#188918` | Positive, confirmations |
| Warning | `#E9730C` | Caution, threshold alerts |
| Error | `#BB0000` | Critical errors |
| Information | `#0070F2` | Info messages |
| Black | `#000000` | Primary text |
| Shell Text | `#FFFFFF` | Text on Shell Blue |
| Title | `#32363A` | Heading text |
| Body | `#515456` | Secondary text |
| Label | `#6A6D70` | Form labels, metadata |
| Line | `#BFBFBF` | Cell borders, separators |
| Background | `#F2F2F2` | Shell/section background |
| Surface | `#FFFFFF` | Cards, forms, content |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| H1 (Page Title) | 72 SAP (Light) | 1.75rem | 300 |
| H2 (Section) | 72 SAP | 1.25rem | 400 |
| H3 | 72 SAP | 1rem | 700 |
| Form Label | 72 SAP | 0.875rem | 400 |
| Body | 72 SAP | 0.875rem | 400 |
| Small | 72 SAP | 0.75rem | 400 |
| Data/Numeric | 72 SAP | 0.875rem | 700 |

**72 SAP (formerly SAP 72)**: SAP's commissioned typeface with 72 language/script coverage including Arabic, Hebrew, CJK. Supports RTL layouts natively. Fallback: Arial.

---

## 4. Component Styling

**Flexible Column Layout**
- 1/2/3 column layouts for list-detail and master-detail-detail
- Columns can be full-screen, 50/50, 33/33/33, sidebar patterns
- Used for Object Page, Worklist, Analytical List Page

**Object Page**
- Primary SAP content pattern: header (object details) + body sections
- Header: image, title, KPI blocks, action buttons
- Sections: tabs or scrollable anchor sections

**Smart Table**
- Virtual scrolling, column resize, sort, group, personalize
- Column chooser dialog
- Row-level actions (Edit, Delete, Navigate)

**Fiori Notifications**
- Top-right popover with grouped messages
- Priority: High / Medium / Low with icons

---

## 5. Layout Principles
- **Cozy / Compact / Condensed density**: Table rows 44px / 32px / 24px
- **Responsive**: Full-page Flexible Column at desktop, stacked on mobile
- **Spacing tokens**: 0.25rem, 0.5rem, 1rem, 1.5rem, 2rem, 3rem
- **Forms**: Two-column label-field layout in dialogs; single column on mobile
- **Global Navigation**: Shell Bar (fixed) + side navigation tree

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat | None | Tables, forms |
| Card (Level 1) | `0 0 0.125rem rgba(0,0,0,0.16)` | Tiles, cards |
| Card (Level 2) | `0 0.625rem 1.875rem rgba(0,0,0,0.15)` | Overlaid panels |
| Popover | `0 1rem 2rem rgba(0,0,0,0.2)` | Dropdowns, date pickers |
| Dialog | `0 1.5rem 3rem rgba(0,0,0,0.25)` | Modal dialogs |
| Shell | None (background color) | Global nav bar |

---

## 7. Do's and Don'ts

**Do**
- Use the Flexible Column Layout for list-detail patterns
- Use Object Page for any entity detail view (customer, order, etc.)
- Handle RTL layout — SAP products are global; Arabic/Hebrew must work
- Allow density adjustment — support Cozy and Compact row height
- Use 72 SAP font — it's designed for all SAP-supported languages

**Don't**
- Break the Shell Bar height (44px) — global navigation consistency is mandated
- Introduce custom colour outside the theme system — SAP theming infrastructure depends on CSS variables
- Use modal dialogs for complex multi-step workflows — use dedicated pages
- Disable column personalisation on Smart Tables — users expect it

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 600px (Phone) | Single column, no side nav, stacked Object Page sections |
| 600–1024px (Tablet) | Two-column max, collapsible side nav |
| ≥ 1024px (Desktop) | Full Flexible Column Layout, full side nav tree |
| ≥ 1280px (Large) | Three-column Flexible Column, wide forms |

---

## 9. Agent Prompt Guide

**When generating SAP Fiori-style UI:**
> ERP enterprise admin. Shell Bar blue `#1873B4` fixed header. Fiori Blue `#0070F2` interactive. 72 SAP light for page titles (1.75rem/300), regular for body (0.875rem). Flexible Column Layout for list→detail. Object Page for entity views. Compact density: 32px table rows. Label/value form pairs. RTL support mandatory. Cozy/Compact density toggle. CSS variable token system.

**Avoid**: Custom colours outside theme system, modal for complex workflows, fixed table columns without personalisation.
