export const createItemsArrayToBuy = (products) => {
  return products.map((product) => {
    const { category, variety, producer, id, img, quantity, labelName } = product

    return {
      name: labelName || `${category}-${variety}-${producer}`,
      id,
      img,
      quantity
    }
  })
}
