# Turbo Ofertas - Link-in-Bio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the Turbo Ofertas landing page into an automotive dark-tech Link-in-Bio featuring an immersive desktop smartphone mockup, native mobile layout, circular social buttons, trust metrics, and an interactive carousel of real group offers.

**Architecture:** React 18 + TypeScript + Vite. The app runs a mobile-first page enclosed in a realistic smartphone mockup container on desktop screens (`> 480px`) and dissolves to a full-screen native mobile experience on mobile screens (`<= 480px`). Sections include Brand Header, Primary + Circular Actions, Trust Metrics grid, Real Offers swipeable carousel, Category chips, and an IntersectionObserver-driven Sticky CTA.

**Tech Stack:** React 18, TypeScript 5.5, Vite 5, CSS3 Custom Properties (Design Tokens), `@vercel/analytics`.

**Spec:** `docs/superpowers/specs/2026-11-03-link-in-bio-redesign-design.md`

## Global Constraints

- Preserve redirects in `vercel.json`: `/go/whatsapp`, `/go/telegram`, `/go/bot`.
- Preserve UTM query parameter extraction and forwarding to analytics.
- Dual tracking: Meta Pixel (`window.fbq`) and Vercel Analytics (`track`).
- No external heavy UI libraries (pure CSS design tokens, performant native horizontal scroll-snap).
- Type-check must pass without errors (`npm run build`).

---

### Task 1: Asset Ingestion and Config Data Expansion

**Files:**
- Create: `public/offers/offer-vonixx.jpg`
- Create: `public/offers/offer-philips.jpg`
- Create: `public/offers/offer-petrol.jpg`
- Create: `public/offers/offer-magilclean.jpg`
- Modify: `src/data/config.ts`

**Interfaces:**
- Produces:
  ```ts
  export interface RealOffer {
    id: string;
    badge: string;
    title: string;
    oldPrice: string;
    currentPrice: string;
    discount: string;
    store: "Amazon" | "Shopee";
    image: string;
    rating?: string;
  }
  export const realOffersList: RealOffer[];
  ```

- [ ] **Step 1: Copy offer images into `public/offers/`**
Execute powershell commands to ensure `public/offers` exists and copy the 4 user-uploaded screenshots:
```powershell
New-Item -ItemType Directory -Force -Path "public/offers"
Copy-Item "C:/Users/Vargas/.gemini/antigravity/brain/b88438c8-b4c4-4359-87b4-362e49aa1317/.user_uploaded/media_1793704476036_5ff2de76.jpg" "public/offers/offer-vonixx.jpg"
Copy-Item "C:/Users/Vargas/.gemini/antigravity/brain/b88438c8-b4c4-4359-87b4-362e49aa1317/.user_uploaded/media_1793704438454_2613d92a.jpg" "public/offers/offer-philips.jpg"
Copy-Item "C:/Users/Vargas/.gemini/antigravity/brain/b88438c8-b4c4-4359-87b4-362e49aa1317/.user_uploaded/media_1793704448905_839594e3.jpg" "public/offers/offer-petrol.jpg"
Copy-Item "C:/Users/Vargas/.gemini/antigravity/brain/b88438c8-b4c4-4359-87b4-362e49aa1317/.user_uploaded/media_1793704460755_fb5cf920.jpg" "public/offers/offer-magilclean.jpg"
```

- [ ] **Step 2: Update `src/data/config.ts` with `RealOffer` interface and data**
Add the `RealOffer` interface and `realOffersList` export with the 4 items, update `brand.reassurance`, and update `categoryChips`.

- [ ] **Step 3: Run type check**
Run: `npm run build`
Expected: PASS (build succeeds with exit code 0).

- [ ] **Step 4: Commit**
```bash
git add public/offers/ src/data/config.ts
git commit -m "feat: add real offer assets and expand configuration data"
```

---

### Task 2: Trust Metrics and Real Offers Carousel Components

**Files:**
- Create: `src/components/TrustMetrics.tsx`
- Create: `src/components/RealOffersCarousel.tsx`
- Modify: `src/components/Icons.tsx` (ensure necessary SVG icons like Star, Shield, Lightning, Telegram, Bot exist)

**Interfaces:**
- Consumes: `realOffersList`, `RealOffer` from `src/data/config.ts`.
- Produces:
  - `<TrustMetrics />`
  - `<RealOffersCarousel />`

- [ ] **Step 1: Add extra icons to `src/components/Icons.tsx`**
Ensure icons for Telegram (`TelegramIcon`), Bot (`BotIcon`), Shield/Check (`ShieldIcon`), and Star (`StarIcon`) are defined.

- [ ] **Step 2: Implement `src/components/TrustMetrics.tsx`**
Create two bento cards:
- Card 1: `100%` in giant Cyber Lime with text "Gratuito · Sem mensalidades ou taxas".
- Card 2: `Zero Spam` in bold typography with text "Curadoria diária · Só cupons e ofertas reais".

