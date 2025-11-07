import { initializeApp, getApps, getApp } from "firebase/app"
import { getDatabase, ref, set, push, get, update } from "firebase/database"
import type { Database } from "firebase/database"

let database: Database | undefined

function getFirebaseDatabase(): Database {
  if (!database) {
    const app = !getApps().length
      ? initializeApp({
        apiKey: "AIzaSyDjxR3APTUJ063dJr_7zza6vlh7T8nCmFY",
        authDomain: "mioemocione-psytest.firebaseapp.com",
        databaseURL: "https://mioemocione-psytest-default-rtdb.firebaseio.com",
        projectId: "mioemocione-psytest",
        storageBucket: "mioemocione-psytest.firebasestorage.app",
        messagingSenderId: "952889826747",
        appId: "1:952889826747:web:7d1cbb2ea593928acbb89e"
        })
      : getApp()

    database = getDatabase(app)
  }

  return database
}

interface ParticipantInfo {
  initials: string
  gender: string
  age: number
}

interface Score {
  totalScore: number
  maxScore: number
}

// Also stores the test reference so we can update email later
let lastTestRef: any = null

export async function saveTestResult(
  participantInitials: string,
  participantInfo: ParticipantInfo,
  testType: "intelligence" | "maturity",
  score: Score,
  email: string | null = null,
): Promise<void> {
  const db = getFirebaseDatabase()
  const initialsKey = participantInitials.toUpperCase()
  const testRef = ref(db, `participants/${initialsKey}/tests`)
  const newTestRef = push(testRef)

  // Store reference for later email updates
  lastTestRef = newTestRef

  await set(newTestRef, {
    testType,
    score: score.totalScore,
    maxScore: score.maxScore,
    timestamp: new Date().toISOString(),
    gender: participantInfo.gender,
    age: participantInfo.age,
    email: email || null,
  })
}

export async function updateTestEmail(participantInitials: string, email: string): Promise<void> {
  if (!lastTestRef) {
    console.error("No test reference found")
    return
  }

  await update(lastTestRef, {
    email: email,
  })
}

export async function getParticipantData(participantInitials: string): Promise<unknown> {
  const db = getFirebaseDatabase()
  const initialsKey = participantInitials.toUpperCase()
  const participantRef = ref(db, `participants/${initialsKey}`)

  try {
    const snapshot = await get(participantRef)
    return snapshot.val() || null
  } catch (error) {
    console.error("Error fetching participant data:", error)
    return null
  }
}
