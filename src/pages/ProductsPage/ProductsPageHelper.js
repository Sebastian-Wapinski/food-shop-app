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

export const createData = (rawData) => {
  const { hasSubcategory } = rawData
  const array = Object.entries(rawData)
  return array
    .filter((item) => {
      const key = item[0]
      return key !== 'hasSubcategory'
    })
    .map((item) => {
      const key = item[0]
      const value = item[1]

      if (hasSubcategory) {
        const subCategoryData = createData(value)
        return subCategoryData
      }

      return {
        ...value,
        id: key
      }
    })
    .flat(Infinity)
}

export const sliceLastBackslash = (location) => location.pathname.slice(0, location.pathname.lastIndexOf('/'))
