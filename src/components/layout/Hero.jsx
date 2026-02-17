import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative text-center py-24 px-6">
      <div className="absolute inset-0 bg-linear-to-r from-indigo-600/10 to-purple-600/10 blur-3xl"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Discover The Best Games
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          Explore top-rated, newly released, and trending video games powered by
          RAWG API.
        </p>

        <Link
          href="/?ordering=-rating"
          className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg transition"
        >
          Explore Now
        </Link>
      </div>
    </section>
  );
}
