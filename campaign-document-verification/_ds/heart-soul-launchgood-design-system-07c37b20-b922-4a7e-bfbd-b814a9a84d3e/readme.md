# LaunchGood Design System

A reusable design system for **LaunchGood** — the world's leading crowdfunding platform built for the Muslim community ("the Ummah's go-to sadaqah platform"). It powers fundraising for charities, relief efforts, masjids, students, and individuals, with a signature promise of **0% platform fees**. This system is the codified, runnable version of LaunchGood's **Heart & Soul Design System 5.0**.

> **Brand essence:** *Build an inspired future. Built in this life, for the next.*

---

## Company & product context

LaunchGood (launchgood.com) is a donation/crowdfunding platform. Donors discover and give to verified campaigns; fundraisers launch campaigns; charities run appeals. Core surfaces:

- **Marketing + discovery** (homepage, discover, category pages, campaign pages) — the surface recreated in this system's UI kit.
- **Giving & checkout** (donate flows, recurring giving, Zakat tools, baskets).
- **Account & fundraiser dashboards.**

The product is distinctly Muslim-centred: Zakat verification, Hijri dates, Islamic/Arabic vocabulary ("inshaAllah", "JazakAllah khair", "sadaqah"), and Ramadan/seasonal moments are first-class.

### Sources used to build this system
- **Figma:** *Heart & Soul Design System 5.0* (attached `.fig`) — text styles, colors, spacing, shadows, radii, and component frames (Buttons, Badge, Campaign Card, Inline Banners, Toasts, Header/Footer, Modals, Drawers, Date Picker, etc.).
- **Codebase:** `launchgood/rebuild` (private GitHub) — the Next.js front-end at `packages/ui/launchgood-com`. The authoritative token source is its `tailwind.config.js`; component behaviour was lifted from `src/components/` (`Badge`, `CampaignCard/CampaignTile`, etc.).
  - Repo: https://github.com/launchgood/rebuild — explore `packages/ui/launchgood-com` to build higher-fidelity recreations.
  - (`launchgood/launchgood` is the legacy LaunchGood.com / Patronicity.com source.)
- **Brand assets:** primary wordmark SVGs (black / white) and the Plus Jakarta Sans font family (uploaded).
- **Icons:** Heroicons v2 (the set used throughout the Figma).

---

## Content fundamentals

LaunchGood's voice is **Inspiring · Genuine · Supportive**. We speak in the **second person** ("you", "your") across product copy — CTAs, nav, instructions.

- **Tone:** warm, hopeful, human. We share a vision of what *could be*, not just what is. Lead with active verbs ("Unlock your potential to change the world, for good"). Put a positive spin on negatives; focus on the desired state.
- **Genuine:** honest, factual, sincere. Smaller words, plain language, no jargon or empty marketing phrases. Talk *with*, not *to* or *about* ("we", "our", "you"). Be specific — names, faces, real causes.
- **Supportive:** centre the community's achievements; amplify the impact of donors and fundraisers, balanced with a measured sense of LaunchGood's role. "We've given our community a space to raise funds with ease."
- **Islamic vocabulary:** comfortable and natural — "inshaAllah", "mashaAllah", "JazakAllah khair", "sadaqah", "Zakat", "Ummah". Hijri dates appear alongside Gregorian.
- **Emoji:** a *small* sprinkle is on-brand on social, but product UI stays restrained. Don't overuse. Avoid internet slang.
- **Casing:** Sentence case for headings, buttons, and labels (not Title Case, not ALL CAPS — the one exception is the occasional legacy "START A CAMPAIGN" treatment). Numbers/stats are bold and tabular ("2.1M Donors", "$697M Funded", "209 donors · 175 days left").

**Examples that capture the voice**
- ✅ "Where the Ummah comes together to do good."
- ✅ "Support causes you care about and create your garden of good."
- ✅ "JazakAllah khair — your $50 gift is on its way."
- ✅ "0% platform fee!" · "Zakat-verified"
- ❌ "Take your fundraising to the next level, with guaranteed success!" (too markety)
- ❌ "Muslims aren't living up to their potential" (too negative)

---

## Visual foundations

**Overall feel:** clean, editorial, generous whitespace, near-black ink on white. The personality comes from a single warm **green** used sparingly for affirmative/giving moments, plus full-bleed human photography. It is *not* a gradient-heavy or decorative system — restraint is the point.

