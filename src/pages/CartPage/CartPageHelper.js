export const createItemsArrayToBuy = (products) => {
  return products.map((product) => {
    const { category, variety, producer, id, img, quantity, labelName } = product

    return {
      name: labelName || `${category}-${variety}-${producer}`,
      id,
      img: `https://sw-food-shop-app.web.app/${img}`,
      quantity
    }
  })
}

export const checkIsAnyProductInTheCart = (deliveryId, paymentId, products, setCheckIsAnyProductInCart) => {
  if (deliveryId.length !== 0 && paymentId.length !== 0 && products.length === 2) {
    setCheckIsAnyProductInCart(true)
  }
}
