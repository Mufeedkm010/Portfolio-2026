import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CyberCore from "../three/CyberCore";
import MagneticButton from "../components/MagneticButton";
import IDCard from "../components/IDCard";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    // =========================
    // HERO ENTRANCE
    // =========================

    const intro = gsap.timeline();

    intro
      .from(".hero-eyebrow", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power2.out",
      })
      .from(".hero-title", {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power4.out",
      })
      .from(".hero-description", {
        opacity: 0,
        y: 25,
        duration: 0.7,
        ease: "power2.out",
      })
      .from(".hero-buttons", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
      })
      .from(".cyber-core", {
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

    // =========================
    // MASTER SCROLL ANIMATION
    // =========================

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "+=100%",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      },
    });

    scrollTimeline
      .to(".hero-content", {
        y: -120,
        opacity: 0,
        duration: 0.45,
        ease: "power2.inOut",
      })
      .to(".cyber-core-position",
      {
        opacity: 0,
        duration: 0.45,
        ease: "power2.inOut",
      },
    "<"
      )
      .to(
        ".hero-grid",
        {
          opacity: 0,
          duration: 0.4,
        },
        "<"
      )
      .to(
        ".scroll-indicator",
        {
          opacity: 0,
          duration: 0.2,
        },
        "<"
      )
      .to(
        ".hero-index",
        {
          opacity: 0,
          duration: 0.2,
        },
        "<"
      );
  }, heroRef);

  return () => ctx.revert();
}, []);

  return (
    <section
  ref={heroRef}
  id="hero"
  className="hero"

>
      <div className="hero-grid" />
      <IDCard />

      <div className="hero-content">
        <p className="hero-greeting">Hello, I’m Mufeed</p>

        <p className="hero-eyebrow">
          <span className="status-dot" />
          CYBER SECURITY RESEARCHER
        </p>

        <h1 className="hero-title">
          BREAK.
          <br />
          <span>UNDERSTAND.</span>
          <br />
          SECURE.
        </h1>

        <p className="hero-description">
          Exploring offensive security, web application security,
          threat detection and security research.
        </p>

        <div className="hero-buttons">

          <MagneticButton
          href="#projects"
          className="primary-button"
          >
    Explore My Work
          </MagneticButton>

         <MagneticButton
          href="#contact"
          className="secondary-button"
          >
    Let's Connect
  </MagneticButton>

</div>
      </div>

      {/* 3D CORE */}
      <div className="cyber-core-position">
        <CyberCore />
      </div>

      <div className="scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line" />
      </div>

      <div className="hero-index">
        <span>01</span>
        <span>/</span>
        <span>07</span>
      </div>
    </section>
  );
}

export default Hero;
