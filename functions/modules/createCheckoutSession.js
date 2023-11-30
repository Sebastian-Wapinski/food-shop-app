const dbFn = require("./firebaseRealtimeDatabaseInit")
const getRealtimeDatabase = require("./getRealtimeDatabase")
const createUnpaidOrder = require("./createUnpaidOrder")
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

async function createCheckoutSession(req, res) {
  const { items, data } = req.body

  const { eMail, firstName, lastName, streetName, streetNumber, city, zipCode, phone } = data

  const customer = await stripe.customers.create({
    email: eMail,
    shipping: {
      name: `${firstName} ${lastName}`,
      address: {
        line1: `${streetName} ${streetNumber}`,
        city,
        postal_code: zipCode,
        country: "PL",
      },
    },
    phone,
  })


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
    success_url: `${process.env.DOMAIN}?success=true`,
    cancel_url: `${process.env.DOMAIN}?canceled=true`,
    metadata: {
      userId: uniqueId,
    },
  })

  await createUnpaidOrder(lineItems, uniqueId)

  res.json({ url: session.url })
}

module.exports = createCheckoutSession
