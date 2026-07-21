# Workday Canvas Design System

**URL**: https://canvas.workday.com/
**Archetype**: enterprise-data / HR-finance
**Stack**: React; SCSS; enterprise cloud apps

---

## 1. Visual Theme & Atmosphere
Workday Canvas is the design system behind Workday's HR, finance, and planning applications. It balances enterprise density with human-centric clarity: payroll tables, org charts, approvals, and finance dashboards must be understandable by non-technical business users. Workday Blue and Orange create a recognisable visual identity that is optimistic yet trustworthy.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Workday Blue | `#0875E1` | Primary interactive, links |
| Blue Dark | `#005CB9` | Hover, active |
| Blue Light | `#E6F2FF` | Info tint, selected row |
| Workday Orange | `#FF6D2D` | Brand accent, highlights |
| Orange Dark | `#D95A22` | Hover accent |
| Orange Light | `#FFEDE5` | Accent tint |
| Success Green | `#2E8540` | Success states |
| Warning Amber | `#F5A623` | Warning |
| Error Red | `#D0021B` | Error |
| Primary Text | `#1F2937` | Body and headings |
| Secondary Text | `#4B5563` | Labels, metadata |
| Muted Text | `#9CA3AF` | Disabled, placeholders |
| Border | `#D1D5DB` | Inputs, separators |
| Surface Gray | `#F5F7FA` | Page background |
| White | `#FFFFFF` | Cards, table surfaces |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| H1 | Roboto | 2rem | 500 |
| H2 | Roboto | 1.5rem | 500 |
| H3 | Roboto | 1.25rem | 500 |
| H4 | Roboto | 1rem | 500 |
| Body | Roboto | 0.875rem | 400 |
| Body (lg) | Roboto | 1rem | 400 |
| Small | Roboto | 0.75rem | 400 |
| Label | Roboto | 0.8125rem | 500 |
| Numeric | Roboto | 0.875rem | 500 |

Roboto provides high legibility and broad language support in enterprise contexts.

---

## 4. Component Styling

**Data Table**
- Header row: gray background `#F5F7FA`
- Row hover: light blue `#E6F2FF`
- Sticky first column for employee/ledger names
- Right-aligned numeric columns with tabular figures

**Forms**
- Label above input, optional helper text below
- Validation states: border colour + inline text + icon
- Multi-step forms for employee onboarding and finance setup

**Cards**
- 8px radius, subtle border
- KPI cards include title, value, delta indicator
- Orange accent bars for key metrics

**Navigation**
- Left sidebar with section groups (People, Payroll, Expenses, Reports)
- Top search bar with global command/search capability

---

## 5. Layout Principles
- **Grid**: 12-column responsive layout
- **Spacing**: 8px base (8, 16, 24, 32, 40, 48)
- **Density**: Balanced compactness; 36px row height for standard tables
- **Dashboard**: Modular card grid with configurable widgets
- **Forms**: 2-column on desktop, single column mobile

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat | `1px solid #D1D5DB` | Inputs, table cells |
| Card | `0 2px 8px rgba(31,41,55,0.08)` | KPI cards |
| Dropdown | `0 4px 16px rgba(31,41,55,0.14)` | Menus |
| Modal | `0 8px 24px rgba(31,41,55,0.2)` | Dialogs |

---

## 7. Do's and Don'ts

**Do**
- Prioritise clarity for non-technical users (HR/finance personas)
- Use blue for primary actions and orange for emphasis accents
- Right-align all numeric values in finance and payroll tables
- Support keyboard navigation for large tabular workflows
- Provide clear empty states and guidance text

**Don't**
- Overuse orange as a primary CTA color — blue should lead interactions
- Hide key metadata in hover-only controls
- Use dense developer-style UIs for business workflows
- Use unclear icons without labels in critical flows

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 768px | Single-column layout, stacked filters |
| 768–1024px | Two-column cards, collapsible sidebar |
| ≥ 1024px | Full sidebar + dashboard grid |
| ≥ 1440px | Expanded multi-widget dashboards |

---

## 9. Agent Prompt Guide

**When generating Workday Canvas-style UI:**
> Enterprise HR/finance SaaS aesthetic. Workday Blue `#0875E1` primary actions. Workday Orange `#FF6D2D` accents only. Roboto typography with 0.875rem default body. White cards on `#F5F7FA` background. 8px radius cards. Data tables with sticky name column and right-aligned numerics. 8px spacing system. Left enterprise sidebar + top global search.

**Avoid**: orange-first CTAs, unlabeled icon-only controls in critical workflows, overly developer-centric density.
