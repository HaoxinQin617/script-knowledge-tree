# CMS Design System (Centers for Medicare & Medicaid Services)

**URL**: https://design.cms.gov/
**Archetype**: civic-accessible / healthcare-government
**Stack**: USWDS-based component system

---

## 1. Visual Theme & Atmosphere
The CMS Design System supports federal healthcare services for Medicare and Medicaid beneficiaries, providers, and administrators. It emphasizes clarity, accessibility, and trust for often vulnerable audiences. The visual language follows USWDS foundations with CMS branding and healthcare-specific communication patterns.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| CMS Blue | `#0071BC` | Primary brand, links, CTAs |
| Blue Dark | `#005A95` | Hover/active |
| Blue Light | `#E7F3FA` | Selected/info tint |
| Healthcare Green | `#2E8540` | Success/eligible states |
| Warning Gold | `#F0AB00` | Warning |
| Error Red | `#D83933` | Error/urgent |
| Ink | `#1B1B1B` | Primary text |
| Slate | `#4A4A4A` | Secondary text |
| Muted | `#767676` | Disabled text |
| Border | `#C9C9C9` | Inputs/dividers |
| Surface | `#FFFFFF` | Forms/cards |
| Background | `#F0F4F8` | App background |
| Focus Yellow | `#FFBE2E` | Focus outline |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| H1 | Public Sans | 2rem | 700 |
| H2 | Public Sans | 1.5rem | 700 |
| H3 | Public Sans | 1.25rem | 600 |
| H4 | Public Sans | 1rem | 600 |
| Body | Public Sans | 1rem | 400 |
| Compact Body | Public Sans | 0.875rem | 400 |
| Small | Public Sans | 0.75rem | 400 |
| Label | Public Sans | 0.875rem | 600 |

Plain-language readability and robust line-height are required for public healthcare communication.

---

## 4. Component Styling

**Eligibility/Status Panels**
- Clear status headline + explanatory text + next action
- Color-coded but always paired with explicit text

**Form Journeys**
- One-question-per-page for complex service tasks
- Inline validation and clear recovery guidance

**Alert Banners**
- Federal-style alert components with severity icons
- Persist critical healthcare notices

**Summary Lists**
- Key-value summaries for applications and benefits
- Print-friendly layout support

---

## 5. Layout Principles
- **USWDS grid** with CMS content templates
- **Spacing**: 8px base using federal scale tokens
- **Flow**: orient -> complete task -> confirm status
- **Content width**: constrained for readability in long forms
- **Navigation**: straightforward hierarchy with breadcrumbs

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat | Border-led separation | Most content |
| Card | `0 2px 8px rgba(27,27,27,0.08)` | Info panels |
| Popover | `0 4px 16px rgba(27,27,27,0.14)` | Menus/help |
| Modal | `0 8px 24px rgba(27,27,27,0.2)` | Confirmation dialogs |

---

## 7. Do's and Don'ts

**Do**
- Use plain language for healthcare and benefits information
- Preserve strong keyboard/focus visibility at all times
- Pair every status color with explicit text labels
- Provide clear next steps after every form submission

**Don't**
- Hide eligibility-impacting details in collapsible-only sections
- Use jargon-heavy medical or policy language without explanation
- Remove federal accessibility defaults for visual preference
- Use decorative content that competes with service tasks

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 640px | Single-column service flows |
| 640–1024px | Two-column informational layouts |
| ≥ 1024px | Full content + contextual side guidance |

---

## 9. Agent Prompt Guide

**When generating CMS-style UI:**
> Federal healthcare service UI with accessibility-first clarity. CMS Blue `#0071BC` primary actions, Public Sans typography, strong focus visibility, and plain-language task flows. Use USWDS-compatible patterns, explicit eligibility/status messaging, and clear next-step guidance.

**Avoid**: jargon-heavy copy, hidden critical eligibility details, color-only status communication.
