export const stripeConnectionProvider = async (cart) => {
  const response = await fetch(process.env.REACT_APP_STRIPE_CONNECTION_PROVIDER_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cart)
  })

  if (response.ok) return response.json()

  return response.json().then(json => Promise.reject(json))
}
