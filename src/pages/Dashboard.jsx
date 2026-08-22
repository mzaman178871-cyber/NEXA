import { useState, useRef, useEffect } from 'react'
import '../styles/Dashboard.css'

function Dashboard() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const analyzeProject = async () => {
    if (!input.trim()) return

    const userMessage = input
    setInput('')
    setLoading(true)

    try {
      const apiKey = import.meta.env.VITE_GROQ_API_KEY

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'openai/gpt-oss-20b',
          messages: [
            {
              role: 'system',
              content: `You are NEXA, an elite AI software engineering companion. 
Your job is to guide complete beginners from idea to deployed product.

When a user describes their idea, always respond with this exact structure:

🧠 PROJECT UNDERSTANDING
Summarize what they want to build in 2 sentences.

🎯 CORE FEATURES
List the 4-5 most important features.

⚙️ RECOMMENDED TECH STACK
Tell them exactly what technologies to use and why in simple terms.

🏗️ ARCHITECTURE OVERVIEW
Explain how the system is structured in very simple language.

✅ FIRST STEP
Tell them the single most important first thing to build.

Always use simple language. Never overwhelm. Always encourage.`
            },
            {
              role: 'user',
              content: userMessage
            }
          ]
        })
      })

      const data = await response.json()

      if (data.choices && data.choices[0]) {
        const aiResponse = data.choices[0].message.content
        setMessages(prev => [...prev, {
          question: userMessage,
          answer: aiResponse
        }])
      }

    } catch (error) {
      console.log('Error:', error)
    }

    setLoading(false)
  }

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

      {/* Center Panel - AI Response */}
      <div className="center-panel">
        {messages.length === 0 && !loading && (
          <div className="empty-state">
            <div className="empty-icon">⚡</div>
            <h2>NEXA IS READY</h2>
            <p>Type your project idea on the right and NEXA will engineer it for you</p>
          </div>
        )}

        {loading && (
          <div className="loading-state">
            <div className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>NEXA IS THINKING...</p>
          </div>
        )}

        <div className="messages-container">
          {messages.map((msg, index) => (
            <div key={index} className="response-block">
              <div className="response-question">
                <span className="you-label">YOU ASKED</span>
                <p>{msg.question}</p>
              </div>
              <div className="response-answer">
                <span className="nexa-label">NEXA</span>
                <p style={{ whiteSpace: 'pre-wrap' }}>{msg.answer}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {messages.length > 0 && (
          <button className="scroll-btn" onClick={scrollToBottom}>
            ↓ SCROLL DOWN
          </button>
        )}
      </div>

      {/* Right Panel - Command Input */}
      <div className="right-panel">
        <div className="panel-header">
          <span className="panel-icon">⚡</span>
          <h3>COMMAND</h3>
        </div>
        <p className="command-hint">Describe your idea or ask NEXA anything about your project</p>
        <textarea
          className="command-input"
          placeholder="e.g. I want to build a food delivery app for my city..."
          rows={8}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="command-btn"
          onClick={analyzeProject}
          disabled={loading}
        >
          {loading ? 'THINKING...' : 'ANALYZE WITH NEXA →'}
        </button>

        <div className="current-objective">
          <span className="objective-label">CURRENT OBJECTIVE</span>
          <p className="objective-text">Define your project idea and core requirements</p>
        </div>
      </div>

    </div>
  )
}

export default Dashboard