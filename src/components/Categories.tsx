import { categoryChips, type CategoryChip } from "../data/config";

export interface CategoriesProps {
  chips?: CategoryChip[];
  label?: string;
}

export function Categories({
  chips = categoryChips,
  label = "Categorias monitoradas diariamente",
}: CategoriesProps = {}) {
  return (
    <section
      className="categories-section"
      role="region"
      aria-label="Categorias de ofertas"
    >
      <span className="categories-label">{label}</span>
      <div className="category-chips-list" role="list">
        {chips.map((c) => (
          <span key={c.id} className="category-chip" role="listitem">
            <span className="category-chip__dot" aria-hidden="true" />
            <span className="category-chip__text">{c.name}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
