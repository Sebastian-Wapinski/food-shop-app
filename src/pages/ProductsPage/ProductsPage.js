import React from 'react'

import { ref, onValue } from 'firebase/database'

import { StyledProductsPage } from './ProductsPage.styled'
import { database } from '../../firebaseConfig'
import { useParams } from 'react-router'
import { createData, returnRightPath } from './ProductsPageHelper'
import ProductCard from '../../components/ProductCard/ProductCard'
import Pagination from '../../components/Pagination/Pagination'
import PaginationNav from '../../components/PaginationNav'
import ButtonsChangingPages from '../../components/ButtonsChangingPages/ButtonsChangingPages'

export const ProductsPage = () => {
  const { allProductsFromCategory, particularCategoryProducts } = useParams()

  const [productsData, setProductsData] = React.useState()
  const [currentPageNumber, setCurrentPageNumber] = React.useState(1)
  const [allPages, setAllPages] = React.useState(1)

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
        <Pagination
          pageNum={currentPageNumber}
          pageLimit={12}
        >
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
        </Pagination>
        <PaginationNav
          pageLimit={12}
          data={productsData}
          setCurrentPageNumber={setCurrentPageNumber}
          setAllPages={setAllPages}
          currentPageNumber={currentPageNumber}
        />
        {
        productsData.length > 0 ?
          <ButtonsChangingPages
            currentPageNumber={currentPageNumber}
            setCurrentPageNumber={setCurrentPageNumber}
            allPages={allPages}
          />
          :
          null
      }
      </StyledProductsPage>
      :
      <StyledProductsPage />
  )
}

export default ProductsPage
