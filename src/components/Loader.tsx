import { useEffect, useState } from "react";

function Loader() {
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);
  const [hidden, setHidden] = useState(false);

useEffect(() => {
  let value = 0;

  const interval = window.setInterval(() => {
    value += Math.floor(Math.random() * 3) + 1;

    if (value >= 100) {
      value = 100;

      window.clearInterval(interval);

      window.setTimeout(() => {
        setFinished(true);

        window.setTimeout(() => {
          setHidden(true);
        }, 700);
      }, 600);
    }

    setProgress(value);
  }, 40);

  return () => {
    window.clearInterval(interval);
  };
}, []);

  if (hidden) {
  return null;
}

  return (
    <div
  className={`site-loader ${
    finished ? "loader-finished" : ""
  }`}
>

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
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <div className="loader-status">
          <span className="loader-status-dot" />

          <span>
            {progress < 30 &&
              "INITIALIZING SYSTEM..."}

            {progress >= 30 &&
              progress < 60 &&
              "LOADING SECURITY MODULES..."}

            {progress >= 60 &&
              progress < 90 &&
              "ESTABLISHING SECURE ENVIRONMENT..."}

            {progress >= 90 &&
              progress < 100 &&
              "VERIFYING SYSTEM..."}

            {progress === 100 &&
              "SYSTEM ONLINE"}
          </span>
        </div>

      </div>

      <div className="loader-index">
        01 / 01
      </div>

    </div>
  );
}

export default Loader;