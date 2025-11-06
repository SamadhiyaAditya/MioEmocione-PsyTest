"use client"

import { useState } from "react"
import { saveTestResult } from "@/lib/firebase"

interface ParticipantInfo {
  initials: string
  gender: string
  age: number
}

interface Scores {
  totalScore: number
  maxScore: number
}

interface ResultsPageProps {
  scores: Scores
  testType: "intelligence" | "maturity"
  participantInfo: ParticipantInfo | null
  onRetake: () => void
  onGoHome: () => void
}

export default function ResultsPage({ scores, testType, participantInfo, onRetake, onGoHome }: ResultsPageProps) {
  const testName = testType === "intelligence" ? "Emotional Intelligence Test" : "Emotional Maturity Test"
  const [email, setEmail] = useState("")
  const [emailSaved, setEmailSaved] = useState(false)

  const handleEmailSubmit = async (): Promise<void> => {
    if (participantInfo && email) {
      await saveTestResult(participantInfo.initials, participantInfo, testType, scores, email)
      setEmailSaved(true)
    }
  }

  return (
    <div className="results-page">
      <div className="results-container">
        <h1 className="results-title">Test Complete!</h1>

        <div className="score-display">
          <p className="score-label">{testName}</p>
          <p className="score-value">{scores.totalScore}</p>
          <p className="score-max">out of {scores.maxScore}</p>
        </div>

        {testType === "maturity" && (
          <div className="result-info-box">
            <p className="info-label">Emotional Maturity Levels</p>
            <table className="maturity-table">
              <tbody>
                <tr>
                  <td className="score-range">150 or above</td>
                  <td className="level-text">Extremely High</td>
                </tr>
                <tr>
                  <td className="score-range">137 to 149</td>
                  <td className="level-text">High</td>
                </tr>
                <tr>
                  <td className="score-range">124 to 136</td>
                  <td className="level-text">Above Average</td>
                </tr>
                <tr>
                  <td className="score-range">106 to 123</td>
                  <td className="level-text">Average/Moderate</td>
                </tr>
                <tr>
                  <td className="score-range">93 to 105</td>
                  <td className="level-text">Below Average</td>
                </tr>
                <tr>
                  <td className="score-range">80 to 92</td>
                  <td className="level-text">Low</td>
                </tr>
                <tr>
                  <td className="score-range">79 and Below</td>
                  <td className="level-text">Extremely Low</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {testType === "intelligence" && (
          <div className="result-info-box">
            <p className="info-label">Intelligence Test Information</p>
            <p className="intelligence-info">
              The mean score across many large samples is about 124, with a standard deviation of about 13. So scores
              below 111 or above 137 are unusually low or high. Men and women perform differently in this test, with
              women scoring significantly higher (mean=131) than men (mean=125).
            </p>
          </div>
        )}

        <div className="email-section">
          <p className="email-prompt">If you wanna know more, share your email</p>
          <div className="email-input-container">
            <input
              type="email"
              placeholder="Enter your email (optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email-input"
              disabled={emailSaved}
            />
            <button className="email-submit-btn" onClick={handleEmailSubmit} disabled={emailSaved}>
              {emailSaved ? "Email Saved" : "Submit"}
            </button>
          </div>
        </div>

        <div className="buttons-container">
          <button className="result-button intelligence-button" onClick={onRetake}>
            <span className="button-text">Retake Test</span>
          </button>
          <button className="result-button maturity-button" onClick={onGoHome}>
            <span className="button-text">Go to Home</span>
          </button>
        </div>
      </div>
    </div>
  )
}
