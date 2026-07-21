# NHS Digital Service Manual

**URL**: https://service-manual.nhs.uk/design-system
**Archetype**: civic-accessible
**Stack**: Nunjucks / HTML / SCSS; NHS.UK Frontend (based on GOV.UK Frontend)

---

## 1. Visual Theme & Atmosphere
The NHS Design System prioritises patient safety, clarity, and accessibility above all else. It is modelled closely on GOV.UK Frontend but adapted for healthcare contexts: warmer typography, the iconic NHS Blue, and specific affordances for vulnerability (patients in distress, low digital literacy). Every design decision is filtered through: "does this reduce barriers to healthcare information?" The aesthetic is clean, trustworthy, and human — institutional confidence without coldness.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| NHS Blue | `#005EB8` | Primary brand, header, key CTAs |
| NHS Dark Blue | `#003087` | Hover, focus ring |
| NHS Aqua Green | `#00A499` | Secondary, digital product accents |
| NHS Light Green | `#78BE20` | Positive, success |
| NHS Dark Green | `#007F3B` | Alternative success, go actions |
| NHS Orange | `#ED8B00` | Warning, non-critical alerts |
| NHS Red | `#DA291C` | Error, urgent, A&E |
| NHS Pink | `#AE2573` | Cancer pathways, specific service |
| NHS White | `#FFFFFF` | Page background |
| NHS Grey 1 | `#4C6272` | Secondary text, labels |
| NHS Grey 2 | `#768692` | Muted/disabled text |
| NHS Grey 3 | `#AEB7BD` | Borders, dividers |
| NHS Grey 4 | `#D8DDE0` | Subtle borders |
| NHS Grey 5 | `#F0F4F5` | Section backgrounds |
| NHS Black | `#212B32` | Primary text |
| Yellow focus | `#FFD600` | Focus indicator (WCAG 2.2) |

---

## 3. Typography Rules

| Role | Face | Size | Weight | Line Height |
|---|---|---|---|---|
| Display | Frutiger W01 | 3rem | 400 | 1.2 |
| H1 | Frutiger W01 | 2.25rem | 700 | 1.2 |
| H2 | Frutiger W01 | 1.75rem | 700 | 1.25 |
| H3 | Frutiger W01 | 1.375rem | 700 | 1.25 |
| H4 | Frutiger W01 | 1.125rem | 700 | 1.35 |
| Lead | Frutiger W01 | 1.25rem | 400 | 1.6 |
| Body | Frutiger W01 | 1rem | 400 | 1.6 |
| Small | Frutiger W01 | 0.875rem | 400 | 1.6 |

Fallback: Arial, Helvetica Neue, Helvetica, sans-serif. **Generous line-height (1.6)** for readability in healthcare contexts. Body max-width: 30ch–66ch.

---

## 4. Component Styling

**Action Link**
- Blue arrow icon + text link in large format
- Used for primary navigation away from page
- "Go to [destination]" pattern

**Care Cards**
- A distinctive NHS component for severity-coded health advice:
  | Type | Header Colour | Body Colour |
  |---|---|---|
  | Non-urgent (GP) | `#005EB8` blue | White |
  | Urgent | `#D5281B` red | White |
  | Emergency / 999 | `#212B32` black | `#212B32` |
- Bold header "Speak to a GP if..." / "Call 999 if..."

**Warning Callout**
- Yellow-bordered box, black heading, icon `⚠`
- For non-emergency warnings and important notes

**Expander (Accordion)**
- Plus icon, full-width clickable row
- Used for long FAQs and medication information

**Summary List**
- Definition-list style: key/value pairs
- Used for patient record summaries, application reviews

---

## 5. Layout Principles
- **Grid**: 12-column, 1020px max container
- **Spacing scale**: 4px base (4, 8, 16, 24, 32, 40, 48, 56, 64)
- **Single question per page**: NHS follows GDS one-thing-per-page pattern for forms
- **Content width**: Articles constrained to ~68ch for readability
- **Navigation**: Phase banner (alpha/beta) + breadcrumb + header with NHS Blue bar

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat | None | All standard content |
| Card | `0 2px 4px rgba(33,43,50,0.1)` | Care card, feature card |
| Warning | Left 4px border `#FFD600` | Warning callouts |
| Modal | `0 4px 12px rgba(33,43,50,0.3)` | Overlay dialogs (rare) |

NHS design avoids heavy shadow — flat accessible surfaces preferred.

---

## 7. Do's and Don'ts

**Do**
- Use yellow `#FFD600` focus rings — WCAG 2.2 compliant, NHS mandated
- Use Care Cards strictly by severity — never downgrade an emergency to non-urgent
- Keep reading level at age 9–11 equivalent (plain English)
- Provide text alternatives for all icons and images
- Test with screen readers (NVDA, JAWS, VoiceOver) at every iteration

**Don't**
- Use colour alone to communicate health urgency — always pair with text
- Introduce custom typefaces — Frutiger is the NHS brand agreement
- Create dark mode variants — NHS digital is light-mode only (patient safety)
- Use decorative imagery during urgent service journeys
- Truncate important health information behind progressive disclosure without warning

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 641px | Single column, full-width components, larger touch targets (44px min) |
| 641–1020px | Two-column where appropriate |
| ≥ 1020px | Full layout with sidebar navigation where used |

NHS mobile pages: minimum 48px tap targets. Swipe-friendly care card navigation.

---

## 9. Agent Prompt Guide

**When generating NHS Design System-style UI:**
> Healthcare civic aesthetic. NHS Blue `#005EB8` header and CTAs. Frutiger typeface, fallback Arial. Body: 1rem/1.6 line-height. Yellow `#FFD600` focus indicator. Care cards: blue (non-urgent), red (urgent), black (emergency). Plain English, age-9 reading level. 1020px max container, 4px spacing grid. Flat surfaces with minimal shadow. Zero-decoration, maximum clarity. WCAG 2.2 AA everywhere.

**Avoid**: Dark mode, custom fonts, decorative imagery in service journeys, shadow-heavy cards, colour-only urgency signals.
