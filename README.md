# A3 Kitchen — Premium Digital Restaurant Menu & Editorial Sketchbook

A refined, QR-based digital dining experience built for **A3 Kitchen** in Dwarka, Tirumala. Upgraded with the **ThreeUI MengToSketchbookLandingPage** editorial design system, transforming the QR menu into a tactile restaurant sketchbook while preserving its core function as an effortless in-house digital dining menu.

---

## ThreeUI Sketchbook Integration & Design Tokens

- **Typography System**:
  - **Headings**: `Instrument Serif` (`headingWeight: 400`, `headingSize: 30px`, `headingLetterSpacing: 0.010em`)
  - **Body / Editorial**: `Newsreader` (`bodyWeight: 400`, `bodySize: 20px`)
  - **Interface / Utility**: `Plus Jakarta Sans` (`500/600/700`)
- **Primary Ink Token**: `#1f1b16` (warm rich espresso ink)
- **Upgraded Botanical Color System**:
  - **Antique Vellum Paper**: `--bg-paper: #faf6ed`, `--bg-paper-warm: #f3ecde`, `--bg-paper-aged: #e9dec9`, deckled borders, and subtle tactile grain.
  - **Imperial Prussian Navy**: `--bg-navy: #051826`, `--bg-navy-dark: #020e17`, `--bg-navy-light: #0b253a`, and dark glassmorphic card overlays.
  - **Radiant Champagne Gold & Burnished Brass**: `--color-gold: #cfa85a`, `--color-gold-bright: #e7c77c`, `--color-gold-deep: #9d7732`, and metallic gradients (`linear-gradient(135deg, #e7c77c 0%, #cfa85a 50%, #9d7732 100%)`).
  - **Sacred Hill Botanical Green**: `--color-botanical: #254832`, `--color-botanical-light: #3a684a`, and FSSAI mark greens.
- **Tactile Curled Page Transitions**: Authentic dog-ear curled corner transitions (`.curled-corner`, `.plate-corner-curl`) on dish cards and illustrated plates.
- **Draggable Magnifying Glass Loupe & Zoom Controls**:
  - Interactive brass/bronze optical lens (`.sketchbook-loupe`) over Today's Special and Food Detail modal images.
  - Smooth cursor and touch-drag tracking, 2.5× tactile zoom, glare highlights, crosshairs, and zoom adjustment controls (`+`, `−`, `↺`).
- **Illustrated Plate Framing & Editorial Index**:
  - Archival double-rim plate framing (`PLATE № 01` through `PLATE № 10`).
  - Chapter Folio markings (`FOLIO I` through `FOLIO VII`).
  - Numbered Editorial Index tabs with plate item counts.

---

## Complete Customer Journey Flow

1. **QR Code Scan & Cinematic Welcome** (`#cinematicWelcome`)
   - 2.5–3.5 second sequence moving from Dwarka Tirumala atmosphere → A3 Kitchen brand reveal → restaurant environment.
   - Stage 1: Subtle brand monogram mark reveal.
   - Stage 2: Dwarka Tirumala sacred hills & timeless hospitality.
   - Stage 3: Welcome & "Explore Menu & Plate Index →" with subtle "Skip Intro" button.
2. **Home / Hero (Folio 01)** (`#home`)
   - Warm natural lighting, authentic restaurant photography, botanical paper atmosphere.
   - Single primary CTA: `Explore Menu & Plate Index →`.
3. **Today's Special (Illustrated Plate № 01)** (`#special`)
   - Immediately following Hero.
   - Large food photography framed as an illustrated plate with interactive Draggable Magnifying Glass Loupe & Zoom Controls.
   - Chef's Special Mutton Biryani (`₹280`) with slow dum cooking notes and dietary indicator.
4. **The Menu & Plate Index (Folio II)** (`#menu`)
   - Editorial Index navigation (`I. All · 10`, `II. Pure Veg`, `III. Non-Veg`, `IV. Starters`, `V. Main Course`, `VI. Biryani`, `VII. Chinese`, `VIII. Beverages`, `IX. Desserts`).
   - Standardized food cards with equal aspect ratios, equal padding, Instrument Serif typography, Newsreader descriptions, plate numbers, curled corners, and FSSAI indicators.
5. **Food Detail Experience (Archival Plate Sheet Modal)** (`#modal`)
   - Tapping any dish opens an illustrated plate sheet (bottom sheet on mobile, centered card on desktop).
   - Large photo with interactive magnification loupe, plate kicker, description, price, and accessible close action.
6. **Signature Dishes (Folio III · The Master Selection)** (`#signature`)
   - Opulent deep navy section with editorial plate cards showcasing crown favourites: A3 Special Biryani, Butter Chicken, and Mutton Rogan Josh.
7. **The Experience (Folio IV · The Sanctuary)** (`#experience`)
   - Transition from food into physical restaurant atmosphere: "Good Food. Warm Service. Memorable Moments."
   - Includes interactive interior gallery lightbox.
8. **Book a Table (Folio V · Hospitality Desk)** (`#booking`)
   - "Reserve Your Table" reservation form for future visits and family feasts.
   - Strictly validated fields (name, phone, date, time, party size, special request) with safe DOM manipulation (zero unsafe innerHTML).
9. **About A3 Kitchen (Folio VI · Time-Honoured Roots)** (`#about`)
   - Compact editorial layout: "More Than Just a Meal" celebrating Dwarka Tirumala pilgrimage roots and slow-cooked traditions.
10. **Contact (Folio VII · Restaurant Desk)** (`#contact`)
    - "Get In Touch": Phone (`+91 98765 43210`), Email (`hello@a3kitchen.in`), Instagram (`@a3_kitchens`), Operating Hours (`11:00 AM – 10:30 PM`), minimal location context.
11. **Footer** (`.site-footer`)
    - Dark navy footer with botanical brand mark, navigation anchors, Instagram link, and copyright.

---

## Technical Stack & Architecture

- **Core**: Vanilla HTML5, CSS3, and JavaScript (Zero external framework dependencies).
- **Security**:
  - Safe element creation and `textContent` for all dynamic data.
  - Strict regex validation for phone numbers, character length limits, and date boundaries.
  - Zero raw user `innerHTML` interpolation.
- **Accessibility**:
  - Full keyboard navigation (Tab, Enter, Space, Escape).
  - ARIA attributes (`role="tablist"`, `role="tab"`, `aria-selected`, `aria-modal="true"`, `aria-label`).
  - Focus trapping and restoration on modal open and close.
  - `@media (prefers-reduced-motion: reduce)` support.
- **Strictly Excluded**:
  - ❌ No online ordering, cart, payment, or delivery tracking
  - ❌ No login/signup, chatbot, or dashboards
  - ❌ No fake reviews or ratings
  - ❌ No random emojis or excessive icons

---

## Deployment

Place `index.html`, `style.css`, `script.js`, and the `assets/` folder in the public root of any static web host (Firebase Hosting, Vercel, Netlify, Cloudflare Pages, GitHub Pages) and deploy.
