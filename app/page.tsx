"use client"

import { useState } from "react"
import HomePage from "@/components/HomePage"
import ParticipantInfoPage from "@/components/ParticipationInfoPage"
import QuizPage from "@/components/QuizPage"
import ResultsPage from "@/components/ResultsPage"
import "@/styles/quiz.css"

export default function Home() {
  const [currentPage, setCurrentPage] = useState("home")
  const [participantInfo, setParticipantInfo] = useState(null)
  const [testType, setTestType] = useState(null)
  const [scores, setScores] = useState(null)

  const handleStartTest = (type) => {
    setTestType(type)
    setCurrentPage("participant-info")
  }

  const handleParticipantInfo = (info) => {
    setParticipantInfo(info)
    setCurrentPage("quiz")
  }

  const handleQuizComplete = async (score) => {
    setScores(score)
    setCurrentPage("results")
  }

  const handleRetake = () => {
    setScores(null)
    setCurrentPage("home")
    setParticipantInfo(null)
    setTestType(null)
  }

  const handleGoHome = () => {
    setCurrentPage("home")
    setParticipantInfo(null)
    setTestType(null)
    setScores(null)
  }

  return (
    <main className="app-container">
      {currentPage === "home" && <HomePage onStartTest={handleStartTest} />}
      {currentPage === "participant-info" && (
        <ParticipantInfoPage onComplete={handleParticipantInfo} testType={testType} />
      )}
      {currentPage === "quiz" && testType && participantInfo && (
        <QuizPage testType={testType} onComplete={handleQuizComplete} />
      )}
      {currentPage === "results" && scores && participantInfo && (
        <ResultsPage
          scores={scores}
          testType={testType}
          participantInfo={participantInfo}
          onRetake={handleRetake}
          onGoHome={handleGoHome}
        />
      )}
    </main>
  )
}
