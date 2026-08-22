import '../styles/Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard">

      {/* Left Panel - Project Brain */}
      <div className="left-panel">
        <div className="panel-header">
          <span className="panel-icon">🧠</span>
          <h3>PROJECT BRAIN</h3>
        </div>
        <div className="project-name">MY PROJECT</div>
        <div className="journey-map">
          <div className="journey-step completed">✓ IDEA</div>
          <div className="journey-line completed"></div>
          <div className="journey-step active">◉ REQUIREMENTS</div>
          <div className="journey-line"></div>
          <div className="journey-step">○ ARCHITECTURE</div>
          <div className="journey-line"></div>
          <div className="journey-step">○ DESIGN</div>
          <div className="journey-line"></div>
          <div className="journey-step">○ BUILD</div>
          <div className="journey-line"></div>
          <div className="journey-step">○ TEST</div>
          <div className="journey-line"></div>
          <div className="journey-step">○ DEPLOY</div>
        </div>
      </div>

      {/* Center Panel - Command Zone */}
      <div className="center-panel">
        <div className="center-top">
          <h1 className="center-title">WHAT ARE YOU <span>BUILDING</span> TODAY?</h1>
          <p className="center-subtitle">Describe your idea and NEXA will guide you through everything</p>
        </div>
        <div className="command-zone">
          <textarea
            className="command-input"
            placeholder="e.g. I want to build a food delivery app for my city..."
            rows={4}
          />
          <button className="command-btn">ANALYZE WITH NEXA →</button>
        </div>
        <div className="current-objective">
          <span className="objective-label">CURRENT OBJECTIVE</span>
          <p className="objective-text">Define your project idea and core requirements</p>
        </div>
      </div>

      {/* Right Panel - AI Companion */}
      <div className="right-panel">
        <div className="panel-header">
          <span className="panel-icon">⚡</span>
          <h3>AI COMPANION</h3>
        </div>
        <div className="companion-messages">
          <div className="message nexa-message">
            <span className="message-label">NEXA</span>
            <p>Welcome! Tell me what you're building and I'll help you engineer it from idea to deployment.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard
