import React from 'react'
import PropTypes from 'prop-types'

import { StyledProductCard } from './ProductCard.styled'

export const ProductCard = (props) => {
  const {
    img,
    price,
    producer,
    accessibility,
    variety,
    unit
  } = props

  return (
    <StyledProductCard>
      <StyledImg
        src={img}
        alt={`${variety}`}
      />
      <StyledName>
        {variety}
      </StyledName>
      <StyledProducer>
        {producer}
      </StyledProducer>
      <StyledPriceAccessibilityContainer>
        <StyledPrice>
          {price}
        </StyledPrice>
        <StyledAccessibility>
          {accessibility}
        </StyledAccessibility>
      </StyledPriceAccessibilityContainer>
      <StyledUnit>
        Price for 1{unit}
      </StyledUnit>
      <StyledAddToCartContainer>
        <CartButton
          variety={'changeQuantity'}
        >
          -
        </CartButton>
        <ChangeQuantityField />
        <CartButton
          variety={'changeQuantity'}
        >
          +
        </CartButton>
        <CartButton
          variety={'addToCart'}
        >
          Add To Cart
        </CartButton>
      </StyledAddToCartContainer>
    </StyledProductCard>
  )
}

ProductCard.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number,
  producer: PropTypes.string,
  accessibility: PropTypes.number,
  variety: PropTypes.string,
  unit: PropTypes.string
}

export default ProductCard
