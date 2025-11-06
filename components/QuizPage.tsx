"use client"

import { useState, useMemo, useEffect } from "react"
import { getQuestions, calculateScores } from "@/lib/quizData"

interface QuizPageProps {
  testType: "intelligence" | "maturity"
  onComplete: (scores: { totalScore: number; maxScore: number }) => void
}

interface Answers {
  [key: string]: string
}

export default function QuizPage({ testType, onComplete }: QuizPageProps) {
  const questions = useMemo(() => getQuestions(testType), [testType])
  const [currentPageNum, setCurrentPageNum] = useState(1)
  const [answers, setAnswers] = useState<Answers>({})

  const questionsPerPage = 11
  const totalPages = Math.ceil(questions.length / questionsPerPage)
  const startIdx = (currentPageNum - 1) * questionsPerPage
  const endIdx = startIdx + questionsPerPage
  const currentQuestions = questions.slice(startIdx, endIdx)

  const handleAnswerChange = (questionId: string, value: string): void => {
    setAnswers({ ...answers, [questionId]: value })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPageNum])

  const areAllCurrentQuestionsAnswered = currentQuestions.every((question) => answers[question.id])

  const handleNext = () => {
    if (currentPageNum < totalPages && areAllCurrentQuestionsAnswered) {
      setCurrentPageNum(currentPageNum + 1)
    }
  }

  const handlePrevious = () => {
    if (currentPageNum > 1) {
      setCurrentPageNum(currentPageNum - 1)
    }
  }

  const areAllQuestionsAnswered = questions.every((question) => answers[question.id])

  const handleSubmit = () => {
    if (areAllQuestionsAnswered) {
      const scores = calculateScores(testType, answers)
      onComplete(scores)
    }
  }

  const isLastPage = currentPageNum === totalPages
  const isFirstPage = currentPageNum === 1

  return (
    <div className="quiz-page">
      <div className="quiz-container">
        <div className="quiz-header">
          <h2 className="quiz-title">
            {testType === "intelligence" ? "Emotional Intelligence Test" : "Emotional Maturity Test"}
          </h2>
          <p className="progress-text">
            Page {currentPageNum} of {totalPages}
          </p>
        </div>

        <div className="questions-container">
          {currentQuestions.map((question, idx) => (
            <div key={question.id} className="question-card">
              <p className="question-number">Question {startIdx + idx + 1}</p>
              <p className="question-text">{question.text}</p>

              <div className="options-container">
                {question.options.map((option) => (
                  <label key={option.id} className="radio-label">
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option.id}
                      checked={answers[question.id] === option.id}
                      onChange={() => handleAnswerChange(question.id, option.id)}
                      className="radio-input"
                    />
                    <span className="radio-text">{option.text}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="navigation-container">
          <button className="nav-button" onClick={handlePrevious} disabled={isFirstPage}>
            Previous
          </button>

          {!isLastPage ? (
            <button className="nav-button next-btn" onClick={handleNext} disabled={!areAllCurrentQuestionsAnswered}>
              Next
            </button>
          ) : (
            <button className="nav-button submit-btn" onClick={handleSubmit} disabled={!areAllQuestionsAnswered}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
