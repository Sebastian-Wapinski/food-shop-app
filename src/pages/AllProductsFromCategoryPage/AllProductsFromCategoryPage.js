import React from 'react'

import { ref, onValue } from 'firebase/database'

import { StyledAllProductsFromCategoryPage } from './AllProductsFromCategoryPage.styled'
import { database } from '../../firebaseConfig'
import { useParams } from 'react-router'
import { createData, returnRightPath } from './AllProductsFromCategoryPageHelper'
import ProductCard from '../../components/ProductCard/ProductCard'

export const AllProductsFromCategoryPage = () => {
  const { allProductsFromCategory, particularCategoryProducts } = useParams()

  const [productsData, setProductsData] = React.useState()

  React.useEffect(() => {
    const products = ref(database, returnRightPath(allProductsFromCategory, particularCategoryProducts))
    onValue(products, (snapshot) => {
      const rawData = snapshot.val()

      const data = createData(rawData)
      setProductsData(data)
    })
  }, [allProductsFromCategory, particularCategoryProducts])

  console.log(productsData, 'productsData')

  return (
    productsData ?
      <StyledAllProductsFromCategoryPage>
        {
          productsData.map(product => {
            const { img, price, producer, id, accessibility, variety, unit, category } = product
            return (
              <ProductCard
                img={img}
                price={price}
                producer={producer}
                key={id}
                accessibility={accessibility}
                variety={variety}
                unit={unit}
                category={category}
              />
            )
          })
      }
      </StyledAllProductsFromCategoryPage>
      :
      null
  )
}

export default AllProductsFromCategoryPage
