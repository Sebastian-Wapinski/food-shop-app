import React from 'react'
import PropTypes from 'prop-types'

import { useDispatch, useSelector } from 'react-redux'

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
  StyledText,
  StyledProductErrorMessage
} from './ProductCard.styled'

import Button from '../Button/Button'
import { actionAddToCart, actionChangeProductQuantity, actionIncreaseQuantity } from '../../modules/Cart/Cart.actions'
import ChangeProductQuantityComplex from '../ChangeProductQuantityComplex/ChangeProductQuantityComplex'
import { decreaseProductQuantityValidation, increaseProductQuantityValidation } from '../../validation/insertProductValue'
import { ERROR_PRODUCT_QUANTITY } from '../../consts'

export const ProductCard = (props) => {
  const {
    img,
    price,
    producer,
    accessibility,
    variety,
    unit,
    category,
    id,
    setIsActiveAddedToCartLayer
  } = props

  const [isFullCardShow, setIsFullCardShow] = React.useState(false)
  const [productQuantity, setProductQuantity] = React.useState(1)
  const [isError, setIsError] = React.useState(false)
  const dispatch = useDispatch()
  const { products: cartProducts } = useSelector(state => state.cart)

  const decreaseProductQuantity = () => {
    setIsError(false)
    const isNotValid = decreaseProductQuantityValidation(productQuantity, accessibility, setProductQuantity)
    if (isNotValid) return
    setProductQuantity(prevState => prevState - 1)
  }

  const increaseProductQuantity = () => {
    setIsError(false)
    const isNotValid = increaseProductQuantityValidation(productQuantity, accessibility, setProductQuantity)
    if (isNotValid) return
    setProductQuantity(prevState => prevState + 1)
  }

  const addToCart = () => {
    if (productQuantity > accessibility || productQuantity <= 0 || productQuantity === '') {
      setIsError(true)
      return
    }

    const isProductInCart = cartProducts.filter(product => product.id === id)

    if (isProductInCart.length === 0) {
      dispatch(actionAddToCart({
        img,
        price,
        producer,
        variety,
        category,
        id,
        unit,
        accessibility,
        quantity: productQuantity
      }))
      dispatch(actionChangeProductQuantity())
    } else {
      dispatch(actionIncreaseQuantity(id, productQuantity))
      dispatch(actionChangeProductQuantity())
    }

    setIsActiveAddedToCartLayer(true)
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
      <StyledProductContainer
        $isActive={accessibility > 0}
      >
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
      isFullCardShow && accessibility > 0 ?
        <>
          <StyledUnit
            variant={'cardBody1'}
          >
            Price for 1{unit}
          </StyledUnit>
          <StyledAddToCartContainer>
            <ChangeProductQuantityComplex
              decreaseProductQuantity={decreaseProductQuantity}
              increaseProductQuantity={increaseProductQuantity}
              productQuantity={productQuantity}
              setProductQuantity={setProductQuantity}
              setIsError={setIsError}
              valueOnEmptyField={''}
              isDisabledPrevButton={productQuantity === 1}
              isDisabledNextButton={productQuantity === accessibility}
            />
            <Button
              variant={'addToCart'}
              onClick={addToCart}
            >
              Add To Cart
            </Button>
          </StyledAddToCartContainer>
          {
            isError ?
              <StyledProductErrorMessage
                variant={'errorMessage'}
              >
                {ERROR_PRODUCT_QUANTITY}
              </StyledProductErrorMessage>
              :
              null
          }
        </>
        :
        null
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
  category: PropTypes.string,
  setIsActiveAddedToCartLayer: PropTypes.func
}

export default ProductCard
