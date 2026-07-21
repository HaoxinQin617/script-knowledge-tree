# Ontario Design System

**URL**: https://designsystem.ontario.ca/
**Archetype**: civic-accessible
**Stack**: HTML/SCSS, Ontario Design System web components (custom elements)

---

## 1. Visual Theme & Atmosphere
The Ontario Design System is the provincial government standard for ontario.ca digital services. It inherits from the GOV.UK / Aurora lineage — accessibility-first, accessible to all Ontarians including low-digital-literacy users. The aesthetic is clean and institutional: Ontario Blue trustfully anchors the brand, with generous white space and clear hierarchy. It also follows French/English bilingual requirements throughout.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Ontario Blue | `#1A5276` | Primary brand, header, CTAs |
| Blue Hover | `#154462` | Button hover state |
| Blue Dark | `#103450` | Visited links |
| Medium Blue | `#0066CC` | Text links |
| Link Hover | `#004C99` | Link hover |
| Government Gold | `#FBBC2E` | Ontario logo / provincial accent |
| Success Green | `#1B7A4A` | Confirmation, success |
| Warning Yellow | `#F9A81D` | Warning |
| Error Red | `#CD0E13` | Error, critical |
| White | `#FFFFFF` | Page background |
| Off-white | `#F2F2F2` | Section alternates |
| Light Gray | `#DBDCDD` | Borders, dividers |
| Mid Gray | `#6D6E71` | Secondary text |
| Body Text | `#1A1A1A` | Primary text |
| Black | `#000000` | Headers, bold elements |
| Focus Yellow | `#FFCD00` | Focus indicator |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| H1 | Raleway | 2.5rem | 700 |
| H2 | Raleway | 2rem | 700 |
| H3 | Raleway | 1.5rem | 700 |
| H4 | Raleway | 1.25rem | 700 |
| H5 | Raleway | 1.125rem | 700 |
| H6 | Open Sans | 1rem | 700 |
| Body | Open Sans | 1rem | 400 |
| Lead | Open Sans | 1.25rem | 400 |
| Small | Open Sans | 0.875rem | 400 |
| Label/UI | Open Sans | 0.875rem | 600 |

Bilingual: English and French content must be equally legible. Body max-width: 65ch.

---

## 4. Component Styling

**Critical Alerts**
- Full-width banner, red `#CD0E13` left border 4px
- Bold title + body text, dismiss button top-right

**Steps / Progress Indicator**
- Numbered step circles: Ontario Blue fill for completed, outline for upcoming
- Mobile: vertical stack; Desktop: horizontal timeline

**Callout**
- Blue left border 4px with tinted `#EAF0F6` background
- Used for supplementary information in service journeys

**Language Toggle**
- Fixed top-right: "Français / English"
- Persistent across all ontario.ca properties

**Footer**
- Ontario logo + social links + legal links
- Ontario Blue top border 4px, gray background `#EDEDED`

---

## 5. Layout Principles
- **Grid**: 12-column, 1200px max-width, 24px gutters
- **Spacing scale**: 4px base (4, 8, 12, 16, 24, 32, 48, 64)
- **Single form question per page** (GDS convention)
- **Breadcrumbs** mandatory on all interior pages
- **Language toggle**: persistent, accessible toggle

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat | None | All primary content |
| Card | `0 1px 4px rgba(0,0,0,0.12)` | Feature panels |
| Alert banner | 4px solid left border | Status messages |
| Focus | `outline: 3px solid #FFCD00` | Keyboard focus |

---

## 7. Do's and Don'ts

**Do**
- Support English and French equally throughout
- Use yellow focus indicator `#FFCD00` — provincial accessibility standard
- Follow "one question per page" for all transactional forms
- Provide breadcrumb navigation on every interior page
- Use Ontario Blue `#1A5276` as the consistent CTA colour

**Don't**
- Use custom typefaces — Raleway + Open Sans are mandated
- Create dark mode variants (not currently in the system)
- Use decorative UI elements on service journey pages
- Omit French language support in any transactional component

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 640px | Single column, stacked nav, hamburger |
| 640–1024px | Two columns, collapsible sidebar |
| ≥ 1024px | Full three-column layout |
| ≥ 1200px | Max container width |

---

## 9. Agent Prompt Guide

**When generating Ontario Design System-style UI:**
> Canadian provincial civic aesthetic. Ontario Blue `#1A5276` headings and CTAs. Raleway 700 for H1–H5, Open Sans body. Medium Blue `#0066CC` links. Yellow focus `#FFCD00`. Clean white pages with 4px-grid spacing. 4px left-border callouts, numbered step components. Bilingual EN/FR toggle. 12-col 1200px grid. Flat surfaces, minimal shadow. Government trustworthiness over decoration.

**Avoid**: Custom fonts, dark mode, decorative imagery in service journeys, missing French language support.
