# shadcn/ui + Tailwind CSS Design Language

Source: https://ui.shadcn.com · Built on Radix UI + Tailwind CSS

## 1) Visual Theme & Atmosphere
shadcn/ui is a component collection (not a design system in the traditional sense) that prioritises copy-paste ownership, dark mode first, and maximum customisability via CSS variables. Its aesthetic is deliberately neutral — a clean canvas that developers are meant to adapt, not consume wholesale. The result is modern, minimal, slightly industrial.

Mood: neutral-modern, clean, developer-owned, dark-mode-first, highly adaptable
Archetype: `developer-minimal`
Density: balanced; elegant whitespace with accessible sizing.

## 2) Color Palette & Roles
shadcn/ui uses semantic CSS variables, not hardcoded hex values. Default "zinc" palette shown:

| Variable | Light | Dark | Role |
|---|---|---|---|
| `--background` | `oklch(1 0 0)` / `#FFFFFF` | `oklch(0.145 0 0)` / `#09090B` | Page bg |
| `--foreground` | `oklch(0.145 0 0)` | `oklch(0.985 0 0)` | Primary text |
| `--card` | `#FFFFFF` | `#09090B` | Card bg |
| `--card-foreground` | `#09090B` | `#FAFAFA` | Card text |
| `--primary` | `#18181B` | `#FAFAFA` | Primary action |
| `--primary-foreground` | `#FAFAFA` | `#18181B` | Text on primary |
| `--secondary` | `#F4F4F5` | `#27272A` | Secondary bg |
| `--secondary-foreground` | `#18181B` | `#FAFAFA` | Text on secondary |
| `--muted` | `#F4F4F5` | `#27272A` | Muted surface |
| `--muted-foreground` | `#71717A` | `#A1A1AA` | Muted text |
| `--accent` | `#F4F4F5` | `#27272A` | Highlight bg |
| `--destructive` | `#EF4444` | `#7F1D1D` | Error/danger |
| `--border` | `#E4E4E7` | `#27272A` | Borders |
| `--input` | `#E4E4E7` | `#27272A` | Input borders |
| `--ring` | `#18181B` | `#D4D4D8` | Focus ring |

Themes use `oklch` in newer Tailwind v4 configs. Color palettes swappable: slate, gray, zinc, neutral, stone.

## 3) Typography Rules
Typeface: font-sans CSS variable (typically Inter, Geist, or system-ui).
Code: font-mono (typically Geist Mono, JetBrains Mono, or system monospace).

Scale (Tailwind defaults, applied via utility classes):
| Class | Size | Leading |
|---|---|---|
| `text-xs` | 12px | 16px |
| `text-sm` | 14px | 20px |
| `text-base` | 16px | 24px |
| `text-lg` | 18px | 28px |
| `text-xl` | 20px | 28px |
| `text-2xl` | 24px | 32px |
| `text-3xl` | 30px | 36px |
| `text-4xl` | 36px | 40px |
| `text-5xl+` | 48-96px | 1 |

Heading weight: `font-semibold` (600) or `font-bold` (700). Body: `font-normal` (400).
Letter-spacing: `tracking-tight` (`-0.025em`) on headings, normal on body.

## 4) Component Stylings
Buttons (all via variant prop):
- default: `--primary` bg, `--primary-foreground` text, 6px radius
- destructive: `--destructive` bg, white text
- outline: `--border` border, transparent bg
- secondary: `--secondary` bg
- ghost: no border, no bg, hover reveals bg
- link: underline on hover only

Inputs:
- 1px `--input` border, `--background` fill, 6px radius, 36px height
- Focus: 2px ring, 2px offset, `--ring` color
- Placeholder text: `--muted-foreground`

Cards:
- `--card` bg, `--border` border, 8-12px radius, subtle shadow (`shadow-sm`)
- CardHeader + CardContent + CardFooter subcomponents

Sheets (drawers):
- Slide-in from top/bottom/right/left, full-height or content-sizing
- No overlay blur; semi-transparent scrim

Dialogs:
- Centered, max-w-lg by default, rounded-lg, shadow-lg
- Close button top-right

## 5) Layout Principles
Spacing scale: Tailwind default rem-based — 0 4 8 12 16 20 24 28 32 36 40 44 48 52 56 64...
Container: `max-w-sm` through `max-w-7xl`, centered with `mx-auto px-4`.
Typical page layout: sidebar (240px) + main, or full-bleed tabs with constrained content area.

## 6) Depth & Elevation
Shadow scale (Tailwind):
- `shadow-sm`: `0 1px 2px 0 rgba(0,0,0,.05)`
- `shadow`: `0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px -1px rgba(0,0,0,.1)`
- `shadow-md`: `0 4px 6px -1px rgba(0,0,0,.1)...`
- `shadow-lg`: `0 10px 15px -3px rgba(0,0,0,.1)...`

Dark mode depth: achieved through background-color steps from `--background` to `--card` to `--popover`.

## 7) Do's and Don'ts
Do:
- Swap color theme via global CSS variable overrides — never hardcode hex directly.
- Use dark mode from the start — it's the primary selling point.
- Apply `font-feature-settings: "rlig" 1, "calt" 1` for ligatures.
- Use Radix slot/composition patterns rather than overriding classes.

Don't:
- Do not use fixed hex colors — always `var(--token-name)`.
- Do not fight the Tailwind utility system with custom CSS unless necessary.
- Do not add decorative gradients to a neutral-first design language.
- Do not use heavy shadows on dark backgrounds.

## 8) Responsive Behavior
All layouts expressed via Tailwind responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`).
Default breakpoints: 640 / 768 / 1024 / 1280 / 1536px.
Mobile sidebar: `Sheet` component (slide-in drawer). Navigation collapses to hamburger.
Touch targets: 44px minimum via `min-h-11` Tailwind utilities (h-11 = 44px).

## 9) Agent Prompt Guide
One-shot: "Use shadcn/ui default theme: CSS variable token system (--background, --foreground, --primary, etc.), zinc palette, Inter or Geist typeface, dark mode default, 6px button radius, 8px+ card radius, `shadow-sm` for cards, Tailwind utility classes for all spacing, Radix-based accessible component composition."

Negative: Avoid hardcoded hex colors, avoid light-mode-only design, avoid custom CSS that fights the Tailwind token cascade.
