# GitHub Primer

Source: https://primer.style · By GitHub

## 1) Visual Theme & Atmosphere
Primer is GitHub's design system powering github.com. It is developer-first in every sense: information-dense, keyboard-navigable, with heavy use of monospace for code, status indicators, and tight link affordances. Both light and dark themes are equally first-class.

Mood: developer-native, precise, neutral, keyboard-first, systematic
Archetype: `developer-minimal`
Density: compact–medium; surfaces prioritize scan-ability over breathing room.

## 2) Color Palette & Roles
Primer uses functional color roles with two scales (light + dark):

| Role | Light hex | Dark hex | Use |
|---|---|---|---|
| `fg.default` | `#1F2328` | `#E6EDF3` | Primary text |
| `fg.muted` | `#636C76` | `#848D97` | Secondary text |
| `fg.subtle` | `#6E7781` | `#6E7681` | Placeholder, fine print |
| `canvas.default` | `#FFFFFF` | `#0D1117` | Page background |
| `canvas.subtle` | `#F6F8FA` | `#161B22` | Secondary panel bg |
| `canvas.inset` | `#F6F8FA` | `#010409` | Inset surface (dark well) |
| `border.default` | `#D0D7DE` | `#30363D` | Borders, dividers |
| `border.muted` | `#D8DEE4` | `#21262D` | Subtle lines |
| `accent.fg` | `#0969DA` | `#58A6FF` | Links, interactive |
| `accent.emphasis` | `#0969DA` | `#1F6FEB` | Active/selected |
| `success.fg` | `#1A7F37` | `#3FB950` | Merged, open, success |
| `success.emphasis` | `#1F883D` | `#238636` | Bold success |
| `danger.fg` | `#D1242F` | `#F85149` | Closed, error, danger |
| `attention.fg` | `#9A6700` | `#D29922` | Draft, warning |
| `severe.fg` | `#BC4C00` | `#DB6D28` | High severity |
| `open.fg` / `closed.fg` | PR status colors | | |

## 3) Typography Rules
Typeface stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji"`
Code: `ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace`

Scale:

| Role | Size | Weight | Line Height |
|---|---:|---:|---:|
| h1 | 32px | 600 | 1.25 |
| h2 | 24px | 600 | 1.25 |
| h3 | 20px | 600 | 1.25 |
| h4-h6 | 16px | 600 | 1.25 |
| body | 16px | 400 | 1.5 |
| body-small | 14px | 400 | 1.43 |
| caption | 12px | 400 | 1.33 |
| code inline | 85% of context | 400 | inherit |

## 4) Component Stylings
Buttons:
- Default: white/`canvas.subtle` bg, `border.default` border, `fg.default` text
- Primary: `#2DA44E` green bg, white text, 6px radius
- Danger: `danger.fg` color, white text on danger bg
- Invisible: no border/bg, text color link
- Size: small (28px), medium (32px), large (40px)
- Focus ring: 3px solid `accent.emphasis` offset 2px

Labels/badges (PR/Issue state):
- Issue Open: `forestgreen` bg circle icon
- PR Open: similar — `success.emphasis`
- Merged: purple (`#8250DF`)
- Closed: `fg.muted`
- Draft: gray ring

Timeline items: avatar + action description + timestamp — standard pattern throughout.
Diff view: green/red line-level highlights, hunk headers in blue.
Code blocks: dark muted bg, syntax highlighted.

## 5) Layout Principles
Max width: 1280px (repository content area)
Nav header: 64px sticky
Left sidebar (profile/settings): 220px
Content area +gutter: flexible

Spacing: 8px base, multiples: 4, 8, 16, 24, 32, 48, 64.
Repository page: 3-panel on wide screens (file tree + content + outline).

## 6) Depth & Elevation
- Light: very subtle shadows (`0 1px 0 rgba(27,31,35,.04)`, `0 2px 4px rgba(27,31,35,.1)`)
- Dark: elevation through background-lightening steps — `canvas.default` → `canvas.subtle` → `canvas.overlay`
- Overlays: `0 8px 24px rgba(140,149,159,.2)` light / dark variant uses rgba(1,4,9,...) base

## 7) Do's and Don'ts
Do:
- Use monospace for all code, hashes, version numbers, and addresses.
- Express PR/issue status through color + label (never color alone).
- Preserve the exact canonical state colors — they are brand-recognizable.
- Keep action buttons small; this is a density-optimized interface.

Don't:
- Do not remove the status color palette — users recognise green=open, purple=merged globally.
- Do not use large typography or significant whitespace on data tables.
- Do not design for light-mode only — dark mode is equally important.
- Do not use rounded corners > 6px on most controls.

## 8) Responsive Behavior
- File tree sidebar collapses on mobile.
- Repository header wraps on narrow viewports.
- Markdown content uses `max-width: 780px; margin: auto` for readability.
- Touch targets: 44px minimum.
- Mobile collapses 3-panel to single column.

## 9) Agent Prompt Guide
One-shot: "Use GitHub Primer: system sans-serif stack at 16px body, monospace for all code/hashes, `canvas.default/#0D1117` dark mode page bg, `fg.default/#E6EDF3` primary text, `accent.fg/#58A6FF` links, 6px border radius, 8px spacing base, status labels using canonical PR/Issue state colors, compact information density."

Negative: Avoid large decorative typography, avoid oversized whitespace, avoid custom status color schemes that would override globally-recognized GitHub state colors.
