# brand.md — DT Portfolio Design System
## "Blaugrana Noir" — The Elevated Identity

---

## 1. DESIGN PHILOSOPHY

### Core Concept: *The Elegant Athlete*
Most dev portfolios choose between two dead ends: sterile corporate minimalism or loud hacker-dark maximalism. Yours escapes both.

The **Blaugrana Noir** identity fuses the *discipline of high-end editorial design* with the *passion of FC Barcelona's visual language* — but never literally. Barcelona's red and blue are not used as flat UI colors. They are treated like two opposing forces of light: deep navy is the *field at night*, crimson is the *flare in the crowd*, and gold is the *moment of brilliance*. The result is a portfolio that feels like a gallery opening inside Camp Nou.

**Three Laws of this Identity:**
1. **Restraint over decoration** — Every element earns its place. Nothing is decorative unless it carries meaning.
2. **Tension over harmony** — The typography, color, and layout live in deliberate contrast. Serif elegance against monospaced precision. Dark void against controlled fire.
3. **Depth over flatness** — Backgrounds breathe. Cards have atmosphere. No surface is inert.

---

## 2. COLOR SYSTEM

### Primary Palette

| Token | Value | Role |
|---|---|---|
| `--bg-void` | `#05070F` | True background — near-black with a blue soul |
| `--bg-surface` | `#0A0E1A` | Card and section surfaces |
| `--bg-elevated` | `#0F1628` | Elevated cards, modals, nav |
| `--navy-deep` | `#071035` | Deep accent fills |

### Blaugrana Accents (used sparingly, never as fills)

| Token | Value | Role |
|---|---|---|
| `--blau-primary` | `#1A56DB` | Primary interactive state (links, active nav) — a refined electric blue, not flat #004D98 |
| `--blau-glow` | `rgba(26,86,219,0.15)` | Card glow, focus rings — very subtle |
| `--grana-fire` | `#C8102E` | High-signal accent: CTA buttons, category pills, hover indicators. Never backgrounds. |
| `--grana-subtle` | `rgba(200,16,46,0.12)` | Whisper-level warm tinting |
| `--gold-moment` | `#C9A84C` | Achievement highlights, hover states on arrows, special callouts. Use max 2x per page. |

### Neutral Scale

| Token | Value | Role |
|---|---|---|
| `--text-primary` | `#F0EDE8` | All primary text — warm white, not cold |
| `--text-secondary` | `#8A8FA8` | Subtitles, tags, metadata |
| `--text-tertiary` | `#4A5070` | Placeholder text, disabled |
| `--border-subtle` | `rgba(255,255,255,0.06)` | Default card borders |
| `--border-active` | `rgba(255,255,255,0.14)` | Hovered card borders |

### Gradient System

```css
/* The signature background — never flat black */
--gradient-void: radial-gradient(
  ellipse 120% 80% at 50% 0%,
  #0A1428 0%,
  #05070F 60%,
  #000000 100%
);

/* Card focal glow — apply to center/featured card only */
--glow-feature: radial-gradient(
  ellipse 80% 60% at 50% 30%,
  rgba(26,86,219,0.08) 0%,
  transparent 70%
);

/* Text gradient for hero headline */
--gradient-headline: linear-gradient(
  135deg,
  #F0EDE8 0%,
  #B8C4E8 50%,
  #8A9FDB 100%
);
```

---

## 3. TYPOGRAPHY SYSTEM

### The Pairing: *Editorial Serif × Technical Mono*

This is the core typographic tension of the identity. The serif says *craftsman*, the mono says *builder*.

**Display / Headlines:** `Cormorant Garamond` (Google Fonts)
- Use at large sizes only: 48px+
- Weight: 300 (light) for hero, 500 (medium) for project titles
- Letter-spacing: `-0.02em` to `-0.04em`
- This replaces all heavy sans-serif headings. No Bebas Neue. No Impact-style fonts.

**Navigation / Labels / UI:** `DM Sans` (Google Fonts)
- Weight: 300–500 only
- Letter-spacing: `0.08em–0.14em` (always tracked out for nav links)
- All caps for: nav links, category pills, metadata tags
- Title case for: button text

**Code / Technical Details / Stack Tags:** `JetBrains Mono` (Google Fonts)
- Weight: 400
- Used for: tech stack labels (NEXT.JS • PRISMA • POSTGRES), skill tags
- Adds authenticity — you ARE a developer, let the type say it

**Body / Descriptions:** `DM Sans` 16px, weight 300, line-height 1.75

### Type Scale

```css
--text-display:    clamp(3.5rem, 7vw, 6.5rem);  /* Hero only */
--text-title:      clamp(2rem, 3.5vw, 3rem);    /* Section headers */
--text-project:    clamp(1.6rem, 2.5vw, 2.2rem); /* Project card titles */
--text-label:      0.65rem;                       /* Tracked caps: nav, tags */
--text-body:       1rem;                          /* Descriptions */
--text-meta:       0.8rem;                        /* Tech stacks, dates */
```

---

## 4. COMPONENT PRINCIPLES

### Navigation
- Transparent on scroll-top, `backdrop-filter: blur(20px)` with `bg-elevated` on scroll
- Nav links: `DM Sans`, all-caps, tracked `0.12em`, weight 400, `text-secondary`
- Active link: `text-primary` + a 1px bottom line in `--blau-primary` (not underline — a separate `::after` pseudo-element)
- Logo "DT": Keep the Blaugrana gradient but increase contrast. Scale it up slightly.
- No dropdowns. No hamburger menu on desktop.

