const dbFn = require("./firebaseRealtimeDatabaseInit")
const getRealtimeDatabase = require("./getRealtimeDatabase")

async function setRealtimeDatabase(paymentData) {
  const db = dbFn()
  const {
    id = null,
    dividedAmountTotal = null,
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
      dividedAmountTotal,
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
