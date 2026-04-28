# PROJECT SHOWCASE — IN-DEPTH REDESIGN PROMPT
## Target: Match or exceed the "Divine Gallery" aesthetic from the Gemini concept

---

## CONTEXT & GOAL

You are redesigning the **Projects / Selected Works** section of a personal developer portfolio for Dhruv Tiwari (DT). The current design has several critical failures:

- Placeholder images (dark silhouette figures + yellow stroke) look like broken `<img>` states
- Bold red category pills (CREATIVE, SAAS, BLOCKCHAIN) feel like price tags — completely wrong register
- Yellow circular arrow buttons exist in a different design language than the rest of the site
- Cards are flat — no atmosphere, no depth, no glow
- Typography is generic and heavy
- The carousel has no personality

The target is Image 1 — a dark, editorial "divine gallery" aesthetic with:
- Rich abstract 3D visuals filling each card's image zone
- Premium serif typography (Cormorant Garamond)
- Minimal, delicate pagination
- A soft atmospheric glow on the featured center card
- No decorative chrome — just content, light, and type

---

## SECTION STRUCTURE

```
[Section: Selected Works]
  ├── Section Label: "Selected Works" — centered, serif, weight 300
  ├── Card Grid: 3 cards visible at once (carousel, page 1 of 3)
  │     ├── Card Left:   ChromaGen
  │     ├── Card Center: Nirmaan UI  ← featured, slightly elevated
  │     └── Card Right:  EtherVault
  └── Pagination: ← 1 | 3 →
```

**All Projects (2 pages × 3 cards = 6 cards + overflow):**

| # | Name | Category | Stack | Visual Concept |
|---|---|---|---|---|
| 1 | SitePilot | AI & SaaS | Next.js · Prisma · Postgres | Morphing chrome grid/mesh — silver and electric blue |
| 2 | Nirmaan UI | Design System | Next.js · TypeScript · Tailwind | Interlinked metallic rings/knots — like Image 1 center card |
| 3 | ChromaGen | AI & Creative | Flask · Tailwind · Gemini | Iridescent spiral — oil-slick rainbow swirl on dark void |
| 4 | ExamShield | AI & Security | React · FastAPI · PyTorch | Fractured obsidian shield with circuit traces |
| 5 | Natya AI | AI & Culture | Python · FastAPI · ChromaDB | Flowing silk ribbons — warm gold and maroon |
| 6 | MentalHealthLens | AI & Health | DistilBERT · CNN · React | Soft bioluminescent neural net — gentle, not harsh |

---

## VISUAL DESIGN SPECIFICATION

### Background
```css
background: radial-gradient(
  ellipse 140% 80% at 50% -10%,
  #0B1430 0%,
  #05070F 55%,
  #000000 100%
);
```
No flat dark navy. The top of the section should feel like it's lit from above — a faint glow at the very top center, fading to absolute black at the bottom. This creates a sense of looking up into a lit exhibition space.

### Section Header
```
Font: Cormorant Garamond, weight 300 (light)
Size: clamp(1.1rem, 1.5vw, 1.4rem)
Color: rgba(240, 237, 232, 0.55)  ← warm white, very low opacity
Letter-spacing: 0.2em
Text-transform: uppercase
Alignment: center
Margin-bottom: 64px
Position: 40px above the card grid
```
No bold "SELECTED WORKS" in a heavy sans-serif. This label should whisper. The cards are the statement.

---

## CARD DESIGN — THE CORE COMPONENT

### Card Dimensions
```
Width:   ~360px (desktop), fluid
Height:  ~480px
Radius:  14px
Gap between cards: 24px
```

### Card Visual Zones

```
┌───────────────────────────────────┐  ← 14px border-radius
│                                   │
│   [IMAGE ZONE — 260px tall]       │
│   ┌───────────────────────────┐   │
│   │                           │   │  ← edge-to-edge, no padding
│   │    3D Abstract Render     │   │
│   │    (see Visual Library)   │   │
│   │                           │   │
│   └───────────────────────────┘   │
│   ← gradient overlay fades img    │  ← linear-gradient bottom: card-bg
│     into the card's lower half    │
│                                   │
│   category label                  │  ← 0.6rem, JetBrains Mono, tracked
│                                   │     rgba(138,143,168,0.7) — muted blue-gray
│   Project Title                   │  ← Cormorant Garamond, 2.1rem, weight 500
│                                   │     color: #F0EDE8
│   stack · items · here            │  ← 0.72rem, JetBrains Mono
│                                   │     color: rgba(138,143,168,0.55)
│   ──────────────────────   ↗      │  ← 1px line rgba(255,255,255,0.08)
│                                   │     + ↗ icon, rgba(255,255,255,0.3)
└───────────────────────────────────┘
```

