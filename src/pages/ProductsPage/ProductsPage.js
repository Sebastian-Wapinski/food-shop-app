import React from 'react'

import { ref, onValue } from 'firebase/database'

import { StyledProductsPage, StyledProductsContainer } from './ProductsPage.styled'
import { database } from '../../firebaseConfig'
import { useParams } from 'react-router'
import { createData, returnRightPath } from './ProductsPageHelper'
import ProductCard from '../../components/ProductCard/ProductCard'

export const ProductsPage = () => {
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
      <StyledProductsPage>
        <StyledProductsContainer>
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
        </StyledProductsContainer>
      </StyledProductsPage>
      :
      <StyledProductsPage />
  )
}

export default ProductsPage
