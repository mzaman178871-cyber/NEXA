import './App.css'

function App() {
  return (
    <div className="welcome-page">
      <div className="scan-line"></div>
      <div className="robot-glow"></div>

      {/* Corner decorations */}
      <div className="corner-tl"></div>
      <div className="corner-tr"></div>
      <div className="corner-bl"></div>
      <div className="corner-br"></div>

      <div className="robot-container">
        <div className="robot-float">
          <svg width="160" height="190" viewBox="0 0 160 190">
            {/* Antenna */}
            <rect x="77" y="2" width="6" height="18" rx="3" fill="#ff0000" />
            <circle cx="80" cy="2" r="5" fill="#ff0000" />
            <circle cx="80" cy="2" r="3" fill="#ffffff">
              <animate attributeName="opacity" values="1;0.2;1" dur="1s" repeatCount="indefinite" />
            </circle>

            {/* Head */}
            <rect x="30" y="18" width="100" height="75" rx="18" fill="#0a0000" stroke="#ff0000" strokeWidth="1.5" />
            <rect x="30" y="18" width="100" height="35" rx="18" fill="rgba(255,0,0,0.05)" />

            {/* Eyes */}
            <circle cx="58" cy="50" r="14" fill="#000000" stroke="#00ffff" strokeWidth="1.5" />
            <circle cx="102" cy="50" r="14" fill="#000000" stroke="#00ffff" strokeWidth="1.5" />
            <circle cx="58" cy="50" r="8" fill="#00ffff">
              <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="102" cy="50" r="8" fill="#00ffff">
              <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="62" cy="46" r="3" fill="white" opacity="0.9" />
            <circle cx="106" cy="46" r="3" fill="white" opacity="0.9" />

            {/* Mouth - green pixels */}
            <rect x="50" y="76" width="60" height="10" rx="5" fill="#000000" stroke="#00ff4444" strokeWidth="1" />
            <rect x="55" y="78" width="8" height="6" rx="2" fill="#00ff44">
              <animate attributeName="opacity" values="1;0.2;1" dur="0.7s" repeatCount="indefinite" />
            </rect>
            <rect x="67" y="78" width="8" height="6" rx="2" fill="#00ff44">
              <animate attributeName="opacity" values="0.2;1;0.2" dur="0.9s" repeatCount="indefinite" />
            </rect>
            <rect x="79" y="78" width="8" height="6" rx="2" fill="#00ff44">
              <animate attributeName="opacity" values="1;0.2;1" dur="0.6s" repeatCount="indefinite" />
            </rect>
            <rect x="91" y="78" width="8" height="6" rx="2" fill="#00ff44">
              <animate attributeName="opacity" values="0.2;1;0.2" dur="1.1s" repeatCount="indefinite" />
            </rect>
            <rect x="103" y="78" width="4" height="6" rx="2" fill="#00ff44">
              <animate attributeName="opacity" values="1;0.2;1" dur="0.8s" repeatCount="indefinite" />
            </rect>

            {/* Neck */}
            <rect x="68" y="93" width="24" height="12" rx="4" fill="#050000" stroke="#ff000033" strokeWidth="1" />

            {/* Body */}
            <rect x="18" y="105" width="124" height="72" rx="14" fill="#0a0000" stroke="#ff0000" strokeWidth="1.5" />

            {/* Body panel left - red */}
            <rect x="28" y="116" width="42" height="28" rx="6" fill="#000000" stroke="#ff000055" strokeWidth="1" />
            <circle cx="49" cy="130" r="7" fill="#ff0000">
              <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="49" cy="130" r="4" fill="#ffffff" opacity="0.8" />

            {/* Body panel right - green bars */}
            <rect x="90" y="116" width="42" height="28" rx="6" fill="#000000" stroke="#00ff4455" strokeWidth="1" />
            <rect x="96" y="122" width="30" height="3" rx="2" fill="#00ff44aa" />
            <rect x="96" y="128" width="22" height="3" rx="2" fill="#00ff4477" />
            <rect x="96" y="134" width="26" height="3" rx="2" fill="#00ff4455" />

            {/* Bottom accent */}
            <rect x="28" y="152" width="104" height="2" rx="1" fill="#ff000033" />
            <rect x="28" y="155" width="104" height="2" rx="1" fill="#00ffff22" />

            {/* Arms */}
            <rect x="0" y="108" width="16" height="55" rx="8" fill="#0a0000" stroke="#ff0000" strokeWidth="1.5" />
            <circle cx="8" cy="165" r="8" fill="#000000" stroke="#00ffff" strokeWidth="1" />
            <rect x="144" y="108" width="16" height="55" rx="8" fill="#0a0000" stroke="#ff0000" strokeWidth="1.5" />
            <circle cx="152" cy="165" r="8" fill="#000000" stroke="#00ffff" strokeWidth="1" />

            {/* Legs */}
            <rect x="33" y="177" width="37" height="12" rx="6" fill="#050000" stroke="#ff0000" strokeWidth="1" />
            <rect x="90" y="177" width="37" height="12" rx="6" fill="#050000" stroke="#ff0000" strokeWidth="1" />
          </svg>
        </div>
      </div>

      <div className="speech-bubble">
        <h1>
          <span className="cyan">N</span>
          <span>E</span>
          <span className="cyan">X</span>
          <span className="green">A</span>
        </h1>
        <p>YOUR AI SOFTWARE ENGINEERING COMPANION</p>
      </div>

      <button className="get-started-btn">GET STARTED →</button>
    </div>
  )
}

export default App