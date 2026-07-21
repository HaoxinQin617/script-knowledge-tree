# Intuit Harmony

**URL**: https://harmony.intuit.com/
**Archetype**: enterprise-data / fintech-smb
**Stack**: React component library

---

## 1. Visual Theme & Atmosphere
Intuit Harmony supports products like QuickBooks, TurboTax, and Mailchimp-adjacent experiences. It focuses on financial clarity for small businesses and consumers, balancing trust, guidance, and actionability. The visual language is calm, clean, and conversion-friendly, with blue as a reliability anchor.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Intuit Blue | `#0077C5` | Primary brand, links, CTAs |
| Blue Dark | `#005E9D` | Hover/active |
| Blue Light | `#E6F2FA` | Selected/info tint |
| Intuit Green | `#2CA01C` | Success, positive financial state |
| Warning Amber | `#D97706` | Warning |
| Error Red | `#D93025` | Error/destructive |
| Ink | `#1F2937` | Primary text |
| Slate | `#4B5563` | Secondary text |
| Muted | `#9CA3AF` | Placeholder/disabled |
| Border | `#D1D5DB` | Input/divider |
| Surface | `#FFFFFF` | Cards/forms |
| Background | `#F8FAFC` | App background |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| H1 | Avenir Next | 2rem | 700 |
| H2 | Avenir Next | 1.5rem | 700 |
| H3 | Avenir Next | 1.25rem | 600 |
| H4 | Avenir Next | 1rem | 600 |
| Body | Avenir Next | 0.9375rem | 400 |
| Compact Body | Avenir Next | 0.875rem | 400 |
| Small | Avenir Next | 0.75rem | 400 |
| Label | Avenir Next | 0.8125rem | 500 |
| Numeric | Avenir Next | 0.875rem | 600 |

---

## 4. Component Styling

**Financial Summary Cards**
- Revenue, expenses, cash flow, tax estimates
- Trend indicators and period comparisons

**Guided Workflows**
- Stepper-based onboarding and filing flows
- Contextual educational tips and validation

**Forms**
- Label + helper text + inline validation
- Strong input affordance for confidence

**Transaction Tables**
- Dense but readable rows with category tags
- Bulk actions and reconciliation states

---

## 5. Layout Principles
- **Guided UX**: task-focused steps over open-ended complexity
- **Spacing**: 8px base system
- **Pattern**: overview -> drill-down -> resolve action
- **Data density**: moderate for SMB operators
- **Navigation**: clear side/top hierarchy with persistent task context

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat | `1px solid #D1D5DB` | Inputs/tables |
| Card | `0 2px 8px rgba(31,41,55,0.08)` | Summary cards |
| Popover | `0 4px 16px rgba(31,41,55,0.14)` | Help menus |
| Modal | `0 8px 24px rgba(31,41,55,0.2)` | Confirmation dialogs |

---

## 7. Do's and Don'ts

**Do**
- Keep financial data clear and confidence-building
- Use guided flows for complex tasks (tax, payroll, setup)
- Show impact context before destructive actions
- Use explicit labels for accounting states

**Don't**
- Overload users with dense accounting jargon without guidance
- Hide key tax/payment deadlines in secondary views
- Use ambiguous trend semantics in financial cards
- Over-decorate core accounting tables

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 768px | Stacked cards and guided flows |
| 768–1024px | Two-column summaries and forms |
| ≥ 1024px | Full finance workspace layout |

---

## 9. Agent Prompt Guide

**When generating Intuit Harmony-style UI:**
> Fintech SMB interface with clarity and trust. Intuit Blue `#0077C5` for primary actions, Avenir Next typography, guided workflows for complex tasks, and clear financial summary cards with trend context. Keep forms and transaction tables readable and confidence-oriented.

**Avoid**: jargon-heavy unexplained UI, hidden deadlines, decorative-heavy accounting screens.
