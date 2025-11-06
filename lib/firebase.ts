import { initializeApp } from "firebase/app"
import { getDatabase, ref, set, push, get } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyDjxR3APTUJ063dJr_7zza6vlh7T8nCmFY",
  authDomain: "mioemocione-psytest.firebaseapp.com",
  projectId: "mioemocione-psytest",
  storageBucket: "mioemocione-psytest.firebasestorage.app",
  messagingSenderId: "952889826747",
  appId: "1:952889826747:web:7d1cbb2ea593928acbb89e",
}

const app = initializeApp(firebaseConfig)
export const database = getDatabase(app)

export async function saveTestResult(participantInitials, participantInfo, testType, score, email = null) {
  const initialsKey = participantInitials.toUpperCase()
  const testRef = ref(database, `participants/${initialsKey}/tests`)

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

export async function getParticipantData(participantInitials) {
  const initialsKey = participantInitials.toUpperCase()
  const participantRef = ref(database, `participants/${initialsKey}`)

  try {
    const snapshot = await get(participantRef)
    return snapshot.val() || null
  } catch (error) {
    console.error("Error fetching participant data:", error)
    return null
  }
}
