import React from 'react'
import PropTypes from 'prop-types'

import { useSelector } from 'react-redux'

import {
  StyledPreviewCartOverlay,
  StyledProductsAndTotalPriceLayout,
  StyledProductsContainer,
  StyledCardButton,
  StyledTotalPrice
} from './PreviewCartOverlay.styled'

import CartProduct from '../../components/CartProduct/CartProduct'
import { Link } from 'react-router-dom'

export const PreviewCartOverlay = (props) => {
  const {
    onMouseEnter,
    onMouseLeave
  } = props

  const { products } = useSelector((state) => state.cart)

  return (
    <StyledPreviewCartOverlay
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <StyledProductsAndTotalPriceLayout>
        {
            products.length !== 0 ?
              <StyledProductsContainer>
                {
            products.map(product => {
              const { id } = product
              return (
                <CartProduct
                  key={id}
                  product={product}
                />
              )
            })
          }
              </StyledProductsContainer>
              :
              null
          }
        <StyledTotalPrice />
        <Link
          to={'/cart'}
        >
          <StyledCardButton
            variant={'customText'}
          >
            Go To Cart
          </StyledCardButton>
        </Link>
      </StyledProductsAndTotalPriceLayout>
    </StyledPreviewCartOverlay>
  )
}

PreviewCartOverlay.propTypes = {
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
}

export default PreviewCartOverlay
