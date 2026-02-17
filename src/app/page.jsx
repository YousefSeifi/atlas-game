import { fetchGames } from "../components/data/api.js";
import GameCard from "../components/layout/GameCard.jsx";
import Filters from "../components/layout/Filters.jsx";
export default async function Home({ searchParams }) {
  const resolvedSearchParams = await searchParams;

  const params = new URLSearchParams(resolvedSearchParams).toString();

  const data = await fetchGames(params);
  return (
    <div className="container mx-auto px-6 py-8">
      <Filters />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {data.results.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
