# Firefox Photon Design System

**URL**: https://design.firefox.com/photon
**Archetype**: developer-minimal
**Stack**: HTML/CSS, Web Components (Firefox browser chrome and Firefox web properties)

---

## 1. Visual Theme & Atmosphere
Photon is Mozilla's design language for Firefox — expressing the values of the open web: personal, approachable, and trustworthy without being corporate or sterile. The atmospheric tone is warm-neutral with Firefox's iconic orange as the signature accent. Photon serves both the browser chrome (native-adjacent) and Firefox-branded web properties. It communicates: open, safe, and authentically yours — not big tech.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Firefox Orange | `#FF9500` | Brand primary, highlights |
| Firefox Orange Dark | `#D76E00` | Interactive hover |
| Blue 60 | `#0060DF` | Primary interactive (links, buttons) |
| Blue 50 | `#0A84FF` | Interactive lighter / dark mode |
| Blue 40 | `#45A1FF` | Focus ring |
| Ink 90 | `#0C0C0D` | Heading text |
| Ink 70 | `#38383D` | Body text |
| Ink 40 | `#B1B1B3` | Muted text, placeholders |
| Grey 90 | `#0C0C0D` | Dark surface |
| Grey 20 | `#EDEDF0` | Light secondary surface |
| Grey 10 | `#F9F9FA` | Background light |
| White | `#FFFFFF` | Primary surface |
| Red 60 | `#D70022` | Error |
| Green 60 | `#058B00` | Success |
| Yellow 60 | `#D7B600` | Warning |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| Display | Fira Sans | 2.5rem | 700 |
| H1 | Fira Sans | 2rem | 700 |
| H2 | Fira Sans | 1.5rem | 600 |
| H3 | Fira Sans | 1.25rem | 600 |
| Body | Fira Sans | 1rem / 1.5 | 400 |
| Small | Fira Sans | 0.875rem | 400 |
| Code / CLI | Fira Mono | 0.875rem | 400 |

Fira typeface family designed for Mozilla — open source, excellent screen rendering. Carries Firefox brand identity while being freely available. All labels sentence case.

---

## 4. Component Styling

**Buttons**
- Primary: `#0060DF` fill, white text, 4px radius
- Secondary: transparent, `#0060DF` border
- Ghost: `rgba(12,12,13,0.1)` fill, Ink 90 text
- Destructive: Red 60 `#D70022`
- Height: 32px standard, 24px small
- Focus: `0 0 0 1px #0A84FF, 0 0 0 3px rgba(10,132,255,0.3)`

**Navigation**
- Clean top nav on Firefox web properties
- No mega-menu; simple horizontal links
- Active: `#FF9500` orange underline
- Firefox logo left; account/sign-in right

**Message Bar**
- Full-width notification bars (error/info/success)
- Left-bordered alert (4px solid status color)
- Dismissible with × icon

---

## 5. Layout Principles
- **Grid**: 12-column; 16px gutters; max 1200px
- **Spacing**: 8px base; Photon uses 4/8/12/16/24/32px standard
- **Content**: Article/doc pages max 800px

---

## 6. Depth & Elevation

| Level | Shadow | Usage |
|---|---|---|
| 0 | none | Flat standard surfaces |
| 10 | `0 1px 4px rgba(12,12,13,0.1)` | Toolbars, cards |
| 20 | `0 2px 8px rgba(12,12,13,0.12)` | Menus, popovers |
| 30 | `0 4px 16px rgba(12,12,13,0.15)` | Dialogs |

---

## 7. Do's and Don'ts

**Do**
- Use Orange `#FF9500` for brand identity — not as primary interactive
- Use Blue 60 `#0060DF` for all interactive elements
- Use Fira Sans — it is the Mozilla/Firefox open-source typeface
- Apply focus rings on all keyboard-interactive elements
- Keep UI copy clear and user-first (Mozilla tone: direct, no jargon)

**Don't**
- Use orange for primary buttons — it is accent-only
- Apply dense enterprise patterns — Photon is approachable not corporate
- Skip dark mode — Firefox products require it
- Use commercial typefaces in Firefox-branded properties

---

## 8. Responsive Behavior

| Breakpoint | Layout |
|---|---|
| < 480px | Single column; hamburger nav |
| 480–768px | Two-column |
| ≥ 768px | Multi-column; full nav |

---

## 9. Agent Prompt Guide

**When generating Firefox Photon-style UI:**
> Apply Mozilla's open-web aesthetic. White background `#F9F9FA`, body `#38383D`. Interactive blue `#0060DF`. Firefox Orange `#FF9500` accent (brand/highlights only — not CTAs). Fira Sans (or system sans), 1rem body, 4px radius. Simple horizontal nav with orange active underline. Message bars: left-border alert style. Clean 12-column layout, max 1200px. Focus rings: `0 0 0 3px rgba(10,132,255,0.3)`. Dark mode supported.

**Avoid**: Orange as primary button color, enterprise density, commercial typefaces.
