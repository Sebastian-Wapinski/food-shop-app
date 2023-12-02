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

export const checkIsURLCorrectClosure = (allPages, navigate) => {
  return (dataToCheck) => {
    const pageNum = Number(dataToCheck)

    if (typeof dataToCheck === 'undefined') {
      return dataToCheck
    }

    if (allPages !== 1) {
      if (isNaN(pageNum) || pageNum > allPages || pageNum < 1) {
        navigate('*')
        return
      }
      return Number(dataToCheck)
    }
  }
}
