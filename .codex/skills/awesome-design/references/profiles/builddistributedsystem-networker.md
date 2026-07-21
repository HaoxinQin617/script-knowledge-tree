# BuildDistributedSystems

**URL**: https://builddistributedsystem.com
**Archetype**: `neo-brutalist` / `high-contrast-light`

---

## 1) Visual Theme & Atmosphere

A light, cream-surfaced design system with a deliberately raw, high-contrast aesthetic. Structure is communicated through thick black borders and offset drop shadows rather than colour or shadow depth — every element feels physically stamped on the page. This visual language is bold and authoritative without being dark; it would work equally well for a blog, a company site, a product page, or a portfolio.

- **Product context**: Any content-forward site that wants a confident, modern light aesthetic with strong structure, clear hierarchy, and a graphic, editorial personality.
- **Brand mood keywords**: bold, structured, editorial, graphic, high-contrast, tactile
- **Density strategy**: moderate — clear vertical rhythm and generous section spacing; content panels are prominent and well-separated
- **Personality contrast**: raw graphic structure + approachable warmth from the cream base; authoritative without being cold or sterile

---

## 2) Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| `bg.base` | `#F2EFE8` | Page / outermost background (warm cream) |
| `bg.surface` | `#F7F5F0` | Card and panel backgrounds (lighter cream) |
| `bg.sidebar` | `#EBEEf4` | Sidebar / secondary panel background (cool off-white) |
| `bg.elevated` | `#FFFFFF` | Nav bar, modal, topmost surfaces |
| `fg.primary` | `#111111` | Primary text, headings, borders |
| `fg.secondary` | `#444444` | Secondary labels, metadata, captions |
| `fg.muted` | `#888888` | Placeholder, disabled, fine print |
| `accent.yellow` | `#F5C518` | Yellow — difficulty / level badge |
| `accent.blue` | `#4A7CC7` | Blue — category badge, numbered track marker |
| `accent.tag` | `#B8C8E0` | Light blue-gray — concept / keyword tags |
| `border.default` | `#111111` | Standard border (always near-black, never gray) |
| `shadow.offset` | `3px 3px 0 #111111` | Offset drop shadow on cards and buttons |
| `success` | `#22C55E` | Success, completed, positive |
| `warning` | `#EAB308` | Warning, in-progress |
| `error` | `#EF4444` | Error, failed |

**Contrast notes**:
- `fg.primary #111111` on `bg.base #F2EFE8`: 16.9:1 — AAA ✓
- `fg.primary #111111` on `bg.surface #F7F5F0`: 17.5:1 — AAA ✓
- `fg.secondary #444444` on `bg.base #F2EFE8`: 7.6:1 — AAA ✓
- Never use `fg.muted` for interactive text — contrast drops below 3:1 on light surfaces.

---

## 3) Typography Rules

- **Primary family**: Bold grotesque sans-serif (e.g. `"Space Grotesk"`, `"IBM Plex Sans"`, or `system-ui`) — heavy weights (700–900) are prominent; the design relies on weight rather than size for hierarchy
- **Body family**: Same grotesque family at regular weight (400–500), fallback `system-ui, -apple-system, sans-serif`
- **Monospace family**: `"IBM Plex Mono"`, fallback `"Fira Code", monospace` — used only for labels that benefit from fixed-width alignment (counters, identifiers, progress indicators)

| Role | Size | Weight | Case | Use |
|---|---:|---:|---|---|
| Hero / H1 | 36px | 900 | UPPERCASE | Page titles, track names |
| H2 | 22px | 800 | UPPERCASE | Section headings |
| H3 | 18px | 700 | UPPERCASE | Card / panel headings, sub-track titles |
| Body Large | 18px | 400 | Sentence | Intro / description paragraphs |
| Body | 16px | 400 | Sentence | General content |
| Body Small | 14px | 400 | Sentence | Secondary descriptions |
| Caption | 13px | 500 | UPPERCASE | Breadcrumbs, metadata labels |
| Badge / Label | 12px | 700 | UPPERCASE | Category badges, difficulty labels |
| Counter / ID | 14px | 700 | — | Numeric counters, task IDs (monospace) |

**Rules**:
- Headings are all-caps. Do not use mixed-case for section or card headings.
- Typography weight does the heavy lifting for hierarchy — do not rely on size alone.
- Body text is the only element in mixed-case sentence style.
- Monospace is reserved for identifiers, counters, and fixed-width data only.

---

