function Footer() {
  return (
    <footer className="site-footer">

      {/* TOP LINE */}
      <div className="footer-top-line">
        <span className="footer-status-dot" />
        <span>SECURITY RESEARCHER</span>
      </div>

      {/* MAIN FOOTER */}
      <div className="footer-main">

        <div className="footer-brand-section">
          <a
            href="#hero"
            className="footer-brand"
            aria-label="Back to top"
          >
            Mufeed<span>.</span>
          </a>

          <p className="footer-tagline">
            BREAK SYSTEMS. UNDERSTAND THEM. SECURE THEM.
          </p>
        </div>

        {/* SOCIAL ICONS */}
        <div className="footer-socials">

          {/* EMAIL */}
          <a
            href="mailto:mufeedkm010@gmail.com"
            aria-label="Email"
            title="Email"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 5h18v14H3z" />
              <path d="m3 6 9 7 9-7" />
            </svg>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/Mufeedkm010"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.2-1.5 6.2-6.8a5.3 5.3 0 0 0-1.4-3.7 4.9 4.9 0 0 0-.1-3.7s-1.2-.4-3.9 1.4a13.5 13.5 0 0 0-7 0C5.2.8 4 1.2 4 1.2a4.9 4.9 0 0 0-.1 3.7 5.3 5.3 0 0 0-1.4 3.7c0 5.3 3.2 6.5 6.2 6.8a3.4 3.4 0 0 0-.9 2.7V22" />
            </svg>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/mufeedkm010"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 9v11M4 4v.01M9 20v-6a5 5 0 0 1 10 0v6M9 9v11" />
            </svg>
          </a>

        </div>

      </div>

      {/* BOTTOM LINE */}
      <div className="footer-bottom">

        <span>
          © {new Date().getFullYear()} Mufeed
        </span>

        <a href="#hero">
          BACK TO TOP ↑
        </a>

      </div>

    </footer>
  );
}

export default Footer;
