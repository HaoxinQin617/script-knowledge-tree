# Porsche Design System

**URL**: https://designsystem.porsche.com/
**Archetype**: premium-editorial
**Stack**: Web Components (vanilla JS), React, Angular, Vue wrappers; Porsche Next font

---

## 1. Visual Theme & Atmosphere
The Porsche Design System is ultra-premium automotive: zero-radius shapes, the proprietary Porsche Next typeface, photography-driven full-width layouts, and restrained use of the Porsche Red. The aesthetic is powerful, precise, and modern — engineering excellence expressed through design. Black and white dominate; red is a signature accent. The system feels expensive by what it omits: no gradients, no rounded corners, no unnecessary decoration.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Porsche Racing Red | `#D5001C` | CTAs, hover accents, brand |
| Porsche Red Dark | `#A8001A` | Button hover |
| Racing Gold | `#C39A1F` | Trim detail, special editions |
| Black | `#010205` | Primary headings, dark surfaces |
| Dark Gray | `#323849` | Secondary text |
| Steel | `#646973` | Neutral muted text |
| Silver | `#96989A` | Tertiary text, icons |
| Light Silver | `#C8CACB` | Borders, dividers |
| Light Gray | `#EBEBEB` | Alt surface, light section |
| Off White | `#F5F5F5` | Page background sections |
| White | `#FFFFFF` | Primary surface |
| State Hover | `rgba(0,0,0,0.06)` | Interactive hover tint |
| Focus | `outline: 2px solid #D5001C` | Focus indicator |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| Display | Porsche Next | 5rem | 700 |
| H1 | Porsche Next | 3rem | 700 |
| H2 | Porsche Next | 2rem | 700 |
| H3 | Porsche Next | 1.5rem | 700 |
| H4 | Porsche Next | 1.25rem | 500 |
| Body (lg) | Porsche Next | 1.25rem | 400 |
| Body | Porsche Next | 1rem | 400 |
| Small | Porsche Next | 0.875rem | 400 |
| Caption | Porsche Next | 0.75rem | 400 |
| Button | Porsche Next | 1rem | 700 |

**ALL CAPS** for buttons, primary navigation items, and category labels. Letter-spacing: `0.1em` on caps text. No radius anywhere.

---

## 4. Component Styling

**Buttons**
- Zero border radius (rectangular)
- Primary: Black fill, white ALL CAPS label
- Secondary: White / transparent, black border, black ALL CAPS label
- Hover: Red fill `#D5001C` for primary, red text for secondary
- Size: sm(40px) / md(48px) / lg(56px) height

**Hero Banner**
- Full viewport width, full-height image
- Headline overlaid on image, bottom-left alignment
- White headline (Porsche Next Display), subtitle, CTA button
- Gradient scrim: `linear-gradient(to top, rgba(1,2,5,0.6), transparent)`

**Model Cards**
- Full-bleed vehicle photography
- Black overlay bottom bar: model name, price, CTA
- Zero radius, sharp edges

**Link**
- Underline style with red hover
- Arrow icon (→) appended inline

---

## 5. Layout Principles
- **Grid**: 12 columns, 1920px max-width (full bleed), 16–24px gutters
- **Spacing scale**: 8px base (8, 16, 24, 32, 48, 64, 80, 96, 120)
- **Full bleed sections**: Vehicle photography sections run edge-to-edge
- **Section alternation**: White→black alternating content sections
- **Navigation**: Fixed top bar, transparent on hero; white opaque on scroll scroll

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat (default) | None | All standard UI elements |
| Subtle | `0 2px 8px rgba(1,2,5,0.1)` | Product configurator overlay panels |
| Sticky nav | `0 1px 4px rgba(1,2,5,0.15)` | Header after scroll |
| Flyout | `0 4px 16px rgba(1,2,5,0.25)` | Nav mega menu |
| Modal | `0 8px 32px rgba(1,2,5,0.4)` | Overlay dialogs |

---

## 7. Do's and Don'ts

**Do**
- Use zero-radius on ALL interactive elements (buttons, inputs, cards, modals)
- Use ALL CAPS for buttons/CTAs with letter-spacing `0.1em`
- Lead every section with full-bleed vehicle photography
- Reserve Porsche Red `#D5001C` for hover states and accent — not fill on static UI
- Use Porsche Next for all text — it is a core brand requirement

**Don't**
- Round any corners — zero radius is a design pillar
- Use gradients in UI elements (only in image scrim overlays)
- Use red as the static background of buttons — it is a hover/accent state
- Add unnecessary copy — the aesthetic is minimal and powerful by silence

---

## 8. Responsive Behavior

| Breakpoint | Layout |
|---|---|
| < 760px | Single column, stacked hero, hamburger nav |
| 760–1000px | Two-column vehicle grid |
| 1000–1300px | Three-column, horizontal nav |
| ≥ 1300px | Full layout, multi-column, up to 1920px full bleed |

Nav: fixed transparent on hero → opaque white on scroll → hamburger below 1000px.

---

## 9. Agent Prompt Guide

**When generating Porsche Design System-style UI:**
> Ultra-premium automotive aesthetic. ZERO border radius everywhere. Porsche Next font (fallback sans-serif). Black `#010205` primary, Racing Red `#D5001C` hover/accent only. ALL CAPS buttons with 0.1em letter-spacing, 48px height. Full-bleed vehicle photography. Alternating white/black sections. Gradient scrim overlays. 8px spacing base. No decoration — power through restraint.

**Avoid**: Any border radius, gradients on UI elements, red button backgrounds at rest, informal typefaces.
