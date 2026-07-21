# Singapore Government Design System (SGDS)

**URL**: https://www.designsystem.tech.gov.sg/
**Archetype**: civic-accessible
**Stack**: HTML/SCSS Bootstrap-based + Web Components; used by Singapore government agencies on .gov.sg

---

## 1. Visual Theme & Atmosphere
The Singapore Government Design System (SGDS) establishes a unified visual identity for all Singapore government digital services. It emphasises trust, clarity, and digital-first accessibility for Singapore's diverse multilingual population. The palette anchors on a distinctive purple (representing SGов digital transformation) contrasted with smart neutrals. It follows WCAG 2.1 AA and the Digital Service Standards (DSS) of Singapore's GovTech.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Purple | `#5925DC` | Primary brand, CTAs |
| Purple Dark | `#4A1EA3` | Hover, active |
| Purple Light | `#F3EEFF` | Selected tint, badges |
| Blue | `#1C6EAA` | Links, secondary actions |
| Blue Light | `#D9EBFA` | Info alerts, note backgrounds |
| Green | `#0A7D40` | Success |
| Yellow | `#F59B00` | Warning |
| Red | `#D41A1A` | Error, danger |
| Gray 900 | `#1A1A1A` | Primary text |
| Gray 700 | `#4D4D4D` | Secondary text |
| Gray 500 | `#808080` | Muted/disabled |
| Gray 300 | `#BFBFBF` | Borders |
| Gray 100 | `#F5F5F5` | Section backgrounds |
| White | `#FFFFFF` | Page background |
| Focus | `#0000FF` | Browser-native focus ring |
| Singapore Red | `#EF3340` | Government flag accent (header only) |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| H1 | Hind | 2.5rem | 700 |
| H2 | Hind | 2rem | 700 |
| H3 | Hind | 1.5rem | 600 |
| H4 | Hind | 1.25rem | 600 |
| H5 | Hind | 1.125rem | 600 |
| H6 | Hind | 1rem | 600 |
| Body (lg) | Hind | 1.125rem | 400 |
| Body | Hind | 1rem | 400 |
| Small | Hind | 0.875rem | 400 |
| Label | Hind | 0.875rem | 600 |

Hind supports Devanagari script alongside Latin — suitable for Singapore's multilingual population. Body max-width: 75ch.

---

## 4. Component Styling

**Masthead (Mandatory)**
- All gov.sg sites MUST display the official Singapore government masthead:
  ```
  🇸🇬 A Singapore Government Agency Website
  ```
  Purple `#5925DC` full-width top strip, white text.

**Navigation (Mega Menu)**
- Top horizontal nav with flyout mega-menu
- Mobile: hamburger with accordion navigation

**Notification Banner**
- Full-width, colour-coded by severity
- Dismissible with × button

**Accordion**
- Plus/minus icon, full-width trigger
- Smooth expand animation

**Form Pattern**
- SGDS follows GOV.UK / Aurora one-thing-per-page pattern
- Label above input always, hint text below label
- Error message: red `#D41A1A` below field, red border

---

## 5. Layout Principles
- **Grid**: Bootstrap 12-column, 1200px max container
- **Spacing**: Bootstrap spacing scale (0.25rem increments), 8px base
- **Breadcrumbs**: Mandatory on all interior pages
- **Footer**: Singapore government standard footer with agency contact info
- **Masthead**: Always present and undisguised

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat | None | All standard content |
| Card | `0 2px 8px rgba(0,0,0,0.08)` | Feature cards |
| Dropdown | `0 4px 12px rgba(0,0,0,0.15)` | Navigation mega-menus |
| Modal | `0 8px 24px rgba(0,0,0,0.25)` | Dialog overlays |
| Sticky | `0 2px 4px rgba(0,0,0,0.1)` | Sticky header |

---

## 7. Do's and Don'ts

**Do**
- Always include the official Singapore government masthead
- Use WCAG 2.1 AA contrast ratios throughout
- Follow the Digital Service Standards (DSS) for form journeys
- Apply breadcrumbs on all interior pages
- Use the mandatory footer template with agency details

**Don't**
- Remove or obscure the mandatory Singapore Government masthead
- Use purple `#5925DC` as background in long-form reading contexts
- Create custom navigation outside the approved patterns
- Omit bilingual support where the target audience may include non-English speakers

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 576px | Single column, hamburger, stacked footer |
| 576–768px | Two-column content |
| 768–992px | Condensed horizontal nav |
| ≥ 992px | Full mega-menu navigation, multi-column content |

---

## 9. Agent Prompt Guide

**When generating SGDS-style UI:**
> Singapore government digital service aesthetic. Mandatory: purple `#5925DC` masthead top strip "A Singapore Government Agency Website". CTAs in purple. Hind typeface. Blue `#1C6EAA` links. Gov red `#EF3340` flag header accent. Bootstrap 12-column. Breadcrumbs on interior pages. White pages with gray `#F5F5F5` section alternates. WCAG 2.1 AA. One-question-per-page forms. Mandatory government footer.

**Avoid**: Removing masthead, dark mode, custom nav patterns, purple backgrounds for body text.
