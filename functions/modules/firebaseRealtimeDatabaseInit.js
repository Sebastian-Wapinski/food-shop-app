const admin = require("firebase-admin")
const serviceAccount = require("../secretAdminKeyShop.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sw-food-shop-app-default-rtdb.europe-west1.firebasedatabase.app",
})

function dbFn() {
  return admin.database()
}

module.exports = dbFn
