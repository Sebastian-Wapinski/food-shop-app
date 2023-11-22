import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledProductCard,
  StyledProductContainer,
  StyledImg,
  StyledName,
  StyledProducer,
  StyledPriceAccessibilityContainer,
  StyledPrice,
  StyledAccessibility,
  StyledUnit,
  StyledAddToCartContainer
} from './ProductCard.styled'

import CartButton from '../CartButton/CartButton'
import ChangeQuantityField from '../ChangeQuantityField/ChangeQuantityField'

export const ProductCard = (props) => {
  const {
    img,
    price,
    producer,
    accessibility,
    variety,
    unit,
    category
  } = props

  const [isFullCardShow, setIsFullCardShow] = React.useState(false)

  return (
    <StyledProductCard
      onMouseEnter={() => setIsFullCardShow(true)}
      onMouseLeave={() => setIsFullCardShow(false)}
    >
      <StyledProductContainer>
        <StyledImg
          src={img}
          alt={`${variety}`}
        />
        <StyledName
          variant={'cardH1'}
        >
          {category}-{variety}
        </StyledName>
        <StyledProducer
          variant={'cardBody1'}
        >
          {producer}
        </StyledProducer>
        <StyledPriceAccessibilityContainer>
          <StyledPrice
            variant={'cardBody1'}
          >
            {price}€
          </StyledPrice>
          <StyledAccessibility
            variant={'cardBody1'}
          >
            IN STOCK: {accessibility}
          </StyledAccessibility>
        </StyledPriceAccessibilityContainer>
        <StyledUnit
          variant={'cardBody1'}
        >
          Price for 1{unit}
        </StyledUnit>
        {
      isFullCardShow ?
        <StyledAddToCartContainer
          $isActive={true}
        >
          <CartButton
            variant={'changeQuantity'}
          >
            -
          </CartButton>
          <ChangeQuantityField />
          <CartButton
            variant={'changeQuantity'}
          >
            +
          </CartButton>
          <CartButton
            variant={'addToCart'}
          >
            Add To Cart
          </CartButton>
        </StyledAddToCartContainer>
        :
        <StyledAddToCartContainer $isActive={false}/>
      }
      </StyledProductContainer>
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
  unit: PropTypes.string,
  category: PropTypes.string
}

export default ProductCard
