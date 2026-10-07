import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#labs", label: "Labs" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on Escape, lock page scroll while the menu is open
  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // If the window grows to desktop size, make sure the menu is closed
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 801px)");
    const onChange = () => mq.matches && setOpen(false);

    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <nav
        className={`navbar ${scrolled || open ? "navbar-scrolled" : ""}`}
      >
        <a href="#hero" className="nav-logo" onClick={close}>
          <div className="logo-icon">
            <span>◆</span>
          </div>

          <span>Muhammed Mufeed K M</span>
        </a>

        <div className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-socials">
          <a
            href="https://github.com/Mufeedkm010"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            GITHUB
          </a>

          <a
            href="https://www.linkedin.com/in/mufeedkm010"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            LINKEDIN
          </a>

          <a href="#contact" className="contact-button">
            Contact
          </a>

          <button
            type="button"
            className={`nav-toggle ${open ? "nav-toggle-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? "mobile-menu-open" : ""}`}
        aria-hidden={!open}
      >
        <nav className="mobile-menu-links">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              tabIndex={open ? 0 : -1}
              style={{ transitionDelay: open ? `${index * 50 + 80}ms` : "0ms" }}
            >
              <span className="mobile-menu-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mobile-menu-footer">
          <a
            href="https://github.com/Mufeedkm010"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
          >
            GITHUB ↗
          </a>
          <a
            href="https://www.linkedin.com/in/mufeedkm010"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
          >
            LINKEDIN ↗
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;