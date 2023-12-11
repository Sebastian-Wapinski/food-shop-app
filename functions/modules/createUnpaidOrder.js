const dbFn = require("./firebaseRealtimeDatabaseInit")

const createFirebaseFormatLineItems = (lineItems) => {
  return lineItems.map((item) => {
    const { price_data, quantity } = item
    const { currency, product_data, unit_amount: price } = price_data
    const { name, images } = product_data

    const dividedPrice = price / 100

    return {
      quantity,
      currency,
      dividedPrice,
      name,
      img: { ...images },
    }
  })
}

async function createUnpaidOrder(lineItems, uniqueId, data, session) {
  const db = dbFn()

  const { eMail, loggedInUserId = null } = data

  const processedLineItems = createFirebaseFormatLineItems(lineItems)

  const {
    id,
    amount_total,
    metadata,
    payment_intent,
    payment_status,
    created,
  } = session

  const amountTotal = amount_total / 100

  if (loggedInUserId) {
    try {
      await db.ref(`orders/loggedIn/${loggedInUserId}/${uniqueId}`).set({
        id,
        amountTotal,
        processedLineItems,
        metadata,
        paymentIntent: payment_intent,
        paymentStatus: payment_status,
        created,
        email: eMail,
      })
    } catch (error) {
      console.error("pending err", error)
    }
  } else {
    try {
      await db.ref(`orders/notLoggedIn/${uniqueId}`).set({
        id,
        amountTotal,
        processedLineItems,
        metadata,
        paymentIntent: payment_intent,
        paymentStatus: payment_status,
        created,
        email: eMail,
      })
    } catch (error) {
      console.error("pending err", error)
    }
  }
}

module.exports = createUnpaidOrder
