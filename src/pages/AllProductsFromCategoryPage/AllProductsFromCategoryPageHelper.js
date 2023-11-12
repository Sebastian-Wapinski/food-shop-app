export const returnRightPath = (allProductsFromCategory, particularCategoryProducts) => {
  return (
    particularCategoryProducts ?
    `products/${allProductsFromCategory}/${particularCategoryProducts}`
      :
      allProductsFromCategory ?
    `products/${allProductsFromCategory}`
        :
        'products'
  )
}
