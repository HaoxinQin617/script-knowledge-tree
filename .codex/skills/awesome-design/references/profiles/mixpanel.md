# Mixpanel Design System

**URL**: https://design.mixpanel.com/
**Archetype**: enterprise-data / analytics
**Stack**: React; analytics product UI

---

## 1. Visual Theme & Atmosphere
Mixpanel's design language reflects its core product: dense, data-rich analytics dashboards. The palette centers on deep purple as the brand anchor, contrasted with crisp white surfaces. Charts, funnels, and event timelines are primary UI citizens. The atmosphere is analytical and confident — designed for power users exploring behavioral data, not casual browsers.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Brand Purple | `#7856FF` | Primary interactive, brand, buttons |
| Purple Dark | `#5C3FC4` | Hover state, active |
| Purple Light | `#EDE9FF` | Selected surface, tint backgrounds |
| Blue | `#4A90D9` | Secondary interactive, links |
| Teal | `#00B8A0` | Success, positive trends |
| Red | `#F45B5B` | Error, negative trends, decline |
| Orange | `#FF8B00` | Warning, stalled |
| Yellow | `#FFCC00` | Annotation, highlight |
| Ink (text) | `#1D1C26` | Primary text |
| Slate | `#6F7082` | Secondary text, labels |
| Silver | `#E0E1E5` | Borders, dividers |
| Off-white | `#F8F8FB` | Page background |
| White | `#FFFFFF` | Card, surface |
| Chart palette | `#7856FF, #00B8A0, #F45B5B, #FF8B00, #4A90D9, #FFCC00` | Multi-series data |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| Display | Inter | 1.75rem | 700 |
| H1 | Inter | 1.375rem | 700 |
| H2 | Inter | 1.125rem | 600 |
| H3 | Inter | 1rem | 600 |
| Body | Inter | 0.875rem | 400 |
| Small | Inter | 0.75rem | 400 |
| Metric (big number) | Inter | 2.5rem | 700 |
| Code/Query | JetBrains Mono | 0.8125rem | 400 |

Number formatting: commas for thousands, abbreviated M/B/T for large values. Percentage values always 1 decimal place.

---

## 4. Component Styling

**Charts**
- Line charts: 2px stroke, no fill by default, dot markers on hover
- Bar charts: 4px radius top corners, grouped or stacked
- Funnel: horizontal bar with percentage drop labels
- Retention: heatmap grid, blue intensity scale

**Metric Cards**
- Large number headline (2.5rem bold)
- Trend indicator: `↑ +12.3%` in teal (positive) or `↓ −5.1%` in red
- Comparison period subtitle in slate

**Tables**
- Compact density: 32px row height
- Sortable headers with chevron
- Row hover: purple-light tint `#EDE9FF`
- Sticky first column for event names in property tables

**Filters / Segmentation**
- Multi-select dropdown with search
- Purple outline on selected filters
- "AND / OR" logic toggle pill between filter rows

---

## 5. Layout Principles
- **Nav**: Left sidebar (collapsible), icons + labels, 240px expanded / 56px collapsed
- **Dashboard**: 12-column grid, draggable chart tiles in report builder
- **Toolbar**: Horizontal top bar: date range + segment + filter controls
- **Panel density**: 16px internal padding for chart cards; 8px between cards
- **Max content width**: none (full-bleed dashboard)

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat | None | Sidebar items, inline cells |
| Card | `0 1px 6px rgba(0,0,0,0.08)` | Dashboard chart panels |
| Dropdown | `0 4px 16px rgba(29,28,38,0.15)` | Select menus, context menus |
| Modal | `0 8px 32px rgba(29,28,38,0.25)` | Modal overlays |

---

## 7. Do's and Don'ts

**Do**
- Use the chart color sequence in order for multi-series data
- Display "no data" states with friendly empty illustrations, not blank space
- Keep metric cards above filterable tables for progressive disclosure
- Use fixed-width columns for numeric data (tabular figures)
- Include a "compare to previous period" toggle on all time-series charts

**Don't**
- Use color alone to distinguish data series (add pattern/label redundancy)
- Truncate metric labels — abbreviate intelligently (K, M, B)
- Use pie charts for more than 5 segments
- Show loading spinners on top of existing data during refresh — use skeleton overlays
- Use body copy in dashboard — annotation labels only

---

## 8. Responsive Behavior

Mixpanel is desktop-first:
- Dashboard: 3-column on ≥1440px, 2-column on ≥1024px, 1-column on mobile
- Sidebar collapses to icon-only at ≤768px
- Charts resize responsively via container queries
- Mobile: read-only view of saved reports; editing disabled on small screens

---

## 9. Agent Prompt Guide

**When generating Mixpanel-style UI:**
> Analytics dashboard aesthetic. Deep purple `#7856FF` brand. Inter 0.875rem body. White cards on `#F8F8FB` page. Compact 32px table rows. Large bold metric numbers (2.5rem, 700). Trend indicators: teal Up/red Down. Multi-series chart palette: purple → teal → red → orange → blue → yellow. Left collapsible sidebar 240px. 16px card padding. Shadows: `0 1px 6px rgba(0,0,0,0.08)` cards.

**Avoid**: decorative imagery, large padding, mobile-first layout, pie charts with many segments.
