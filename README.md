# 🎮 GameAtlas

A modern game discovery platform built with **Next.js 16**, **Tailwind CSS**, and the RAWG Game API.  
GameAtlas allows users to browse, filter, search, and explore detailed information about video games using a clean and professional UI.

---

## ⚠️ Note About RAWG API Access

The RAWG API may be **restricted in some regions**, so if you encounter issues fetching data, you might need to use a **VPN or proxy** to access it.  
Make sure your `NEXT_PUBLIC_RAWG_API_KEY` is valid and set in your `.env.local` file.

---

## 📂 Project Structure, Installation & Setup, Features, Future Improvements, Author & License

```bash
# -------------------------------
# Project Structure
# -------------------------------
game-atlas/
├── src/
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.jsx
│   │   └── games/
│   │        └── [slug]/
│   │             └── page.jsx
│   ├── components/
│   │   ├── layout/
│   │   │    ├── GameCard.jsx
│   │   │    ├── Filters.jsx
│   │   │    └── Hero.jsx
│   │   └── ui/
│   │        ├── Header.jsx
│   │        └── Footer.jsx
│   └── lib/
│       └── api.js
├── tailwind.config.js
├── next.config.js
├── package.json
└── globals.css

# -------------------------------
# Installation & Running
# -------------------------------
git clone https://github.com/your-username/game-atlas.git
cd game-atlas
npm install
npm run dev
# Open in browser: http://localhost:3000

# -------------------------------
Environment Variables
# -------------------------------
# Create a .env.local file in the root
NEXT_PUBLIC_RAWG_API_KEY=your_api_key_here
# Get API key from: https://api.rawg.io/docs/

# -------------------------------
# API Integration
# -------------------------------
Fetches:
Game lists
Game details
Filters (genres, platforms)
Search results
API logic handled in: src/lib/api.js

# -------------------------------
# Features & Responsive Design
# -------------------------------
Desktop: Mega Menu Navigation
Mobile: Hamburger + Accordion Menu
Optimized Grid Layout
Smooth Hover Animations
Search games by name
Filter by genres and platforms
Sort by rating or release date
Dynamic game detail pages
Optimized images with Next.js <Image />
Fast navigation using App Router

# -------------------------------
# Future Improvements
# -------------------------------
Skeleton loading states
Framer Motion animations
# -------------------------------
# Author & License
# -------------------------------
Developed by ["Your Name"]
Frontend Developer | Next.js Specialist
License: Educational & portfolio purposes
```
