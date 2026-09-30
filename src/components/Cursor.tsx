import { useEffect, useRef } from "react";

function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;

    let followerX = 0;
    let followerY = 0;

    const moveCursor = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      cursor.style.transform =
        `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;

      follower.style.transform =
        `translate3d(${followerX}px, ${followerY}px, 0)`;

      requestAnimationFrame(animateFollower);
    };

    const handleHover = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (
        target.closest("a") ||
        target.closest("button")
      ) {
        cursor.classList.add("cursor-active");
        follower.classList.add("cursor-follower-active");
      } else {
        cursor.classList.remove("cursor-active");
        follower.classList.remove("cursor-follower-active");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    const animation = requestAnimationFrame(
      animateFollower
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );

      window.removeEventListener(
        "mouseover",
        handleHover
      );

      cancelAnimationFrame(animation);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div
        ref={followerRef}
        className="cursor-follower"
      />
    </>
  );
}

export default Cursor;