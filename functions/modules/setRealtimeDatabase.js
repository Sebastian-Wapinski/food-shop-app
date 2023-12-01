const dbFn = require("./firebaseRealtimeDatabaseInit")
const getRealtimeDatabase = require("./getRealtimeDatabase")

async function setRealtimeDatabase(paymentData) {
  const db = dbFn()
  const {
    id = null,
    amountTotal = null,
    metadata = null,
    paymentIntent = null,
    paymentStatus = null,
    created = null,
    email = null,
  } = paymentData

  try {
    const existingData = await getRealtimeDatabase(`orders/${metadata.userId}`)

    await db.ref(`orders/${metadata.userId}`).set({
      ...existingData,
      id,
      amountTotal,
      metadata,
      paymentIntent,
      paymentStatus,
      created,
      email,
    })
  } catch (error) {
    console.error("setRealtimeDatabase err", error)
  }
}

module.exports = setRealtimeDatabase
