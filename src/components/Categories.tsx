import { categoryChips } from "../data/config";

export function Categories() {
  return (
    <section className="categories-section" aria-label="Categorias de ofertas">
      <span className="categories-label">Categorias monitoradas diariamente</span>
      <div className="category-chips-list">
        {categoryChips.map((c) => (
          <span key={c.id} className="category-chip">
            <span className="category-chip__dot" aria-hidden="true" />
            <span className="category-chip__text">{c.name}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
