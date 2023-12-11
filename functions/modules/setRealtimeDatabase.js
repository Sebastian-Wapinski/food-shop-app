const dbFn = require("./firebaseRealtimeDatabaseInit")
const getRealtimeDatabase = require("./getRealtimeDatabase")

async function setRealtimeDatabase(paymentData) {
  const db = dbFn()
  const {
    metadata = null,
    paymentStatus = null,
  } = paymentData

  const { loggedInUserId, paymentId } = metadata

  if (loggedInUserId) {
    try {
      const existingData = await getRealtimeDatabase(`orders/loggedIn/${loggedInUserId}/${paymentId}`)

      await db.ref(`orders/loggedIn/${loggedInUserId}/${paymentId}`).set({
        ...existingData,
        paymentStatus,
      })
    } catch (error) {
      console.error("setRealtimeDatabase err", error)
    }
  } else {
    try {
      const existingData = await getRealtimeDatabase(`orders/notLoggedIn/${paymentId}`)

      await db.ref(`orders/notLoggedIn/${paymentId}`).set({
        ...existingData,
        paymentStatus,
      })
    } catch (error) {
      console.error("setRealtimeDatabase err", error)
    }
  }
}

module.exports = setRealtimeDatabase
