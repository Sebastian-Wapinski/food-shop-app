import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledCartProduct,
  StyledImg,
  StyledContainerProductInfo,
  StyledName,
  StyledProducer,
  StyledUnitPrice,
  StyledContainerPriceQuantity,
  StyledPrice,
  StyledAccessibility
} from './CartProduct.styled'

import ChangeProductQuantityComplex from '../ChangeProductQuantityComplex/ChangeProductQuantityComplex'

export const CartProduct = (props) => {
  const {
    product
  } = props

  const { img, price, producer, accessibility, variety, unit, category } = product

  return (
    <StyledCartProduct>
      <StyledImg
        src={img}
        alt={`${variety}`}
      />
      <StyledContainerProductInfo>
        <StyledName>
          {category}-{variety}
        </StyledName>
        <StyledProducer>
          {producer}
        </StyledProducer>
        <StyledUnitPrice>
          Price for 1 {unit} - {price}
        </StyledUnitPrice>
      </StyledContainerProductInfo>
      <StyledContainerPriceQuantity>
        <StyledPrice>

        </StyledPrice>
        <StyledAccessibility>
          In Stock: {accessibility}
        </StyledAccessibility>
        <ChangeProductQuantityComplex />
      </StyledContainerPriceQuantity>
    </StyledCartProduct>
  )
}

CartProduct.propTypes = {
  product: PropTypes.object
}

export default CartProduct
