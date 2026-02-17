import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 mt-20">
      <div className="container mx-auto px-6 py-14">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Discover top-rated and trending video games with detailed
              insights, ratings, and release data powered by the RAWG API.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/?ordering=-rating"
                  className="hover:text-white transition"
                >
                  Top Rated
                </Link>
              </li>
              <li>
                <Link
                  href="/?ordering=-released"
                  className="hover:text-white transition"
                >
                  New Releases
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="https://api.rawg.io/docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  RAWG API
                </a>
              </li>
              <li>
                <a
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Next.js
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Tailwind CSS
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              {/* GitHub */}
              <a
                href="https://github.com/YousefSeifi"
                className="p-2 bg-gray-800 rounded-lg hover:bg-indigo-600 transition"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.95 3.21 9.15 7.66 10.64.56.1.76-.24.76-.54 0-.27-.01-1.16-.02-2.1-3.11.68-3.77-1.5-3.77-1.5-.51-1.3-1.24-1.64-1.24-1.64-1.01-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.11-.28-.5-1.42.11-2.95 0 0 .94-.3 3.08 1.15.89-.25 1.85-.38 2.8-.38s1.91.13 2.8.38c2.14-1.45 3.08-1.15 3.08-1.15.61 1.53.22 2.67.11 2.95.71.78 1.15 1.78 1.15 3 0 4.29-2.62 5.23-5.11 5.51.4.35.75 1.04.75 2.1 0 1.52-.01 2.75-.01 3.13 0 .3.2.65.77.54 4.44-1.49 7.65-5.69 7.65-10.64C23.25 5.48 18.27.5 12 .5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Yousef Seifi. Built with Next.js &
          Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
