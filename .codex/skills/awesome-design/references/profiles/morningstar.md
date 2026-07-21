# Morningstar Design Language

**URL**: https://design.morningstar.com/ (internal/public references vary)
**Archetype**: enterprise-data / financial-services
**Stack**: React; enterprise analytics dashboards and investor tools

---

## 1. Visual Theme & Atmosphere
Morningstar's design language is rooted in financial trust, analytical rigor, and editorial clarity. It combines a restrained corporate palette with high-density data visualization for portfolio analysis, fund comparison, and market intelligence. The experience should feel dependable and precise, never flashy. Blue is the anchor; accent colors support chart interpretation and risk status.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Morningstar Blue | `#000DA3` | Brand primary, links, key CTAs |
| Blue Dark | `#000C7A` | Hover, active |
| Blue Light | `#E8EBFF` | Selected, info tint |
| Confidence Cyan | `#0077C8` | Secondary analytics accent |
| Positive Green | `#2E8540` | Gains, positive performance |
| Warning Orange | `#E58E00` | Caution, watchlist alerts |
| Negative Red | `#C53030` | Losses, risk flags |
| Gold | `#C7A008` | Premium/research badge |
| Primary Text | `#1A1A1A` | Main text |
| Secondary Text | `#4D4D4D` | Labels, metadata |
| Muted Text | `#7A7A7A` | Hints, disabled |
| Border | `#D9DCE3` | Table lines, card borders |
| Background | `#F7F8FA` | App background |
| White | `#FFFFFF` | Cards, content surfaces |

Chart palette sample: `#000DA3`, `#0077C8`, `#2E8540`, `#E58E00`, `#C53030`, `#7A7A7A`.

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| H1 | Gotham Narrow | 2rem | 700 |
| H2 | Gotham Narrow | 1.5rem | 700 |
| H3 | Gotham Narrow | 1.25rem | 600 |
| H4 | Gotham Narrow | 1rem | 600 |
| Body | Helvetica Neue | 0.9375rem | 400 |
| Body (compact) | Helvetica Neue | 0.875rem | 400 |
| Small | Helvetica Neue | 0.75rem | 400 |
| Label | Helvetica Neue | 0.8125rem | 600 |
| Numeric | Helvetica Neue | 0.875rem | 600 |
| Mono | Menlo, monospace | 0.8125rem | 400 |

Morningstar interfaces often use narrow headings for compact layouts and dense table headers.

---

## 4. Component Styling

**Performance Table**
- Dense rows with right-aligned numeric values
- Positive values: green with `+` prefix
- Negative values: red with `-` prefix
- Sticky left columns for fund/asset names
- Multi-level sortable headers

**Fund Card**
- Fund name, star rating, category, expense ratio, AUM
- Rating stars in gold (`#C7A008`)
- Border-based separation, low-shadow approach

**Risk Meter**
- Horizontal segmented scale (Low → High)
- Marker shows current risk position
- Color transitions from green to red

**Charting**
- Line and area charts with clear axes and legends
- Performance comparison with benchmark overlays
- Tooltips with date, value, delta

---

## 5. Layout Principles
- **Dashboard**: Left nav + top filter bar + data canvas
- **Grid**: 12-column with data-heavy modules
- **Spacing**: 8px base (8, 16, 24, 32, 40)
- **Density mode**: Standard and compact table density
- **Content width**: Fluid for analytics, constrained for research articles

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat | `1px solid #D9DCE3` | Tables, cards |
| Card | `0 2px 6px rgba(26,26,26,0.08)` | Summary modules |
| Dropdown | `0 4px 14px rgba(26,26,26,0.14)` | Filters, menus |
| Modal | `0 10px 28px rgba(26,26,26,0.2)` | Export/report dialogs |

---

## 7. Do's and Don'ts

**Do**
- Prioritize data legibility over decorative flourish
- Right-align numeric columns and use tabular figures
- Use consistent positive/negative color semantics across all widgets
- Keep chart legends explicit and always visible in desktop dashboards
- Use blue as trust anchor for navigation and primary actions

**Don't**
- Overload dashboards with competing accent colors
- Use ambiguous red/green combinations without labels for accessibility
- Hide core metrics behind hover-only interactions
- Use oversized headings that reduce visible data density

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 768px | Simplified cards, collapsed nav, key metrics only |
| 768–1024px | Two-column analytics panels |
| ≥ 1024px | Full multi-panel dashboard |
| ≥ 1440px | Expanded data grids and comparison views |

---

## 9. Agent Prompt Guide

**When generating Morningstar-style UI:**
> Financial analytics interface with trust-forward design. Morningstar Blue `#000DA3` primary, restrained neutrals, and chart accents for data. Dense but readable tables with right-aligned numbers and positive/negative color semantics. Gotham Narrow headings, Helvetica Neue body. White cards on `#F7F8FA` background. Border-led separation, minimal shadows. Focus on investor decision clarity.

**Avoid**: decorative color-heavy visuals, hidden key metrics, non-tabular numeric alignment.
