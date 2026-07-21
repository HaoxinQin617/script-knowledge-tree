# JetBrains Ring UI

**URL**: https://jetbrains.github.io/ring-ui
**Archetype**: developer-minimal (IDE-adjacent)
**Stack**: React; CSS Modules; bespoke icon set

---

## 1. Visual Theme & Atmosphere
Ring UI is JetBrains' design system for web-based IDE interfaces and developer tooling — most visible in YouTrack, TeamCity, Hub, and Upsource. The aesthetic is a native-app-quality web interface that feels at home alongside IntelliJ IDEA. Dark and light modes are equal first-class citizens. The visual language is clean, intentional, and developer-optimized — dense enough for complex workflows yet never overwhelming.

---

## 2. Color Palette & Roles

Light theme:

| Token | Light | Dark | Role |
|---|---|---|---|
| Blue | `#0074E8` | `#5C84DB` | Primary interactive |
| Green | `#3D8B3D` | `#59A869` | Success |
| Red | `#C21A1A` | `#F75454` | Error/danger |
| Orange | `#CB7700` | `#FFC66D` | Warning |
| Purple | `#7B61FF` | `#AF9CF3` | Accent / brand JetBrains |
| Bg Primary | `#FFFFFF` | `#3C3F41` | Main surface |
| Bg Secondary | `#EFEFF1` | `#46494B` | Panel backgrounds |
| Bg Active | `#D5D5D5` | `#4E5254` | Selected/active row |
| Text Primary | `#1A1A1A` | `#BBBBBB` | Default text |
| Text Muted | `#808080` | `#787878` | Secondary/muted |
| Border | `#C8C8C8` | `#555555` | Default border |

JetBrains Purple `#7B61FF` is for brand moments (loading animations, brand features) not standard interactive.

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| H1 | JetBrains Sans | 20px | 700 |
| H2 | JetBrains Sans | 15px | 700 |
| H3 | JetBrains Sans | 13px | 600 |
| Body | JetBrains Sans | 13px | 400 |
| Small | JetBrains Sans | 11px | 400 |
| Code | JetBrains Mono | 13px | 400 |

JetBrains Sans and JetBrains Mono are open source. Base is 13px — IDE-native density. All sizes in `px`, not `rem`. Sentence case UI labels.

---

## 4. Component Styling

**Buttons**
- Primary: `#0074E8` fill, white text, 4px radius
- Secondary: `#EFEFF1` fill, foreground border
- Ghost: transparent, no border, blue text
- Danger: Red fill
- Heights: 24px (compact) / 28px (default) / 32px (large)

**List / Tree**
- Core navigation: tree with expand/collapse
- Row height: 20–24px; highlighted with `#D5D5D5`
- Context menu on right-click pattern

**Tag / Label**
- Inline tags for issue labels, file types
- Rounded 2px; customizable background + foreground

**Dropdown / Select**
- Inline dropdown with search filter
- Popup below field; keyboard navigation

---

## 5. Layout Principles
- **Grid**: App-level three-pane (sidebar + main + detail), not page grid
- **Spacing**: 4px base; 4/8/12/16/20/24px scale
- **Density**: COMPACT by design — 13px font, 24px row heights
- **Toolbars**: Icon-dense horizontal toolbars with tooltips on hover

---

## 6. Depth & Elevation

| Level | Shadow | Usage |
|---|---|---|
| 0 | none | Flat panels |
| 1 | `0 1px 4px rgba(0,0,0,0.1)` | Cards, popups |
| 2 | `0 4px 16px rgba(0,0,0,0.15)` | Dialogs |

Dark mode elevates via brightening the surface color, not adding shadow.

---

## 7. Do's and Don'ts

**Do**
- Use dark and light mode equivalently — JetBrains devs use both
- Use 13px base font — this is intentional developer density
- Use JetBrains Mono for all code, file paths, identifiers
- Use keyboard shortcuts wherever possible; show on hover tooltips
- Apply right-click context menus as primary secondary actions

**Don't**
- Use 16px base — too large for the intended density
- Use decorative gradient fills
- Use purple as primary interactive (brand/accent only)
- Apply marketing-style large heading type in application panels

---

## 8. Responsive Behavior

Ring UI is desktop/IDE-first. Not designed for mobile.

| Breakpoint | Behavior |
|---|---|
| ≥ 1024px | Full three-pane layout |
| < 1024px | Panels partially collapse; some toolbars compress |

---

## 9. Agent Prompt Guide

**When generating JetBrains Ring UI-style UI:**
> Apply JetBrains' IDE-adjacent developer aesthetic. Light mode: `#EFEFF1` panels, white main. Dark: `#3C3F41` panels, `#46494B` bg. Primary blue `#0074E8`. JetBrains Sans 13px body, JetBrains Mono for code. 4px radius. 24px row heights. Three-pane shell. Dense toolbars with icon buttons + tooltips. Tree/list navigation. Context menus on right-click. Focus: blue ring. No decorative gradients.

**Avoid**: 16px+ base fonts, marketing-style typography, purple as interactive color, mobile-first assumptions.
