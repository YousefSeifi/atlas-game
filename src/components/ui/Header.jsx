"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    router.push(`/?search=${search}`);
    setSearch("");
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl sm:text-2xl font-bold bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent"
        >
          GameAtlas
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-gray-300 relative">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>

          {/* Mega Menu Trigger */}
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors duration-200 font-medium">
              <span>Browse</span>
            </button>

            {/* Mega Menu */}
            {megaOpen && (
              <div className="absolute left-0 top-full w-175 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl p-8 grid grid-cols-3 gap-8 animate-fadeIn">
                <div>
                  <h4 className="text-white font-semibold mb-4">Genres</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {["Action", "Adventure", "RPG", "Shooter"].map((item) => (
                      <li key={item}>
                        <Link
                          href={`/?genres=${item.toLowerCase()}`}
                          className="hover:text-indigo-400"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-4">Platforms</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>
                      <Link
                        href="/?platforms=4"
                        className="hover:text-indigo-400"
                      >
                        PC
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/?platforms=187"
                        className="hover:text-indigo-400"
                      >
                        PlayStation
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/?platforms=1"
                        className="hover:text-indigo-400"
                      >
                        Xbox
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/?platforms=7"
                        className="hover:text-indigo-400"
                      >
                        Nintendo
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-4">Discover</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>
                      <Link
                        href="/?ordering=-rating"
                        className="hover:text-indigo-400"
                      >
                        Top Rated
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/?ordering=-released"
                        className="hover:text-indigo-400"
                      >
                        New Releases
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/?dates=2024-01-01,2024-12-31"
                        className="hover:text-indigo-400"
                      >
                        2024 Games
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Search */}
        <form onSubmit={handleSearch} className="hidden md:flex">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search games..."
            className="bg-gray-800 text-sm px-4 py-2 rounded-l-lg focus:outline-none"
          />
          <button className="bg-indigo-600 px-4 rounded-r-lg hover:bg-indigo-700 transition">
            Search
          </button>
        </form>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center text-white z-50"
        >
          <div className="absolute w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                mobileMenuOpen ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute w-6 h-0.5 bg-white transition-all duration-200 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                mobileMenuOpen ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Mega Menu  */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed left-0 right-0 top-18.25 mx-4 z-40">
          <div className="bg-gray-900/95 backdrop-blur-md border border-gray-800 rounded-xl shadow-2xl overflow-hidden">
            <div className="max-h-[70vh] overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-gray-800/50 [&::-webkit-scrollbar-thumb]:bg-indigo-500/50 [&::-webkit-scrollbar-thumb:hover]:bg-indigo-500/80 [&::-webkit-scrollbar-thumb]:rounded-full">
              {/* Home Link */}
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-300 hover:text-white hover:bg-white/5 transition py-2 px-4 mx-2 mt-3 rounded-lg"
              >
                Home
              </Link>

              <div className="border-t border-gray-800 my-2 mx-4"></div>

              {/* Mega Menu Items */}
              <div className="p-3 space-y-4">
                {/* Genres */}
                <div>
                  <h4 className="text-white font-medium text-xs uppercase tracking-wider mb-2 px-2">
                    Genres
                  </h4>
                  <div className="grid grid-cols-2 gap-1">
                    {[
                      "Action",
                      "Adventure",
                      "RPG",
                      "Shooter",
                      "Sports",
                      "Racing",
                      "Strategy",
                      "Simulation",
                    ].map((item) => (
                      <Link
                        key={item}
                        href={`/?genres=${item.toLowerCase()}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-gray-400 hover:text-indigo-400 hover:bg-white/5 transition text-sm py-1.5 px-2 rounded-lg"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Platforms */}
                <div>
                  <h4 className="text-white font-medium text-xs uppercase tracking-wider mb-2 px-2">
                    Platforms
                  </h4>
                  <div className="grid grid-cols-2 gap-1">
                    {[
                      ["PC", "4"],
                      ["PlayStation", "187"],
                      ["Xbox", "1"],
                      ["Nintendo", "7"],
                      ["Mac", "14"],
                      ["Linux", "3"],
                      ["iOS", "21"],
                      ["Android", "8"],
                    ].map(([name, id]) => (
                      <Link
                        key={name}
                        href={`/?platforms=${id}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-gray-400 hover:text-indigo-400 hover:bg-white/5 transition text-sm py-1.5 px-2 rounded-lg"
                      >
                        {name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Discover */}
                <div>
                  <h4 className="text-white font-medium text-xs uppercase tracking-wider mb-2 px-2">
                    Discover
                  </h4>
                  <div className="grid grid-cols-2 gap-1">
                    {[
                      ["Top Rated", "?ordering=-rating"],
                      ["New Releases", "?ordering=-released"],
                      ["2024 Games", "?dates=2024-01-01,2024-12-31"],
                      ["Upcoming", "?dates=2025-01-01,2025-12-31"],
                    ].map(([name, href]) => (
                      <Link
                        key={name}
                        href={href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-gray-400 hover:text-indigo-400 hover:bg-white/5 transition text-sm py-1.5 px-2 rounded-lg"
                      >
                        {name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
