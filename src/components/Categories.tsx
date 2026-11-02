import { categoryChips } from "../data/config";

export function Categories() {
  return (
    <section className="categories-chips-section" aria-label="Categorias de ofertas">
      <span className="categories-chips-label">Categorias monitoradas diariamente:</span>
      <p className="categories-line">{categoryChips.map((c) => c.name).join(" · ")}</p>
    </section>
  );
}
