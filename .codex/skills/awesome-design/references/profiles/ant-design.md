# Alibaba Ant Design

**URL**: https://ant.design
**Archetype**: enterprise-data
**Stack**: React (antd), Vue (ant-design-vue), Angular (ng-zorro-antd)

---

## 1. Visual Theme & Atmosphere
Ant Design is the dominant enterprise web component system in China and widely used globally for B2B dashboards, admin panels, and data-intensive management interfaces. The atmosphere is systematic, structured, and high-density — optimised for power users who live in the product all day. Visual language is clean and neutral with a blue accent system that signals trust and professionalism. White background, gray neutrals, and a distinctive blue form the core palette.

---

## 2. Color Palette & Roles

Ant Design uses a 10-step color palette (1 = lightest, 10 = darkest) for each hue:

| Token | Hex | Role |
|---|---|---|
| Primary Blue 6 | `#1677FF` | Primary action, links, selection |
| Primary Blue 1 | `#E6F4FF` | Primary light fill, hover bg |
| Success Green 6 | `#52C41A` | Success status |
| Warning Gold 6 | `#FAAD14` | Warning status |
| Error Red 6 | `#FF4D4F` | Error, destructive |
| Processing Blue 6 | `#1677FF` | Processing/loading state |
| Text Primary | `rgba(0,0,0,0.88)` | Default text |
| Text Secondary | `rgba(0,0,0,0.65)` | Secondary/description |
| Text Disabled | `rgba(0,0,0,0.25)` | Disabled state |
| Border | `#D9D9D9` | Default input/table borders |
| BG Container | `#FFFFFF` | Card / form surfaces |
| BG Layout | `#F5F5F5` | Page background |

Dark mode (Ant Design 5+) inverts the palette automatically via `ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}`.

---

## 3. Typography Rules

| Role | Face | Size | Weight | Line Height |
|---|---|---|---|---|
| Heading 1 | -apple-system / 'PingFang SC' | 38px | 600 | 1.23 |
| Heading 2 | Same | 30px | 600 | 1.35 |
| Heading 3 | Same | 24px | 600 | 1.35 |
| Heading 4 | Same | 20px | 600 | 1.4 |
| Body (base) | Same | 14px | 400 | 1.57 |
| Small | Same | 12px | 400 | 1.67 |

**Chinese font stack**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`. The `PingFang SC` and `Microsoft YaHei` are embedded for CJK rendering. Base font size is **14px** (not 16px) — characteristic of Ant Design's denser default.

---

## 4. Component Styling

**Buttons**
- Primary: `#1677FF` fill, white text, 6px radius
- Default: white fill, `#D9D9D9` border, text primary color
- Dashed: same as default with `2px dashed` border
- Text: no background, no border
- Link: inline hyperlink style
- Danger variant: replaces blue with Error Red on any type

**Form / Input**
- Height: 32px (middle, default); 24px (small); 40px (large)
- Border: `1px solid #D9D9D9`; focus: `#1677FF` border + box-shadow `0 0 0 2px rgba(22,119,255,0.2)`
- Validation: red border + red message text below

**Table**
- Fixed header with scroll body
- Sortable column headers with sort indicator
- Expandable rows, nested tables
- Row selection with checkboxes
- Pagination component below by default

**Tag / Badge**
- Tags: colored fill or bordered; 2px radius
- Badge: numeric count in red dot on icons/avatars

---

## 5. Layout Principles
- **Grid**: 24-column system (`Col` / `Row` with `gutter` prop); responsive breakpoints xs/sm/md/lg/xl/xxl
- **Spacing**: 4px base → 8/12/16/20/24/32/48px steps
- **Layout**: `Layout` component: `Sider` (left nav) + `Content` + optional `Header`/`Footer`
- **Max-width**: No enforced max — fullscreen admin dashboards typical
- **Sider**: 200–256px wide; collapsible to icon-only (64px)

---

## 6. Depth & Elevation

| Level | Shadow | Usage |
|---|---|---|
| 1 | `0 1px 2px rgba(0,0,0,0.03), 0 1px 6px -1px rgba(0,0,0,0.02), 0 2px 4px rgba(0,0,0,0.02)` | Cards |
| 2 | `0 3px 6px -4px rgba(0,0,0,0.12), 0 6px 16px rgba(0,0,0,0.08), 0 9px 28px 8px rgba(0,0,0,0.05)` | Dropdowns, popovers |
| 3 | `0 6px 16px -8px rgba(0,0,0,0.08), 0 9px 28px rgba(0,0,0,0.05), 0 12px 48px 16px rgba(0,0,0,0.03)` | Modals, drawers |

---

## 7. Do's and Don'ts

**Do**
- Use the 14px base font size — it is intentional for dense UI
- Use the 24-column grid; avoid arbitrary positioning
- Use `Space` and `Divider` components for consistent spacing rather than custom margins
- Apply Design Tokens (Ant Design 5 `token` API) when customising brand colors
- Use `ConfigProvider` at root for theme switching

**Don't**
- Override component styles with `!important` — use the token system
- Build custom tables instead of using the Table component
- Use bright custom colors outside the 10-step palette system
- Increase base font to 16px without adjusting all spacing — it breaks the component proportions
- Use Ant Design in a consumer-facing marketing context — it is optimised for internal/B2B

---

## 8. Responsive Behavior

| Breakpoint | Width |
|---|---|
| xs | < 576px |
| sm | ≥ 576px |
| md | ≥ 768px |
| lg | ≥ 992px |
| xl | ≥ 1200px |
| xxl | ≥ 1600px |

Admin layouts typically start at `md`; mobile Ant Design layouts are less common (consider Ant Design Mobile for < 768px). The Sider collapses; menu becomes a Drawer on xs/sm. Tables scroll horizontally on small screens.

---

## 9. Agent Prompt Guide

**When generating Ant Design-style UI:**
> Apply Ant Design's B2B admin aesthetic. `#F5F5F5` page background, white card surfaces. Primary blue `#1677FF`, 6px corner radius, 14px base font. Left sider navigation (200px, collapsible). Dense 24-column grid with 16px gutter. Tables with fixed header and pagination. `rgba(0,0,0,0.88)` primary text, `rgba(0,0,0,0.65)` secondary. Status colors: green `#52C41A`, red `#FF4D4F`, gold `#FAAD14`. Use 4px sub-grid spacing. All interactive states: blue border + `rgba(22,119,255,0.2)` focus ring.

**Avoid**: 16px base font, custom navigation patterns, marketing-style large type, gradient fills, decorative backgrounds.