## 4) Component Stylings

### Buttons

| Variant | Background | Border | Shadow | Text | Radius | Use |
|---|---|---|---|---|---|---|
| Primary | `#111111` | `2px solid #111111` | `3px 3px 0 #111111` | `#FFFFFF` | 0px | Primary CTA, main action |
| Secondary | `#F7F5F0` | `2px solid #111111` | `3px 3px 0 #111111` | `#111111` | 0px | Secondary actions |
| Tag / Badge | `accent.tag #B8C8E0` | `2px solid #111111` | none | `#111111` | 0px | Keyword tags, concept chips |
| Disabled | `#E0DDD7` | `2px solid #888888` | none | `fg.muted` | 0px | — |

- No border-radius — buttons and chips are square-cornered throughout.
- Hover (Primary): shadow shifts to `4px 4px 0 #111111`, slight `translate(-1px, -1px)` lift.
- Hover (Secondary): background shifts to `#EDEAE3`.
- Focus ring: `outline: 3px solid #111111; outline-offset: 2px`.
- Minimum height: 40px; 44px for touch targets.

### Inputs

- Background: `#FFFFFF`
- Border: `2px solid #111111`
- Border focus: `2px solid #111111` + `box-shadow: 3px 3px 0 #111111`
- Text: `fg.primary`
- Placeholder: `fg.muted`
- Radius: 0px
- Height: 40px

### Cards / Content Panels

- Background: `bg.surface #F7F5F0`
- Border: `2px solid #111111`
- Radius: 0px (square corners throughout)
- Padding: 24px
- Drop shadow: `3px 3px 0 #111111` (offset — not blurred)
- Hover: shadow shifts to `5px 5px 0 #111111`, slight `translate(-2px, -2px)` lift
- Number badge (top-left accent): solid color square (`accent.blue`), white number, bold — identifies the item's position or ID
- Cards accommodate any content shape: articles, features, team members, product tiers — the structural treatment is content-agnostic

### Navigation

- Top nav: white (`bg.elevated #FFFFFF`), `border-bottom: 2px solid #111111`, height ~60px
- Logo left (icon + site name), nav links centered (desktop), CTA button right
- Active nav link: `fg.primary` color + `2px solid #111111` underline
- Hover: `fg.primary` with underline fade-in
- Mobile: hamburger → full-height overlay drawer, cream background, links stacked
- Breadcrumb: `fg.secondary`, uppercase caption size, `/` separator

### Progress Indicators

- Track progress: horizontal bar, `border: 2px solid #111111`, filled segment in `fg.primary` (black)
- Completion dots: solid black circle for completed, open circle for pending
- Never use color alone to indicate progress state — pair with a label or percentage

### Tag / Concept Chips

- Background: `accent.tag #B8C8E0`
- Border: `2px solid #111111`
- Text: `fg.primary`, uppercase, 12px 700
- Radius: 0px
- Padding: `4px 10px`

### Difficulty & Category Badges

- Yellow (`accent.yellow #F5C518`): difficulty / level indicator — border `2px solid #111111`
- Blue (`accent.blue #4A7CC7`): category / type indicator — border `2px solid #111111`
- Text: `fg.primary`, uppercase, 12px 700, on yellow; `#FFFFFF` on blue
- Radius: 0px

---

## 5) Layout Principles

- **Grid model**: 12-column CSS Grid; gutter 24px; detail pages use a main content + sidebar split (~65% / ~35%)
- **Container widths**:
  - Max content width: `1280px`
  - Main content column: `~760px`
  - Sidebar column: `~380px`
  - Full-bleed: not used — all content is constrained within the max-width container
- **Spacing scale** (8px base):
  `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96px`
- **Rhythm / whitespace rules**:
  - Section padding: `64px` top/bottom on desktop, `40px` on mobile
  - Card gap: `16px`
  - Heading margin-bottom: `12px`
  - Body paragraphs: `1em` bottom margin
  - Section heading uses a thick left border accent: `border-left: 4px solid #111111; padding-left: 12px`

---

## 6) Depth & Elevation

The system uses **offset drop shadows** rather than blurred shadows or background lightness shifts for elevation. All depth signals are hard-edged and visible.

