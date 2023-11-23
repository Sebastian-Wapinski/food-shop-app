import React from 'react'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'

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
  StyledAddToCartContainer,
  StyledOverlay,
  StyledText
} from './ProductCard.styled'

import CartButton from '../CartButton/CartButton'
import ChangeQuantityField from '../ChangeQuantityField/ChangeQuantityField'
import { actionAddToCart } from '../../modules/Cart/Cart.actions'

export const ProductCard = (props) => {
  const {
    img,
    price,
    producer,
    accessibility,
    variety,
    unit,
    category,
    id
  } = props

  const [isFullCardShow, setIsFullCardShow] = React.useState(false)
  const [productQuantity, setProductQuantity] = React.useState(1)
  const dispatch = useDispatch()

  const decreaseProductQuantity = () => {
    if (productQuantity === 0) {
      setProductQuantity(0)
      return
    } else if (productQuantity <= 1) {
      setProductQuantity(1)
      return
    } else if (productQuantity > 10) {
      setProductQuantity(10)
      return
    }
    setProductQuantity(prevState => prevState - 1)
  }

  const increaseProductQuantity = () => {
    if (productQuantity >= 10 && accessibility >= 10) {
      setProductQuantity(10)
      return
    } else if (productQuantity >= accessibility) {
      setProductQuantity(accessibility)
      return
    } else if (productQuantity <= 0) {
      setProductQuantity(1)
      return
    }
    setProductQuantity(prevState => prevState + 1)
  }

  const addToCart = () => {
    dispatch(actionAddToCart({
      img,
      price,
      producer,
      variety,
      category,
      id,
      unit,
      quantity: productQuantity
    }))
  }

  return (
    <StyledProductCard
      onMouseEnter={() => setIsFullCardShow(true)}
      onMouseLeave={() => setIsFullCardShow(false)}
    >
      {
        accessibility === 0 ?
          <StyledOverlay>
            <StyledText>
              OUT OF STOCK
            </StyledText>
          </StyledOverlay>
          :
          null
      }
      <StyledProductContainer $isActive={accessibility > 0}>
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
        {
      isFullCardShow && accessibility !== 0 ?
        <>
          <StyledUnit
            variant={'cardBody1'}
          >
            Price for 1{unit}
          </StyledUnit>
          <StyledAddToCartContainer
            $isActive={true}
          >
            <CartButton
              variant={'changeQuantity'}
              onClick={decreaseProductQuantity}
            >
              -
            </CartButton>
            <ChangeQuantityField
              productQuantity={productQuantity}
              setProductQuantity={setProductQuantity}
              type={'number'}
            />
            <CartButton
              variant={'changeQuantity'}
              onClick={increaseProductQuantity}
            >
              +
            </CartButton>
            <CartButton
              variant={'addToCart'}
              onClick={addToCart}
            >
              Add To Cart
            </CartButton>
          </StyledAddToCartContainer>
        </>
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