### Card Base State
```css
.project-card {
  background: #0A0E1A;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 14px;
  overflow: hidden;
  transition: transform 300ms ease, border-color 300ms ease, box-shadow 300ms ease;
  cursor: pointer;
}
```

### Card Hover State
```css
.project-card:hover {
  transform: translateY(-6px);
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.5),
    0 0 40px rgba(26, 86, 219, 0.06);
}

.project-card:hover .card-arrow {
  color: #F0EDE8;
  transform: translate(2px, -2px);
}
```

### Featured Center Card (always the middle card)
```css
.project-card.featured {
  transform: scale(1.03);
  border-color: rgba(255, 255, 255, 0.13);
  box-shadow:
    0 30px 80px rgba(0, 0, 0, 0.6),
    0 0 80px rgba(26, 86, 219, 0.10),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  z-index: 2;
}

/* Atmospheric glow behind the featured card */
.project-card.featured::before {
  content: '';
  position: absolute;
  inset: -40px;
  background: radial-gradient(
    ellipse 80% 60% at 50% 30%,
    rgba(26, 86, 219, 0.12) 0%,
    transparent 70%
  );
  z-index: -1;
  pointer-events: none;
}
```

### Image Zone
```css
.card-image-zone {
  width: 100%;
  height: 260px;
  position: relative;
  overflow: hidden;
}

.card-image-zone img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 600ms ease;
}

.project-card:hover .card-image-zone img {
  transform: scale(1.04);
}

/* Gradient overlay — fades image into card background */
.card-image-zone::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    #0A0E1A 100%
  );
}
```

### Card Info Zone
```css
.card-info {
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card-category {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(138, 143, 168, 0.65);
}

.card-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.7rem, 2.2vw, 2.1rem);
  font-weight: 500;
  color: #F0EDE8;
  line-height: 1.1;
  letter-spacing: -0.01em;
}

.card-stack {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  color: rgba(138, 143, 168, 0.5);
  letter-spacing: 0.04em;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.card-arrow {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.28);
  transition: color 250ms ease, transform 250ms ease;
}
```

---

## VISUAL ASSETS — WHAT TO USE FOR EACH CARD

Because the current placeholder images destroy the design, here's exactly what each card needs:

### Option A: Use a Gemini / Midjourney prompt for each project
Generate abstract 3D renders that match each project's personality:

**SitePilot (AI SaaS):**
> "Abstract 3D chrome mesh grid, morphing wireframe, electric blue inner glow, dark void background, ultra-high detail, studio lighting, 8K render"

**Nirmaan UI (Design System):**
> "Intertwined metallic rings forming a complex knot, brushed silver and steel, soft directional light from top-right, warm sand background (like Image 1 center), architectural precision, photorealistic"

**ChromaGen (AI Color):**
> "Iridescent spiral vortex, oil-slick rainbow surface tension, dark deep purple background, center pull like a whirlpool, ultra-glossy material, studio macro photography"

**ExamShield (Security AI):**
> "Obsidian dark cube with circuit board engravings, matte black carbon fiber texture, subtle teal edge glow, dark background, isometric view, dramatic single-source light"

**Natya AI (Culture AI):**
> "Flowing silk ribbons in motion, warm gold and deep crimson, abstract dance, dramatic dark background, ultra-high resolution fabric simulation"

**MentalHealthLens (Health AI):**
> "Bioluminescent neural network, soft blue-white nodes and connections, dark void, gentle atmospheric glow, no harsh elements, organic and peaceful"

### Option B: Use actual screenshots with an overlay
If using real app screenshots:
```css
.card-image-zone {
  position: relative;
}

/* Dark vignette overlay on screenshots */
.card-image-zone::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(5, 7, 15, 0.3) 0%,
    rgba(5, 7, 15, 0.1) 50%,
    rgba(5, 7, 15, 0.35) 100%
  );
  z-index: 1;
}
```
This unifies screenshots from different sources into a cohesive dark-tinted look.

---

## PAGINATION COMPONENT

The current gray circle buttons are too generic. Target design (Image 1 style):

```
    ←     1 | 3     →
```

