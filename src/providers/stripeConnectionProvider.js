export const stripeConnectionProvider = async (cart) => {
  const response = await fetch('https://us-central1-sw-food-shop-app.cloudfunctions.net/stripeConnection/create-checkout-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cart)
  })

  if (response.ok) return response.json()

  return response.json().then(json => Promise.reject(json))
}
