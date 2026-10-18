import { categories, groups } from "../data/config";
import { GroupButton } from "./GroupButton";

export function Categories() {
  const active = groups.filter((g) => g.status === "ativo");

  const withExtraGroups = categories
    .map((c) => ({ category: c, items: active.filter((g) => g.categoryId === c.id && !g.featured) }))
    .filter((x) => x.items.length > 0);

  const comingSoon = categories.filter((c) => !active.some((g) => g.categoryId === c.id));

  if (withExtraGroups.length === 0 && comingSoon.length === 0) return null;

  return (
    <section className="categories" aria-labelledby="cat-title">
      <h2 id="cat-title">Grupos por categoria</h2>

      {withExtraGroups.map(({ category, items }) => (
        <div key={category.id} className="categories__block">
          <h3>{category.name}</h3>
          <div className="stack">
            {items.map((g) => (
              <GroupButton key={g.url} group={g} />
            ))}
          </div>
        </div>
      ))}

      {comingSoon.length > 0 && (
        <ul className="soon">
          {comingSoon.map((c) => (
            <li key={c.id} className="soon__item">
              <span>
                <strong>{c.name}</strong>
                <span>{c.description}</span>
              </span>
              <em>Em breve</em>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
