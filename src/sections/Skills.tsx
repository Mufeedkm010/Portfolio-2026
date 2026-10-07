import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const categories =
      gsap.utils.toArray<HTMLElement>(".skill-category");

    /* ===============================
       INITIAL STATES
    =============================== */

    gsap.set(".skills-header", {
      opacity: 0,
      y: 30,
    });

    gsap.set(".skills-title", {
      opacity: 0,
      y: 40,
    });

    gsap.set(categories, {
      opacity: 0.35,
      y: 18,
      scale: 0.99,
      clipPath: "inset(0 8% 0 0)",
    });

    gsap.set(".skill-category-top", {
      opacity: 0,
      x: -20,
    });

    gsap.set(".skills-footer", {
      opacity: 0,
      y: 20,
    });


    /* ===============================
       MAIN TIMELINE
    =============================== */

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 82%",
        toggleActions: "play none none reverse",
      },
    });
    


    /* ===============================
       HEADER
    =============================== */

    tl.to(".skills-header", {
      opacity: 1,
      y: 0,
      duration: 0.55,
      ease: "power3.out",
    })


    /* ===============================
       TITLE
    =============================== */

    .to(".skills-title", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power3.out",
    }, "-=0.45")


    /* ===============================
       CARDS
    =============================== */

    .to(categories, {
      opacity: 1,
      y: 0,
      scale: 1,
      clipPath: "inset(0 0% 0 0)",
      duration: 0.42,
      stagger: 0.07,
      ease: "power2.out",
    }, "-=0.1");

    const cardGlow = gsap.timeline();

    categories.forEach((card, index) => {
      cardGlow.to(
        card,
        {
          borderColor: "rgba(0, 255, 156, 0.65)",
          boxShadow: "inset 0 0 35px rgba(0, 255, 156, 0.04)",
          duration: 0.25,
          ease: "power2.out",
        },
        index * 0.22
      );

      cardGlow.to(card, {
        borderColor: "rgba(255, 255, 255, 0.16)",
        boxShadow: "inset 0 0 0 rgba(0, 255, 156, 0)",
        duration: 0.45,
        ease: "power2.out",
      });
    });

    tl.add(cardGlow, "-=0.1");


    /* ===============================
       CARD HEADERS
    =============================== */

    tl.to(".skill-category-top", {
      opacity: 1,
      x: 0,
      duration: 0.4,
      stagger: 0.14,
      ease: "power3.out",
    }, "-=0.45")


    /* ===============================
       FOOTER
    =============================== */

    .to(".skills-footer", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power3.out",
    }, "-=0.15");

    gsap.fromTo(
      ".skill-category-top span:first-child",
      {
        textShadow: "0 0 0 rgba(0,255,156,0)",
      },
      {
        textShadow: "0 0 15px rgba(0,255,156,0.9)",
        duration: 0.4,
        stagger: 0.22,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      }
    );


    /* ===============================
       CARD SCAN EFFECT
    =============================== */

const scans =
  gsap.utils.toArray<HTMLElement>(".skill-scan");

gsap.fromTo(
  scans,
  {
    xPercent: -150,
    opacity: 0,
  },
  {
    xPercent: 350,
    opacity: 1,
    duration: 0.25,
    stagger: 0.08,
    ease: "power2.inOut",

    scrollTrigger: {
      trigger: ".skills-grid",
      start: "top 78%",
      toggleActions: "play none none reverse",
    },
  }
);

  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <section ref={sectionRef} id="skills" className="skills-section">
      <div className="skills-grid-bg" />

      <div className="skills-container">

        {/* HEADER */}

        <div className="skills-header">
          <span className="section-number">03</span>

          <span className="section-label">
            SKILLS / CAPABILITIES
          </span>
        </div>

        {/* TITLE */}

        <div className="skills-title">
          <p>TOOLS ARE ONLY USEFUL</p>

          <h2>
            WHEN YOU KNOW
            <br />
            <span>HOW TO USE THEM.</span>
          </h2>
        </div>

        {/* SKILLS */}

        <div className="skills-grid">

          {/* OFFENSIVE SECURITY */}

          <div className="skill-category">
            <div className="skill-category-top">
              <span>01</span>
              <span>OFFENSIVE SECURITY</span>
            </div>

            <div className="skill-list">
              <span>VAPT</span>
<span>Web Application Security</span>
<span>Reconnaissance</span>
<span>Burp Suite Testing</span>
<span>API Security</span>
<span>Basic Exploitation</span>
<span>Payload Analysis</span>
<span>OSINT</span>
            </div>
          </div>

          {/* SECURITY TOOLS */}

          <div className="skill-category">
            <div className="skill-category-top">
              <span>02</span>
              <span>SECURITY TOOLS</span>
            </div>

            <div className="skill-list">
              <span>Nmap</span>
<span>Burp Suite</span>
<span>Metasploit</span>
<span>Wireshark</span>
<span>Nessus</span>
<span>Splunk</span>
<span>Gobuster</span>
<span>Dirsearch</span>
<span>Amass</span>
<span>Hashcat</span>
            </div>
          </div>

          {/* NETWORK & LINUX */}

          <div className="skill-category">
            <div className="skill-category-top">
              <span>03</span>
              <span>NETWORK / LINUX</span>
            </div>

            <div className="skill-list">
              <span>Linux</span>
<span>TCP/IP</span>
<span>DNS</span>
<span>DHCP</span>
<span>Networking</span>
<span>Kali Linux</span>
<span>SSH</span>
<span>Firewalls</span>
<span>Network Security</span>
            </div>
          </div>

          {/* DEVELOPMENT */}

          <div className="skill-category">
            <div className="skill-category-top">
              <span>04</span>
              <span>DEVELOPMENT</span>
            </div>

            <div className="skill-list">
              <span>Python</span>
  <span>Bash</span>
  <span>JavaScript</span>
  <span>React</span>
  <span>Flask</span>
  <span>HTML / CSS</span>
  <span>REST APIs</span>
  <span>Git</span>
  <span>Docker</span>
  <span>AWS</span>
            </div>
          </div>

        </div>

        {/* BOTTOM LINE */}

        <div className="skills-footer">
          <span>01 — 04</span>

          <span>
            CONTINUOUSLY LEARNING / BUILDING / TESTING
          </span>
        </div>

      </div>
    </section>
  );
}

export default Skills;
