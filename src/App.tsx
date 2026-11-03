import { useEffect, useRef, useState } from "react";
import { track } from "@vercel/analytics";
import { Analytics } from "@vercel/analytics/react";
import { abVariants, brand, getVariant, getUtmParams, redirects } from "./data/config";
import { Profile } from "./components/Profile";
import { ActionButtons } from "./components/ActionButtons";
import { TrustMetrics } from "./components/TrustMetrics";
import { RealOffersCarousel } from "./components/RealOffersCarousel";
import { Categories } from "./components/Categories";
import { Footer } from "./components/Footer";
import { PlatformIcon } from "./components/Icons";

export default function App() {
  const variant = getVariant();
  const currentVariant = abVariants[variant];

  const [heroOffscreen, setHeroOffscreen] = useState(false);
  const [finalVisible, setFinalVisible] = useState(false);
  const heroBtnRef = useRef<HTMLAnchorElement>(null);
  const finalCtaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const heroEl = heroBtnRef.current;
    const finalEl = finalCtaRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === heroEl) {
            setHeroOffscreen(!entry.isIntersecting);
          } else if (entry.target === finalEl) {
            setFinalVisible(entry.isIntersecting);
          }
        });
      },
      {
        threshold: 0,
      }
    );

    if (heroEl) observer.observe(heroEl);
    if (finalEl) observer.observe(finalEl);

    return () => observer.disconnect();
  }, []);

  const showSticky = heroOffscreen && !finalVisible;

  const handleCtaClick = (placement: "hero" | "sticky" | "final" | "carousel") => {
    const utms = getUtmParams();
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "Lead", {
        title: currentVariant.buttonText,
        content_name: currentVariant.buttonText,
        platform: "whatsapp",
        placement,
        variant,
        url: redirects.whatsapp,
        ...utms,
      });
    }

    try {
      track("cta_click", {
        title: currentVariant.buttonText,
        platform: "whatsapp",
        placement,
        variant,
        url: redirects.whatsapp,
        ...utms,
      });
    } catch {
      // safe fallback
    }
  };

  const handleTelegramClick = () => {
    const utms = getUtmParams();
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "Lead", {
        title: "Canal Telegram",
        content_name: "Canal Telegram",
        platform: "telegram",
        placement: "circular",
        variant,
        url: redirects.telegram,
        ...utms,
      });
    }

    try {
      track("cta_click", {
        title: "Canal Telegram",
        platform: "telegram",
        placement: "circular",
        variant,
        url: redirects.telegram,
        ...utms,
      });
    } catch {
      // safe fallback
    }
  };

  const handleBotClick = () => {
    const utms = getUtmParams();
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "Lead", {
        title: "Buscar Cupons",
        content_name: "Buscar Cupons",
        platform: "bot",
        placement: "circular",
        variant,
        url: redirects.bot,
        ...utms,
      });
    }

    try {
      track("cta_click", {
        title: "Buscar Cupons",
        platform: "bot",
        placement: "circular",
        variant,
        url: redirects.bot,
        ...utms,
      });
    } catch {
      // safe fallback
    }
  };

  const handleCarouselClick = () => {
    handleCtaClick("carousel");
    if (typeof window !== "undefined") {
      window.open(redirects.whatsapp, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="desktop-wrapper">
      <div className="phone-mockup">
        {/* Entalhe simulado de alto-falante para visual mobile realista */}
        <div className="phone-speaker" aria-hidden="true" />

        {/* Tela do celular com rolagem suave */}
        <div className="phone-screen">
          <main className="page">
            {/* 1. Header com Logo e Anel Neon */}
            <Profile />

            {/* 2. Botão Principal WhatsApp + Ações Circulares (Telegram e Bot) */}
            <ActionButtons
              heroBtnRef={heroBtnRef}
              title={currentVariant.buttonText}
              onCtaClick={() => handleCtaClick("hero")}
              onTelegramClick={handleTelegramClick}
              onBotClick={handleBotClick}
            />

            {/* 3. Métricas de Confiança: Bento Cards 100% e Zero Spam */}
            <TrustMetrics />

            {/* 4. Carrossel Interativo com Ofertas Reais do Grupo */}
            <RealOffersCarousel onCtaClick={handleCarouselClick} />

            {/* 5. Categorias Monitoradas */}
            <Categories />

            {/* 6. Card Final de Conversão */}
            <section
              ref={finalCtaRef}
              className="final-cta-section"
              aria-label="Chamada final para o grupo"
            >
              <div className="final-cta-card">
                <h2 className="final-cta-title">
                  Acompanhe as ofertas no WhatsApp
                </h2>
                <p className="final-cta-support">
                  Receba cupons e promoções com descontos reais direto no seu celular.
                </p>

                <a
                  href={redirects.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="main-cta-btn"
                  onClick={() => handleCtaClick("final")}
                  id="btn-final-whatsapp"
                >
                  <span className="main-cta-btn__icon" aria-hidden="true">
                    <PlatformIcon platform="whatsapp" />
                  </span>
                  <span className="main-cta-btn__text">
                    <strong className="main-cta-btn__title">
                      {currentVariant.buttonText}
                    </strong>
                    <small className="main-cta-btn__subtext">
                      100% Grátis · Saia quando quiser
                    </small>
                  </span>
                </a>

                <p className="reassurance-text">{brand.reassurance}</p>
              </div>
            </section>

            {/* 7. Rodapé com Aviso de Afiliados e Bot Comparador */}
            <Footer variant={variant} />
          </main>
        </div>

        {/* 8. Botão Fixo no Celular (apenas mobile, ao rolar além do hero) */}
        {showSticky && (
          <aside className="sticky-cta" aria-label="Acesso fixo ao WhatsApp">
            <a
              href={redirects.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="sticky-cta__btn"
              onClick={() => handleCtaClick("sticky")}
              id="btn-sticky-whatsapp"
            >
              <span className="sticky-cta__icon" aria-hidden="true">
                <PlatformIcon platform="whatsapp" />
              </span>
              <span className="sticky-cta__text">
                <strong>{currentVariant.buttonText}</strong>
                <small>Grátis. Sem spam.</small>
              </span>
            </a>
          </aside>
        )}
      </div>

      <Analytics />
    </div>
  );
}
