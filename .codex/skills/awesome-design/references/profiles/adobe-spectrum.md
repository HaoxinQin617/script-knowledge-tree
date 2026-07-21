# Adobe Spectrum Design System

**URL**: https://spectrum.adobe.com
**Archetype**: enterprise-data
**Stack**: React Spectrum, Spectrum Web Components, Spectrum CSS

---

## 1. Visual Theme & Atmosphere
Spectrum is built for dense, multi-surface creative and business productivity tools. The visual atmosphere is professional and distraction-free — surfaces recede so user content (canvases, documents, dashboards) takes the stage. Four built-in color themes (Light, Dark, Light High Contrast, Dark High Contrast) make Spectrum particularly accessible. Icons are illustrated with pixel-level precision; components are compact by default.

---

## 2. Color Palette & Roles

| Token | Value | Role |
|---|---|---|
| Static Blue | `#1473E6` | Primary action, links |
| Static Red | `#D7373F` | Error, destructive |
| Static Green | `#2D9D78` | Success |
| Static Orange | `#E68619` | Warning |
| Gray 50 | `#FFFFFF` | Light theme surface |
| Gray 75 | `#F5F5F5` | Secondary surface |
| Gray 100 | `#EAEAEA` | Dividers |
| Gray 800 | `#1E1E1E` | Dark theme surface |
| Gray 900 | `#141414` | Darkest surface |
| Informative | `#0265DC` | Informational status |

Spectrum uses semantic color aliases (`--spectrum-global-color-static-blue-600`) rather than raw hex — always reference the token, never hardcode. All colors shift across themes automatically.

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| Heading XL | Adobe Clean | 2.25rem | 700 |
| Heading L | Adobe Clean | 1.75rem | 700 |
| Heading M | Adobe Clean | 1.25rem | 600 |
| Body | Adobe Clean | 0.875rem | 400 |
| Detail | Adobe Clean | 0.75rem | 400 |
| Code | Source Code Pro | 0.875rem | 400 |

Adobe Clean is proprietary; in web contexts outside Adobe products, use the `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` stack. UI copy is terse — labels not sentences. All UI text is sentence case.

---

## 4. Component Styling

**Buttons**
- Primary (CTA): `#1473E6` fill, white text, 16px radius
- Secondary: transparent, `#1473E6` border, `#1473E6` text
- Quiet: no border, no fill — text only with hover underline
- Sizes: S / M / L / XL — all on 4px baseline

**Status Badges**
- Positive: Green `#2D9D78`
- Negative: Red `#D7373F`
- Notice: Orange `#E68619`
- Info: Blue `#0265DC`
- Neutral: Gray

**Picker / Select**
- Full border in normal state; highlight border on focus
- Chevron icon right-aligned; popover appears below

**Data Table**
- Resizable columns; sortable headers with indicator arrow
- Row hover: `--spectrum-table-row-background-color-hover`
- Selection: checkbox per row + select-all in header

---

## 5. Layout Principles
- **Grid**: Flexible; Spectrum provides spacing scale but not a fixed column grid
- **Density**: Medium by default (compact available for dashboards)
- **Spacing scale**: 4 / 8 / 12 / 16 / 24 / 32 / 40 / 48px
- **Panel model**: Left rail nav → main content → optional right detail panel (3-pane common)
- **Touch target minimum**: 32px (compact), 40px (regular)

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| 0 | none | Flat surfaces |
| 100 | `0 1px 4px rgba(0,0,0,0.12)` | Cards, popovers (light theme) |
| 200 | `0 2px 8px rgba(0,0,0,0.16)` | Dialogs |
| 400 | `0 8px 24px rgba(0,0,0,0.20)` | Full-screen overlays |

In dark mode, elevation is expressed by lightening the surface color, not by adding shadow.

---

## 7. Do's and Don'ts

**Do**
- Use semantic tokens — never hardcode a hex value
- Apply all four themes; test with dark + high contrast
- Use Adobe's icon set (Adobe Spectrum Icons) — never substitute
- Keep UI copy under 3 words for labels
- Use quiet variants for secondary actions to reduce visual weight

**Don't**
- Mix Spectrum light tokens into a dark theme context
- Use font sizes below 12px (legibility for aging professional users)
- Add decorative round avatars — Spectrum uses square with rounded corner
- Use layout components outside the Spectrum grid contract
- Override focus ring behavior — keyboard accessibility is mandatory

---

## 8. Responsive Behavior

| Breakpoint | Layout |
|---|---|
| < 640px | Touch-optimized, stacked single column, touch-sized components |
| 640–1024px | Two-column, compressed navigation rail |
| ≥ 1024px | Full multi-panel with navigation, main content, detail panel |

- Spectrum natively supports both pointer and touch via `@spectrum-css/expresswire` media queries
- In creative apps, panels become floating overlays on small screens
- Typography scales down one step on mobile

---

## 9. Agent Prompt Guide

**When generating Adobe Spectrum-style UI:**
> Apply the Spectrum enterprise-creative aesthetic. White (`#FFFFFF`) / Near-black (`#1E1E1E`) surfaces depending on theme. Static Blue `#1473E6` for all primary actions. Adobe Clean font (or system sans fallback), 0.875rem body, 700 heading weight. 16px radius on buttons; 4px base grid. Components are compact by default. Always reference semantic color tokens — never hardcode. Three-pane layout where appropriate: nav rail left, content center, detail panel right. Include dark and light theme token outputs.

**Avoid**: Hardcoded hex values, large decorative type, custom icon sets, non-standard button shapes, skipping the high-contrast theme.
