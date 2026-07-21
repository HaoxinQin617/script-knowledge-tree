# Apple Human Interface Guidelines

**URL**: https://developer.apple.com/design/
**Archetype**: premium-editorial
**Stack**: SwiftUI, UIKit, AppKit; web via Safari + WKWebView conventions

---

## 1. Visual Theme & Atmosphere
Apple HIG defines the gold standard for platform-native premium product design. The atmosphere is serene, confident, and content-forward — no chrome competes with the user's data or media. Materials (blur, vibrancy, translucency) give a sense of physical depth and spatial awareness. Every pixel is considered. The system extends seamlessly from iPhone to iPad to Mac to Apple Watch, with platform-specific idioms respected at each scale.

---

## 2. Color Palette & Roles

Apple uses dynamic system colors that adapt to light/dark mode and accessibility settings automatically:

| Token | Light Mode Approx | Dark Mode Approx | Role |
|---|---|---|---|
| systemBlue | `#007AFF` | `#0A84FF` | Primary interactive |
| systemGreen | `#34C759` | `#30D158` | Success, confirmations |
| systemRed | `#FF3B30` | `#FF453A` | Destructive, errors |
| systemOrange | `#FF9500` | `#FF9F0A` | Warnings |
| systemPurple | `#AF52DE` | `#BF5AF2` | Special actions |
| systemPink | `#FF2D55` | `#FF375F` | Music, love, social |
| systemYellow | `#FFCC00` | `#FFD60A` | Highlights |
| label | `#000000` | `#FFFFFF` | Primary text |
| secondaryLabel | `rgba(60,60,67,0.6)` | `rgba(235,235,245,0.6)` | Secondary text |
| separator | `rgba(60,60,67,0.29)` | `rgba(84,84,88,0.6)` | Dividers |
| systemBackground | `#FFFFFF` | `#000000` | Root surface |
| secondarySystemBackground | `#F2F2F7` | `#1C1C1E` | Cards, grouped lists |
| tertiarySystemBackground | `#FFFFFF` | `#2C2C2E` | Tertiary surface |

Never hardcode a color — always use semantic system color names. Colors adapt for dark mode and increased contrast automatically.

---

## 3. Typography Rules

Apple uses the SF typeface family (SF Pro, SF Rounded, SF Mono, New York) — not available on non-Apple platforms.

| Role | Style | Size | Weight |
|---|---|---|---|
| Large Title | SF Pro Display | 34pt | 700 |
| Title 1 | SF Pro Display | 28pt | 700 |
| Title 2 | SF Pro Display | 22pt | 700 |
| Title 3 | SF Pro Text | 20pt | 600 |
| Headline | SF Pro Text | 17pt | 600 |
| Body | SF Pro Text | 17pt | 400 |
| Callout | SF Pro Text | 16pt | 400 |
| Subhead | SF Pro Text | 15pt | 400 |
| Footnote | SF Pro Text | 13pt | 400 |
| Caption | SF Pro Text | 12pt | 400 |

**Dynamic Type**: All text sizes must scale with user accessibility settings. Minimum body text: 11pt. No clipping at any text size.

---

## 4. Component Styling

**Buttons (iOS 17 / iPadOS 17)**
- Filled: system color fill, white text, 12–14px corner radius (continuous)
- Tinted: semi-transparent tint of system color
- Gray: systemGray6 fill
- Plain: no background, system color text
- States: opacity 0.5 when disabled; no color change

**Lists / Tables**
- Inset-grouped style (rounded, floating groups) or plain
- Row height: 44pt minimum (touch target)
- Accessory indicators: disclosure chevron, checkmark, detail button
- Swipe actions: reveal red/colored actions on swipe-left

**Navigation**
- Large navigation bar (collapsing on scroll) or standard fixed
- Back button: `<` with previous page title (trimmed to single word if too long)
- Tab bar: max 5 items; SF Symbols icons; selected = systemBlue

**SF Symbols**
- Use SF Symbols icon set universally — variable weight, scale, rendering modes
- Match symbol weight to surrounding text weight

---

## 5. Layout Principles
- **Safe areas**: Content respects Dynamic Island, home indicator, status bar via `safeAreaInsets`
- **Grid**: Flexible; no fixed column grid — use layout guides and spacing multiples
- **Spacing**: 8pt base unit; 16pt standard horizontal margin on iPhone
- **Content priority**: Single primary action per screen ("one thing at a time" on iPhone)
- **Modality**: Use full-screen modals sparingly; prefer sheets and popovers

---

## 6. Depth & Elevation

Apple uses materials rather than shadows for depth:

| Material | Usage |
|---|---|
| `.ultraThinMaterial` | Menu bars, notification center |
| `.thinMaterial` | Sidebars, popovers |
| `.regularMaterial` | Cards, sheets |
| `.thickMaterial` | Full-surface overlays |
| `.chrome` | Toolbars, navigation bars |

Blur radius and saturation adapt: 20–30px Gaussian blur with ~80% vibrancy. On web, simulate with `backdrop-filter: blur(20px) saturate(180%)`.

---

## 7. Do's and Don'ts

**Do**
- Use system colors and Dynamic Type — respect user preferences
- Use SF Symbols — consistent weight, scale, and animation with text
- Respect safe area insets on every screen edge
- Provide a large touch target (44×44pt min) regardless of visible control size
- Support both light and dark mode equally
- Animate with spring physics (not linear/ease curves)

**Don't**
- Recreate navigation patterns that diverge from platform conventions (users expect back gestures)
- Use custom fonts in native apps without clear editorial justification
- Stack more than 2–3 levels of navigation depth without a back-out path
- Use hamburger/drawer navigation on iPhone — use tab bar instead
- Add decorative borders or dividers between every cell in a list

---

## 8. Responsive Behavior

| Device | Layout idiom |
|---|---|
| iPhone SE (375pt) | Single column, large type, max-width content |
| iPhone 15 Pro (393pt) | Single column, comfortable spacing |
| iPad mini / Air (768–820pt) | Two-column split view, sidebar + content |
| iPad Pro (1024–1366pt) | Three-column with persistent sidebar |
| Mac (SwiftUI Catalyst) | Multiple windows, menu bar, hover states |

- Uses `horizontalSizeClass` and `verticalSizeClass` — not pixel breakpoints
- Split view and slide over must be handled by all iPad apps
- Pointer (trackpad/mouse) hover states are required on iPad/Mac

---

## 9. Agent Prompt Guide

**When generating Apple HIG-style UI (web equivalent):**
> Apply Apple's premium-responsive aesthetic for web. White (`#FFFFFF`) / true-black (`#000000`) adaptive backgrounds. systemBlue `#007AFF` (light) / `#0A84FF` (dark) for all interactive elements. Use SF Pro/Display or the system sans stack. Continuous corner radius (14–16px). Cards use `backdrop-filter: blur(20px)` translucency over content. Tab-bar navigation on mobile, sidebar on desktop. 44px minimum touch targets. Spring animation curves. Support light and dark mode with CSS custom properties. Semantic purpose color only — no decorative use.

**Avoid**: Linear animation easing, hamburger menus on mobile, custom nav patterns, fixed pixel type sizes, hardcoded colors that break dark mode.
