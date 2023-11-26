import React from 'react'
import PropTypes from 'prop-types'

import { useSelector } from 'react-redux'

import { StyledPreviewCartOverlay } from './PreviewCartOverlay.styled'
import CartProduct from '../../components/CartProduct/CartProduct'

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
    </StyledPreviewCartOverlay>
  )
}

PreviewCartOverlay.propTypes = {
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
}

export default PreviewCartOverlay
