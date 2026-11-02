import { useEffect, useRef, useState } from "react";
import { track } from "@vercel/analytics";
import { Analytics } from "@vercel/analytics/react";
import { abVariants, brand, getVariant, getUtmParams, redirects } from "./data/config";
import { Profile } from "./components/Profile";
import { Categories } from "./components/Categories";
import { Footer } from "./components/Footer";
import { CheckIcon, PlatformIcon } from "./components/Icons";

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

  const handleCtaClick = (placement: "hero" | "sticky" | "final") => {
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
        title: brand.telegramText,
        content_name: brand.telegramText,
        platform: "telegram",
        placement: "hero_secondary",
        variant,
        url: redirects.telegram,
        ...utms,
      });
    }

    try {
      track("cta_click", {
        title: brand.telegramText,
        platform: "telegram",
        placement: "hero_secondary",
        variant,
        url: redirects.telegram,
        ...utms,
      });
    } catch {
      // safe fallback
    }
  };

  return (
    <main className="page">
      {/* 1. Primeira Tela: Hero Direto & Botão Principal (visível sem rolar em 375x667) */}
      <section className="hero-section" aria-label="Apresentação e entrada no grupo">
        <Profile
          headline={currentVariant.headline}
          support={currentVariant.support}
        />

        <div className="hero-cta-wrap">
          <a
            ref={heroBtnRef}
            href={redirects.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="main-cta-btn"
            onClick={() => handleCtaClick("hero")}
            id="btn-hero-whatsapp"
          >
            <span className="main-cta-btn__icon">
              <PlatformIcon platform="whatsapp" />
            </span>
            <span className="main-cta-btn__text">
              {currentVariant.buttonText}
            </span>
          </a>

          <p className="reassurance-text">{brand.reassurance}</p>

          <a
            href={redirects.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="telegram-alt-link"
            onClick={handleTelegramClick}
          >
            {brand.telegramText}
          </a>
        </div>
      </section>

      {/* 2. Categorias em linha de chips curtos */}
      <Categories />

      {/* 4. Selos rápidos de confiança */}
      <div className="trust-badges-row" aria-label="Garantias do grupo">
        {brand.trustBadges.map((b, idx) => (
          <span key={idx} className="trust-badge">
            <CheckIcon />
            <span className="trust-badge__text">{b.text}</span>
          </span>
        ))}
      </div>

      {/* 5. Repetição do Botão no fim da página antes do rodapé */}
      <section ref={finalCtaRef} className="final-cta-section" aria-label="Chamada final para o grupo">
        <div className="final-cta-card">
          <h2 className="final-cta-title">
            Acompanhe as ofertas no WhatsApp
          </h2>
          <p className="final-cta-support">
            Receba cupons e promoções da Shopee direto no seu celular.
          </p>

          <a
            href={redirects.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="main-cta-btn"
            onClick={() => handleCtaClick("final")}
            id="btn-final-whatsapp"
          >
            <span className="main-cta-btn__icon">
              <PlatformIcon platform="whatsapp" />
            </span>
            <span className="main-cta-btn__text">
              {currentVariant.buttonText}
            </span>
          </a>

          <p className="reassurance-text">{brand.reassurance}</p>
        </div>
      </section>

      {/* 6. Rodapé com link discreto do bot e transparência */}
      <Footer variant={variant} />

      {/* 7. Botão fixo no celular (exibido apenas quando o botão do hero sair da tela via IntersectionObserver) */}
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
            <span className="sticky-cta__icon">
              <PlatformIcon platform="whatsapp" />
            </span>
            <span className="sticky-cta__text">
              <strong>{currentVariant.buttonText}</strong>
              <small>Grátis. Sem spam.</small>
            </span>
          </a>
        </aside>
      )}

      <Analytics />
    </main>
  );
}
