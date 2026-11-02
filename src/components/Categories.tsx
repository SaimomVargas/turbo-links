import { categoryChips } from "../data/config";

export function Categories() {
  return (
    <section className="categories-chips-section" aria-label="Categorias de ofertas">
      <span className="categories-chips-label">Categorias monitoradas diariamente:</span>
      <div className="categories-chips-list">
        {categoryChips.map((cat) => (
          <span key={cat.id} className="category-chip">
            <span className="category-chip__icon" aria-hidden="true">
              {cat.icon}
            </span>
            <span className="category-chip__name">{cat.name}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
