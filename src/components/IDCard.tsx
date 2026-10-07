import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import profileImage from "../assets/profile.jpeg";

function IDCard() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(wrapper, { opacity: 1, rotation: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      // The whole lanyard (cable + card) pivots from the navbar,
      // so it behaves like one real hanging object.
      gsap.set(wrapper, { transformOrigin: "50% 0%" });

      gsap.fromTo(
        wrapper,
        { opacity: 0, rotation: -5 },
        {
          opacity: 1,
          rotation: 0,
          duration: 1.4,
          delay: 0.5,
          ease: "elastic.out(1, 0.45)",
          onComplete: () => {
            // Very gentle idle sway
            gsap.to(wrapper, {
              rotation: 1.2,
              duration: 3.2,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
            });
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="id-card-wrapper" aria-hidden="false">
      {/* Lanyard hanging from the navbar */}
      <div className="id-card-cable" />
      <div className="id-card-clip" />

      <div className="id-card">
        <div className="id-card-scan" />

        <div className="id-card-top">
          <span className="id-card-code">SECURITY PERSONNEL</span>
          <span className="id-card-status">ACTIVE</span>
        </div>

        <div className="id-card-body">
          <div className="id-card-photo">
            <img
              className="id-card-photo-image"
              src={profileImage}
              alt="Muhammed Mufeed"
            />
          </div>

          <div className="id-card-info">
            <span className="id-card-label">CYBERSECURITY PROFESSIONAL</span>
            <h3>MUFEED</h3>
            <p>CYBERSECURITY</p>
            <div className="id-card-line" />
            <span className="id-card-id">ID: MFK-010</span>
          </div>
        </div>

        <div className="id-card-bottom">
          <span>AUTHORIZED PERSONNEL</span>
          <span>2026</span>
        </div>
      </div>
    </div>
  );
}

export default IDCard;