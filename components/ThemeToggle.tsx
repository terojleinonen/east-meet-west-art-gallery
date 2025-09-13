// components/ThemeToggle.tsx (patched to trigger overlay)
"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>("system");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("theme-transition");
    const timeout = setTimeout(() => root.classList.remove("theme-transition"), 800);

    if (theme === "dark") {
      root.classList.add("dark");
    } else if (theme === "light") {
      root.classList.remove("dark");
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }

    return () => clearTimeout(timeout);
  }, [theme]);

  const cycleTheme = () => {
    if (theme === "system") setTheme("light");
    else if (theme === "light") setTheme("dark");
    else setTheme("system");
  };

  const iconVariants = {
    initial: { opacity: 0, rotate: -90, scale: 0.8 },
    animate: { opacity: 1, rotate: 0, scale: 1 },
    exit: { opacity: 0, rotate: 90, scale: 0.8 },
  };

  return (
    <button
      onClick={cycleTheme}
      className="relative flex items-center gap-2 rounded-full border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 px-4 py-2 text-sm font-medium shadow-sm hover:shadow transition"
      title="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "light" && (
          <motion.span key="light" variants={iconVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
            <Sun className="h-4 w-4 text-amber-500" />
          </motion.span>
        )}
        {theme === "dark" && (
          <motion.span key="dark" variants={iconVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
            <Moon className="h-4 w-4 text-blue-400" />
          </motion.span>
        )}
        {theme === "system" && (
          <motion.span key="system" variants={iconVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
            <span className="h-4 w-4 text-stone-500">◐</span>
          </motion.span>
        )}
      </AnimatePresence>
      <span className="capitalize">{theme}</span>
    </button>
  );
}