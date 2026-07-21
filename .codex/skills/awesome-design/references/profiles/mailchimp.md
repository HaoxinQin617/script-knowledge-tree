# Mailchimp Design System / Patterns

**URL**: https://ux.mailchimp.com/patterns
**Archetype**: playful-gradient (email marketing)
**Stack**: React; custom component library

---

## 1. Visual Theme & Atmosphere
Mailchimp's design system embodies the brand's iconic personality: bold, irreverent, and friendly — the anti-corporate email tool. Freddie the chimp mascot, warm yellow, and editorial illustration style create a visual identity that stands out in a sea of sterile B2B software. The interface is warm and approachable, built for non-technical small business owners who want powerful tools without intimidation. The vibe: a creative agency tool that happens to also be enterprise-capable.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Mailchimp Yellow | `#FFE01B` | Primary brand identity (used in illustrations/brand) |
| Cavendish Yellow | `#FFBE00` | Warm CTA variant |
| Jasmine Green | `#009B52` | Success, primary interactive in some contexts |
| Cucumber | `#007B40` | Green hover/dark state |
| Cornflower Blue | `#007CDB` | Links, secondary interactive |
| Off-White | `#FFF9F0` | Page background (warm cream) |
| Hint of Yellow | `#FFFAE3` | Warm secondary surface |
| Coconut (near-black) | `#241C15` | Primary text (warm black) |
| Tuatara | `#403D3A` | Body text |
| Fog | `#7E7774` | Muted / secondary text |
| Pebble | `#C4BEBD` | Borders, dividers |
| Fog Light | `#F5F3F2` | Light secondary surface |
| Yam | `#C7462A` | Error red (warm-shifted) |
| Dragon Fruit | `#E8685A` | Destructive/error lighter |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| Display / Hero | Graphik (Comercial) | 3rem+ | 700 |
| H1 | Graphik | 2rem | 700 |
| H2 | Graphik | 1.5rem | 600 |
| H3 | Graphik | 1.125rem | 600 |
| Body | Helvetica Neue / system | 1rem / 1.5 | 400 |
| Small | Helvetica Neue / system | 0.875rem | 400 |
| Caption/Eyebrow | Graphik | 0.75rem | 500 uppercase |

Graphik for all headings and interface elements. Helvetica Neue for body text fallback. Both convey the clean-yet-warm Mailchimp tone. ALL CAPS eyebrow labels with 0.1em letter-spacing.

---

## 4. Component Styling

**Buttons**
- Primary: Jasmine Green `#009B52` fill, white text, 4px radius
- Secondary: Hint of Yellow fill, dark border, Coconut text
- Destructive: Yam `#C7462A`
- Yellow variant used rarely in brand moments (not primary UI action)
- Heights: 32px / 40px / 48px

**Campaign Card**
- Core Mailchimp pattern: campaign thumbnail + name + send date + stats (opens, clicks)
- White card, 4px radius, subtle shadow
- Status badge: Sent / Draft / Scheduled / Paused

**Audience Card**
- Subscriber count prominent, list-name title
- Growth trend sparkline

**Email Preview Thumbnail**
- Miniature rendered preview of email template
- Core affordance — always shown before send confirmation

---

## 5. Layout Principles
- **Grid**: 12-column; max 1440px; 24px gutter
- **Spacing**: 8px base; 8/16/24/32/48/64px scale
- **App shell**: Top navigation bar + content area (no persistent left sidebar)
- **Dashboard**: Campaign cards in grid; audience panels; reports
- **Empty states**: Illustrated with Freddie/brand characters — not just text prompts

---

## 6. Depth & Elevation

| Level | Shadow | Usage |
|---|---|---|
| 0 | none | Flat |
| sm | `0 1px 2px rgba(36,28,21,0.08)` | Cards |
| md | `0 4px 12px rgba(36,28,21,0.1)` | Modals, popovers |
| lg | `0 8px 24px rgba(36,28,21,0.12)` | Drawers |

Warm-tinted shadows (Coconut-based, not pure black) reinforce the brand warmth.

---

## 7. Do's and Don'ts

**Do**
- Use warm off-white `#FFF9F0` as primary page background — cold white is off-brand
- Use Jasmine Green `#009B52` for primary actions (not yellow — yellow is brand identity only)
- Include illustrated empty states — Freddie appears in delightful empty/success moments
- Make campaign stats (open rate, click rate) visually prominent
- Use warm-shifted colors throughout — never cold gray

**Don't**
- Use yellow as a primary CTA button (it has poor contrast and is brand identity not action)
- Apply cold blue/gray palette — everything should have warmth
- Use flat white backgrounds (warm cream only)
- Skip illustrations — they are core to the brand experience
- Apply to enterprise/SaaS without customization — too warm/casual

---

## 8. Responsive Behavior

| Breakpoint | Layout |
|---|---|
| < 576px | Single column; compressed campaign cards |
| 576–992px | Two-column campaign grid |
| ≥ 992px | Three-column campaign grid; dashboard panels |

- Email preview thumbnails: scale to fit container; maintain aspect ratio
- Audience stats: chart reflows to single-column on mobile
- Campaign builder: full-screen on mobile; split-pane on desktop

---

## 9. Agent Prompt Guide

**When generating Mailchimp-style UI:**
> Apply Mailchimp's warm-playful email-marketing aesthetic. Background `#FFF9F0` warm cream, white cards. Primary CTA: Jasmine Green `#009B52`. Links: Cornflower Blue `#007CDB`. Brand accent: Mailchimp Yellow `#FFE01B` (not for CTAs). Text: Coconut `#241C15` warm near-black. Graphik (or Helvetica Neue) for all type, 1rem body. 4px radius. Warm-based shadows. Campaign cards: thumbnail + send stats. Illustrated empty states. Top navigation (no sidebar). Avoid cold grays.

**Avoid**: Cold white backgrounds, yellow as CTA, gray palette, missing illustrations, enterprise density.
