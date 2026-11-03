import { ShieldIcon, CheckIcon } from "./Icons";

export function TrustMetrics() {
  return (
    <section className="trust-metrics" aria-label="Garantias e credibilidade">
      <div className="trust-metrics__grid">
        {/* Card 1: 100% Gratuito */}
        <div className="trust-metric-card trust-metric-card--free">
          <div className="trust-metric-card__value" aria-label="100 por cento gratuito">
            100%
          </div>
          <div className="trust-metric-card__body">
            <div className="trust-metric-card__label-row">
              <span className="trust-metric-card__title">Gratuito</span>
              <span className="trust-metric-card__badge" aria-hidden="true">
                <CheckIcon />
              </span>
            </div>
            <p className="trust-metric-card__desc">
              Sem mensalidades ou taxas escondidas
            </p>
          </div>
        </div>

        {/* Card 2: Zero Spam */}
        <div className="trust-metric-card trust-metric-card--spam">
          <div className="trust-metric-card__header">
            <span className="trust-metric-card__icon" aria-hidden="true">
              <ShieldIcon />
            </span>
            <span className="trust-metric-card__value trust-metric-card__value--text">
              Zero Spam
            </span>
          </div>
          <div className="trust-metric-card__body">
            <div className="trust-metric-card__title">Curadoria diária</div>
            <p className="trust-metric-card__desc">
              Só cupons e ofertas reais no grupo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
