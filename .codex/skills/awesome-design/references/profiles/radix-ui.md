# Radix UI

**URL**: https://www.radix-ui.com/
**Archetype**: developer-minimal / primitives
**Stack**: React headless primitives + optional Themes package

---

## 1. Visual Theme & Atmosphere
Radix UI is not a visual brand system by default; it is a foundational primitive layer focused on accessibility, composability, and control. The visual atmosphere is intentionally neutral and unopinionated. When used with `@radix-ui/themes`, the aesthetic is clean, modern, and token-driven with subtle defaults. Radix is the backbone for many custom systems (including shadcn/ui). Its identity is engineering rigor more than visual identity.

---

## 2. Color Palette & Roles

Radix Colors provides scale-based palettes (1–12) and alpha scales for each hue, with semantic pairings for light and dark mode.

| Token Example | Light Hex | Dark Hex | Role |
|---|---|---|---|
| `gray-1` | `#fcfcfc` | `#111111` | Page background |
| `gray-2` | `#f9f9f9` | `#191919` | Surface |
| `gray-6` | `#e8e8e8` | `#3a3a3a` | Border |
| `gray-11` | `#646464` | `#b4b4b4` | Secondary text |
| `gray-12` | `#202020` | `#eeeeee` | Primary text |
| `blue-9` | `#0090ff` | `#0090ff` | Primary interactive |
| `blue-10` | `#0588f0` | `#3b9eff` | Hover/active |
| `red-9` | `#e5484d` | `#e5484d` | Error/destructive |
| `green-9` | `#30a46c` | `#30a46c` | Success |
| `amber-9` | `#ffb224` | `#ffb224` | Warning |

Radix encourages semantic mapping:
- `--color-background`
- `--color-panel`
- `--color-border`
- `--color-text`
- `--color-accent`

---

## 3. Typography Rules

Radix primitives do not mandate typography. Radix Themes default stack:

| Role | Face | Size | Weight |
|---|---|---|---|
| Display | Inter/system sans | 2.5rem | 700 |
| H1 | Inter/system sans | 2rem | 700 |
| H2 | Inter/system sans | 1.5rem | 700 |
| H3 | Inter/system sans | 1.25rem | 600 |
| Body | Inter/system sans | 0.875rem | 400 |
| Small | Inter/system sans | 0.75rem | 400 |
| Code | ui-monospace | 0.8125rem | 400 |

If integrating Radix into an existing brand system, inherit brand typography via CSS tokens.

---

## 4. Component Styling

**Core Primitive Traits**
- Accessibility-first (ARIA, keyboard nav, focus management)
- Controlled/uncontrolled APIs
- Portals for overlays (`Dialog`, `Popover`, `DropdownMenu`)
- Composable parts (`Root`, `Trigger`, `Content`, `Item`)

**Dialog**
- Backdrop + centered content
- Escape key closes by default
- Focus trap and return-focus implemented

**DropdownMenu**
- Nested menus, checkbox/radio items, keyboard arrows
- Collision detection and side offsets

**Tabs**
- Horizontal or vertical orientation
- Controlled value API
- Strong indicator and active semantics

**Toast**
- Swipe gestures, viewport anchoring, pause-on-hover

---

## 5. Layout Principles
- Radix doesn't enforce grids/layouts; pair with CSS grid/flex utilities
- Common pairing: 4px/8px spacing scales and token-driven radius
- For Radix Themes defaults:
  - Radius scale: none / small / medium / large / full
  - Space scale: 1–9
- Encourage composition: primitives + utility CSS + custom design tokens

---

## 6. Depth & Elevation

Radix primitives expose structure; depth is user-defined.
Typical Radix Themes defaults:

| Level | Value | Usage |
|---|---|---|
| Surface | `border: 1px solid var(--gray-6)` | Cards/panels |
| Floating | `0 4px 16px rgba(0,0,0,0.12)` | Menus, popovers |
| Modal | `0 12px 40px rgba(0,0,0,0.18)` | Dialog |

---

## 7. Do's and Don'ts

**Do**
- Use Radix primitives for accessible behavior rather than reinventing overlay logic
- Map Radix colors to your semantic tokens early
- Preserve focus outlines and keyboard interaction defaults
- Compose components rather than forking primitive internals
- Use data attributes (`data-state`, `data-side`) for styling transitions

**Don't**
- Assume Radix provides full visual design by itself (unless using Radix Themes)
- Remove focus rings for aesthetic reasons
- Override portal layering without a z-index system
- Mix multiple headless libraries for the same primitive class in one app

---

## 8. Responsive Behavior

Radix primitives are responsive by composition, not by built-in breakpoints:
- Use container-aware styles for component sizing
- Adjust menu/dialog sizes with CSS media queries
- Use touch-target minimum 44px on mobile
- Preserve keyboard parity on desktop and mobile hardware keyboards

---

## 9. Agent Prompt Guide

**When generating Radix-style UI:**
> Build with accessible headless primitives. Use Radix parts APIs (`Root`, `Trigger`, `Content`, etc.), preserve keyboard navigation and focus management. Style through semantic CSS variables mapped from Radix Colors (1–12 scales). Neutral minimal visual language unless brand tokens are provided. Keep overlays portal-based with consistent z-index. Use `data-state` and `data-side` attributes for animations and state styling.

**Avoid**: Removing focus outlines, hardcoding colors instead of semantic tokens, assuming Radix includes complete branded visuals.
