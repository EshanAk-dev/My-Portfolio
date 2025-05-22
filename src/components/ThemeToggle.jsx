import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const theme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (theme === "dark" || (!theme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, []);

  const toggleTheme = (e) => {
    e.preventDefault();

    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  if (!mounted) return null;

  return (
    <button
  onClick={toggleTheme}
  className={`fixed top-4 right-4 z-[9999] w-12 h-12 border rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer
    ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} hidden sm:flex`}
  style={{
    position: "fixed",
    top: "16px",
    right: "16px",
    zIndex: 9999,
    pointerEvents: "auto",
  }}
  aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
>
  {isDarkMode ? (
    <Sun className="w-5 h-5 text-yellow-500" />
  ) : (
    <Moon className="w-5 h-5 text-gray-700" />
  )}
</button>
  );
};

export default ThemeToggle;
