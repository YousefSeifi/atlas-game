const BASE_URL = "https://api.rawg.io/api";

export async function fetchGames(params = "") {
  const res = await fetch(
    `${BASE_URL}/games?key=${process.env.RAWG_API_KEY}&${params}`,
    { next: { revalidate: 60 } },
  );
  if (!res.ok) throw new Error("Failed to fetch games");
  return res.json();
}

export async function fetchGameDetails(slug) {
  console.log("API KEY:", process.env.RAWG_API_KEY);
  console.log("Slug:", slug);
  const res = await fetch(
    `${BASE_URL}/games/${slug}?key=${process.env.RAWG_API_KEY}`,
  );
  if (!res.ok) throw new Error("Failed to fetch game details");
  return res.json();
}


