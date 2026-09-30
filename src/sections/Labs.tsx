import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Labs() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".labs-header", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.fromTo(".lab-card", {
        opacity: 0,
        y: 28,
        scale: 0.98,
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.14,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".labs-grid",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="labs"
      className="labs-section"
    >
      <div className="labs-bg" />

      <div className="labs-container">

        {/* HEADER */}

        <div className="labs-header">
          <span className="section-number">06</span>

          <span className="section-label">
            SECURITY LABS / PRACTICE
          </span>
        </div>

        {/* TITLE */}

        <div className="labs-title">
          <p>HANDS-ON SECURITY</p>

          <h2>
            BREAK.
            <br />
            <span>ANALYZE.</span>
            <br />
            LEARN.
          </h2>
        </div>

        {/* LAB GRID */}

        <div className="labs-grid">

          {/* BANDIT */}

          <article className="lab-card">

            <div className="lab-top">
              <span className="lab-index">
                01
              </span>

              <span className="lab-status">
                COMPLETED
              </span>
            </div>

            <div className="lab-icon">
              //
            </div>

            <div className="lab-content">

              <span className="lab-platform">
                OVER THE WIRE
              </span>

              <h3>Bandit</h3>

              <p>
                Linux-based security challenges focused on
                command-line usage, file permissions, SSH,
                file discovery and problem solving.
              </p>

            </div>

            <div className="lab-tags">
              <span>Linux</span>
              <span>SSH</span>
              <span>CLI</span>
            </div>

          </article>

          {/* MR ROBOT */}

          <article className="lab-card">

            <div className="lab-top">
              <span className="lab-index">
                02
              </span>

              <span className="lab-status">
                COMPLETED
              </span>
            </div>

            <div className="lab-icon">
              //
            </div>

            <div className="lab-content">

              <span className="lab-platform">
                VULNHUB
              </span>

              <h3>Mr. Robot</h3>

              <p>
                Practical penetration-testing lab involving
                reconnaissance, enumeration, web exploitation,
                credential discovery and privilege escalation.
              </p>

            </div>

            <div className="lab-tags">
              <span>Nmap</span>
              <span>Web Security</span>
              <span>Linux</span>
            </div>

          </article>

          {/* CHOCOLATE FACTORY */}

          <article className="lab-card">

            <div className="lab-top">
              <span className="lab-index">
                03
              </span>

              <span className="lab-status">
                COMPLETED
              </span>
            </div>

            <div className="lab-icon">
              //
            </div>

            <div className="lab-content">

              <span className="lab-platform">
                CTF
              </span>

              <h3>Chocolate Factory</h3>

              <p>
                Capture-the-flag challenge involving enumeration,
                service analysis, exploitation and Linux privilege
                escalation techniques.
              </p>

            </div>

            <div className="lab-tags">
              <span>CTF</span>
              <span>Enumeration</span>
              <span>Privilege Escalation</span>
            </div>

          </article>

          {/* BRUTE IT */}

          <article className="lab-card">

            <div className="lab-top">
              <span className="lab-index">
                04
              </span>

              <span className="lab-status">
                COMPLETED
              </span>
            </div>

            <div className="lab-icon">
              //
            </div>

            <div className="lab-content">

              <span className="lab-platform">
                TRYHACKME
              </span>

              <h3>Brute It</h3>

              <p>
                Practical lab focused on reconnaissance,
                web enumeration, authentication testing,
                password attacks and privilege escalation.
              </p>

            </div>

            <div className="lab-tags">
              <span>Web Security</span>
              <span>Brute Force</span>
              <span>Linux</span>
            </div>

          </article>

        </div>

        {/* FOOTER */}

        <div className="labs-footer">

          <div>
            <span className="footer-number">04</span>
            <span>LABS DOCUMENTED</span>
          </div>

          <div>
            <span>CONTINUOUS PRACTICE</span>
            <span className="footer-arrow">↗</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Labs;