### Project Cards — THE CRITICAL COMPONENT

**The problem with the current cards:**
The placeholder images (dark silhouette + yellow line) look like broken image states, not intentional design. The red category pills are jarring and feel like price tags. The yellow circular arrows are a completely different design language than the rest of the card.

**The correct card anatomy:**
```
┌─────────────────────────────────────────┐
│  [Visual Zone — 55% of card height]     │  ← Abstract 3D render or real screenshot
│   Image fills edge-to-edge, no padding  │    with a dramatic overlay gradient
│   bottom: gradient fade to card bg      │
├─────────────────────────────────────────┤
│                                         │
│  Category Label ──── small, mono, dim   │  ← JetBrains Mono, 0.6rem, tracked
│                                         │
│  Project Title                          │  ← Cormorant Garamond, 2rem, weight 500
│                                         │
│  Stack: next.js · prisma · postgres     │  ← JetBrains Mono, 0.75rem, muted
│                                         │
│  [─────────────────────] ↗              │  ← thin line + minimal arrow icon
└─────────────────────────────────────────┘
```

**Card rules:**
- Border: `1px solid var(--border-subtle)` default
- On hover: border transitions to `--border-active`, a subtle `--glow-feature` appears behind
- Featured/center card: slightly taller than siblings (scale 1.04), permanent soft glow behind
- NO yellow circle arrows. Replace with a minimal `↗` icon in `--text-secondary` that brightens to `--text-primary` on hover
- NO bold-colored category pills. Replace with a small all-caps mono label in `--text-tertiary`
- Corner radius: `12px` — refined, not rounded-full

### Buttons
- **Primary CTA:** Background `--grana-fire`, text white, `DM Sans` 500, letter-spacing `0.06em`, padding `14px 32px`, border-radius `6px`. No rounded-full — that's for apps, not editorial sites.
- **Secondary:** Transparent background, `1px solid var(--border-active)`, text `--text-primary`. No filled gray.
- **Ghost/Learning badge:** Remove "Currently Learning: Next.js" — it signals incompleteness. Replace with something confident.

### Hero Section
- Background: The Barcelona stadium photo should be a *very dark overlay* — opacity ~0.15 at most, purely atmospheric
- The three-color headline ("Building / Skills / For / Future") is chaotic. Replace with a single typographic statement in Cormorant Garamond with a subtle gradient
- Anime avatar: Acceptable as a personality touch. Needs a cleaner frame — consider a subtle border in `--blau-primary` or a circular crop with glow

---

## 5. SPACING & LAYOUT

```css
--space-section:  120px;  /* Between major sections */
--space-card-gap: 24px;   /* Between project cards */
--space-inner:    32px;   /* Card internal padding */
--max-width:      1200px; /* Content max width */
```

**Grid philosophy:**
- Desktop: 3-column card grid, 12-column master grid
- No full-bleed sections except hero. Everything else breathes inside `max-width`.
- Generous vertical padding. Sections need to *breathe* — 120px top/bottom minimum.

---

## 6. MOTION PRINCIPLES

Less is more. Three rules:

1. **Page entry:** Cards stagger-fade in with `translateY(20px)` → `0` over 600ms, 100ms delay between each. Once. Not on every scroll.
2. **Card hover:** A single `transform: translateY(-4px)` + glow intensification over `300ms ease`. No 3D rotations, no dramatic scaling.
3. **Navigation:** Underline indicator slides horizontally between nav items (`transition: left 300ms ease`).

Zero parallax on the hero. Parallax is 2019.

---

## 7. WHAT TO REMOVE ENTIRELY

These elements actively harm the design and must be deleted, not revised:

- ❌ **Yellow/gold circular arrow buttons** on project cards — different visual language, breaks cohesion
- ❌ **Bold red category pills** (CREATIVE, SAAS, BLOCKCHAIN) — use simple text labels instead
- ❌ **The broken placeholder images** (silhouette + yellow line) — need real visuals or intentional abstract art
- ❌ **Three-color gradient headline** — typographically chaotic, undermines the premium feel
- ❌ **"Currently Learning"** status badge on hero — signals incompleteness
- ❌ **Flat dark gray pagination arrows** — too generic, make them feel intentional
- ❌ **Inter/Roboto if used anywhere** — replace with the defined type system

---

## 8. WHAT MAKES IT BLAUGRANA WITHOUT BEING LITERAL

The trap is using `#004D98` as a background color or `#A50044` as an accent on everything. That's just painting your website in club colors. The elevated approach:

- The **navy in the background gradient** carries the spirit of deep blue
- The **crimson accent** (`--grana-fire`) appears only at moments of action — CTAs, active states, highlights. Like the red in a Barça jersey: present but purposeful.
- The **logo DT** with the Blaugrana gradient is the *only* place both colors appear simultaneously — making it iconic rather than noise
- Typography and spatial design do the heavy lifting. Color is the finishing touch.

---

## 9. VOICE & COPY PRINCIPLES

- Replace "I'm Dhruv, a B.Tech IT student..." → "I'm Dhruv — I build things that work and interfaces that feel."
- Category labels should be lowercase in the design, all-caps only for tech stack abbreviations
- Project descriptions: one punchy sentence maximum. Let the visual do the talking.
- No "Currently Learning" — change to "2026 Focus" or omit entirely

---

*This brand document governs every design decision in the DT portfolio. When in doubt: more space, less color, better type.*
