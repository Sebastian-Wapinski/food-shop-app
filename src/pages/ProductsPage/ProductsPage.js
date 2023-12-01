import React from 'react'

import {
  StyledProductsPage,
  StyledPageTitle
} from './ProductsPage.styled'

import { useLocation, useNavigate, useParams } from 'react-router'
import { createData, returnRightPath, sliceLastBackslash } from './ProductsPageHelper'
import ProductCard from '../../components/ProductCard/ProductCard'
import Pagination from '../../components/Pagination/Pagination'
import PaginationNav from '../../components/PaginationNav'
import ButtonsChangingPages from '../../components/ButtonsChangingPages/ButtonsChangingPages'
import AddedToCartOverlay from '../../overlays/AddedToCartOverlay/AddedToCartOverlay'
import { setFirebaseDatabaseData } from '../../helper/helper'
import { Helmet } from 'react-helmet-async'

export const ProductsPage = () => {
  const {
    allProductsFromCategory,
    particularCategoryProducts,
    pageNumAllProducts,
    pageNumFromCategory,
    pageNumParticularCategory
  } = useParams()

  const [productsData, setProductsData] = React.useState()
  const [allPages, setAllPages] = React.useState(1)
  const [isActiveAddedToCartLayer, setIsActiveAddedToCartLayer] = React.useState(false)

  const location = useLocation()
  const navigate = useNavigate()
  const newPath = sliceLastBackslash(location)

  React.useEffect(() => {
    setFirebaseDatabaseData(returnRightPath(allProductsFromCategory, particularCategoryProducts), createData, setProductsData)
  }, [allProductsFromCategory, particularCategoryProducts])

  React.useEffect(() => {
    const checkIsURLCorrect = (dataToCheck) => {
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

    const checkPageNumInURLIsCorrect = () => {
      return (
        checkIsURLCorrect(pageNumAllProducts) ||
        checkIsURLCorrect(pageNumFromCategory) ||
        checkIsURLCorrect(pageNumParticularCategory)
      )
    }

    checkPageNumInURLIsCorrect()
  }, [allPages, navigate, pageNumAllProducts, pageNumFromCategory, pageNumParticularCategory])

  const pageNum = () => {
    return (Number(pageNumAllProducts) || Number((pageNumFromCategory)) || Number(pageNumParticularCategory))
  }

  const setFirstLetterToUppercase = (word) => {
    if (word !== undefined) {
      return word[0].toUpperCase() + word.slice(1)
    }
    return null
  }

  return (
    productsData ?
      <StyledProductsPage>
        <Helmet>
          <title>{setFirstLetterToUppercase(particularCategoryProducts) || setFirstLetterToUppercase(allProductsFromCategory) || 'All Products'}</title>
          <meta
            name={'Products-page'}
            content={'Products to buy'}
          />
        </Helmet>
        {
          isActiveAddedToCartLayer ?
            <AddedToCartOverlay
              setIsActiveAddedToCartLayer={setIsActiveAddedToCartLayer}
            />
            :
            null
        }
        <StyledPageTitle
          variant={'h2'}
        >
          {setFirstLetterToUppercase(particularCategoryProducts) || setFirstLetterToUppercase(allProductsFromCategory) || 'All Products'}
        </StyledPageTitle>
        <Pagination
          pageNum={pageNum()}
          pageLimit={12}
        >
          {
              productsData.map(product => {
                const { img, price, producer, id, accessibility, variety, unit, category } = product
                return (
                  <ProductCard
                    id={id}
                    img={img}
                    price={price}
                    producer={producer}
                    key={id}
                    accessibility={accessibility}
                    variety={variety}
                    unit={unit}
                    category={category}
                    setIsActiveAddedToCartLayer={setIsActiveAddedToCartLayer}
                  />
                )
              })
          }
        </Pagination>
        <PaginationNav
          pageLimit={12}
          data={productsData}
          setAllPages={setAllPages}
          currentPageNumber={pageNum()}
          allPages={allPages}
          path={newPath}
        />
        {
        productsData.length > 0 ?
          <ButtonsChangingPages
            currentPageNumber={pageNum()}
            allPages={allPages}
            path={newPath}
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
