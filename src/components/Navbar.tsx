import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

      <a href="#hero" className="nav-logo">
        <div className="logo-icon">
          <span>◆</span>
        </div>

        <span>Muhammed Mufeed K M</span>
      </a>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#labs">Labs</a>
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

        <a
          href="#contact"
          className="contact-button"
        >
          Contact
        </a>

      </div>

    </nav>
  );
}

export default Navbar;