# U.S. Web Design System (USWDS)

Source: https://designsystem.digital.gov · By 18F / GSA (U.S. Federal Government)

## 1) Visual Theme & Atmosphere
USWDS is the design system for U.S. federal government websites. It synthesises federal accessibility law (Section 508), WCAG 2.1 AA, and modern web standards into an opinionated token-first system. Like GOV.UK, it values clarity and accessibility over novelty — but it is warmer in color and more flexible in typography.

Mood: civic, trustworthy, accessible, clear, neutral-to-warm
Archetype: `developer-minimal` for public service
Density: airy; optimized for a broad public audience including low-literacy and assistive technology users.

## 2) Color Palette & Roles
USWDS uses a "magic number" 10-step palette where each step is paired with its accessible text color.

| Token | Hex | Role |
|---|---|---|
| `blue-60v` | `#005EA2` | Primary (link, button) |
| `blue-70v` | `#1A4480` | Hover |
| `blue-80v` | `#162E51` | Active |
| `red-50v` | `#E31C3D` | Error, critical alert |
| `green-cool-50v` | `#168740` | Success alert |
| `gold-20v` | `#FFBE2E` | Warning |
| `gray-2` | `#F9F9F9` | Page background |
| `gray-5` | `#F0F0F0` | Panel background |
| `gray-10` | `#E6E6E6` | Horizontal rules |
| `gray-70` | `#454545` | Body text |
| `gray-90` | `#1B1B1B` | Heading text |
| `white` | `#FFFFFF` | Container/card bg |
| `indigo-cool-20v` | `#C5C3DE` | Subtle info tint |
| Focus indicator | `#0050d8` outline | Focus ring |

## 3) Typography Rules
Typefaces:
- Headings: Merriweather (serif) — conveys gravitas and federal authority
- Body: Source Sans Pro (now Source Sans 3) — legible body text for diverse reading levels
- Code: Roboto Mono

Scale:

| Token | Size | Weight | Line Height | Use |
|---|---:|---:|---:|---|
| font-size-3xs | 12px | — | — | Fine print |
| font-size-2xs | 13px | — | — | Caption |
| font-size-xs | 14px | — | — | Small |
| font-size-sm | 15px | — | — | Default body |
| font-size-md | 16px | — | — | Normal body |
| font-size-lg | 17px | — | — | Lead/intro |
| font-size-xl | 19px | — | — | Large/hook |
| font-size-2xl | 24px | — | — | H3/section label |
| font-size-3xl | 31px | — | — | H2 |
| font-size-4xl | 40px | — | — | H1 |
| font-size-5xl | 48px | — | — | Hero display |
| font-size-6xl | 56px | — | — | Display XL |

Heading weight: 700 (Merriweather). Body weight: 400. Lead paragraph: 400.

## 4) Component Stylings
Buttons:
- Primary: `#005EA2` fill, white text, 4px radius
- Outline/Secondary: white fill, `#005EA2` border + text
- Base: gray-20 fill, gray-90 text
- Unstyled: no fill/border
- Big size: 60px height, 20px padding

Form inputs:
- 1px `gray-50` border, white bg, 4px radius
- Focus: 2px solid `usaBlueFocus` + 2px offset  
- Error: left border `red-50v` + red error message above

Alert banners (four types):
- Info: blue tint strip with blue icon
- Success: green tint
- Warning: gold strip (always dark text on gold)
- Error: red tint

## 5) Layout Principles
Grid: CSS Grid and Flexbox. 12-column grid.
Max width containers: 1024px, 640px (narrow page forms), or full-bleed for hero sections.
Spacing: 8px base unit, multiples: 8, 16, 24, 32, 40, 48, 56, 80.

Page structure follows U.S. standards: skip link → header → main (landmark) → footer.

## 6) Depth & Elevation
Minimal shadow use. Primary card shadow: `0 1px 3px 0 rgba(0,0,0,0.1)`. 
Modal: `0 0 0 2px rgba(0,0,0,0.1), 0 2px 8px 0 rgba(0,0,0,0.2)`.
Background differentiation (panel bg vs page bg) reduces need for heavy shadow.

## 7) Do's and Don'ts
Do:
- Meet WCAG 2.1 AA minimum; target AAA for body text.
- Include a visible skip-navigation link at the top of every page.
- Use the two-serif/sans system consistently — Merriweather for headings, Source Sans for body.
- Mark required fields and error conditions unambiguously.
- Add accessible labels and help text on every form element.

Don't:
- Do not use decorative images that add no meaning (use `alt=""`).
- Do not rely on color alone to communicate status or error.
- Do not remove the visible focus indicator.
- Do not use fonts below 14px.
- Do not place white text on gold/yellow backgrounds.

## 8) Responsive Behavior
- Mobile breakpoint: 320px minimum supported.
- Sidebar navigation becomes drawer on mobile.
- Tables should include horizontal scroll or card transformation on mobile.
- Touch targets: 24×24px minimum, 44×44px recommended.
- Reading line length: max 72 characters per line.

## 9) Agent Prompt Guide
One-shot: "Use USWDS: Merriweather for headings + Source Sans Pro for body text, #005EA2 primary action blue, 4px corner radius, 8px spacing base, four-type alert system (info/success/warning/error), accessible skip-navigation, 12-column grid up to 1024px max width, WCAG 2.1 AA minimum contrast."

Negative: Avoid decorative elements, avoid color-only status indicators, avoid removing skip nav links or focus indicators, avoid fonts below 14px.
