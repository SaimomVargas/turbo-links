import { groups } from "./data/config";
import { Profile } from "./components/Profile";
import { GroupButton } from "./components/GroupButton";
import { Categories } from "./components/Categories";
import { Footer } from "./components/Footer";

export default function App() {
  const featured = groups.filter((g) => g.status === "ativo" && g.featured);

  return (
    <main className="page">
      <Profile />
      <nav className="stack" aria-label="Grupos principais">
        {featured.map((g) => (
          <GroupButton key={g.url} group={g} />
        ))}
      </nav>
      <Categories />
      <Footer />
    </main>
  );
}
