const dbFn = require("./firebaseRealtimeDatabaseInit")
const getRealtimeDatabase = require("./getRealtimeDatabase")
const createUnpaidOrder = require("./createUnpaidOrder")
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

async function createCheckoutSession(req, res) {
  const { items, data, additionalInformation } = req.body

  const { eMail, firstName, lastName, streetName, streetNumber, city, zipCode, phone, loggedInUserId = null } = data

  const customer = await stripe.customers.create({
    email: eMail,
  })

  const shipping = {
    name: `${firstName} ${lastName}`,
    line1: `${streetName} ${streetNumber}`,
    city,
    postal_code: zipCode,
    country: "PL",
    phone,
  }

  const firebaseData = await getRealtimeDatabase("productPrices")

  const storeItems = new Map(Object.entries(firebaseData))

  const db = dbFn()
  const uniqueId = db.ref().push().key

  const lineItems = items.map((item) => {
    const { name, id, img, quantity } = item

    const storeItem = storeItems.get(id)
    return {
      price_data: {
        currency: "eur",
        product_data: {
          name,
          images: [img],
        },
        unit_amount: (storeItem.price * 100),
      },
      quantity,
    }
  })

  const session = await stripe.checkout.sessions.create({
    customer: customer.id,
    payment_method_types: ["card"],
    mode: "payment",
    line_items: lineItems,
    success_url: `${process.env.DOMAIN}/payment-status-success`,
    cancel_url: `${process.env.DOMAIN}/payment-status-canceled`,
    metadata: {
      paymentId: uniqueId,
      loggedInUserId,
      additionalInformation,
      ...shipping,
    },
  })

  await createUnpaidOrder(lineItems, uniqueId, data, shipping, additionalInformation, session)

  res.json({ url: session.url })
}

module.exports = createCheckoutSession