- **Color:** A warm green **brand** scale (primary `#4AA567`, hover `#3C8653`) reserved for giving actions and positive status. A full **neutral** gray scale does the heavy lifting — text, surfaces, borders — with `#171717` as the brand ink. Semantic accents (red/yellow/green/blue + indigo/purple/pink) appear only in badges and alerts as soft `50`-tint fills with a saturated label. Seasonal gradients (e.g. Ramadan/DHC blue→cyan) exist but are **limited use**.
- **Type:** One typeface — **Plus Jakarta Sans** (variable, 200–800). Headings are **Bold (700)** with tightened tracking at large sizes (≈ -1%); body is Regular (400); titles/labels use SemiBold (600). Tailwind-style ramp (12 → 48px). Mobile steps each heading down one size.
- **Spacing & layout:** 4px base grid. Centred max-width (~1200px) content with 24px gutters. Sticky, translucent (blurred) header. Comfortable, airy density.
- **Shape:** The signature move is the **pill** (`border-radius: 9999`) — every button, badge, chip and toggle is fully rounded. Cards, inputs, and images use **`lg` (8px)**; modals/drawers use **2xl (16px)**.
- **Cards:** mostly *borderless* — a rounded image plus stacked text, separated by whitespace rather than a container border. When elevated, shadows are **soft and low-spread** (`sm` for cards, `card`/0.25 alpha for media tiles). No heavy outlines, no colored left-border accents.
- **Imagery:** real, warm, human photography (people, communities, relief work), filling rounded `lg` frames at ~16:10. Often paired with a small circular org **avatar**. Occasional full-bleed hero/overlay treatments with a bottom protection gradient for legibility.
- **Borders:** hairline `1px` neutral-200/300. Inputs get a brand-green border + soft green focus ring on focus.
- **Motion:** quiet and functional. `cubic-bezier(0.4, 0, 0.2, 1)` standard easing; fast (150ms) for hovers/toggles, ~300ms for slide-in/slide-up panels, drawers and toasts. Gentle fade-ins; no bouncy or infinite decorative loops.
- **Hover / press:** primary (dark) darkens to neutral-800; brand (green) darkens to brand-600; secondary/tertiary fill with a faint neutral tint. Disabled drops opacity to ~45%. Icon actions shift color (e.g. heart → brand green when active/favourited).
- **Transparency & blur:** used purposefully — the sticky header is white at ~90% with an 8px backdrop blur; modal scrims are neutral-900 at ~50%.

---

## Iconography

LaunchGood uses **Heroicons v2** — the same set referenced throughout the Heart & Soul Figma (e.g. `heroicons-solid/chevron-*`, `heroicons-outline/check-circle`, `exclamation-triangle`).

- **Style:** Outline (1.5px stroke, 24px grid) is the default; **solid** is used for filled/active states (e.g. a favourited heart). Color follows `currentColor`.
- **Implementation here:** a curated set ships as the **`Icon`** component (`components/icons/Icon.jsx`) with real Heroicons paths — no hand-drawn SVG. Extend the `OUTLINE`/`SOLID` maps as the product needs more glyphs, or pull the full set from Heroicons (https://heroicons.com, MIT).
- **Brand mark:** the LaunchGood wordmark (heart-hand + "LaunchGood") ships as SVG in `assets/` — black for light backgrounds, white for dark/brand. There is no separate icon font.
- **Status iconography:** check-circle (success), exclamation-triangle (warning/error), information-circle (info), plus a shield/Z mark for **Zakat-verified**.
- **Emoji / unicode as icons:** not used in product UI.

---

## What's in here (index / manifest)

**Root**
- `styles.css` — global entry point (import-only). Consumers link this.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`.
- `assets/` — `launchgood_logo_primary_black.svg`, `launchgood_logo_primary_white.svg`, `fonts/` (Plus Jakarta Sans variable TTFs).
- `guidelines/cards/` — foundation specimen cards (Type, Colors, Spacing, Brand) shown in the Design System tab.
- `SKILL.md` — Agent-Skill front-matter so this system can be used from Claude Code.

**Components** (`components/<group>/` — React, styled with the CSS variables; consumed via `window.LaunchGoodDesignSystem_07c37b` from `_ds_bundle.js`)
- `buttons/` — **Button** (pill: primary / brand / secondary / tertiary / danger; xs–xl; icons)
- `data-display/` — **Badge**, **Avatar**, **ProgressBar**
- `forms/` — **Input**, **Switch**, **Checkbox**
- `feedback/` — **InlineBanner**, **Toast**
- `navigation/` — **Tabs**
- `campaign/` — **CampaignCard** (signature vertical carousel/grid card) + **CampaignTile** (horizontal discover/list card, from `CampaignTile.tsx`)
- `icons/` — **Icon** (Heroicons v2)

**UI kit** (`ui_kits/launchgood-com/`)
- `index.html` — interactive **Discover page** recreation (header, hero, filter bar, featured carousel, fundraiser grid, footer) with a working donate flow. Rebuilt from `launchgood/rebuild`. See its `README.md`.

**Templates** (`templates/<slug>/` — branded starting points consuming projects copy)
- `launchgood-page/` — **LaunchGood page**: sitewide header + discover hero + campaign grid + footer, built from the system's components. Loads the system via `ds-base.js`.

---

*Recreations and placeholder imagery are cosmetic. For production fidelity, explore the `launchgood/rebuild` repo (`packages/ui/launchgood-com`).*
