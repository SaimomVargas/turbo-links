# Design Spec: Turbo Ofertas - Link-in-Bio Redesign (Dark Tech / Mobile & Desktop)

**Data:** 2026-11-03  
**Status:** Validado e Aprovado pelo Usuário  
**Autor:** Antigravity / Pair Programming  
**Arquivo de Destino:** `docs/superpowers/specs/2026-11-03-link-in-bio-redesign-design.md`

---

## 1. Contexto e Objetivo

O projeto **turbo-links** é uma landing page de alta conversão voltada para o canal de promoções e cupons automotivos **Turbo Ofertas**.
O objetivo desta reformulação é transformar a LP atual em uma experiência moderna de **Link-in-Bio / Micro Landing Page**:
- **Estilo Visual:** Inspirado na estética **Dark Tech / Neofix** (fundo grafite escuro, tipografia de impacto, acentos em verde neon / WhatsApp e cards com estética técnica/cyberpunk).
- **Apresentação Desktop:** Exibição dentro de um **mockup imersivo e realista de smartphone** centralizado na tela, com bordas metálicas sutis, iluminação de fundo ambiente (*ambient glow*) e proporções de dispositivo móvel moderno.
- **Apresentação Mobile:** Experiência **100% fluida e nativa**, com aproveitamento total da tela, suporte a *safe-area insets* e rolagem sem atritos.
- **Prova Social Tangível:** Incorporação dos 4 prints reais de mensagens recentes postadas no grupo (Kit Vonixx, Lâmpada Philips H4, Aditivo Petrol Max e Shampoo Magilclean) em um carrossel interativo.

---

## 2. Sistema Visual & Design Tokens

### 2.1 Cores e Superfícies
- **Fundo da Página / Canvas Desktop:** `#07090E` com iluminação radial suave em `#121826`.
- **Fundo do App / Container Celular:** `#0B0D13` com gradiente vertical sutil para `#11141D`.
- **Superfícies de Cards (Bento Style):** `#151922` com borda fina translúcida `rgba(255, 255, 255, 0.08)` e efeito de profundidade.
- **Destaques e Tipografia Neon:**
  - **Cyber Yellow / Neon Lime:** `#D8FF00` a `#CCFF00` (usado em números de métricas, títulos chave e tags de desconto).
  - **WhatsApp Green:** `#25D366` (cor primária para o botão principal de conversão, com pulso/glow `rgba(37, 211, 102, 0.35)`).
  - **Telegram Blue:** `#229ED9` (para o botão circular de acesso secundário).
  - **Texto Principal:** `#F8FAFC` (branco puro/alto contraste).
  - **Texto de Apoio:** `#94A3B8` (cinza neutro suave).

### 2.2 Tipografia e Espaçamentos
- Fonte: `Inter`, `system-ui`, `-apple-system`, `sans-serif`.
- Pesos: `800` (ExtraBold) para títulos e destaques numéricos; `600` (SemiBold) para botões e chips; `400/500` para descrições.
- Raio de Borda (*Border Radius*):
  - Moldura Desktop Smartphone: `44px`
  - Cards internos: `16px`
  - Botões principais: `9999px` (estilo pílula)
  - Botões secundários: `50%` (círculos perfeitos)

---

## 3. Arquitetura de Componentes e Estrutura da Página

### 3.1 Shell do Mockup de Smartphone (`App.tsx` & `styles.css`)
- **No Desktop (`> 480px`):**
  - Wrapper centralizador flex com background imersivo escuro.
  - Container `.phone-mockup` com largura fixa de `412px`, altura dinâmica (`min-height: 820px`), borda escura de `8px solid #1A1F2C`, cantos arredondados de `44px`, sombra com profundidade (`box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 40px rgba(204, 255, 0, 0.05)`).
  - Barra de status discreta simulando alto-falante / entalhe minimalista no topo.
- **No Mobile (`<= 480px`):**
  - O mockup desativa bordas, sombras e raios externos; o conteúdo se expande para `100vw` e `100%` da altura de tela de forma nativa.
  - Padding respeitando `env(safe-area-inset-top)` e `env(safe-area-inset-bottom)`.

---

### 3.2 Seções de Conteúdo (Hierarquia Vertical)

