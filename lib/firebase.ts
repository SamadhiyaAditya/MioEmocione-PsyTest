import { initializeApp, getApps, getApp } from "firebase/app"
import { getDatabase, ref, set, push, get } from "firebase/database"
import type { Database } from "firebase/database"

let database: Database | undefined

function getFirebaseDatabase(): Database {
  if (!database) {
    const app = !getApps().length
      ? initializeApp({
          apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
          authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
          projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
          storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
          databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
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
