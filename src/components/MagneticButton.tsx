import { useRef } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

function MagneticButton({
  children,
  href,
  className = "",
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    const button = buttonRef.current;

    if (!button) return;

    const rect = button.getBoundingClientRect();

    const x =
      event.clientX -
      rect.left -
      rect.width / 2;

    const y =
      event.clientY -
      rect.top -
      rect.height / 2;

    const strength = 0.18;

    button.style.transform =
      `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleMouseLeave = () => {
    const button = buttonRef.current;

    if (!button) return;

    button.style.transform =
      "translate(0px, 0px)";
  };

  return (
    <a
      ref={buttonRef}
      href={href}
      className={`magnetic-button ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span>{children}</span>
    </a>
  );
}

export default MagneticButton;