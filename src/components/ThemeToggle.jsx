import { useEffect, useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    const shouldUseDark = storedTheme
      ? storedTheme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;

    setDarkMode(shouldUseDark);
    document.documentElement.dataset.theme = shouldUseDark ? "dark" : "light";
  }, []);

  const toggleTheme = () => {
    const nextDarkMode = !darkMode;
    setDarkMode(nextDarkMode);
    document.documentElement.dataset.theme = nextDarkMode ? "dark" : "light";
    window.localStorage.setItem(
      "portfolio-theme",
      nextDarkMode ? "dark" : "light",
    );
  };

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={`Switch to ${darkMode ? "light" : "dark"} theme`}
      onClick={toggleTheme}
    >
      <i className={darkMode ? "bx bx-sun" : "bx bx-moon"} aria-hidden="true" />
    </button>
  );
}

export default ThemeToggle;
