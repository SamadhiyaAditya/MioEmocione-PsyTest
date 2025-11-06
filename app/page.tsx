"use client"

import { useState } from "react"
import HomePage from "@/components/HomePage"
import ParticipantInfoPage from "@/components/ParticipationInfoPage"
import QuizPage from "@/components/QuizPage"
import ResultsPage from "@/components/ResultsPage"
import "@/styles/quiz.css"

interface ParticipantInfo {
  initials: string
  gender: string
  age: number
}

interface Scores {
  totalScore: number
  maxScore: number
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState<string>("home")
  const [participantInfo, setParticipantInfo] = useState<ParticipantInfo | null>(null)
  const [testType, setTestType] = useState<"intelligence" | "maturity" | null>(null)
  const [scores, setScores] = useState<Scores | null>(null)

  const handleStartTest = (type: "intelligence" | "maturity"): void => {
    setTestType(type)
    setCurrentPage("participant-info")
  }

  const handleParticipantInfo = (info: ParticipantInfo): void => {
    setParticipantInfo(info)
    setCurrentPage("quiz")
  }

  const handleQuizComplete = async (score: Scores): Promise<void> => {
    setScores(score)
    setCurrentPage("results")
  }

  const handleRetake = (): void => {
    setScores(null)
    setCurrentPage("home")
    setParticipantInfo(null)
    setTestType(null)
  }

  const handleGoHome = (): void => {
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
          testType={testType as "intelligence" | "maturity"}
          participantInfo={participantInfo}
          onRetake={handleRetake}
          onGoHome={handleGoHome}
        />
      )}
    </main>
  )
}
