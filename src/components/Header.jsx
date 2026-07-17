import { useEffect, useState } from "react";
import { navigation } from "../data/portfolio";
import ThemeToggle from "./ThemeToggle";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    const handleScroll = () => setScrolled(window.scrollY > 24);

    window.addEventListener("resize", closeMenu);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("resize", closeMenu);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header${scrolled ? " header--scrolled" : ""}`}>
      <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
        <span>Mansha</span>
        <span className="logo-accent">.portfolio</span>
      </a>

      <div className="header-actions">
        <nav
          id="primary-navigation"
          className={`navbar${menuOpen ? " navbar--open" : ""}`}
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <ThemeToggle />

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <i className={menuOpen ? "bx bx-x" : "bx bx-menu"} aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}

export default Header;
