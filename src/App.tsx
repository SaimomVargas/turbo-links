import { groups } from "./data/config";
import { Profile } from "./components/Profile";
import { GroupButton } from "./components/GroupButton";
import { Footer } from "./components/Footer";

export default function App() {
  const activeGroups = groups.filter((g) => g.status === "ativo");

  return (
    <main className="page">
      <Profile />
      <nav className="stack" aria-label="Grupos principais">
        {activeGroups.map((g) => (
          <GroupButton key={g.url} group={g} />
        ))}
      </nav>
      <Footer />
    </main>
  );
}