- [ ] **Step 3: Implement `src/components/RealOffersCarousel.tsx`**
Create horizontal scroll-snap carousel rendering the 4 real offer cards with image, badge ("OPORTUNIDADE DO DIA", "CUIDADO ESPECIAL", etc.), discount pill ("-27%"), current price and rating.

- [ ] **Step 4: Verify type check**
Run: `npm run build`
Expected: PASS.

- [ ] **Step 5: Commit**
```bash
git add src/components/Icons.tsx src/components/TrustMetrics.tsx src/components/RealOffersCarousel.tsx
git commit -m "feat: create TrustMetrics and RealOffersCarousel components"
```

---

### Task 3: Profile Header, Action Buttons and Category Chips

**Files:**
- Modify: `src/components/Profile.tsx`
- Create: `src/components/ActionButtons.tsx`
- Modify: `src/components/Categories.tsx`

**Interfaces:**
- Consumes: `redirects`, `abVariants`, `getVariant` from `src/data/config.ts`.
- Produces:
  - `<Profile />` with neon ring avatar and verified badge.
  - `<ActionButtons onCtaClick={...} onTelegramClick={...} onBotClick={...} />` with primary WhatsApp CTA and circular Telegram/Bot buttons.
  - `<Categories />` with dark tech automotive category pills.

- [ ] **Step 1: Update `src/components/Profile.tsx`**
Include circular avatar with neon border/glow, verified badge, bold brand name "TURBO OFERTAS", and concise bio text.

- [ ] **Step 2: Implement `src/components/ActionButtons.tsx`**
Add primary button for WhatsApp (pulsing green glow, icon, copy "Entrar no Grupo VIP no WhatsApp" + subtext "100% Grátis · Saia quando quiser"), plus a row of circular action buttons (Telegram and Bot) with tooltips/labels.

- [ ] **Step 3: Update `src/components/Categories.tsx`**
Render category pills with clean dark styling and active indicators.

- [ ] **Step 4: Verify build**
Run: `npm run build`
Expected: PASS.

- [ ] **Step 5: Commit**
```bash
git add src/components/Profile.tsx src/components/ActionButtons.tsx src/components/Categories.tsx
git commit -m "feat: update Profile, ActionButtons and Categories for link-in-bio"
```

---

### Task 4: Dark Tech Theme and Smartphone Mockup CSS System

**Files:**
- Modify: `src/styles.css`
- Modify: `index.html` (update page title and dark meta theme-color `#07090e`)

**Interfaces:**
- Defines design tokens for dark tech aesthetic.
- Defines `.desktop-wrapper` and `.phone-mockup` on desktop.
- Defines responsive reset for screens `<= 480px` to become full-screen mobile app.
- Defines styles for carousel, metrics cards, circular buttons, and sticky CTA.

- [ ] **Step 1: Update `index.html`**
Set `<title>Turbo Ofertas | Grupo VIP de Ofertas e Cupons Automotivos</title>` and `<meta name="theme-color" content="#07090e">`.

- [ ] **Step 2: Write complete CSS system in `src/styles.css`**
- Palette tokens: `--bg-space: #07090e`, `--bg-app: #0b0d13`, `--bg-card: #141722`, `--line: rgba(255,255,255,0.08)`, `--neon: #d8ff00`, `--whatsapp: #25d366`, `--telegram: #229ed9`.
- Desktop shell: centered phone frame with `412px` width, `min-height: 840px`, metallic border, shadow, speaker notch.
- Mobile breakpoint (`max-width: 480px`): remove border/frame, expand to 100vw, apply safe area padding.
- Horizontal scroll carousel styling with hide-scrollbar and snap-type x mandatory.
- Sticky CTA styling at the bottom with backdrop blur.

- [ ] **Step 3: Verify build**
Run: `npm run build`
Expected: PASS.

- [ ] **Step 4: Commit**
```bash
git add src/styles.css index.html
git commit -m "style: implement dark tech design system and desktop phone mockup"
```

---

### Task 5: App Integration, Analytics Wire-up and Verification

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/components/Footer.tsx`

**Interfaces:**
- Wire all components into `src/App.tsx`.
- Connect `handleCtaClick` for "hero", "sticky", "final", "telegram", "bot" placements.
- Maintain UTM capture and dual analytics dispatch.

- [ ] **Step 1: Update `src/components/Footer.tsx`**
Update footer styling with dark tech typography, legal disclaimer (no affiliation with Amazon/Shopee), and discreet bot link.

- [ ] **Step 2: Assemble full page in `src/App.tsx`**
Wire `DesktopMockupWrapper`, `Profile`, `ActionButtons`, `TrustMetrics`, `RealOffersCarousel`, `Categories`, `FinalCta`, `Footer`, and `StickyCta`.

- [ ] **Step 3: Run complete build test**
Run: `npm run build`
Expected: 0 TypeScript errors, successful Vite bundle generation.

- [ ] **Step 4: Preview and verify responsive layout**
Start Vite preview: verify no console errors, check DOM structure, test click handlers.

- [ ] **Step 5: Commit changes**
```bash
git add src/App.tsx src/components/Footer.tsx
git commit -m "feat: complete link-in-bio page integration with dark tech theme"
```
