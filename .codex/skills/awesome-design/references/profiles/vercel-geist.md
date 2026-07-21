# Vercel Geist

**URL**: https://vercel.com/geist/introduction
**Archetype**: developer-minimal
**Stack**: React; CSS Variables; Geist font (open-source); used on vercel.com and dashboard

---

## 1. Visual Theme & Atmosphere
Vercel Geist is perhaps the purest expression of the "dark = light" design philosophy in production. Vercel open-sourced both Geist Sans and Geist Mono alongside their design system. The aesthetic is maximum restraint: black and white with extreme precision, 0px or 6px radius, and a near-total absence of decorative colour. Developer credibility is communicated through technical precision rather than brand colour. The dark theme is not an afterthought — it's the primary experience.

---

## 2. Color Palette & Roles

| Token | Light | Dark | Role |
|---|---|---|---|
| Background | `#FFFFFF` | `#000000` | Page background |
| Background Secondary | `#FAFAFA` | `#111111` | Surface secondary |
| Surface | `#FFFFFF` | `#0A0A0A` | Card/panel |
| Surface Raised | `#FFFFFF` | `#111111` | Elevated card |
| Border | `#EAEAEA` | `#333333` | Default border |
| Border Strong | `#CCCCCC` | `#444444` | Input, focused border |
| Text Primary | `#000000` | `#FAFAFA` | Headings, primary text |
| Text Secondary | `#666666` | `#888888` | Body, descriptions |
| Text Tertiary | `#999999` | `#555555` | Muted, placeholder |
| Blue | `#0070F3` | `#3291FF` | Links, info |
| Blue Dark | `#005ACC` | `#0070F3` | Hover |
| Success | `#0070F3` | `#50E3C2` | Successful deployments |
| Error | `#E00000` | `#FF0000` | Build failures, errors |
| Warning | `#F5A623` | `#F5A623` | Warning states |
| Purple | `#7928CA` | `#9C27B0` | AI, Vercel Edge |
| Pink | `#FF0080` | `#FF4488` | Feature accent, new |
| Teal | `#50E3C2` | `#50E3C2` | Deployed/online status |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| Display | Geist Sans | 3.5rem | 700 |
| H1 | Geist Sans | 2.5rem | 700 |
| H2 | Geist Sans | 2rem | 600 |
| H3 | Geist Sans | 1.5rem | 600 |
| H4 | Geist Sans | 1.25rem | 600 |
| Body | Geist Sans | 0.875rem | 400 |
| Body (lg) | Geist Sans | 1rem | 400 |
| Small | Geist Sans | 0.75rem | 400 |
| Code | Geist Mono | 0.8125rem | 400 |
| CLI / Terminal | Geist Mono | 0.875rem | 400 |

**Geist Sans** — designed specifically for Vercel, geometric sans with excellent screen rendering. **Geist Mono** — for all code, CLI, file paths, deployment logs. Both open-source on GitHub.

---

## 4. Component Styling

**Deployment Cards**
- Border `1px solid #EAEAEA` (light) / `#333` (dark)
- Deployment status dot: Teal (ready), Red (error), Yellow (building), Gray (canceled)
- Tiny branch name + commit hash in Geist Mono
- Time ago: secondary text

**Buttons**
- Primary: Black fill (light) / White fill (dark), white/black label, 6px radius
- Secondary: Border `#EAEAEA`/`#333`, transparent bg
- Ghost: transparent, no border
- Danger: Red fill/border for destructive
- Size: sm(28px) / md(32px) / lg(40px) height

**Code Blocks / CLI**
- Dark `#0A0A0A` background always (even in light mode)
- Green `#50E3C2` prompt `$` prefix
- Geist Mono, 14px
- Copy icon top-right

**Status Badges**
- Tiny pill: colour dot + label
- Ready: teal; Error: red; Building: yellow; Canceled: gray

---

## 5. Layout Principles
- **Dashboard**: Left sidebar 220px + main content
- **Spacing**: 4px grid (4, 8, 12, 16, 24, 32, 48, 64)
- **Content card**: 12px padding (small), 24px (standard)
- **Max-width**: 1280px dashboard; full-bleed marketing
- **Marketing**: Full-viewport sections, centered content, 1200px max

---

## 6. Depth & Elevation

| Level | Value (Light) | Value (Dark) | Usage |
|---|---|---|---|
| Flat | `border: 1px solid #EAEAEA` | `border: 1px solid #333` | Cards, inputs |
| Raised | `0 2px 8px rgba(0,0,0,0.04)` | `0 2px 8px rgba(0,0,0,0.4)` | Hoverable cards |
| Dropdown | `0 4px 16px rgba(0,0,0,0.1)` | `0 4px 16px rgba(0,0,0,0.5)` | Menus |
| Modal | `0 8px 40px rgba(0,0,0,0.15)` | `0 8px 40px rgba(0,0,0,0.8)` | Dialogs |

---

## 7. Do's and Don'ts

**Do**
- Default to dark mode — it's the Vercel way
- Use Geist Sans and Geist Mono (they're open source — no licensing issues)
- Use borders not shadows as primary elevation signal (dark mode shadows rarely work)
- Use teal `#50E3C2` for "deployed/online" status
- Use purple/pink for AI and edge features specifically

**Don't**
- Add brand colour that isn't in the system — Vercel's power is in restraint
- Use shadows on dark backgrounds (they disappear)
- Use more than one accent colour per feature
- Add decorative gradient backgrounds in the dashboard (only on marketing)

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 640px | Sidebar collapses to bottom tab bar |
| 640–1024px | Icon-only collapsible sidebar |
| ≥ 1024px | Full sidebar with labels |
| ≥ 1280px | Max-width container |

---

## 9. Agent Prompt Guide

**When generating Vercel Geist-style UI:**
> Maximum restraint developer aesthetic. Black on white (light) / white on black (dark). Geist Sans 0.875rem body, Geist Mono for all code/CLI. 0px–6px radius. Primary button: Black fill (light) / White fill (dark). Borders not shadows as depth cue. Teal `#50E3C2` = deployed/online. Blue `#0070F3` links. Deployment status dots. Dark code blocks always. Purple/pink for AI features. 4px spacing grid.

**Avoid**: Decorative brand colours, gradients in dashboard, shadows on dark, custom fonts.
