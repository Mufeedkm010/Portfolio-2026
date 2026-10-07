import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import profileImage from "../assets/profile.jpeg";

gsap.registerPlugin(ScrollTrigger);

const designations = [
  "Cybersecurity Professional",
  "Ethical Hacker",
  "Cybersecurity Researcher",
  "Penetration Tester",
];

function About() {
  const sectionRef = useRef<HTMLElement>(null);

  const [designationIndex, setDesignationIndex] = useState(0);
  const [typedDesignation, setTypedDesignation] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  /* =========================================
     DESIGNATION TYPEWRITER
  ========================================= */

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTypedDesignation("Cybersecurity Researcher");
      return;
    }

    const currentDesignation = designations[designationIndex];

    const isComplete =
      typedDesignation === currentDesignation;

    const delay = isDeleting
      ? 45
      : isComplete
      ? 1300
      : 85;

    const timer = window.setTimeout(() => {
      if (isDeleting) {
        if (typedDesignation.length === 0) {
          setIsDeleting(false);

          setDesignationIndex(
            (index) =>
              (index + 1) % designations.length
          );
        } else {
          setTypedDesignation((current) =>
            current.slice(0, -1)
          );
        }
      } else if (isComplete) {
        setIsDeleting(true);
      } else {
        setTypedDesignation(
          currentDesignation.slice(
            0,
            typedDesignation.length + 1
          )
        );
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [
    designationIndex,
    isDeleting,
    typedDesignation,
  ]);

  /* =========================================
     GSAP ANIMATIONS
  ========================================= */

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      /* MAIN ABOUT ANIMATION */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions:
            "play none none reverse",
        },
      });

      tl.from(".about-header", {
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: "power2.out",
      })

        .from(
          ".about-intro",
          {
            opacity: 0,
            y: 30,
            duration: 0.4,
            ease: "power3.out",
          },
          "-=0.15"
        )

        .from(
          ".about-description",
          {
            opacity: 0,
            y: 20,
            duration: 0.35,
            ease: "power3.out",
          },
          "-=0.25"
        )

        .from(
          ".about-profile",
          {
            opacity: 0,
            y: 40,
            scale: 0.97,
            duration: 0.45,
            ease: "power3.out",
          },
          "-=0.3"
        );


      /* =========================================
         COUNTING NUMBERS
      ========================================= */

      const counters =
        gsap.utils.toArray<HTMLElement>(
          ".about-counters .about-counter-number"
        );

      counters.forEach((counter) => {
        const target =
          Number(counter.dataset.target) || 0;

        const counterObject = {
          value: 0,
        };

        gsap.to(counterObject, {
          value: target,

          duration: 1.4,

          ease: "power2.out",

          scrollTrigger: {
            trigger: ".about-counters",
            start: "top 85%",
            toggleActions:
              "play none none reverse",
          },

          onUpdate: () => {
            counter.textContent =
              Math.floor(
                counterObject.value
              )
                .toString()
                .padStart(2, "0");
          },
        });
      });


      /* =========================================
         STAT BOX ANIMATION
      ========================================= */

      gsap.from(".about-stat", {
        opacity: 0,
        y: 25,
        scale: 0.96,

        stagger: 0.1,

        duration: 0.45,

        ease: "power3.out",

        scrollTrigger: {
          trigger: ".about-stats",
          start: "top 85%",

          toggleActions:
            "play none none reverse",
        },
      });


      /* =========================================
         COUNTER SECTION ANIMATION
      ========================================= */

      gsap.from(".about-counter", {
        opacity: 0,
        y: 20,

        duration: 0.5,

        stagger: 0.1,

        ease: "power3.out",

        scrollTrigger: {
          trigger: ".about-counters",
          start: "top 88%",

          toggleActions:
            "play none none reverse",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="about-section"
    >

      <div className="about-grid" />

      <div className="about-container">

        {/* =====================================
            HEADER
        ===================================== */}

        <div className="about-header">

          <span className="section-number">
            02
          </span>

          <span className="section-label">
            ABOUT / PROFILE
          </span>

        </div>


        {/* =====================================
            MAIN CONTENT
        ===================================== */}

        <div className="about-main">

          {/* LEFT SIDE */}

          <div className="about-content">

            <div className="about-intro">

              <p className="about-kicker">
                SECURITY IS NOT JUST DEFENSE.
              </p>


              {/* NAME */}

              <p className="about-greeting">
                <span>Muhammed Mufeed K M</span>
              </p>


              {/* ANIMATED DESIGNATION */}

              <p
                className="about-designation"
                aria-label="
                  Cybersecurity Professional,
                  Ethical Hacker,
                  Cybersecurity Researcher,
                  Penetration Tester
                "
              >

                <span>
                  {typedDesignation}
                </span>

                <span
                  className="about-type-cursor"
                  aria-hidden="true"
                />

              </p>


              {/* BREAK SYSTEM */}

              <h2>

                <span className="about-title-lead">
                  I{" "}
                  <span className="about-highlight">
                    BREAK
                  </span>{" "}
                  SYSTEMS
                </span>

                <br />

                TO{" "}
                <span className="about-highlight">
                  UNDERSTAND
                </span>

                <br />

                HOW TO SECURE THEM.

              </h2>

            </div>


            {/* DESCRIPTION */}

            <div className="about-description">

              <p>
                I'm a cybersecurity researcher focused
                on understanding how systems fail, how
                vulnerabilities can be exploited, and
                how those weaknesses can be detected
                and secured.
              </p>

              <p>
                My interests span offensive security,
                web application security, vulnerability
                assessment, threat detection,
                reconnaissance and security research.
              </p>


              {/* STATUS */}

              <div className="about-status">

                <span className="status-dot" />

                <span>
                  OPEN TO SECURITY OPPORTUNITIES
                </span>

              </div>

            </div>

          </div>


          {/* =====================================
              PROFILE IMAGE
          ===================================== */}

          <div className="about-profile">

            <div className="profile-frame">

              <img
                src={profileImage}
                alt="Muhammed Mufeed"
                className="profile-image"
              />

              <div className="profile-overlay" />

              <div className="profile-scanline" />


              {/* CORNER MARKERS */}

              <div
                className="
                  profile-corner
                  profile-corner-tl
                "
              />

              <div
                className="
                  profile-corner
                  profile-corner-tr
                "
              />

              <div
                className="
                  profile-corner
                  profile-corner-bl
                "
              />

              <div
                className="
                  profile-corner
                  profile-corner-br
                "
              />


              {/* STATUS */}

              <div className="profile-status">

                <span className="profile-status-dot" />

                PROFILE // ACTIVE

              </div>

            </div>

          </div>

        </div>


        {/* =====================================
            STATS / SKILLS
        ===================================== */}

        <div className="about-stats">

          <div className="about-stat">

            <span className="stat-number">
              01
            </span>

            <span className="stat-label">
              OFFENSIVE
              <br />
              SECURITY
            </span>

          </div>


          <div className="about-stat">

            <span className="stat-number">
              02
            </span>

            <span className="stat-label">
              WEB APP
              <br />
              SECURITY
            </span>

          </div>


          <div className="about-stat">

            <span className="stat-number">
              03
            </span>

            <span className="stat-label">
              THREAT
              <br />
              DETECTION
            </span>

          </div>


          <div className="about-stat">

            <span className="stat-number">
              04
            </span>

            <span className="stat-label">
              SECURITY
              <br />
              RESEARCH
            </span>

          </div>

        </div>


        {/* =====================================
            NUMBER COUNTERS
            ABOVE SKILLS
        ===================================== */}

        <div className="about-counters">

          <div className="about-counter">

            <span
              className="about-counter-number"
              data-target="20"
            >
              00
            </span>

            <span className="about-counter-label">
              SECURITY
              <br />
              PROJECTS
            </span>

          </div>


          <div className="about-counter">

            <span
              className="about-counter-number"
              data-target="15"
            >
              00
            </span>

            <span className="about-counter-label">
              VAPT
              <br />
              ASSESSMENTS
            </span>

          </div>


          <div className="about-counter">

            <span
              className="about-counter-number"
              data-target="10"
            >
              00
            </span>

            <span className="about-counter-label">
              SECURITY
              <br />
              TOOLS
            </span>

          </div>


          <div className="about-counter">

            <span
              className="about-counter-number"
              data-target="04"
            >
              00
            </span>

            <span className="about-counter-label">
              SECURITY
              <br />
              DOMAINS
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
