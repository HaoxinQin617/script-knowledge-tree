# Scania Design System

**URL**: https://designsystem.scania.com/
**Archetype**: industrial-enterprise / premium-editorial
**Stack**: Web Components + React support

---

## 1. Visual Theme & Atmosphere
Scania's design language reflects heavy-vehicle engineering values: precision, durability, and premium industrial confidence. Interfaces often span fleet management, service portals, and product experiences. The visual style is robust and restrained, anchored by deep Scania blue and high-contrast neutrals. Content prioritizes operational clarity for logistics and transport users.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Scania Blue | `#041E42` | Primary brand, headers, nav |
| Blue Dark | `#031633` | Hover/active |
| Blue Mid | `#005B96` | Secondary interactive |
| Blue Light | `#E6EEF7` | Selected/info tint |
| Scania Red | `#C5002E` | Alert/critical accent |
| Success Green | `#1B8A3E` | Positive states |
| Warning Amber | `#D48806` | Warning |
| Error Red | `#C1121F` | Error/destructive |
| Charcoal | `#1F2933` | Primary text |
| Slate | `#52606D` | Secondary text |
| Muted | `#9AA5B1` | Disabled text |
| Border | `#D9E2EC` | Dividers/inputs |
| Surface | `#FFFFFF` | Cards/tables |
| Background | `#F7F9FC` | Page background |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| H1 | Scania Sans | 2rem | 700 |
| H2 | Scania Sans | 1.5rem | 700 |
| H3 | Scania Sans | 1.25rem | 600 |
| H4 | Scania Sans | 1rem | 600 |
| Body | Scania Sans | 0.9375rem | 400 |
| Compact Body | Scania Sans | 0.875rem | 400 |
| Small | Scania Sans | 0.75rem | 400 |
| Label | Scania Sans | 0.8125rem | 500 |
| Numeric | Scania Sans | 0.875rem | 600 |

---

## 4. Component Styling

**Fleet Table**
- Row-oriented vehicle data (VIN, status, location, fuel)
- Sticky header and pinned identity columns
- Status chips for vehicle health and service due

**Telemetry Cards**
- KPI cards for mileage, uptime, fuel efficiency
- Strong numeric prominence with trend deltas
- Blue-top border for branded emphasis

**Service Timeline**
- Chronological maintenance events
- Severity tagging and action recommendations

**Command Panel**
- Contextual action panel for selected vehicle(s)
- Safety confirmations for remote commands

---

## 5. Layout Principles
- **Shell**: Left nav + top contextual header + content canvas
- **Spacing**: 8px base, denser in data tables
- **Grid**: 12-column for dashboards, fluid width
- **Cards**: Modular blocks for operational KPIs
- **Workflows**: list-detail patterns for vehicle and fleet entities

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat | `1px solid #D9E2EC` | Tables/forms |
| Card | `0 2px 8px rgba(31,41,51,0.08)` | KPI panels |
| Popover | `0 4px 16px rgba(31,41,51,0.14)` | Menus/tooltips |
| Modal | `0 8px 24px rgba(31,41,51,0.2)` | Confirmations |

---

## 7. Do's and Don'ts

**Do**
- Prioritize operational clarity and safe-action confirmations
- Keep data-dense tables readable with strong hierarchy
- Surface service-critical warnings prominently
- Use blue as trust and navigation anchor
- Provide explicit unit labels (km, L/100km, h)

**Don't**
- Use decorative motion that distracts from operations
- Hide critical fleet state in collapsed sections
- Use ambiguous color semantics for health statuses
- Overcrowd telemetry cards with non-actionable metrics

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 768px | Simplified fleet cards, collapsed nav |
| 768–1024px | Two-column telemetry + list views |
| ≥ 1024px | Full fleet command dashboard |

---

## 9. Agent Prompt Guide

**When generating Scania-style UI:**
> Industrial fleet-management interface with premium restraint. Scania Blue `#041E42` as primary anchor, high-contrast neutrals, and operational data clarity. Compact but readable tables, telemetry KPI cards, and explicit service-status signaling. Emphasize safe command workflows and clear units.

**Avoid**: decorative-heavy visuals, hidden critical warnings, ambiguous status mappings.
