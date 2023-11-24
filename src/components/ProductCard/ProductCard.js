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
  StyledText,
  StyledProductErrorMessage
} from './ProductCard.styled'

import CardButton from '../CardButton/CardButton'
import { actionAddToCart } from '../../modules/Cart/Cart.actions'
import ChangeProductQuantityComplex from '../ChangeProductQuantityComplex/ChangeProductQuantityComplex'

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
  const [isError, setIsError] = React.useState(false)
  const dispatch = useDispatch()

  const decreaseProductQuantity = () => {
    setIsError(false)
    if (productQuantity > accessibility) {
      setProductQuantity(accessibility)
      return
    } else if (productQuantity <= 1) {
      setProductQuantity(1)
      return
    }
    setProductQuantity(prevState => prevState - 1)
  }

  const increaseProductQuantity = () => {
    setIsError(false)
    if (productQuantity >= accessibility) {
      setProductQuantity(accessibility)
      return
    } else if (productQuantity <= 0) {
      setProductQuantity(1)
      return
    }
    setProductQuantity(prevState => prevState + 1)
  }

  const addToCart = () => {
    if (productQuantity > accessibility || productQuantity <= 0) {
      setIsError(true)
      return
    }

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
            />
            <CardButton
              variant={'addToCart'}
              onClick={addToCart}
            >
              Add To Cart
            </CardButton>
          </StyledAddToCartContainer>
          {
            isError ?
              <StyledProductErrorMessage>
                Unacceptable quantity! Input in range!
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
  category: PropTypes.string
}

export default ProductCard
