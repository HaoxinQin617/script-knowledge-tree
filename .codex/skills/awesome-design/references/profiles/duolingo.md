# Duolingo Design System

**URL**: https://design.duolingo.com/
**Archetype**: playful-gradient
**Stack**: React Native (primary), React Web, custom component library

---

## 1. Visual Theme & Atmosphere
Duolingo's design system embodies the brand's mission: make learning feel like play. The atmosphere is vibrant, rewarding, and cartoon-adjacent — bright high-saturation colors, extreme corner radii, bold drop shadows, celebration animations, and the Duo owl mascot woven throughout. Every interaction should feel like a small reward. The visual language communicates: fun, achievable, and never intimidating. This is one of the most distinctive and opinionated design systems in the industry.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Eel Green (brand) | `#58CC02` | Primary brand, correct answers, XP |
| Humpback (btn active) | `#4CAD02` | Green hover/press state |
| Sky (interactive) | `#1CB0F6` | Practice, links, info |
| Cardinal (error) | `#FF4B4B` | Wrong answers, hearts |
| Bee (streak/gold) | `#FFC800` | Streak fire, gold rewards |
| Fox (orange) | `#FF9600` | Leaderboard, bonus |
| Macaw (purple) | `#CE82FF` | Special crowns, leagues |
| Squid (super) | `#8549BA` | Duolingo Super subs |
| White | `#FFFFFF` | Surface |
| Swan | `#E5E5E5` | Secondary surface |
| Hare | `#AFAFAF` | Disabled, placeholder |
| Wolf | `#777777` | Body text |
| Crow | `#3C3C3C` | Heading text |
| Feather | `#F7F7F7` | Light page background |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| Display | Nunito | 2.5rem | 800 |
| H1 | Nunito | 2rem | 800 |
| H2 | Nunito | 1.5rem | 700 |
| H3 | Nunito | 1.25rem | 700 |
| Body | Nunito | 1rem / 1.5 | 600 |
| Small | Nunito | 0.875rem | 600 |
| Button | Nunito | 1rem | 800 |

Nunito's round terminals and stroke uniformity make it feel friendly and cartoon-adjacent. Weight 600+ is used for body — Duolingo's UI never feels thin or lightweight. Bold throughout.

---

## 4. Component Styling

**Buttons**
- Primary: `#58CC02` fill, white text, 16px radius, `0 4px 0 #4CAD02` bottom shadow (gives 3D-pressed feeling)
- Secondary: white fill, `#E5E5E5` 2px border, `#AFAFAF` bottom shadow
- Danger: `#FF4B4B` fill variant
- Press interaction: shadow collapses from `0 4px 0` to `0 1px 0` (press feedback)
- ALL CAPS labels in Nunito 800

**Lesson / Practice Card**
- White surface, 16px radius, bold colored bottom shadow (matching card accent color)
- Used for skill tiles, lesson types, practice items
- Icon centered, label below

**Progress Bar (XP / Hearts)**
- Rounded pill shape; `#58CC02` fill on `#E5E5E5` track
- Animated progress on lesson completion
- Hearts: red `#FF4B4B` filled/empty heart icons

**Streak Notification**
- Orange/fire emoji + number; `#FFC800` Bee color
- Appears in header and post-lesson screens

---

## 5. Layout Principles
- **Grid**: Simple; primary layout is single-column lesson flow
- **Spacing**: 8px base; generous internal padding on cards
- **Lesson flow**: Vertical scroll-less single question per screen (native app)
- **Web**: Sidebar (user stats + courses) + main content column
- **Touch targets**: 48px minimum — mobile-first always

---

## 6. Depth & Elevation

Duolingo's signature depth technique: colored bottom border acting as a shadow:

| Element | Shadow | Effect |
|---|---|---|
| Green button | `box-shadow: 0 4px 0 #4CAD02` | 3D pressed button |
| Challenge card | `box-shadow: 0 4px 0 #DDD` | Lifted card |
| Correct answer | `box-shadow: 0 4px 0 #4CAD02` | Green confirmation |
| Incorrect answer | `box-shadow: 0 4px 0 #CC3D3D` | Red error |

No multi-layer blur shadows. The bottom-shadow technique is central to the brand's visual identity.

---

## 7. Do's and Don'ts

**Do**
- Use Nunito at 600+ weight — never thin or light weights
- Apply the 3D bottom-shadow on all primary buttons and interactive cards
- Use large corner radii (12–16px) throughout
- Animate progress bars and correct/incorrect states with spring physics
- Use the full Duolingo color vocabulary for gamification elements (streaks, XP, hearts)

**Don't**
- Use thin type — the brand is bold and energetic
- Use shadows with blur (use flat bottom-border shadows instead)
- Use enterprise or somber color tones
- Design without feedback animations — dopamine mechanics are core
- Apply this aesthetic to professional B2B contexts (too playful)

---

## 8. Responsive Behavior

| Breakpoint | Layout |
|---|---|
| < 480px | Single column; full-screen lesson flow |
| 480–768px | Single column with top stats bar |
| 768–1024px | Sidebar (stats) + content column |
| ≥ 1024px | Wide sidebar + wide content; max 1024px content |

- Lesson screens are modal-style overlays on web → fullscreen on native
- Native app has bottom tab bar; web has left sidebar navigation

---

## 9. Agent Prompt Guide

**When generating Duolingo-style UI:**
> Apply Duolingo's gamified-learning aesthetic. Background `#FFFFFF` / `#F7F7F7`. Brand green `#58CC02` for primary actions and correct states. `#FF4B4B` for errors. `#FFC800` for streaks/rewards. Nunito 800 for all headings and buttons (ALL CAPS for CTAs). 16px radius throughout. Signature 3D effect: `box-shadow: 0 4px 0 [darker-shade]` on all primary buttons and cards — collapses on press. Bold, round, high-contrast. Animate all state transitions. Mobile-first single-column lesson flow.

**Avoid**: Thin typefaces, blur shadows, muted/neutral palettes, non-animated states, enterprise data density.
