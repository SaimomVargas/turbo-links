import { useState, useEffect } from "react";
import { groupRealData } from "../data/config";
import { VerifiedBadge } from "./Icons";

interface OfferProofProps {
  customImageSrc?: string;
}

export function OfferProof({ customImageSrc = "/print-oferta.png" }: OfferProofProps) {
  const [imageValid, setImageValid] = useState<boolean>(false);

  useEffect(() => {
    if (!customImageSrc) return;
    const img = new Image();
    img.src = customImageSrc;
    img.onload = () => setImageValid(true);
    img.onerror = () => setImageValid(false);
  }, [customImageSrc]);

  return (
    <section className="offer-proof-section" aria-labelledby="proof-title">
      <div className="proof-header">
        <h2 id="proof-title" className="proof-title">
          Exemplo de oferta no grupo
        </h2>
        <span className="proof-subtitle">
          {groupRealData.offersToday || "Avisos em tempo real com cupons ativos"}
        </span>
      </div>

      {imageValid ? (
        <div className="proof-card">
          <img
            src={customImageSrc}
            alt="Print real de oferta postada no grupo VIP"
            className="proof-image"
            width={340}
            height={220}
            loading="lazy"
          />
        </div>
      ) : (
        <div className="whatsapp-preview-card">
          <div className="whatsapp-bubble">
            <div className="whatsapp-bubble__top">
              <div className="whatsapp-bubble__sender-wrap">
                <span className="whatsapp-bubble__sender">Turbo Ofertas</span>
                <span className="whatsapp-bubble__badge">
                  <VerifiedBadge />
                </span>
              </div>
              <span className="whatsapp-bubble__time">11:42</span>
            </div>

            <div className="whatsapp-bubble__content">
              <div className="deal-tag">CUPOM SHOPEE APLICADO</div>
              <div className="deal-title">
                Jogo de Soquetes e Chave Catraca 46 Peças em Aço Cromo
              </div>

              <div className="deal-pricing-box">
                <span className="deal-price-old">De R$ 119,90</span>
                <div className="deal-price-row">
                  <span className="deal-price-current">R$ 39,90</span>
                  <span className="deal-discount-badge">66% OFF</span>
                </div>
              </div>

              <div className="deal-info-row">
                <span className="deal-info-item">Frete grátis via app Shopee</span>
                <span className="deal-info-dot">·</span>
                <span className="deal-info-item">Vendedor indicado</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
