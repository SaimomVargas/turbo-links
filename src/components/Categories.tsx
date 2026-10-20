import { visualCategories } from "../data/config";

export function Categories() {
  return (
    <section className="categories-section" aria-labelledby="cat-title">
      <div className="section-header">
        <span className="section-eyebrow">Garimpo Automotivo Diário</span>
        <h3 id="cat-title" className="section-title">
          O que você vai encontrar nos grupos
        </h3>
        <p className="section-subtitle">
          Nossa IA varre a Shopee 24h para encontrar descontos agressivos nestas categorias:
        </p>
      </div>

      <div className="categories-grid">
        {visualCategories.map((cat) => (
          <article key={cat.id} className="cat-card">
            <div className="cat-card__header">
              <span className="cat-card__icon" aria-hidden="true">
                {cat.icon}
              </span>
              <span className="cat-card__tag">{cat.tag}</span>
            </div>
            <h4 className="cat-card__title">{cat.name}</h4>
            <p className="cat-card__desc">{cat.description}</p>
            <div className="cat-card__examples" aria-label="Exemplos de produtos">
              {cat.examples.map((ex, idx) => (
                <span key={idx} className="cat-card__chip">
                  {ex}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
