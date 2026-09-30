import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      /* ===============================
         HEADER
      =============================== */

      gsap.from(".projects-header", {
        opacity: 0,
        y: 25,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });


      /* ===============================
         TITLE
      =============================== */

      gsap.from(".projects-title", {
        opacity: 0,
        y: 35,
        duration: 0.7,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".projects-title",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });


      /* ===============================
         PROJECT CARDS
      =============================== */

      const projects =
        gsap.utils.toArray<HTMLElement>(".project-feature");

      gsap.from(projects, {
        opacity: 0,
        y: 55,
        scale: 0.98,
        duration: 0.7,
        stagger: 0.16,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".projects-list",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });


      /* ===============================
         TERMINAL LINES
      =============================== */

      projects.forEach((project) => {

        const terminalLines =
          project.querySelectorAll(".terminal-content p");

        gsap.from(terminalLines, {
          opacity: 0,
          x: -10,
          stagger: 0.035,
          duration: 0.25,
          ease: "power2.out",

          scrollTrigger: {
            trigger: project,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        });


        /* ===============================
           PROJECT INFO
        =============================== */

        const info =
          project.querySelector(".project-info");

        if (info) {
          gsap.from(info, {
            opacity: 0,
            x: 25,
            duration: 0.6,
            ease: "power3.out",

            scrollTrigger: {
              trigger: project,
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          });
        }


        /* ===============================
           TECHNOLOGY TAGS
        =============================== */

        const tags =
          project.querySelectorAll(".project-tech span");

        gsap.from(tags, {
          opacity: 0,
          y: 10,
          scale: 0.92,
          stagger: 0.05,
          duration: 0.3,
          ease: "power2.out",

          scrollTrigger: {
            trigger: project,
            start: "top 72%",
            toggleActions: "play none none reverse",
          },
        });


        /* ===============================
           TERMINAL SCAN EFFECT
        =============================== */

        const terminal =
          project.querySelector(".terminal-window");

        if (terminal) {

          const scan =
            document.createElement("div");

          scan.className = "project-scan";

          terminal.appendChild(scan);

          gsap.fromTo(
            scan,
            {
              xPercent: -120,
              opacity: 0,
            },
            {
              xPercent: 120,
              opacity: 0.7,
              duration: 0.9,
              ease: "power2.inOut",

              scrollTrigger: {
                trigger: project,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });


      /* ===============================
         PROJECT HOVER EFFECT
      =============================== */

      projects.forEach((project) => {

        const visual =
          project.querySelector(".project-visual");

        const title =
          project.querySelector("h3");

        project.addEventListener("mouseenter", () => {

          gsap.to(project, {
            y: -5,
            duration: 0.25,
            ease: "power2.out",
          });

          if (visual) {
            gsap.to(visual, {
              scale: 1.015,
              duration: 0.35,
              ease: "power2.out",
            });
          }

          if (title) {
            gsap.to(title, {
              x: 6,
              duration: 0.25,
              ease: "power2.out",
            });
          }
        });


        project.addEventListener("mouseleave", () => {

          gsap.to(project, {
            y: 0,
            duration: 0.25,
            ease: "power2.out",
          });

          if (visual) {
            gsap.to(visual, {
              scale: 1,
              duration: 0.35,
              ease: "power2.out",
            });
          }

          if (title) {
            gsap.to(title, {
              x: 0,
              duration: 0.25,
              ease: "power2.out",
            });
          }
        });

      });


      /* ===============================
         FOOTER / END
      =============================== */

      gsap.from(".projects-end", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".projects-end",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);


  return (
    <section
      ref={sectionRef}
      id="projects"
      className="projects-section"
    >

      <div className="projects-bg" />

      <div className="projects-container">


        {/* ===============================
           HEADER
        =============================== */}

        <div className="projects-header">

          <span className="section-number">
            04
          </span>

          <span className="section-label">
            PROJECTS / SECURITY BUILDS
          </span>

        </div>


        {/* ===============================
           TITLE
        =============================== */}

        <div className="projects-title">

          <p>
            SELECTED WORK
          </p>

          <h2>
            BUILDING
            <br />
            <span>SECURITY SYSTEMS.</span>
          </h2>

        </div>


        {/* ===============================
           PROJECT LIST
        =============================== */}

        <div className="projects-list">


          {/* =====================================================
             PROJECT 01 — FRONX
          ===================================================== */}

          <article className="project-feature">

            {/* VISUAL */}

            <div className="project-visual">

              <div className="terminal-window">

                <div className="terminal-header">

                  <span className="terminal-dot" />
                  <span className="terminal-dot" />
                  <span className="terminal-dot" />

                  <span className="terminal-title">
                    fronX / security-monitor
                  </span>

                </div>


                <div className="terminal-content">

                  <p>
                    <span className="terminal-green">
                      $
                    </span>{" "}
                    ./fronX --monitor
                  </p>

                  <p className="terminal-muted">
                    Initializing threat monitoring engine...
                  </p>

                  <p>
                    <span className="terminal-green">
                      [ONLINE]
                    </span>{" "}
                    Real-time monitoring
                  </p>

                  <p>
                    <span className="terminal-green">
                      [ACTIVE]
                    </span>{" "}
                    AI threat detection
                  </p>

                  <p>
                    <span className="terminal-green">
                      [ACTIVE]
                    </span>{" "}
                    MITRE ATT&CK mapping
                  </p>

                  <div className="terminal-line" />

                  <p>
                    THREATS DETECTED:
                    <span className="terminal-warning">
                      {" "}07
                    </span>
                  </p>

                  <p>
                    ACTIVE INCIDENTS:
                    <span className="terminal-danger">
                      {" "}02
                    </span>
                  </p>

                </div>

              </div>

              <div className="project-glow" />

            </div>


            {/* INFO */}

            <div className="project-info">

              <div className="project-number">
                01 / FEATURED
              </div>

              <h3>
                fronX
              </h3>

              <p className="project-type">
                AI-POWERED SIEM / SOC PLATFORM
              </p>

              <p className="project-description">
                A security monitoring platform designed to
                collect, analyze and visualize security events
                in real time, with AI-assisted threat detection
                and MITRE ATT&CK mapping.
              </p>

              <div className="project-tech">

                <span>Python</span>
                <span>Flask</span>
                <span>Socket.IO</span>
                <span>AI / ML</span>
                <span>MITRE ATT&CK</span>

              </div>

              <div className="project-actions">

                <a
                  href="https://github.com/Mufeedkm010/fronX-SOC"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VIEW PROJECT ↗
                </a>

              </div>

            </div>

          </article>



          {/* =====================================================
             PROJECT 02 — KICKLINK
          ===================================================== */}

          <article className="project-feature project-kicklink">

            {/* VISUAL */}

            <div className="project-visual">

              <div className="terminal-window">

                <div className="terminal-header">

                  <span className="terminal-dot" />
                  <span className="terminal-dot" />
                  <span className="terminal-dot" />

                  <span className="terminal-title">
                    KickLink / osint-analyzer
                  </span>

                </div>


                <div className="terminal-content">

                  <p>
                    <span className="terminal-green">
                      $
                    </span>{" "}
                    python kicklink.py --scan
                  </p>

                  <p className="terminal-muted">
                    Initializing OSINT analysis engine...
                  </p>

                  <p>
                    <span className="terminal-green">
                      [ONLINE]
                    </span>{" "}
                    URL analysis engine
                  </p>

                  <p>
                    <span className="terminal-green">
                      [ACTIVE]
                    </span>{" "}
                    Phishing detection
                  </p>

                  <p>
                    <span className="terminal-green">
                      [ACTIVE]
                    </span>{" "}
                    Domain intelligence
                  </p>

                  <p>
                    <span className="terminal-green">
                      [ACTIVE]
                    </span>{" "}
                    Suspicious URL analysis
                  </p>

                  <div className="terminal-line" />

                  <p>
                    TARGET:
                    <span className="terminal-warning">
                      {" "}example-target.com
                    </span>
                  </p>

                  <p>
                    ANALYSIS:
                    <span className="terminal-green">
                      {" "}COMPLETE
                    </span>
                  </p>

                  <p>
                    THREAT STATUS:
                    <span className="terminal-danger">
                      {" "}SUSPICIOUS
                    </span>
                  </p>

                </div>

              </div>

              <div className="project-glow kicklink-glow" />

            </div>


            {/* INFO */}

            <div className="project-info">

              <div className="project-number">
                02 / SECURITY TOOL
              </div>

              <h3>
                KickLink
              </h3>

              <p className="project-type">
                OSINT / PHISHING DETECTION TOOL
              </p>

              <p className="project-description">
                A Python-based OSINT security tool designed to
                analyze URLs and identify suspicious, phishing
                and potentially malicious links through
                security-oriented reconnaissance and analysis.
              </p>

              <div className="project-tech">

                <span>Python</span>
                <span>OSINT</span>
                <span>URL Analysis</span>
                <span>Phishing Detection</span>
                <span>Security Research</span>

              </div>

              <div className="project-actions">

                <a
                  href="https://github.com/Mufeedkm010/kick-link.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VIEW PROJECT ↗
                </a>

              </div>

            </div>

          </article>



          {/* =====================================================
             PROJECT 03 — REAL WORLD VAPT
          ===================================================== */}

          <article className="project-feature project-vapt">

            {/* VISUAL */}

            <div className="project-visual">

              <div className="terminal-window">

                <div className="terminal-header">

                  <span className="terminal-dot" />
                  <span className="terminal-dot" />
                  <span className="terminal-dot" />

                  <span className="terminal-title">
                    VAPT / client-assessment
                  </span>

                </div>


                <div className="terminal-content">

                  <p>
                    <span className="terminal-green">
                      $
                    </span>{" "}
                    ./vapt --assessment
                  </p>

                  <p className="terminal-muted">
                    Initializing security assessment...
                  </p>

                  <p>
                    <span className="terminal-green">
                      [ACTIVE]
                    </span>{" "}
                    Reconnaissance
                  </p>

                  <p>
                    <span className="terminal-green">
                      [ACTIVE]
                    </span>{" "}
                    Web application testing
                  </p>

                  <p>
                    <span className="terminal-green">
                      [ACTIVE]
                    </span>{" "}
                    Vulnerability validation
                  </p>

                  <p>
                    <span className="terminal-green">
                      [ACTIVE]
                    </span>{" "}
                    Security analysis
                  </p>

                  <div className="terminal-line" />

                  <p>
                    ASSESSMENT:
                    <span className="terminal-green">
                      {" "}COMPLETE
                    </span>
                  </p>

                  <p>
                    FINDINGS:
                    <span className="terminal-warning">
                      {" "}IDENTIFIED
                    </span>
                  </p>

                  <p>
                    REPORT:
                    <span className="terminal-green">
                      {" "}GENERATED
                    </span>
                  </p>

                </div>

              </div>

              <div className="project-glow vapt-glow" />

            </div>


            {/* INFO */}

            <div className="project-info">

              <div className="project-number">
                03 / PROFESSIONAL WORK
              </div>

              <h3>
                Real-World VAPT
              </h3>

              <p className="project-type">
                CLIENT SECURITY ASSESSMENTS
              </p>

              <p className="project-description">
                Performed vulnerability assessment and
                penetration testing for client environments
                as part of professional cybersecurity
                engagements, covering reconnaissance,
                web application security testing,
                vulnerability validation and reporting.
              </p>

              <div className="project-tech">

                <span>VAPT</span>
                <span>Web Security</span>
                <span>Reconnaissance</span>
                <span>Burp Suite</span>
                <span>Nmap</span>
                <span>Security Reporting</span>

              </div>

              <div className="project-actions">

                <span className="vapt-confidential">
                  CLIENT WORK / CONFIDENTIAL ↗
                </span>

              </div>

            </div>

          </article>

        </div>


        {/* ===============================
           FOOTER
        =============================== */}

        <div className="projects-end">

          <span>
            01 — 03
          </span>

          <span>
            BUILDING / TESTING / SECURING
          </span>

        </div>

      </div>

    </section>
  );
}

export default Projects;