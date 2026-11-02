import { useState, useEffect } from "react";
import { groupRealData } from "../data/config";

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

  const hasRealData = Boolean(groupRealData.lastOfferTime || groupRealData.offersToday);

  // A seção só renderiza se existir imagem real ou dados reais comprováveis em groupRealData
  if (!imageValid && !hasRealData) {
    return null;
  }

  return (
    <section className="offer-proof" aria-labelledby="proof-title">
      <div className="proof-header">
        <h2 id="proof-title" className="proof-title">
          Veja o que chega no grupo
        </h2>
        {hasRealData && (
          <p className="proof-real-status">
            {groupRealData.offersToday && <span>{groupRealData.offersToday}</span>}
            {groupRealData.lastOfferTime && <span> • {groupRealData.lastOfferTime}</span>}
          </p>
        )}
      </div>

      {imageValid && (
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
      )}
    </section>
  );
}
