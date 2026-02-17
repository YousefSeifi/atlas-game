import Link from "next/link";
import Image from "next/image";

export default function GameCard({ game }) {
  const imageSrc = game.background_image || null;

  return (
    <div className="relative group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={game.name}
          width={400}
          height={225}
          className="object-cover w-full h-56.25"
        />
      ) : (
        <div className="w-full h-56.25 bg-gray-700 flex items-center justify-center text-gray-400 text-sm">
          No Image Available
        </div>
      )}

      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="p-4">
        <h2 className="text-lg font-semibold">{game.name}</h2>

        <div className="flex items-center gap-2 text-gray-400 text-sm mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 text-yellow-400"
          >
            <path
              fillRule="evenodd"
              d="M11.48 3.499a.75.75 0 011.04 0l2.247 2.184 3.112.453a.75.75 0 01.416 1.279l-2.252 2.195.531 3.099a.75.75 0 01-1.088.79L12 12.347l-2.787 1.468a.75.75 0 01-1.088-.79l.53-3.1-2.25-2.194a.75.75 0 01.416-1.28l3.112-.452 2.247-2.184z"
              clipRule="evenodd"
            />
          </svg>

          <span>{game.rating}</span>
        </div>
      </div>

      <Link
        href={`/games/${game.slug}`}
        className="absolute bottom-4 right-4 z-10 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-lg text-sm shadow-lg"
      >
        More Info
      </Link>
    </div>
  );
}