```
[ Mockup Shell / Mobile Canvas ]
  │
  ├── 1. BrandHeader (Logo circular com anel neon + Título "TURBO OFERTAS" + Bio curta)
  │
  ├── 2. PrimaryActionRow
  │     ├── Botão Principal WhatsApp (Pill grande, verde WhatsApp, glow animado)
  │     └── ContactCircleButtons (Botões circulares para Telegram e Bot de Cupons)
  │
  ├── 3. TrustMetricsGrid (2 Cards Bento estilo Neofix)
  │     ├── Card 1: "100%" - Gratuito e sem taxas
  │     └── Card 2: "Zero Spam" - Curadoria manual diária
  │
  ├── 4. RealOffersCarousel (Carrossel horizontal com as 4 fotos reais do grupo)
  │     ├── Card Vonixx (Kit Estética Automotiva · -20%)
  │     ├── Card Philips (Lâmpada H4 · -27%)
  │     ├── Card Petrol Max (Aditivo Motorflu · -27%)
  │     └── Card Magilclean (Shampoo Automotivo · -29%)
  │
  ├── 5. CategoryChips (Chips horizontais compactos: Estética, Peças, Ferramentas, Acessórios)
  │
  ├── 6. FinalCtaCard (Chamada final de reforço antes do rodapé com botão de entrada)
  │
  ├── 7. Footer (Avisos legais de transparência, copyright e links)
  │
  └── 8. StickyCtaMobile (Barra fixa no rodapé acionada via IntersectionObserver)
```

---

## 4. Dados e Ativos

### 4.1 Imagens das Ofertas (`public/offers/`)
As imagens enviadas pelo usuário serão copiadas para a pasta pública:
- `public/offers/offer-vonixx.jpg`
- `public/offers/offer-philips.jpg`
- `public/offers/offer-petrol.jpg`
- `public/offers/offer-magilclean.jpg`

### 4.2 Estrutura de Dados (`src/data/config.ts`)
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

export const realOffersList: RealOffer[] = [
  {
    id: "vonixx-kit",
    badge: "PRATICIDADE NO VOLANTE",
    title: "Kit Completo Estética Vonixx V-FLOC + SINTRA + ACESSÓRIOS",
    oldPrice: "R$ 199,92",
    currentPrice: "R$ 159,52",
    discount: "-20%",
    store: "Amazon",
    image: "/offers/offer-vonixx.jpg",
    rating: "4,5 ★ Escolha da Amazon",
  },
  {
    id: "philips-h4",
    badge: "CUIDADO ESPECIAL PRO CARRO",
    title: "Lâmpada Farol H4 12V 60/55W Philips Standard",
    oldPrice: "R$ 26,79",
    currentPrice: "R$ 19,49",
    discount: "-27%",
    store: "Amazon",
    image: "/offers/offer-philips.jpg",
    rating: "4,6 ★",
  },
  {
    id: "petrol-max",
    badge: "OPORTUNIDADE DO DIA",
    title: "Aditivo Concentrado Petrol Max Motorflu 200mL",
    oldPrice: "R$ 20,53",
    currentPrice: "R$ 14,93",
    discount: "-27%",
    store: "Amazon",
    image: "/offers/offer-petrol.jpg",
    rating: "5,0 ★ Mais vendido",
  },
  {
    id: "magilclean-shampoo",
    badge: "CUIDADO ESPECIAL PRO CARRO",
    title: "Shampoo Automotivo Autoclean Ultra Limpador 1,5L",
    oldPrice: "R$ 58,90",
    currentPrice: "R$ 41,70",
    discount: "-29%",
    store: "Amazon",
    image: "/offers/offer-magilclean.jpg",
    rating: "4,0 ★",
  },
];
```

---

## 5. Rastreamento e Conversão

- **Redirecionamentos:** Mantidos em `/go/whatsapp`, `/go/telegram` e `/go/bot` via `vercel.json`.
- **Captura de UTMs:** Parâmetros `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` e `utm_term` são lidos da query string e repassados nos disparos de analytics.
- **Eventos Disparados:**
  - `fbq("track", "Lead", { platform: "whatsapp" | "telegram" | "bot", placement: "hero" | "circular" | "sticky" | "final", ...utms })`
  - `track("cta_click", { platform: "whatsapp" | "telegram" | "bot", placement: "hero" | "circular" | "sticky" | "final", ...utms })`

---

## 6. Plano de Verificação e Testes

1. **Testes Estáticos e Compilação:**
   - Executar `npm run build` (`tsc --noEmit && vite build`) garantindo 0 erros de tipagem e empacotamento.
2. **Validação Responsiva Mobile:**
   - Testar visualização em 360px, 375px (iPhone SE) e 412px (Android padrão):
   - Verificar ausência de overflow horizontal (`body { overflow-x: hidden }`).
   - Testar carrossel horizontal de ofertas com deslize touch.
   - Testar ativação suave do botão sticky no rodapé ao rolar além do primeiro botão.
3. **Validação Desktop:**
   - Testar em 1280px e 1920px:
   - Verificar renderização centralizada do mockup de smartphone com borda e sombra estilizadas.
   - Fundo ambiente escuro preenchendo a tela do monitor com elegância.
