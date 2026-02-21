import "./globals.css";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import Hero from "../components/layout/Hero";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Game Atlas",
  description: "Discover top games and details",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-linear-to-br from-gray-950 via-gray-900 to-gray-950 text-white`}
      >
        <Header />
        <Hero />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
