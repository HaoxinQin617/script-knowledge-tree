# Elastic UI (EUI)

**URL**: https://elastic.github.io/eui/
**Archetype**: enterprise-data
**Stack**: React; CSS-in-JS via Emotion; supports Amsterdam (light) and Dark themes

---

## 1. Visual Theme & Atmosphere
EUI is Elastic's design system powering Kibana, Elasticsearch, and the Elastic Stack observability/search dashboards. The visual atmosphere is analytical and data-confident — built for DevOps, SecOps, and data engineers who spend hours exploring logs, metrics, and search results. The "Amsterdam" design refresh introduced a lighter, more modern feel while retaining information density. The default EUI theme communicates: serious, capable, and clear.

---

## 2. Color Palette & Roles

EUI Amsterdam theme:

| Token | Hex (Light) | Hex (Dark) | Role |
|---|---|---|---|
| Primary | `#006DE4` | `#4BA1F1` | Interactive, links |
| Accent | `#F04E98` | `#F68FBE` | Highlights, "New" |
| Success | `#00BFB3` | `#7DDED8` | Positive status |
| Warning | `#FEC514` | `#FEC514` | Caution |
| Danger | `#BD271E` | `#F86B63` | Error |
| Subdued Text | `#69707D` | `#81858F` | Secondary text |
| Disabled Text | `#ABB4C4` | `#535966` | Disabled state |
| Body BG | `#FFFFFF` | `#1D1E24` | Page background |
| Page Header BG | `#F4F6FB` | `#141519` | Header sections |
| Table Stripe | `#F5F7FA` | `#25262E` | Alternating rows |
| Border | `#D3DAE6` | `#343741` | Component borders |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| Display | Inter | 2.25rem | 700 |
| Title L | Inter | 1.75rem | 700 |
| Title M | Inter | 1.375rem | 700 |
| Title S | Inter | 1.125rem | 600 |
| Text (body) | Inter | 1rem / 1.5 | 400 |
| Text S | Inter | 0.875rem | 400 |
| Caption | Inter | 0.75rem | 400 |
| Code | Roboto Mono | 0.875rem | 400 |

Inter replaced Source Sans Pro in the Amsterdam refresh. Code blocks / terminal output: Roboto Mono. All UI labels in sentence case.

---

## 4. Component Styling

**Buttons**
- Primary filled: `#006DE4`, white text, 6px radius
- Primary empty: transparent, `#006DE4` border
- Text + icon: inline, no border
- Sizes: xs / s / m (default)
- Status variants via `color` prop: primary / accent / success / warning / danger / text / ghost

**Data Grid (EuiDataGrid)**
- EUI's signature component for search/log data
- Column resizing, sorting, virtualization
- Cell-level expansion, action menus
- In-grid filtering
- Full row select / bulk actions

**Badge**
- Small colored labels: primary / accent / success / warning / danger / hollow
- Used extensively for Elasticsearch index names, status labels, log levels

**Search / Query Bar**
- KQL (Kibana Query Language) input with syntax highlighting
- Autocomplete for field names, values, operators
- Time range picker integration

**Charts (Elastic Charts)**
- Separate library (Elastic Charts) consumed within EUI
- Line, bar, area, pie, heatmap, flame graphs
- Auto-adapts to Amsterdam light/dark theme token

---

## 5. Layout Principles
- **Grid**: `EuiFlexGroup` / `EuiFlexItem` (Flexbox wrapper); `EuiPage` layouts
- **Spacing**: 4px base; EUI scale: 4/8/12/16/24/32/40/48px
- **Page shell**: Optional left sidebar nav; content area; optional right contextual panel
- **Panels**: `EuiPanel` as primary card/container component
- **Density**: Compact modifier available via `paddingSize="s"` on panels/tables

---

## 6. Depth & Elevation

| Level | Shadow | Usage |
|---|---|---|
| 0 | none | Flat primary surfaces |
| `shadow="s"` | `0 0.7px 1.4px rgba(0,0,0,0.1)` | Subtle cards |
| `shadow="m"` | `0 6px 12px rgba(0,0,0,0.1)` | Popovers, menus |
| `shadow="l"` | `0 16px 48px rgba(0,0,0,0.12)` | Modals |

Dark mode: shadows are lighter or replaced with border reinforcement.

---

## 7. Do's and Don'ts

**Do**
- Use `EuiThemeProvider` for consistent dark/light theme switching
- Use `EuiDataGrid` for any tabular data — do not build custom tables
- Use `EuiBadge` for index names, status labels, log levels
- Use the KQL/Lucene query bar pattern for search interfaces
- Use Inter — consistent with Elastic Stack product suite

**Don't**
- Use EUI as a general-purpose marketing UI library
- Use high-contrast custom colors outside the EUI token set
- Build custom data visualization — use Elastic Charts
- Override component shadows with decorative alternatives
- Skip status color semantics (green ≠ accent; it is success exclusive)

---

## 8. Responsive Behavior

| Breakpoint | Width |
|---|---|
| xs | < 575px |
| s | ≥ 575px |
| m | ≥ 768px |
| l | ≥ 992px |
| xl | ≥ 1200px |

EUI is primarily desktop-first — Kibana/Elasticsearch dashboards are used on large monitors. Mobile is supported but not optimised; complex DataGrids become scrollable on small screens.

---

## 9. Agent Prompt Guide

**When generating EUI / Elastic-style UI:**
> Apply Elastic's Amsterdam analytics aesthetic. White body (`#FFFFFF`) / dark `#1D1E24`. Primary blue `#006DE4`. Inter, 1rem body, 6px radius. Use `EuiPanel` (shadow=sm) for card containers. DataGrid for tabular data with sorting/filtering. Badges for status labels (success teal `#00BFB3`, warning amber `#FEC514`, danger red `#BD271E`, accent pink `#F04E98`). Query bar for search inputs. 4px spacing base. Dark theme: flip to dark token set. Keep information density high.

**Avoid**: Custom data table implementations, decorative gradients, wide-radius pill buttons, non-Inter typography.