```css
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 48px;
}

.pagination-arrow {
  width: 44px;
  height: 44px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 250ms ease;
  background: transparent;
}

.pagination-arrow:hover {
  border-color: rgba(255, 255, 255, 0.3);
  color: #F0EDE8;
  background: rgba(255, 255, 255, 0.04);
}

.pagination-counter {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem;
  font-weight: 300;
  color: rgba(240, 237, 232, 0.4);
  letter-spacing: 0.1em;
}
/* Renders: 1 | 3 */
```

---

## ANIMATION SYSTEM FOR THE SECTION

### Entry Animation (when section scrolls into view)
```css
@keyframes card-enter {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-card {
  opacity: 0;
  animation: card-enter 700ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.project-card:nth-child(1) { animation-delay: 0ms; }
.project-card:nth-child(2) { animation-delay: 120ms; }
.project-card:nth-child(3) { animation-delay: 240ms; }
```

### Carousel Transition (on next/prev)
```css
/* Slide the card grid with a crossfade */
.cards-wrapper {
  transition: opacity 350ms ease, transform 350ms cubic-bezier(0.22, 1, 0.36, 1);
}

.cards-wrapper.exiting {
  opacity: 0;
  transform: translateX(-20px);
}

.cards-wrapper.entering {
  opacity: 0;
  transform: translateX(20px);
}
```

---

## FULL SECTION HTML STRUCTURE

```html
<section class="projects-section" id="projects">

  <div class="section-inner">

    <!-- Section Label -->
    <p class="section-label">Selected Works</p>

    <!-- Cards Wrapper -->
    <div class="cards-wrapper" id="cardsWrapper">

      <!-- Card -->
      <article class="project-card featured" data-index="1">
        <div class="card-image-zone">
          <img src="/assets/projects/nirmaan-abstract.webp" alt="Nirmaan UI" />
        </div>
        <div class="card-info">
          <span class="card-category">Design System & SaaS</span>
          <h3 class="card-title">Nirmaan UI</h3>
          <p class="card-stack">next.js · typescript · tailwind</p>
          <div class="card-footer">
            <span class="card-line"></span>
            <span class="card-arrow">↗</span>
          </div>
        </div>
      </article>

      <!-- Repeat for ChromaGen, EtherVault ... -->

    </div>

    <!-- Pagination -->
    <div class="pagination">
      <button class="pagination-arrow" id="prevBtn" aria-label="Previous">←</button>
      <span class="pagination-counter" id="pageCounter">1 | 3</span>
      <button class="pagination-arrow" id="nextBtn" aria-label="Next">→</button>
    </div>

  </div>

</section>
```

---

## WHAT TO EXPLICITLY NOT DO

| ❌ Wrong | ✅ Right |
|---|---|
| Bold red rounded pill: `CREATIVE` | Small mono text: `creative · ai` |
| Yellow `#FFD700` circle with `↗` | Thin `↗` text icon, rgba white |
| Silhouette placeholder image | Abstract 3D render OR blurred screenshot with overlay |
| Heavy sans-serif project titles | Cormorant Garamond, weight 500 |
| Three same-height cards with no hierarchy | Center card `scale(1.03)` + glow |
| Gray flat pagination buttons | Thin-border circle arrows, transparent |
| Flat dark background | Radial gradient void with top glow |
| All-caps bold section title | Whisper-weight uppercase serif label |
| `border-radius: 24px` on cards | `border-radius: 14px` — refined, not bubbly |
| Green/teal/purple accent colors | Only blue glow + crimson for fire moments |

---

## FINAL OUTPUT CHECKLIST

Before shipping the redesigned Projects section:

- [ ] Background has radial gradient depth — not flat
- [ ] Section label is serif, light weight, tracked, centered
- [ ] All three visible cards use real/abstract visuals — no placeholders
- [ ] Center card is featured (scale 1.03, glow behind)
- [ ] Card category uses JetBrains Mono, small, muted — not a colored pill
- [ ] Card title uses Cormorant Garamond, weight 500
- [ ] Stack uses JetBrains Mono, lowercase, muted
- [ ] Arrow icon is minimal `↗` text, not a yellow circle button
- [ ] Card hover: `translateY(-6px)` + subtle border brightening
- [ ] Pagination: thin-border circles + `1 | 3` serif counter
- [ ] Entry animation: staggered fade-up on scroll-into-view
- [ ] Carousel transition: fade + slight slide
- [ ] No yellow, no loud red pills, no heavy borders
- [ ] Typography hierarchy is clear: label → title → stack → footer

---

*The goal is a section that makes someone stop scrolling. Not because it's loud — because it's precise.*
