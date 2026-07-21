# Stacks (Stack Overflow Design System)

**URL**: https://stackoverflow.design/
**Archetype**: developer-minimal / Q&A platform
**Stack**: HTML/SCSS; Stimulus JS; applied across Stack Overflow, Stack Exchange network, Teams

---

## 1. Visual Theme & Atmosphere
Stacks is the design system behind Stack Overflow — one of the world's most content-dense developer Q&A platforms. The aesthetic is pragmatic and extremely legible: code and prose must be equally readable alongside community metadata (votes, accept status, badges). Stack Overflow Orange anchors the brand; everything else is secondary. Dark mode ("Darkness") is a deeply-integrated first-class citizen maintained since 2020.

---

## 2. Color Palette & Roles

| Token | Light | Dark | Role |
|---|---|---|---|
| Orange 400 | `#F48024` | `#F48024` | Brand primary, CTAs |
| Orange 500 | `#CC6600` | `#E8700A` | Hover state |
| Blue 600 | `#0064BD` | `#6DC6F6` | Links, interactive |
| Blue 100 | `#CCEAF7` | `#0C3551` | Info tint |
| Green 600 | `#1A8754` | `#1DB371` | Accepted answer, success |
| Green 100 | `#D4EDDA` | `#093020` | Accepted bg |
| Gold | `#FFD700` | `#FFD700` | Gold badge |
| Silver | `#B4B8BC` | `#B4B8BC` | Silver badge |
| Bronze | `#CD7F32` | `#CD7F32` | Bronze badge |
| Red | `#DE3B3B` | `#FF6666` | Destructive, close votes |
| Black 800 | `#0C0D0E` | — | Primary text light |
| Black 600 | `#3B4045` | — | Secondary text light |
| Black 350 | `#9199A1` | — | Muted text light |
| Black 75 | `#F1F2F3` | — | Hover bg light |
| Black 025 | `#F8F9F9` | — | Page bg light |
| White | `#FFFFFF` | `#2D2D2D` | Surface |
| Dark bg | `#1C1C1C` | — | Page bg dark |
| Dark text | `#CBD0D4` | — | Primary text dark |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| Site Name | Arial | 1.5rem | 700 |
| Question Title | Arial | 1.375rem | 400 |
| H1 | Arial | 1.5rem | 700 |
| H2 | Arial | 1.25rem | 700 |
| H3 | Arial | 1.125rem | 700 |
| Post Body | Arial | 0.9375rem | 400 |
| Comments | Arial | 0.8125rem | 400 |
| UI Labels | Arial | 0.75rem | 400 |
| Code | Consolas, Menlo, DejaVu Sans Mono | 0.875rem | 400 |

System fonts only — **Arial** for all UI. No custom web fonts. Code: Consolas-first monospace stack. This is deliberate: code readability > brand expression.

---

## 4. Component Styling

**Answer / Question Card**
- Vote count left (integer, up/down arrows)
- Accepted answer: green checkmark + green bg `#D4EDDA`
- Tags: gray pill `#E1ECF4` with blue text, no radius (actually 3px)
- View count: gray text, small size

**Code Blocks**
- Background: `#EFF0F1` (light) / `#2F2F30` (dark)
- 4px radius, 1rem padding, 1px border `#D6D9DC`
- Syntax highlighting via highlight.js or Prism

**Vote Control**
- Up arrow / vote count / down arrow (vertical stack)
- Voted: orange for upvote, blue for downvote
- Bookmark: acts like a save; yellow when active

**Badge Pill**
- Circular dot + count: ● 10 gold, ● 47 silver, ● 103 bronze

---

## 5. Layout Principles
- **Main layout**: Left sidebar (nav, tags) + main content + right sidebar (hot questions, ads)
- **Content max-width**: 728px for questions/answers (optimal reading)
- **Dense spacing**: 8px base; posts use minimal padding
- **Tag design**: Low-profile, gray pills — dozens may appear on one page
- **Voting sidebar**: 36px wide, vertically centered beside content

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat | `border: 1px solid #D6D9DC` | Post containers, code blocks |
| Hover | `background: #F1F2F3` | Interactive item hover |
| Dropdown | `box-shadow: 0 2px 8px rgba(0,0,0,0.12)` | Navigation dropdowns |
| Modal | `box-shadow: 0 8px 32px rgba(0,0,0,0.3)` | Overlay dialogs |

Stack Overflow avoids heavy shadows — borders are the primary visual separator.

---

## 7. Do's and Don'ts

**Do**
- Use borders not shadows as primary depth cue
- Ensure code blocks are accessible in both light and dark modes
- Show vote counts prominently — it's the community trust signal
- Use accepted-answer green for confirmed resolutions
- Support dark mode ("Darkness") — a significant % of SO users use it

**Don't**
- Use custom fonts — Arial is required for rendering consistency
- Use rounded corners on post containers — low radius (3px) or sharp only
- Deprioritise code block legibility for visual styling
- Use orange for anything other than brand/CTA (not warnings, not links)

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 640px | Right sidebar hidden, left sidebar collapses to horizontal tags |
| 640–980px | Single main column, hamburger |
| ≥ 980px | Three columns (left nav + main + right sidebar) |
| ≥ 1264px | Wider main column (980px max question body) |

---

## 9. Agent Prompt Guide

**When generating Stack Overflow Stacks-style UI:**
> Developer Q&A platform aesthetic. Orange `#F48024` brand CTAs only. Blue `#0064BD` links. Arial system font. Code blocks: `#EFF0F1`/`#2F2F30` bg, Consolas mono. Vote count left-column. Accepted: green `#1A8754` check + tinted bg. Tags: gray pill 3px radius. Borders not shadows. Three-column 980px layout. Light/dark mode. Dense information layout with generous code space.

**Avoid**: Custom fonts, heavy shadows, orange for non-brand elements, high-radius components.
