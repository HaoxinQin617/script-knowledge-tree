# Nordhealth Design System

**URL**: https://nordhealth.design/
**Archetype**: healthcare-saas / enterprise-data
**Stack**: Web Components + React wrappers

---

## 1. Visual Theme & Atmosphere
Nordhealth Design System supports healthcare software products where clarity and trust are mandatory. The aesthetic is clean Nordic minimalism: cool blues, generous white space, and restrained component styling. Interfaces are optimized for clinical workflows such as patient records, appointment management, and treatment timelines.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Nord Blue | `#006EFF` | Primary brand, CTAs |
| Blue Dark | `#0057CC` | Hover/active |
| Blue Light | `#EAF3FF` | Selected/info tint |
| Teal | `#00A7A0` | Secondary accent |
| Success Green | `#1F9D55` | Positive/confirmed |
| Warning Amber | `#D97706` | Warning |
| Error Red | `#DC2626` | Error/critical |
| Ink | `#1F2937` | Primary text |
| Slate | `#4B5563` | Secondary text |
| Muted | `#9CA3AF` | Disabled/placeholder |
| Border | `#D1D5DB` | Inputs/dividers |
| Surface | `#FFFFFF` | Cards/surfaces |
| Background | `#F8FAFC` | App background |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| H1 | Inter | 2rem | 700 |
| H2 | Inter | 1.5rem | 700 |
| H3 | Inter | 1.25rem | 600 |
| H4 | Inter | 1rem | 600 |
| Body | Inter | 0.9375rem | 400 |
| Compact Body | Inter | 0.875rem | 400 |
| Small | Inter | 0.75rem | 400 |
| Label | Inter | 0.8125rem | 500 |
| Numeric | Inter | 0.875rem | 600 |

---

## 4. Component Styling

**Patient List Table**
- Compact rows with avatar + name + visit metadata
- High-contrast status chips (Booked, Checked-in, In Treatment)
- Sticky header with filters

**Appointment Timeline**
- Horizontal time slots with color-coded appointments
- Drag-and-drop slot adjustments
- Conflict highlight in red

**Clinical Card**
- 8px radius, clean border
- Title + key metrics + inline action links

**Form Controls**
- Labels above fields, helper text below
- Error messages inline with icon + text

---

## 5. Layout Principles
- **Shell**: Left navigation + top context bar + workspace
- **Spacing**: 8px base scale
- **Density**: Medium-compact for clinic workflows
- **Content**: Fluid layout with safe max widths in forms
- **Sections**: Card-based segmentation for patient context

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat | `1px solid #D1D5DB` | Forms/tables |
| Card | `0 2px 8px rgba(31,41,55,0.08)` | Patient cards |
| Popover | `0 4px 16px rgba(31,41,55,0.14)` | Schedulers/menus |
| Modal | `0 8px 24px rgba(31,41,55,0.2)` | Dialogs |

---

## 7. Do's and Don'ts

**Do**
- Keep interfaces clinically legible and distraction-free
- Use blue as the stable primary action color
- Surface critical patient safety information at top priority
- Support keyboard-heavy workflows in schedule and records screens
- Use explicit text labels with status colors

**Don't**
- Use decorative visual effects that reduce clinical readability
- Encode medical urgency with color alone
- Hide critical patient context in collapsed sections by default
- Overload screens with non-essential metrics

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 768px | Simplified patient cards, collapsed nav |
| 768–1024px | Two-column modules |
| ≥ 1024px | Full clinic dashboard and timeline layout |

---

## 9. Agent Prompt Guide

**When generating Nordhealth-style UI:**
> Healthcare SaaS interface with Nordic minimalism. Nord Blue `#006EFF` for primary actions, cool neutral surfaces, and high clarity. Inter typography with compact clinical density. Card-based patient context, status chips, appointment timelines, and clear inline validation. Prioritize safety-critical readability.

**Avoid**: decorative-heavy UI, color-only urgency, hidden critical data.
