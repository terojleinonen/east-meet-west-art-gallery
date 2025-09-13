// `components/Header.tsx`

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 bg-white dark:bg-stone-800 shadow-sm z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-2xl text-stone-900 dark:text-stone-100">
          East Meets West
        </Link>
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6 text-sm font-medium text-stone-700 dark:text-stone-300">
            <li><a href="#gallery" className="hover:text-stone-900 dark:hover:text-white">Gallery</a></li>
            <li><a href="#about" className="hover:text-stone-900 dark:hover:text-white">About</a></li>
            <li><a href="#exhibitions" className="hover:text-stone-900 dark:hover:text-white">Exhibitions</a></li>
            <li><a href="#contact" className="hover:text-stone-900 dark:hover:text-white">Contact</a></li>
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}