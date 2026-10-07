import { useEffect, useState } from "react";

function Loader() {
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Lock scrolling while the loader is on screen
  useEffect(() => {
    if (hidden) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [hidden]);

  useEffect(() => {
    let value = 0;
    const timers: number[] = [];

    const interval = window.setInterval(() => {
      value += Math.floor(Math.random() * 3) + 1;

      if (value >= 100) {
        value = 100;
        window.clearInterval(interval);

        timers.push(
          window.setTimeout(() => {
            setFinished(true);

            // Tell the rest of the site the loader is leaving,
            // so the hero entrance can play in view.
            document.documentElement.dataset.loaded = "true";
            window.dispatchEvent(new Event("site-loaded"));

            timers.push(window.setTimeout(() => setHidden(true), 700));
          }, 600)
        );
      }

      setProgress(value);
    }, 40);

    return () => {
      window.clearInterval(interval);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  if (hidden) return null;

  return (
    <div className={`site-loader ${finished ? "loader-finished" : ""}`}>
      <div className="loader-content">
        <div className="loader-top">
          <span>MUFEED / SECURITY CORE</span>
          <span>{String(progress).padStart(3, "0")}%</span>
        </div>

        <div className="loader-title">
          INITIALIZING
          <br />
          <span>SECURITY CORE</span>
        </div>

        <div className="loader-progress">
          <div
            className="loader-progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="loader-status">
          <span className="loader-status-dot" />

          <span>
            {progress < 30 && "INITIALIZING SYSTEM..."}
            {progress >= 30 && progress < 60 && "LOADING SECURITY MODULES..."}
            {progress >= 60 &&
              progress < 90 &&
              "ESTABLISHING SECURE ENVIRONMENT..."}
            {progress >= 90 && progress < 100 && "VERIFYING SYSTEM..."}
            {progress === 100 && "SYSTEM ONLINE"}
          </span>
        </div>
      </div>

      <div className="loader-index">01 / 01</div>
    </div>
  );
}

export default Loader;