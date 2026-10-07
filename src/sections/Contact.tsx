import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-header", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.fromTo(".contact-main", {
        opacity: 0,
        y: 32,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".contact-main",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.fromTo(".contact-terminal-link", {
        opacity: 0,
        x: -14,
      }, {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        duration: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-terminal",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="contact-section"
    >
      <div className="contact-bg" />

      <div className="contact-container">

        {/* HEADER */}

        <div className="contact-header">
          <span className="section-number">07</span>

          <span className="section-label">
            CONTACT / CONNECTION
          </span>
        </div>

        {/* MAIN */}

        <div className="contact-main">

          <div className="contact-intro">
            <p className="contact-kicker">
              HAVE A SECURITY CHALLENGE?
            </p>

            <h2>
              LET'S BUILD
              <br />
              <span>SOMETHING SECURE.</span>
            </h2>

            <p className="contact-description">
              Whether it's security research, a cybersecurity
              project, collaboration or an opportunity to work
              together, let's connect.
            </p>
          </div>

          {/* TERMINAL */}

          <div className="contact-terminal">

            <div className="contact-terminal-header">
              <span className="terminal-dot" />
              <span className="terminal-dot" />
              <span className="terminal-dot" />

              <span>
                secure_connection.sh
              </span>
            </div>

            <div className="contact-terminal-body">

              <p>
                <span className="terminal-green">$</span>{" "}
                ./connect --initialize
              </p>

              <p className="terminal-muted">
                Establishing secure connection...
              </p>

              <p>
                <span className="terminal-green">
                  [OK]
                </span>{" "}
                Connection ready.
              </p>

              <div className="terminal-separator" />

              <a
                href="mailto:mufeedkm010@gmail.com"
                className="contact-terminal-link"
              >
                <span>EMAIL</span>
                <span>↗</span>
              </a>

              <a
                href="https://github.com/Mufeedkm010"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-terminal-link"
              >
                <span>GITHUB</span>
                <span>↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/mufeedkm010"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-terminal-link"
              >
                <span>LINKEDIN</span>
                <span>↗</span>
              </a>

            </div>

          </div>

        </div>

        {/* FOOTER */}


      </div>
    </section>
  );
}

export default Contact;