| Level | Background | Border | Shadow / Effect | Usage |
|---|---|---|---|---|
| 0 | `#F2EFE8` | — | — | Page canvas |
| 1 | `#F7F5F0` | `2px solid #111111` | `3px 3px 0 #111111` | Cards, panels |
| 2 | `#F7F5F0` | `2px solid #111111` | `5px 5px 0 #111111` | Hover state, focused panels |
| 3 | `#FFFFFF` | `2px solid #111111` | `5px 5px 0 #111111` | Modals, dropdowns |
| Nav | `#FFFFFF` | `border-bottom: 2px solid #111111` | — | Sticky navigation |

**Shadow rules**:
- Shadows are always hard-edged and offset — never blurred (`blur: 0` always).
- Shadow color is always `#111111` — never gray or colored.
- Do not use `box-shadow` with spread/blur for decorative depth — this undermines the neo-brutalist flatness.

---

## 7) Do's and Don'ts

**Do**
- Use thick (2px+) solid near-black borders on every card, button, input, and badge.
- Apply the offset hard shadow (`3px 3px 0 #111111`) to all interactive and card elements.
- Use all-caps for all headings, section labels, and badge text.
- Use heavy font weight (700–900) as the primary hierarchy signal.
- Use color badges (yellow, blue) to classify content — always pair with a text label.
- Maintain the cream/off-white warm background as the consistent base layer.
- Dark mode should completely invert the color palette.

**Don't**
- Do not round corners — all elements are square-cornered (0px radius).
- Do not use blurred box shadows — offset hard shadows only.
- Do not use gradient fills on any element.
- Do not use color for text hierarchy — use weight and size instead.
- Do not represent status with color alone — always pair with a label or shape.
- Do not use thin (< 400 weight) text — minimum weight 400 at all sizes.

---

## 8) Responsive Behavior

| Breakpoint | Width | Behavior |
|---|---|---|
| `xs` | < 480px | Single column, full-width cards, 16px body |
| `sm` | 480–767px | Single column, 16px horizontal padding |
| `md` | 768–1023px | Main + sidebar stacks vertically, nav condenses |
| `lg` | 1024–1279px | Main + sidebar side by side (~65/35), full nav |
| `xl` | ≥ 1280px | Max-width container centered, full layout |

- **Touch target minimum**: 44×44px for all interactive controls
- **Layout collapse behavior**:
  - Sidebar moves below main content at `md` and below
  - Sticky nav collapses to hamburger menu at `md` and below
  - Card grids collapse from multi-column to single column at `sm`
  - Tag chip rows wrap naturally; no horizontal scroll
- **Mobile nav pattern**: Hamburger → slide-in full-screen overlay, cream background, links stacked at 20px body, close button top-right

---

## 9) Agent Prompt Guide

**One-shot prompt for generating a page from this design system:**
> Build a page using the BuildDistributedSystem Networker visual style. Warm cream background `#F2EFE8`, card surfaces `#F7F5F0`, nav white `#FFFFFF`. All borders `2px solid #111111`. All cards and buttons use an offset hard drop shadow `3px 3px 0 #111111` — no blur. No border-radius anywhere. Primary font: bold grotesque (Space Grotesk or IBM Plex Sans), headings 700–900 weight ALL-CAPS. Body 16px/400 sentence-case. Yellow `#F5C518` for level/difficulty badges; blue `#4A7CC7` for category badges; light blue-gray `#B8C8E0` for keyword/concept chips. Primary button: black `#111111` bg, white text. Sidebar uses `#EBEEf4`. Section headings have a `4px solid #111111` left border accent. 12-column grid, 1280px max-width, 8px spacing base. Focus ring: `3px solid #111111, offset 2px`. Light mode only. No blurred shadows. No gradients. No rounded corners.

**Negative prompt (what to avoid):**
- No blurred / soft box shadows — offset hard shadows only
- No rounded corners (no border-radius)
- No gradient fills on any element
- No color-only status indicators
- No lowercase or sentence-case headings
- No thin fonts (< 400 weight)
- No serif typography

**Fast checklist for review:**
- [ ] Background is warm cream (`#F2EFE8` / `#F7F5F0`)
- [ ] All borders are `2px solid #111111`
- [ ] All cards and buttons have offset hard shadow `3px 3px 0 #111111`
- [ ] No border-radius — all corners are square
- [ ] All headings are uppercase and heavy weight (700+)
- [ ] Badge colors: yellow for level, blue for category, light blue-gray for tags
- [ ] Primary CTA button is solid black with white text
- [ ] Section headings have a thick black left-border accent
- [ ] Touch targets ≥ 44px on all interactive controls
- [ ] Status indicators use shape or label alongside any color
