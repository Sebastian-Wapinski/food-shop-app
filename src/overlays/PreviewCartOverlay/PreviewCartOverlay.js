import React from 'react'
import PropTypes from 'prop-types'

import { useSelector } from 'react-redux'

import {
  StyledPreviewCartOverlay,
  StyledProductsAndTotalPriceLayout,
  StyledCart,
  StyledButton,
  StyledTotalPrice
} from './PreviewCartOverlay.styled'

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
            <StyledCart />
            :
            null
          }
        <StyledTotalPrice />
        <Link
          to={'/cart'}
        >
          <StyledButton
            variant={'customText'}
            onClick={onMouseLeave}
          >
            Go To Cart
          </StyledButton>
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
