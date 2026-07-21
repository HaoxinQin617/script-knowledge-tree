# Semrush Design System

**URL**: https://developer.semrush.com/intergalactic/ (Intergalactic DS)
**Archetype**: enterprise-data / marketing-analytics
**Stack**: React; token-driven components

---

## 1. Visual Theme & Atmosphere
Semrush's Intergalactic design system supports SEO, SEM, and competitive intelligence products. The UI is analytics-dense and task-driven, designed for marketers and growth teams making data-backed decisions quickly. The style is modern and energetic but still operational, using blue and orange accents over clean neutral foundations.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Semrush Blue | `#5B8DEF` | Primary interactive, links |
| Blue Dark | `#3F72D6` | Hover/active |
| Blue Light | `#EAF1FF` | Selected/info tint |
| Semrush Orange | `#FF642D` | Brand accent, highlights |
| Orange Light | `#FFEDE5` | Accent tint |
| Success Green | `#2E9B4D` | Positive trends |
| Warning Amber | `#D98A00` | Warning |
| Error Red | `#D64545` | Errors/negative trend |
| Ink | `#1E2530` | Primary text |
| Slate | `#556070` | Secondary text |
| Muted | `#98A2B3` | Disabled/placeholder |
| Border | `#D8DEE8` | Inputs/dividers |
| Surface | `#FFFFFF` | Cards, table surfaces |
| Background | `#F7F9FC` | App background |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| H1 | Factor A (fallback Inter) | 2rem | 700 |
| H2 | Factor A (fallback Inter) | 1.5rem | 700 |
| H3 | Factor A (fallback Inter) | 1.25rem | 600 |
| H4 | Factor A (fallback Inter) | 1rem | 600 |
| Body | Factor A (fallback Inter) | 0.875rem | 400 |
| Compact Body | Factor A (fallback Inter) | 0.8125rem | 400 |
| Small | Factor A (fallback Inter) | 0.75rem | 400 |
| Label | Factor A (fallback Inter) | 0.8125rem | 500 |
| Numeric | Factor A (fallback Inter) | 0.875rem | 600 |

---

## 4. Component Styling

**Analytics Table**
- Dense rows with sortable metrics
- Trend indicators and sparkline columns
- Sticky header and pinned keyword/domain columns

**Filter Toolbar**
- Multi-filter chips and search
- Date range presets
- Segment toggles for channel/country/device

**KPI Cards**
- Metric value + delta + period comparison
- Color-coded trend arrows (green/red)
- Optional mini-chart

**Competitive Graphs**
- Multi-series line/area charts
- Strong legend and hover tooltips
- Annotation markers for updates/events

---

## 5. Layout Principles
- **Shell**: Left nav + top query/filter bar + content grid
- **Spacing**: 8px base with compact data modules
- **Density**: medium-high for analyst workflows
- **Patterns**: dashboard overview -> drill-down list -> detail report
- **Width**: fluid for reports; constrained for setup forms

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat | `1px solid #D8DEE8` | Table/cards/forms |
| Card | `0 2px 8px rgba(30,37,48,0.08)` | KPI modules |
| Popover | `0 4px 16px rgba(30,37,48,0.14)` | Filter menus |
| Modal | `0 8px 24px rgba(30,37,48,0.2)` | Dialogs |

---

## 7. Do's and Don'ts

**Do**
- Keep data workflows fast with compact but readable density
- Surface trend context directly beside KPI values
- Use explicit labeling for segments and filters
- Preserve consistency across reports and chart legend behavior
- Ensure export/share actions are easy to discover

**Don't**
- Overload dashboards with decorative visuals
- Hide critical filters in deeply nested menus
- Use inconsistent positive/negative trend mappings
- Use color-only cues without labels/icons

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 768px | Simplified KPI cards and stacked filters |
| 768–1024px | Two-column report modules |
| ≥ 1024px | Full analytics dashboard layout |

---

## 9. Agent Prompt Guide

**When generating Semrush-style UI:**
> Marketing analytics interface with high data density. Semrush Blue `#5B8DEF` for primary actions, orange accents for highlights, and clear trend semantics. Compact tables, filter toolbars, KPI cards, and competitive charts with explicit legends and tooltips. Prioritize drill-down workflows and rapid insight scanning.

**Avoid**: decorative overload, hidden key filters, inconsistent trend color semantics.
