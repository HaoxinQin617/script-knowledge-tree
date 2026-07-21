# Shopify Polaris

Source: https://polaris.shopify.com · By Shopify

## 1) Visual Theme & Atmosphere
Polaris serves Shopify's merchant admin UI. It must work for a brand-new store owner as well as a high-volume merchant power user. It prioritizes clarity, task completeness, and progressive disclosure over visual drama.

Mood: merchant-practical, trustworthy, clean, action-oriented
Archetype: `enterprise-data` with mercantile warmth
Density: comfortable; tables and data views go compact on power screens.

## 2) Color Palette & Roles
| Token | Hex | Role |
|---|---|---|
| `--p-color-bg-surface` | `#F6F6F7` | Page background |
| `--p-color-bg-surface-secondary` | `#EBEBEB` | Secondary surface |
| `--p-color-bg` | `#FFFFFF` | Card fill |
| `--p-color-border` | `#BABFC3` | Input/card borders |
| `--p-color-text` | `#202223` | Primary text |
| `--p-color-text-subdued` | `#6D7175` | Muted/hint text |
| `--p-color-action-primary` | `#008060` | Primary CTA (green) |
| `--p-color-action-primary-hovered` | `#006E52` | Hover |
| `--p-color-action-critical` | `#D72C0D` | Danger action |
| `--p-color-interactive` | `#2C6ECB` | Links |
| `--p-color-highlight-surface` | `#FFFAEB` | Warning/info banner bg |
| `--p-color-success-surface` | `#AEE9D1` | Success indicator bg |
| `--p-color-critical-surface` | `#FED3D1` | Error indicator bg |
| `--p-color-warning-surface` | `#FFD79D` | Warning indicator bg |

## 3) Typography Rules
Typeface: Inter (`--p-font-family-sans: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, sans-serif`)

Scale:

| Token | Size | Weight | Line Height | Use |
|---|---:|---:|---:|---|
| body-xs | 12px | 400 | 16 | Fine print |
| body-sm | 13px | 400 | 20 | Compact table cells |
| body-md | 14px | 400 | 20 | Default UI body |
| body-lg | 16px | 400 | 24 | Intro paragraphs |
| heading-xs | 12px | 600 | 16 | Card section labels |
| heading-sm | 14px | 600 | 20 | Card headings |
| heading-md | 16px | 600 | 24 | Page section headings |
| heading-lg | 20px | 600 | 28 | Page title alternative |
| heading-xl | 26px | 600 | 32 | Major page titles |
| display-sm | 28px | 700 | 32 | Empty-state lead |
| display-lg | 42px | 700 | 48 | Landing panels |

## 4) Component Stylings
Buttons:
- Primary: green (#008060), white text, 8px radius
- Default: white fill, grey border, `--p-color-text`
- Plain: no border/fill, link-style color
- Critical: red (#D72C0D), white text
- Loading state: spinner replaces label in-place

Action menu (more actions):
- Ellipsis overflow button reveals popover menu
- Groups with section dividers inside popover

Resource List and Data Table:
- Rows have selectable checkbox on hover
- Bulk action bar slides in at top when selected
- Column sort via icon in header

Page layout:
- Page header: title + subtitle + action bar (top right)
- Cards as the primary container unit
- Section within card uses hr-like dividers

Banners:
- Full-width, left icon, title + body + action
- Four types: info, success, warning, critical

## 5) Layout Principles
Grid: CSS grid, 12 columns on desktop, 4 on mobile.
Max width: 1280px for primary content, 800px for simple forms.
Spacing: 4px base unit — multiples: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80.

Page structure:
- Full-width page background + centered max-width wrapper
- Primary + secondary column (2/3 + 1/3 typical)
- Left nav: 240px fixed sidebar on desktop

## 6) Depth & Elevation
| Level | Shadow |
|---|---|
| Card | `0 0 0 1px rgba(63,63,68,.05), 0 1px 3px rgba(63,63,68,.15)` |
| Popover | `0 3px 6px -3px rgba(0,0,0,.07), 0 8px 20px -4px rgba(0,0,0,.14)` |
| Modal | `0 -1px 20px 0 rgba(0,0,0,0.2)` |

Background behind cards is a cool light gray (#F6F6F7), cards are white — clear elevation distinction.

## 7) Do's and Don'ts
Do:
- One primary action per page/section.
- Keep navigation predictable: sidebar → section → action in card.
- Use banners for system-level messages, toasts for transient confirmations.
- Communicate save status inline near the saving control.

Don't:
- Do not use green (#008060) decoratively — it means "primary action."
- Do not build custom modal patterns; Polaris modals have strict sizing.
- Do not create action-heavy toolbars with more than 3 visible actions.
- Do not use a data table for lists that suit a resource list component.

## 8) Responsive Behavior
Breakpoints: 490px, 768px, 1040px, 1800px.
- Sidebar collapses to top-of-screen nav on mobile.
- Primary + secondary columns stack vertically below 768px.
- Data tables: scroll container below 768px.
- Touch target: 44px minimum.

## 9) Agent Prompt Guide
One-shot: "Use Shopify Polaris: Inter typeface, merchant admin layout (left nav sidebar + rightward page area), page background #F6F6F7, white cards with subtle shadow, primary CTA in #008060 (never decorative), 8px corner radius, 4px base spacing scale, bulk action bar on table row selection."

Negative: Avoid e-commerce storefront marketing aesthetics — this is admin UI, not a shopping page.
