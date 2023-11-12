import React from 'react'

import { ref, onValue } from 'firebase/database'

import { StyledAllProductsFromCategoryPage } from './AllProductsFromCategoryPage.styled'
import { database } from '../../firebaseConfig'
import { useParams } from 'react-router'
import { returnRightPath } from './AllProductsFromCategoryPageHelper'

export const AllProductsFromCategoryPage = () => {
  const { allProductsFromCategory, particularCategoryProducts } = useParams()

  const [productsData, setProductsData] = React.useState({})

  const createData = React.useCallback((rawData) => {
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
  }, [])

  React.useEffect(() => {
    const products = ref(database, returnRightPath(allProductsFromCategory, particularCategoryProducts))
    onValue(products, (snapshot) => {
      const rawData = snapshot.val()

      const data = createData(rawData)
      setProductsData(rawData)
      console.log(data, 'data')
    })
  }, [allProductsFromCategory, createData, particularCategoryProducts])

  console.log(productsData, 'productsData')

  return (
    <StyledAllProductsFromCategoryPage>
      Products
    </StyledAllProductsFromCategoryPage>
  )
}

export default AllProductsFromCategoryPage
