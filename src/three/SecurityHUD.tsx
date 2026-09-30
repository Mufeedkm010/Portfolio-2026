import { useEffect, useState } from "react";

function SecurityHUD() {
  const [events, setEvents] = useState(1248);
  const [threats, setThreats] = useState(3);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setEvents((value) => value + Math.floor(Math.random() * 4) + 1);

      if (Math.random() > 0.75) {
        setThreats((value) => (value >= 9 ? 3 : value + 1));
      }
    }, 1800);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="security-hud">
      {/* TOP STATUS */}
      <div className="hud-status">
        <span className="hud-live-dot" />
        <span>SYSTEM ONLINE</span>
      </div>

      {/* LEFT PANEL */}
      <div className="hud-panel hud-left">
        <div className="hud-label">
          NETWORK
        </div>

        <div className="hud-value">
          98.4%
        </div>

        <div className="hud-line">
          <span />
        </div>

        <div className="hud-small">
          SECURE CONNECTION
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="hud-panel hud-right">
        <div className="hud-label">
          THREATS
        </div>

        <div className="hud-threat-value">
          {String(threats).padStart(2, "0")}
        </div>

        <div className="hud-small">
          ACTIVE EVENTS
        </div>
      </div>

      {/* BOTTOM PANEL */}
      <div className="hud-panel hud-bottom">
        <div>
          <span className="hud-label">
            EVENTS
          </span>

          <span className="hud-value-small">
            {events.toLocaleString()}
          </span>
        </div>

        <div>
          <span className="hud-label">
            ENGINE
          </span>

          <span className="hud-value-small">
            AI / ACTIVE
          </span>
        </div>

        <div>
          <span className="hud-label">
            STATUS
          </span>

          <span className="hud-value-small hud-green">
            MONITORING
          </span>
        </div>
      </div>
    </div>
  );
}

export default SecurityHUD;