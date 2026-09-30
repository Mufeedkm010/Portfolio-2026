import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".experience-header", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.fromTo(".experience-item", {
        opacity: 0,
        y: 36,
        scale: 0.98,
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.16,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".experience-list",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.fromTo(".experience-dot", {
        scale: 0,
        opacity: 0,
      }, {
        scale: 1,
        opacity: 1,
        stagger: 0.16,
        duration: 0.35,
        delay: 0.2,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: ".experience-list",
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
      id="experience"
      className="experience-section"
    >
      <div className="experience-bg" />

      <div className="experience-container">

        {/* HEADER */}

        <div className="experience-header">
          <span className="section-number">05</span>

          <span className="section-label">
            EXPERIENCE / JOURNEY
          </span>
        </div>

        {/* TITLE */}

        <div className="experience-title">
          <p>SECURITY JOURNEY</p>

          <h2>
            LEARNING.
            <br />
            <span>BUILDING.</span>
            <br />
            RESEARCHING.
          </h2>
        </div>

        {/* TIMELINE */}

        <div className="experience-list">

          {/* EXPERIENCE 01 */}

          <article className="experience-item">

            <div className="experience-marker">
              <span>01</span>
              <div className="experience-dot" />
            </div>

            <div className="experience-date">
              2026 - PRESENT
            </div>

            <div className="experience-content">

              <span className="experience-type">
                PROFESSIONAL
              </span>

              <h3>
                Cyber Security Researcher
              </h3>

              <p className="experience-company">
                Cozmek Pvt Ltd
              </p>

              <p className="experience-description">
                Working across cybersecurity research and
                security-focused R&D, exploring practical
                approaches to security monitoring, offensive
                security and vulnerability analysis.
              </p>

              <div className="experience-tags">
                <span>Security Research</span>
                <span>R&D</span>
                <span>VAPT</span>
                <span>Threat Analysis</span>
              </div>

            </div>

          </article>

          {/* EXPERIENCE 02: CONCURRENT FACILITATOR ROLE */}

          <article className="experience-item">

            <div className="experience-marker">
              <span>02</span>
              <div className="experience-dot" />
            </div>

            <div className="experience-date">
              2026 - PRESENT
            </div>

            <div className="experience-content">

              <span className="experience-type">
                CONCURRENT ROLE
              </span>

              <h3>
                Cybersecurity Facilitator
              </h3>

              <p className="experience-company">
                Cozmek Pvt Ltd
              </p>

              <p className="experience-description">
                Facilitating cybersecurity learning through practical
                guidance, helping learners build security awareness
                and develop hands-on skills.
              </p>

              <div className="experience-tags">
                <span>Cybersecurity Awareness</span>
                <span>Technical Guidance</span>
                <span>Hands-on Learning</span>
              </div>

            </div>

          </article>

          {/* EXPERIENCE 03 */}

          <article className="experience-item">

            <div className="experience-marker">
              <span>03</span>
              <div className="experience-dot" />
            </div>

            <div className="experience-date">
              2025 - 2026
            </div>

            <div className="experience-content">

              <span className="experience-type">
                DEVELOPMENT
              </span>

              <h3>
                Security Projects &amp; Labs
              </h3>

              <p className="experience-company">
                Independent Research
              </p>

              <p className="experience-description">
                Building practical cybersecurity projects and
                working through hands-on security labs involving
                penetration testing, Linux, networking, OSINT,
                web security and threat detection.
              </p>

              <div className="experience-tags">
                <span>Linux</span>
                <span>Web Security</span>
                <span>OSINT</span>
                <span>CTF</span>
              </div>

            </div>

          </article>

          {/* EDUCATION */}

          <article className="experience-item">

            <div className="experience-marker">
              <span>04</span>
              <div className="experience-dot" />
            </div>

            <div className="experience-date">
              EDUCATION
            </div>

            <div className="experience-content">

              <span className="experience-type">
                FOUNDATION
              </span>

              <h3>
                Information Technology
              </h3>

              <p className="experience-company">
                B.Tech
              </p>

              <p className="experience-description">
                Building a foundation across programming,
                networking, databases, operating systems and
                technology while developing a deeper focus
                toward cybersecurity.
              </p>

              <div className="experience-tags">
                <span>Programming</span>
                <span>Networking</span>
                <span>Databases</span>
                <span>Systems</span>
              </div>

            </div>

          </article>

        </div>

      </div>
    </section>
  );
}

export default Experience;
