# Google Material Design 3 (Material You)

Source: https://m3.material.io · By Google

## 1) Visual Theme & Atmosphere
Material Design 3 (Material You) introduces dynamic color, expressiveness, and motion as first-class values. It moves away from rigid primary/accent duality toward a tonal color system generated from a single seed color. Products feel alive, personalized, and joyful.

Mood: expressive, accessible, dynamic, rounded, motion-forward
Archetype: `playful-gradient` with clean editorial backbone
Density: comfortable default, touch-optimized.

## 2) Color Palette & Roles
M3 uses a tonal palette system — seed color produces all roles via HCT color model.

| Role | Light | Dark |
|---|---|---|
| Primary | `#6750A4` (default purple seed) | `#D0BCFF` |
| On-Primary | `#FFFFFF` | `#381E72` |
| Primary Container | `#EADDFF` | `#4F378B` |
| Secondary | `#625B71` | `#CCC2DC` |
| Tertiary | `#7D5260` | `#EFB8C8` |
| Error | `#B3261E` | `#F2B8B5` |
| Surface | `#FFFBFE` | `#1C1B1F` |
| Surface Variant | `#E7E0EC` | `#49454F` |
| Outline | `#79747E` | `#938F99` |

Custom seeds override these HCT-derived values. In practice, most Google apps use blue/teal seeds that yield surfaces in the #E8F0FE, #F1F8E9 ranges.

## 3) Typography Rules
M3 type scale:

| Style | Size | Weight | Line Height |
|---|---:|---:|---:|
| Display Large | 57px | 400 | 64 |
| Display Medium | 45px | 400 | 52 |
| Display Small | 36px | 400 | 44 |
| Headline Large | 32px | 400 | 40 |
| Headline Medium | 28px | 400 | 36 |
| Headline Small | 24px | 400 | 32 |
| Title Large | 22px | 400 | 28 |
| Title Medium | 16px | 500 | 24 |
| Title Small | 14px | 500 | 20 |
| Body Large | 16px | 400 | 24 |
| Body Medium | 14px | 400 | 20 |
| Body Small | 12px | 400 | 16 |
| Label Large | 14px | 500 | 20 |
| Label Medium | 12px | 500 | 16 |
| Label Small | 11px | 500 | 16 |

Display uses Roboto (M2) or Google Sans/Google Sans Display (M3 apps). Body uses Roboto or Google Sans Text.

## 4) Component Stylings
Buttons (5 variants):
- Filled: Primary Container, full tonal fill
- Filled Tonal: Secondary Container background, contrasting text
- Outlined: transparent + Outline border
- Text: transparent, Primary colored label
- Elevated: Surface + level 1 shadow

FAB: Primary Container, 12dp or 16dp rounded, shadow

Cards:
- Elevated (box-shadow level 1), Filled (Surface Variant fill), Outlined (outline border)
- Corner radius: 12dp standard, 16dp large, 28dp extra-large for prominent surfaces

Chips: 8dp radius, outlined or elevated, 40px height

Navigation:
- Nav Bar (bottom): 80px tall, 3-5 destinations, icon + label
- Nav Rail (side, tablet): 80px wide, icon-only or icon+label
- Nav Drawer (full): 360px wide, label list

## 5) Layout Principles
Grid: 4dp base unit. 4/8/12 column layout depending on breakpoint.
Canonical layouts: List Detail, Supporting Panel, Feed, Single Pane

Density:
- Default density: 0 (comfortable)
- Dense: -1 or -2 (shrinks min touch target scale)

Motion:
- Container transform, Shared axis, Fade through, Fade — all standard transitions
- Emphasized easing (cubic-bezier(0.2, 0, 0, 1.0)) for impactful transitions
- Duration: 200ms short, 300ms medium, 500ms long

## 6) Depth & Elevation
Tonal elevation (dark mode): surface color tinted toward primary based on dp level — not traditional boxShadow.

| Level | Overlay opacity (dark) | Shadow (light) |
|---|---|---|
| 0 | 0% | none |
| 1 | 5% | `0 1px 2px rgba(0,0,0,0.3), 0 1px 3px 1px rgba(0,0,0,0.15)` |
| 2 | 8% | `0 1px 2px rgba(0,0,0,0.3), 0 2px 6px 2px rgba(0,0,0,0.15)` |
| 3 | 11% | `0 4px 8px 3px rgba(0,0,0,0.15)...` |

## 7) Do's and Don'ts
Do:
- Let the tonal color system express itself — containers using Primary/Secondary/Tertiary containers add depth.
- Use motion for transitions; never make interactions feel static.
- Apply state layers (hover, pressed, focused) as semi-transparent overlays on the base surface.
- Use rounded corners generously (12-28dp for cards/dialogs).

Don't:
- Do not use flat hex overrides — derive color roles from the M3 tonal system.
- Do not suppress motion on non-reduced-motion contexts.
- Do not render flat, borderless, non-elevated cards without background differentiation.
- Do not place text directly on a photo without a scrim.

## 8) Responsive Behavior
| Breakpoint | Width | Columns | Margin | Gutter |
|---|---|---|---|---|
| Compact | <600dp | 4 | 16dp | 8dp |
| Medium | 600-839dp | 12 | 24dp | 12dp |
| Expanded | ≥840dp | 12 | 24dp | 12dp |

- Bottom nav → Nav Rail at tablet (≥600dp) → Nav Drawer or Persistent Drawer at desktop.
- Dialogs become full-screen bottom sheets on compact.
- Touch target: 48×48dp minimum always.

## 9) Agent Prompt Guide
One-shot: "Use Material Design 3 — tonal color system from a purple/teal seed, Roboto or Google Sans typography, rounded corners (12-16dp for cards, 20dp for dialogs), tonal elevation (no gray shadows on dark), 5-level depth model, standard M3 motion easing curves, bottom navigation on mobile."

Negative: Avoid flat colorless surfaces, avoid sharp corners, avoid ignoring elevation tinting on dark surfaces, avoid static interaction states.

QA:
- Are tonal roles (Primary Container / On-Primary Container) correctly paired?
- Do cards use the standard corner radius scale?
- Is motion applied to navigation transitions?
- Does dark mode use tonal overlay model not just lightened grays?
