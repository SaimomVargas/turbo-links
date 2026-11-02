import { useEffect, useRef, useState } from "react";
import { track } from "@vercel/analytics";
import { Analytics } from "@vercel/analytics/react";
import { abVariants, brand, getVariant, redirects } from "./data/config";
import { Profile } from "./components/Profile";
import { OfferProof } from "./components/OfferProof";
import { Categories } from "./components/Categories";
import { Footer } from "./components/Footer";
import { PlatformIcon } from "./components/Icons";

export default function App() {
  const variant = getVariant();
  const currentVariant = abVariants[variant];

  const [showSticky, setShowSticky] = useState(false);
  const heroBtnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const target = heroBtnRef.current;
    if (!target || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Mostra o botão fixo no mobile apenas depois que o botão do hero sair da tela
        setShowSticky(!entry.isIntersecting);
      },
      {
        threshold: 0,
      }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const handleCtaClick = (placement: "hero" | "sticky" | "final") => {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "Lead", {
        content_name: currentVariant.buttonText,
        platform: "whatsapp",
        placement,
        variant,
      });
    }

    try {
      track("cta_click", {
        title: currentVariant.buttonText,
        platform: "whatsapp",
        placement,
        variant,
        url: redirects.whatsapp,
      });
    } catch {
      // safe fallback
    }
  };

  const handleTelegramClick = () => {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "Lead", {
        content_name: brand.telegramText,
        platform: "telegram",
        placement: "hero_secondary",
        variant,
      });
    }

    try {
      track("cta_click", {
        title: brand.telegramText,
        platform: "telegram",
        placement: "hero_secondary",
        variant,
        url: redirects.telegram,
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
            <span className="main-cta-btn__arrow" aria-hidden="true">→</span>
          </a>

          <p className="reassurance-text">{brand.reassurance}</p>

          <a
            href={redirects.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="telegram-alt-link"
            onClick={handleTelegramClick}
          >
            {brand.telegramText} →
          </a>
        </div>
      </section>

      {/* 2. Prova do que a pessoa vai receber no grupo (só renderiza se houver imagem ou dados reais) */}
      <OfferProof />

      {/* 3. Categorias em linha de chips curtos */}
      <Categories />

      {/* 4. Selos rápidos de confiança */}
      <section className="trust-strip" aria-label="Garantias da comunidade">
        {brand.trustBadges.map((badge, idx) => (
          <div key={idx} className="trust-strip__item">
            <span className="trust-strip__icon" aria-hidden="true">{badge.icon}</span>
            <span className="trust-strip__text">{badge.text}</span>
          </div>
        ))}
      </section>

      {/* 5. Repetição do Botão no fim da página antes do rodapé */}
      <section className="final-cta-section" aria-label="Chamada final para o grupo">
        <div className="final-cta-card">
          <h2 className="final-cta-title">
            Não perca a próxima oferta com bug de preço
          </h2>
          <p className="final-cta-support">
            Entre agora e receba os alertas direto no seu WhatsApp.
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
            <span className="main-cta-btn__arrow" aria-hidden="true">→</span>
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
              <small>Grátis • Sem Spam</small>
            </span>
            <span className="sticky-cta__arrow" aria-hidden="true">→</span>
          </a>
        </aside>
      )}

      <Analytics />
    </main>
  );
}
