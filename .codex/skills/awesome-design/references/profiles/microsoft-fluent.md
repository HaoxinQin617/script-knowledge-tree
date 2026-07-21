# Microsoft Fluent UI 2

Source: https://fluent2.microsoft.design · By Microsoft

## 1) Visual Theme & Atmosphere
Fluent 2 is Microsoft's cross-platform design system spanning web, Windows 11, Teams, Office, and Xbox. It introduces Mica (translucent background material) and Acrylic (glass blur), layered lighting, and a distinctly modern-Windows premium feel.

Mood: productive, premium, translucent, layered, accessible, cross-platform
Archetype: `enterprise-data` meets `premium-editorial`
Density: comfortable by default; compact mode available.

## 2) Color Palette & Roles
Fluent uses a brand color slot that teams/products can override. Default Office/Teams palette shown:

| Token | Hex | Role |
|---|---|---|
| `colorBrandBackground` | `#0078D4` | Primary action (Teams/Office blue) |
| `colorBrandBackgroundHover` | `#106EBE` | Hover |
| `colorBrandBackgroundPressed` | `#005A9E` | Pressed |
| `colorNeutralBackground1` | `#FFFFFF` | Card / Layer 1 |
| `colorNeutralBackground2` | `#F5F5F5` | Layer 2 subtle |
| `colorNeutralBackground3` | `#F0F0F0` | Layer 3 subtle |
| `colorNeutralBackground4` | `#EBEBEB` | Inset surface |
| `colorNeutralStroke1` | `#D1D1D1` | Default border |
| `colorNeutralForeground1` | `#242424` | Primary text |
| `colorNeutralForeground2` | `#424242` | Secondary text |
| `colorNeutralForeground3` | `#616161` | Tertiary/placeholder |
| `colorStatusSuccessBackground3` | `#107C10` | Success |
| `colorStatusWarningBackground3` | `#FFC83D` | Warning |
| `colorStatusDangerBackground3` | `#C50F1F` | Error/danger |

Dark mode uses `colorNeutralBackground1: #1A1A1A`, neutral foreground scales invert.

## 3) Typography Rules
Typeface: Segoe UI Variable (variable font) on Windows; system-ui fallback on other platforms.

Scale:
| Token | Size | Weight | Line Height |
|---|---:|---:|---:|
| caption2 | 10px | 400 | 14 |
| caption1 | 12px | 400 | 16 |
| body1 | 14px | 400 | 20 |
| body2 | 12px | 400 | 16 |
| subtitle2 | 12px | 600 | 16 |
| subtitle1 | 16px | 600 | 22 |
| title3 | 20px | 600 | 28 |
| title2 | 24px | 600 | 32 |
| title1 | 28px | 600 | 36 |
| largeTitle | 40px | 600 | 52 |
| display | 68px | 600 | 92 |

Segoe UI Variable adjusts optical weight, letter spacing, and vertical metrics across sizes automatically — lean into this, don't override manually.

## 4) Component Stylings
Buttons:
- Primary: brand bg, white text, 4px radius (default), 40px height
- Secondary: neutral stroke outline, neutral bg, brand text
- Subtle: transparent, visible on hover only
- Transparent: no border/bg
- Compound: icon + label stack
- Circular: 32/40/48px, icon-only

Inputs:
- Border underline only by default (bottom line), white bg
- Focus: full surround border in brand blue
- Error: red underline + red helper text

Navigation:
- Horizontal pivot tabs across top for multi-tab app areas (Office style)
- Left nav with collapsible tree (Teams/Outlook style)
- Breadcrumb for deep hierarchy

Mica/Acrylic:
- Mica: theme-aware frosted translucent background (Windows app titles/nav)
- Acrylic: real-time blur, lighter opacity, for panel overlaps

## 5) Layout Principles
Grid: 8px base unit, multiples of 4 for tight spaces.
App shell: title bar + left nav (240px) + main content area + optional right panel (320px).
Max content width: 896px for forms/settings; unconstrained for data apps.

Spacing scale: 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64.

## 6) Depth & Elevation
Five shadow levels:
| Level | Box Shadow |
|---|---|
| 2dp | `0 1px 2px rgba(0,0,0,0.12)` |
| 4dp | `0 2px 4px rgba(0,0,0,0.14)` |
| 8dp | `0 4px 8px rgba(0,0,0,0.14)` |
| 16dp | `0 8px 16px rgba(0,0,0,0.14)` |
| 64dp | `0 32px 64px rgba(0,0,0,0.24)` |

Mica surface: `backdrop-filter: blur(60px)` + `rgba(255,255,255,0.5)` overlay.
Layer concept: background → base → secondary → overlay → flyout.

## 7) Do's and Don'ts
Do:
- Respect the brand color slot — allow product teams to swap #0078D4 with their brand.
- Use Segoe UI Variable at larger weights for headings — it remains legible at small sizes.
- Include reduced-motion alternatives for Mica/Acrylic transitions.

Don't:
- Do not replicate Windows chrome affordances in pure web contexts.
- Do not over-apply Mica/Acrylic — it should be accent, not primary surface treatment.
- Do not use flat, unmaterial surfaces when depth is expected.

## 8) Responsive Behavior
- Breakpoints: 320 (compact), 648 (normal), 1024 (expanded), 1366 (large), 1920 (extraLarge).
- Left nav: drawer overlay on compact, rail on normal, full persistent on expanded.
- Pivot tabs wrap to dropdown overflow at compact.
- Touch targets: 44px minimum on touch.

## 9) Agent Prompt Guide
One-shot: "Use Microsoft Fluent 2: Segoe UI Variable typeface, #0078D4 brand blue, 4px corner radius, 8px spacing base, five-level shadow scale, bottom-border-only input style, horizontal pivot navigation, Mica translucent backgrounds for app headers at desktop scale."

Negative: Avoid rounded corners >6px on interactive controls, avoid removing the bottom-border input affordance, avoid loud gradient fills.
