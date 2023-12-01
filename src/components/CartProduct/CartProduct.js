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
  StyledAccessibility,
  StyledButtonContainer,
  StyledErrorMessage
} from './CartProduct.styled'

import ChangeProductQuantityComplex from '../ChangeProductQuantityComplex/ChangeProductQuantityComplex'
import Button from '../Button/Button'

import { useDispatch } from 'react-redux'
import { actionChangeProductQuantity, actionDecreaseQuantity, actionDeleteFromCart, actionIncreaseQuantity, actionSetNewQuantity } from '../../modules/Cart/Cart.actions'
import { decreaseProductQuantityValidation, increaseProductQuantityValidation, setProductQuantityValidation } from '../../validation/insertProductValue'
import { ERROR_PRODUCT_QUANTITY } from '../../consts'

export const CartProduct = (props) => {
  const {
    product
  } = props

  const { img, price, producer, accessibility, variety, unit, category, id, quantity } = product

  const [newProductQuantity, setNewProductQuantity] = React.useState(quantity)
  const [isError, setIsError] = React.useState(false)

  const dispatch = useDispatch()

  const decreaseProductQuantity = (id) => {
    setIsError(false)
    const isNotValid = decreaseProductQuantityValidation(newProductQuantity, accessibility, setNewProductQuantity)
    if (isNotValid) return
    dispatch(actionDecreaseQuantity(id))
    setNewProductQuantity(prevState => prevState - 1)
  }

  const increaseProductQuantity = (id) => {
    setIsError(false)
    const isNotValid = increaseProductQuantityValidation(newProductQuantity, accessibility, setNewProductQuantity)
    if (isNotValid) return
    dispatch(actionIncreaseQuantity(id))
    setNewProductQuantity(prevState => prevState + 1)
  }

  const totalPriceOfOneProduct = newProductQuantity * price

  React.useEffect(() => {
    if (newProductQuantity !== '') {
      setProductQuantityValidation(newProductQuantity, accessibility, setNewProductQuantity)
      dispatch(actionSetNewQuantity(id, newProductQuantity))
      dispatch(actionChangeProductQuantity())
    }
  }, [accessibility, dispatch, id, newProductQuantity, quantity])

  return (
    <>
      <StyledCartProduct>
        <StyledImg
          src={img}
          alt={`${variety}`}
        />
        <StyledContainerProductInfo>
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
          <StyledUnitPrice
            variant={'cardBody1'}
          >
            Price for 1 {unit} - {price}€
          </StyledUnitPrice>
        </StyledContainerProductInfo>
        <StyledContainerPriceQuantity>
          <ChangeProductQuantityComplex
            decreaseProductQuantity={() => decreaseProductQuantity(id)}
            increaseProductQuantity={() => increaseProductQuantity(id)}
            productQuantity={newProductQuantity}
            setProductQuantity={setNewProductQuantity}
            setIsError={setIsError}
            valueOnEmptyField={1}
            isDisabledPrevButton={quantity === 1}
            isDisabledNextButton={quantity === accessibility}
          />
          <StyledAccessibility
            variant={'cardBody1'}
          >
            In Stock: {accessibility}
          </StyledAccessibility>
        </StyledContainerPriceQuantity>
        <StyledPrice
          variant={'cardBody1'}
        >
          {totalPriceOfOneProduct}€
        </StyledPrice>
        <StyledButtonContainer>
          <Button
            variant={'delete'}
            onClick={() => {
              dispatch(actionDeleteFromCart(id))
              dispatch(actionChangeProductQuantity())
            }}
          >
            DEL
          </Button>
        </StyledButtonContainer>
      </StyledCartProduct>
      {
      isError ?
        <StyledErrorMessage
          variant={'errorMessage'}
        >
          {ERROR_PRODUCT_QUANTITY}
        </StyledErrorMessage>
        :
        null
    }
    </>
  )
}

CartProduct.propTypes = {
  product: PropTypes.object
}

export default CartProduct
