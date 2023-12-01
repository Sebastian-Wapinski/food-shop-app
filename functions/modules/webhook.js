const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)
const setRealtimeDatabase = require("./setRealtimeDatabase")
const sendEmail = require("./sendEmail")

const createOrder = (session) => {
  const {
    id,
    amountTotal,
    metadata,
    payment_intent,
    payment_status,
    created,
    customer_details,
  } = session

  const dividedAmountTotal = amountTotal / 100
  const email = customer_details.email

  const orderData = {
    id,
    dividedAmountTotal,
    metadata,
    paymentIntent: payment_intent,
    paymentStatus: payment_status,
    created,
    email,
  }

  setRealtimeDatabase(orderData)
}

async function webhook(req, res) {
  const payload = req.rawBody
  const sig = req.headers["stripe-signature"]

  let event

  try {
    event = stripe.webhooks.constructEvent(payload, sig, process.env.ENDPOINT_SECRET)
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object
      createOrder(session)
      const email = session.customer_details.email

      if (session.payment_status === "paid") {
        sendEmail(email, "Payment Succeed", `Your order has been received and is now being processed. Payment status: ${session.payment_status}`)
      }
      break
    }

    case "charge.failed": {
      const session = event.data.object
      const email = session.billing_details.email
      sendEmail(email, "Payment Decline", "Sorry, but your payment was declined. Please try again.")
      break
    }

    default:
      console.log(`Unhandled event type ${event.type}`)
      break
  }

  res.status(200).end()
}

module.exports = webhook
