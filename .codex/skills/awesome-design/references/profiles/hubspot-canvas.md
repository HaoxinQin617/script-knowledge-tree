# HubSpot Canvas Design System

**URL**: https://canvas.hubspot.com/
**Archetype**: enterprise-data (CRM / marketing platform)
**Stack**: React; HubSpot UI Extensions framework

---

## 1. Visual Theme & Atmosphere
Canvas is HubSpot's design system — powering the CRM, Marketing Hub, Sales Hub, and Service Hub products. The visual atmosphere is modern, approachable, and human-centered — deliberately warmer and friendlier than Salesforce's enterprise cold. HubSpot's brand bridges the gap between professional tools and consumer-grade simplicity, reflecting their "power without complexity" positioning. Teal and orange accents introduce warmth into an otherwise clean neutral palette.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Candy Apple | `#F2545B` | Brand primary accent (CTAs, energy) |
| Calypso | `#0091AE` | Interactive blue (links, secondary CTA) |
| Sprout | `#00BDA5` | Success, positive metrics |
| Sorbet | `#FF7A59` | Warm accent / campaign energy |
| Marigold | `#F5C26B` | Warning, attention |
| Panther | `#2E475D` | Dark heading text |
| Flint | `#516F90` | Secondary text |
| Koala | `#99ACC2` | Muted text, disabled |
| White | `#FFFFFF` | Primary surface |
| Gypsum | `#F5F8FA` | Page background |
| Olaf | `#EAF0F6` | Secondary surface |
| Seastone | `#CBD6E2` | Border |
| Norman | `#DFE3EB` | Dividers |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| H1 | Lexend Deca | 1.875rem | 700 |
| H2 | Lexend Deca | 1.5rem | 600 |
| H3 | Lexend Deca | 1.125rem | 600 |
| Body | Lexend Deca | 1rem / 1.5 | 400 |
| Small | Lexend Deca | 0.875rem | 400 |
| Caption | Lexend Deca | 0.75rem | 400 |

Lexend Deca is an open-source font designed for reading ease — fits HubSpot's "easy to use" brand ethos. System fallback: `'Helvetica Neue', Helvetica, Arial, sans-serif`. All labels sentence case.

---

## 4. Component Styling

**Buttons**
- Primary: `#FF7A59` Sorbet or `#F2545B` Candy Apple fill, white text, 3px radius
- Secondary: white fill, `#CBD6E2` border, `#2E475D` Panther text
- Ghost: no fill, no border, Calypso text
- Danger: Candy Apple `#F2545B`
- Sizes: Extra Small / Small / Regular / Large

**Contact Record Card**
- Fundamental HubSpot pattern: contact photo + name + company + lifecycle stage
- Lifecycle stage badge: colored bar (Subscriber/Lead/MQL/SQL/Opportunity/Customer)
- Action buttons: Call / Email / Note / Task — icon row

**Pipeline / Deal View**
- Kanban board with stage columns
- Deal cards: amount prominent in Panther; days-in-stage badge
- Drag-to-advance interactions

**Charts (HubSpot Reporting)**
- Teal bar charts for positive metrics
- Warm palette for marketing-specific (opens, clicks, revenue)

---

## 5. Layout Principles
- **Grid**: 12-column flex grid
- **Spacing**: 8px base; 8/16/24/32/40/48px scale
- **App shell**: Left sidebar (HubSpot nav: contacts/deals/etc.) + content
- **Dashboard**: Card-based widget grid (drag-to-rearrange)
- **Record page**: Two-column: left = timeline/activity; right = properties panel

---

## 6. Depth & Elevation

| Level | Shadow | Usage |
|---|---|---|
| 0 | none | Flat |
| Low | `0 1px 4px rgba(0,0,0,0.12)` | Cards, inputs |
| Medium | `0 3px 12px rgba(0,0,0,0.12)` | Modals, panels |
| High | `0 6px 24px rgba(0,0,0,0.15)` | Drawers |

---

## 7. Do's and Don'ts

**Do**
- Use warm Sorbet / Candy Apple for energy and primary CTAs
- Show lifecycle stage as visual pipeline progression
- Use teal Sprout for success metrics and positive trend indicators
- Use Calypso blue for secondary interactive elements (links, secondary actions)
- Use the contact record card pattern consistently

**Don't**
- Use cold enterprise blues as primary (HubSpot is deliberately warmer)
- Apply extreme information density (HubSpot competes on simplicity)
- Use dense data tables as primary views — card/Kanban is preferred
- Skip lifecycle stage color coding — it is central to CRM mental models

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 768px | Sidebar hidden; bottom tab bar |
| 768–1024px | Condensed sidebar; content full width |
| ≥ 1024px | Full sidebar + content split |

- Contact record: stacks to single column on mobile
- Pipeline Kanban: horizontal scroll on mobile
- Reporting dashboards: charts resize; tiles reflow to single column

---

## 9. Agent Prompt Guide

**When generating HubSpot Canvas-style UI:**
> Apply HubSpot's warm-CRM aesthetic. Gypsum `#F5F8FA` page background, white cards, `#EAF0F6` secondary. Primary actions: Sorbet `#FF7A59` / Candy Apple `#F2545B`. Links: Calypso `#0091AE`. Success: Sprout `#00BDA5`. Lexend Deca (or system sans), 1rem body, 3px radius. Contact record: photo + name + company + lifecycle stage badge. Pipeline as Kanban board with deal amount prominent. Dashboard: card grid of reporting widgets. 8px spacing base. Warm shadow scale.

**Avoid**: Cold enterprise blue CTAs, extreme data density, missing lifecycle stage colors.
