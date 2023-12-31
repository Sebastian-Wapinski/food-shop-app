const dbFn = require("./firebaseRealtimeDatabaseInit")

async function getRealtimeDatabase(additionalPath) {
  const db = dbFn()
  const ref = db.ref(`/${additionalPath}`)
  try {
    const snapshot = await ref.once("value")
    const data = snapshot.val()
    return data
  } catch (error) {
    console.error("Error while downloading data:", error)
    throw error
  }
}

module.exports = getRealtimeDatabase
