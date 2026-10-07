import { useEffect, useRef } from "react";

function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    // No custom cursor on touch devices
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let followerX = -100;
    let followerY = -100;
    let frameId = 0;

    const moveCursor = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;

      // Always keep the LATEST frame id so cleanup really stops the loop
      frameId = requestAnimationFrame(animateFollower);
    };

    const handleHover = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const interactive = target.closest("a, button");

      cursor.classList.toggle("cursor-active", !!interactive);
      follower.classList.toggle("cursor-follower-active", !!interactive);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);
    frameId = requestAnimationFrame(animateFollower);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
}

export default Cursor;