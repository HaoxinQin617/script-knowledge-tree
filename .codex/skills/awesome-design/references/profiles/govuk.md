# GOV.UK Design System

Source: https://design-system.service.gov.uk · By GDS (UK Government Digital Service)

## 1) Visual Theme & Atmosphere
The GOV.UK Design System is the model for government digital services worldwide. Every decision prioritises accessibility over aesthetics. Nothing is decorative. The visual language relies on whitespace, clear typographic hierarchy, high-contrast focus states, and a complete absence of ornament.

Mood: authoritative, clear, accessible, trustworthy, no-nonsense
Archetype: `premium-editorial` for public service (never commercial)
Density: airy; information is presented one logical step at a time.

## 2) Color Palette & Roles
| Token | Hex | Role |
|---|---|---|
| `$govuk-link-colour` | `#1D70B8` | Links |
| `$govuk-link-hover-colour` | `#003078` | Link hover |
| `$govuk-link-visited-colour` | `#4C2C92` | Visited links |
| `$govuk-link-active-colour` | `#0B0C0C` | Active link |
| `$govuk-text-colour` | `#0B0C0C` | Body text |
| `$govuk-secondary-text-colour` | `#505A5F` | Hint/caption text |
| `$govuk-error-colour` | `#D4351C` | Errors |
| `$govuk-success-colour` | `#00703C` | Success |
| `$govuk-focus-colour` | `#FFDD00` | Focus highlight background |
| `$govuk-focus-text-colour` | `#0B0C0C` | Text on focus background |
| `$govuk-border-colour` | `#B1B4B6` | Borders |
| `$govuk-input-border-colour` | `#0B0C0C` | Form input borders |
| Background | `#FFFFFF` | Page |
| `$govuk-canvas-background-colour` | `#F3F2F1` | Outer page/column |

The yellow focus ring (`#FFDD00`) is non-negotiable and brand-distinctive.

## 3) Typography Rules
Typeface: GDS Transport (proprietary, web-licensed only for GOV.UK services). Fallback: Helvetica Neue, Arial.
On non-GOV.UK services: use a neutral sans with similar character.

Scale (GovUK uses "size override" classes, not a named token list):

| Class | Size (desktop) | Size (mobile) | Weight | Use |
|---|---:|---:|---:|---|
| govuk-caption-xl | 27px | 18px | 400 | Large caption/kicker |
| govuk-heading-xl | 48px | 32px | 700 | Page title |
| govuk-heading-l | 36px | 24px | 700 | Section heading |
| govuk-heading-m | 24px | 18px | 700 | Sub-section heading |
| govuk-heading-s | 19px | 16px | 700 | Minor heading |
| govuk-body-l | 24px | 18px | 400 | Lead paragraph |
| govuk-body | 19px | 16px | 400 | Default body |
| govuk-body-s | 16px | 14px | 400 | Small print, captions |

Line height: 1.3125 (tight headings), 1.52 (body paragraphs).

## 4) Component Stylings
Buttons:
- Primary: `#00703C` fill, white text, 0px radius (completely square), 5px box-shadow depth illusion below
- Secondary: `#F3F2F1` fill, `#0B0C0C` text, no shadow
- Warning: `#D4351C` fill, white text
- All buttons: full-width on mobile

Form inputs:
- 2px black border, white background, 0px radius
- Focus: 3px solid `#FFDD00` outline, 1px solid `#0B0C0C` inner border
- Error: red left border + error message above input

Notification banner:
- Blue header bar + content area below for informational
- Red for interrupting/warning notifications

Summary list: two-column key/value pairs, bottom border per row, action link in third column.

## 5) Layout Principles
Grid: 960px max width, 12-column (gutter 20px desktop, 10px mobile). Heavy use of one-column-only on form pages.
Typography container: max ~630px for readable paragraphs.
One thing per page: GOV.UK design philosophy — each page asks one question or shows one set of information.

## 6) Depth & Elevation
None. GOV.UK actively avoids shadows and elevation. Depth is expressed through spacing and borders alone. The single exception: the primary button uses a `box-shadow: 0 2px 0` bottom edge to suggest tactility.

## 7) Do's and Don'ts
Do:
- Never suppress or override the yellow focus ring.
- Apply error messages above the relevant field, in red, always.
- Respect the "one thing per page" principle for multi-step flows.
- Use progressive disclosure — do not present all options at once.
- Keep labels above their inputs (never floating/inline).

Don't:
- Do not use rounded corners — 0px radius is a core principle.
- Do not add decorative images or illustrations.
- Do not use custom typefaces — GDS Transport or neutral fallback only.
- Do not reduce the 2px black input border.
- Do not hide the visited link color.

## 8) Responsive Behavior
- All layouts are single column on mobile.
- Typography sizes scale down on mobile (see scale table above).
- Navigation bar: full list on wide, hamburger on narrow.
- Touch target: 45px minimum.
- No sticky elements other than cookie banner.

## 9) Agent Prompt Guide
One-shot: "Use GOV.UK Design System: GDS Transport (or Arial) typeface, #1D70B8 link blue, #00703C primary button (square, no radius), #FFDD00 focus ring, #D4351C error colour, 2px black input borders, no shadows, no rounded corners, airy whitespace, one-thing-per-page information hierarchy."

Negative: Avoid all rounded corners, avoid decorative art, avoid suppressing the yellow focus ring, avoid multiple actions competing on a single screen.
