import { fetchGameDetails } from "../../../components/data/api.js";
import Image from "next/image";

export default async function GameDetails({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const game = await fetchGameDetails(slug);

  return (
    <div className="container mx-auto px-6 py-8">
      <Image
        src={game.background_image}
        alt={game.name}
        width={200}
        height={200}
        className="rounded-xl object-cover"
      />

      <h1 className="text-4xl font-bold mt-6">{game.name}</h1>

      <div
        className="mt-4 text-gray-300"
        dangerouslySetInnerHTML={{ __html: game.description }}
      />
    </div>
  );
}
