import { groupRealData } from "../data/config";

interface OfferProofProps {
  customImageSrc?: string;
}

export function OfferProof({ customImageSrc }: OfferProofProps) {
  const hasRealData = Boolean(groupRealData.lastOfferTime || groupRealData.offersToday);

  return (
    <section className="offer-proof" aria-labelledby="proof-title">
      <div className="proof-header">
        <span className="proof-eyebrow">Transparência Total</span>
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

      <div className="proof-card">
        {customImageSrc ? (
          <img
            src={customImageSrc}
            alt="Print real de oferta postada no grupo VIP"
            className="proof-image"
            width={340}
            height={220}
            loading="lazy"
          />
        ) : (
          /* Placeholder de exemplo real de mensagem enviada no grupo */
          <div className="proof-placeholder" role="img" aria-label="Simulação de mensagem do grupo com oferta real">
            <div className="proof-msg-bubble">
              <div className="proof-msg-tag">
                <span>🔥 Achadinho Automotivo</span>
                <span className="proof-msg-time">Hoje</span>
              </div>
              <strong className="proof-msg-title">
                Jogo de Chaves Catraca Cromo Vanádio (46 Peças)
              </strong>
              <div className="proof-msg-price-row">
                <span className="proof-msg-old">R$ 89,90</span>
                <span className="proof-msg-new">R$ 34,90</span>
                <span className="proof-msg-badge">Cupom Aplicado</span>
              </div>
              <div className="proof-msg-meta">
                <span>🛒 Loja Oficial na Shopee</span>
                <span>⭐ 4.9/5 (1.2k avaliações)</span>
              </div>
            </div>
            <div className="proof-placeholder-hint">
              <span>📷 Espaço para o print real do grupo (coloque em /public/print-oferta.png)</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

