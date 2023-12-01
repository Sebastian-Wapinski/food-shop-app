require("dotenv").config()

const { onRequest } = require("firebase-functions/v2/https")
const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors({
  origin: true,
}))
app.use(
    express.json({
      verify: (req, res, buffer) => {
        req.rawBody = buffer
      },
    }),
)

const createCheckoutSession = require("./modules/createCheckoutSession")
const webhook = require("./modules/webhook")

app.post("/create-checkout-session", createCheckoutSession)

app.post("/webhook", webhook)

exports.stripeConnection = onRequest(app)

