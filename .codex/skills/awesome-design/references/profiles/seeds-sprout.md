# Seeds Design System (Sprout Social)

**URL**: https://seeds.sproutsocial.com/
**Archetype**: enterprise-data / social-ops
**Stack**: React component library

---

## 1. Visual Theme & Atmosphere
Seeds is Sprout Social's design system for social media management dashboards. It supports message queues, publishing calendars, analytics, and team collaboration workflows. The aesthetic is clean and approachable with a strong green identity, balancing professional SaaS density with approachable social-brand warmth.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Sprout Green | `#59CB59` | Primary brand, positive actions |
| Green Dark | `#3FAE3F` | Hover, active |
| Green Light | `#EAF8EA` | Success/selection tint |
| Blue | `#2F80ED` | Links, secondary actions |
| Purple | `#8B5CF6` | Planning/campaign accents |
| Orange | `#F2994A` | Warning |
| Red | `#EB5757` | Error/destructive |
| Ink | `#1F2937` | Primary text |
| Slate | `#4B5563` | Secondary text |
| Muted | `#9CA3AF` | Disabled text |
| Border | `#D1D5DB` | Inputs/dividers |
| Surface | `#FFFFFF` | Cards/panels |
| Background | `#F7FAFC` | App background |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| H1 | system sans | 2rem | 700 |
| H2 | system sans | 1.5rem | 700 |
| H3 | system sans | 1.25rem | 600 |
| H4 | system sans | 1rem | 600 |
| Body | system sans | 0.875rem | 400 |
| Body lg | system sans | 1rem | 400 |
| Small | system sans | 0.75rem | 400 |
| Label | system sans | 0.8125rem | 500 |
| Numeric | system sans | 0.875rem | 600 |

---

## 4. Component Styling

**Inbox Queue**
- Message rows with channel icons, sentiment/status tags
- Priority and assignee chips
- Bulk actions in toolbar

**Publishing Calendar**
- Weekly/monthly views with colored post cards
- Drag-and-drop scheduling
- Quick-create floating action button

**Analytics Cards**
- KPI cards with trend deltas and sparkline mini-charts
- Green positive / red negative trends

**Team Collaboration**
- Assignment dropdowns, internal notes, approval states
- Presence avatars and activity indicators

---

## 5. Layout Principles
- **Shell**: Left nav + top bar + main workspace
- **Spacing**: 8px base scale
- **Density**: medium-high for operations workflows
- **Card grid**: modular analytics and campaign widgets
- **List-detail**: standard pattern for message triage

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat | `1px solid #D1D5DB` | Tables/forms |
| Card | `0 2px 8px rgba(31,41,55,0.08)` | KPI cards |
| Popover | `0 4px 16px rgba(31,41,55,0.14)` | Menus/pickers |
| Modal | `0 8px 24px rgba(31,41,55,0.2)` | Dialogs |

---

## 7. Do's and Don'ts

**Do**
- Keep queue workflows fast and scannable
- Distinguish channels and statuses clearly
- Use green as positive brand anchor
- Support collaboration signals (assignee, approval, comments)
- Surface trend context near every KPI

**Don't**
- Bury queue actions behind deep menus
- Use color-only channel/status coding without labels/icons
- Overcrowd analytics cards with low-value metrics
- Use heavy visual effects that slow operational workflows

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 768px | Simplified queue cards, collapsed nav |
| 768–1024px | Two-column workspace modules |
| ≥ 1024px | Full social-ops dashboard layout |

---

## 9. Agent Prompt Guide

**When generating Seeds/Sprout-style UI:**
> Social operations SaaS aesthetic. Sprout Green `#59CB59` for primary positive actions, clean neutral data surfaces, and strong queue/calendar workflow components. Compact readable typography, collaboration indicators, and KPI cards with trend context.

**Avoid**: hidden queue actions, color-only channel semantics, decorative-heavy visuals.
