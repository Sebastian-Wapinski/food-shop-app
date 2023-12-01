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

async function createUnpaidOrder(lineItems, uniqueId) {
  const db = dbFn()

  const processedLineItems = createFirebaseFormatLineItems(lineItems)

  try {
    await db.ref(`orders/${uniqueId}`).set({
      processedLineItems,
      paymentStatus: "pending",
    })
  } catch (error) {
    console.error("pending err", error)
  }
}

module.exports = createUnpaidOrder
