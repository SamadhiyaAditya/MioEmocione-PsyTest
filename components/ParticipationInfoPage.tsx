"use client"

import type React from "react"

import { useState } from "react"

interface ParticipantInfoPageProps {
  onComplete: (info: { initials: string; gender: string; age: number }) => void
  testType: "intelligence" | "maturity" | null
}

interface FormErrors {
  initials?: string
  gender?: string
  age?: string
}

export default function ParticipantInfoPage({ onComplete, testType }: ParticipantInfoPageProps) {
  const [initials, setInitials] = useState("")
  const [gender, setGender] = useState("")
  const [age, setAge] = useState("")
  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    const newErrors: FormErrors = {}

    if (!initials.trim()) {
      newErrors.initials = "Initials are required"
    } else if (initials.length > 5) {
      newErrors.initials = "Initials should be 5 characters or less"
    }

    if (!gender) {
      newErrors.gender = "Please select a gender"
    }

    if (!age) {
      newErrors.age = "Age is required"
    } else if (isNaN(Number(age)) || Number(age) < 10 || Number(age) > 120) {
      newErrors.age = "Please enter a valid age"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsLoading(true)

    setTimeout(() => {
      onComplete({
        initials: initials.trim(),
        gender,
        age: Number.parseInt(age),
      })
      setIsLoading(false)
    }, 500)
  }

  const testName = testType === "intelligence" ? "Emotional Intelligence Test" : "Emotional Maturity Test"

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <p className="loading-text">Please wait...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="participant-page">
      <div className="participant-container">
        <h1 className="participant-title">Welcome to Mio Emocione</h1>
        <p className="participant-test-name">{testName}</p>
        <p className="participant-subtitle">Please provide your information to begin</p>

        <form onSubmit={handleSubmit} className="participant-form">
          <div className="form-group">
            <label htmlFor="initials" className="form-label">
              Your Initials
            </label>
            <input
              id="initials"
              type="text"
              value={initials}
              onChange={(e) => {
                setInitials(e.target.value.toUpperCase())
                if (errors.initials) setErrors({ ...errors, initials: "" })
              }}
              placeholder="e.g., JD"
              className="form-input"
              maxLength={5}
            />
            {errors.initials && <p className="error-text">{errors.initials}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => {
                setGender(e.target.value)
                if (errors.gender) setErrors({ ...errors, gender: "" })
              }}
              className="form-input"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <p className="error-text">{errors.gender}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              id="age"
              type="number"
              value={age}
              onChange={(e) => {
                setAge(e.target.value)
                if (errors.age) setErrors({ ...errors, age: "" })
              }}
              placeholder="e.g., 20"
              className="form-input"
              min="10"
              max="120"
            />
            {errors.age && <p className="error-text">{errors.age}</p>}
          </div>

          <button type="submit" className="test-button start-test-button">
            Start {testName === "Emotional Intelligence Test" ? "Intelligence" : "Maturity"} Test
          </button>
        </form>
      </div>
    </div>
  )
}
