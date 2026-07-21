# Aurora — Government of Canada Design System

**URL**: https://design.gccollab.ca/
**Archetype**: civic-accessible
**Stack**: Web Components, Vanilla CSS

---

## 1. Visual Theme & Atmosphere
Calm federal authority. Aurora presents the Government of Canada online presence as structured, bilingual, and trustworthy — approachable without being casual. Surfaces are white and light-gray; the interface recedes so content leads. Navigation is dense but predictable; no visual surprise is ever the goal. The overall feel is clean newspaper meets official letterhead.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| GC Blue | `#26374A` | Primary interactive, header backgrounds |
| Canada Red | `#AF3C43` | Accent, error states, flags |
| Link Blue | `#2B4380` | Body link color |
| Focus Yellow | `#FFBF47` | Keyboard focus ring |
| White | `#FFFFFF` | Page surface |
| Light Gray | `#EAEBED` | Section backgrounds, dividers |
| Text Dark | `#333333` | Body text |
| Text Muted | `#767676` | Captions, metadata |
| Success Green | `#278400` | Form success |
| Warning Amber | `#EE7100` | Warnings |

WCAG AA on all text/background pairings is mandatory. Focus yellow is the same ring treatment as GOV.UK.

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| Heading 1 | Noto Sans | 2rem | 700 |
| Heading 2 | Noto Sans | 1.5rem | 700 |
| Heading 3 | Noto Sans | 1.25rem | 600 |
| Body | Lato | 1rem / 1.6 | 400 |
| Small / caption | Lato | 0.875rem | 400 |
| French emphasis | Same faces — no separate weight |

Both Noto Sans and Lato are loaded from Google Fonts; they render cleanly across Windows/macOS/Android. All type must remain legible in both English and French at equivalent hierarchy levels.

---

## 4. Component Styling

**Buttons**
- Primary: `#26374A` fill, white text, 0px radius (square), 1px border
- Secondary: white fill, `#26374A` border, `#26374A` text
- Hover: 10% darkened fill; slight underline on links
- Focus: `2px solid #FFBF47` focus ring, 2px offset

**Forms**
- Input: 1px border `#767676`, white fill, 4px radius
- Label above input always; placeholder is supplemental
- Error: Red `#AF3C43` border + message below field
- Required asterisk: `*` in red

**Breadcrumb**
- Always present on interior pages; links separated by `>` chevron
- Current page not linked, visually muted

**Navigation**
- Top-of-page horizontal mega-menu; collapsed on mobile to hamburger
- Bilingual toggle (EN/FR) in header top-right, always visible

---

## 5. Layout Principles
- **Grid**: 12-column, max-width 1200px, 20px gutters
- **Baseline**: 8px grid
- **Page structure**: GC header → breadcrumb → page title → content → GC footer (mandatory)
- **Content width**: Long-form text max ~70ch for readability
- **Bilingual**: Side-by-side EN/FR on some pages; stacked on mobile

---

## 6. Depth & Elevation

Shadow is used sparingly — only for modals and dropdown menus:

| Level | Usage |
|---|---|
| 0 | Flat (default surfaces) |
| 1 | `0 2px 4px rgba(0,0,0,0.12)` — cards, panels |
| 2 | `0 4px 12px rgba(0,0,0,0.16)` — modals |

No decorative shadows. No blurs. All elevation is structural.

---

## 7. Do's and Don'ts

**Do**
- Always include both official languages in navigation-critical elements
- Use the GC header and footer — mandated for official government sites
- Put focus rings on every interactive element
- Use plain language (reading level ≤ Grade 8)
- Ensure text meets 4.5:1 contrast ratio minimum

**Don't**
- Use decorative animations or parallax
- Use non-standard fonts (only Noto Sans + Lato)
- Hide language toggle or make it secondary
- Remove the GC wordmark from the header
- Use color alone to convey meaning

---

## 8. Responsive Behavior

| Breakpoint | Layout |
|---|---|
| < 576px | Single column; stacked header; hamburger nav |
| 576–992px | 2-col grids; condensed header |
| ≥ 992px | Full 12-col; mega-menu navigation |

- Touch targets: 44×44px minimum
- Navigation collapses to fullscreen overlay on mobile
- Tables scroll horizontally; `overflow-x: auto` required
- Bilingual stacking: EN above, FR below on narrow viewports

---

## 9. Agent Prompt Guide

**When generating Aurora/GC-style UI:**
> Apply a clean, flat, bilingual civic aesthetic. White page surface, GC Blue (`#26374A`) header, Canada Red (`#AF3C43`) accent. Use Noto Sans for headings, Lato for body. Square corners (0px radius) on buttons, 4px on inputs. Yellow focus rings (`#FFBF47`). Structure every page with: GC header → breadcrumb → H1 → content → GC footer. Include EN/FR toggle. No animations, no shadows on flat surfaces. Write all UI strings in plain language. Mandatory 4.5:1 contrast on all text.

**Avoid**: Decorative elements, rounded buttons, any font other than Noto Sans/Lato, hiding language toggles, custom header/footer layouts.
