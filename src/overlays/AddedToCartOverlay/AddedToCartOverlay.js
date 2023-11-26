import React from 'react'
import PropTypes from 'prop-types'

import { useSelector } from 'react-redux'

import {
  StyledDarkOverlay,
  StyledContainer,
  StyledAddedToCartContainer,
  StyledTitle,
  StyledProduct,
  StyledImg,
  StyledName,
  StyledQuantity,
  StyledPrice,
  StyledButtonsContainer
} from './AddedToCartOverlay.styled'
import CardButton from '../../components/CardButton/CardButton'
import { Link } from 'react-router-dom'

export const AddedToCartOverlay = (props) => {
  const {
    setIsActiveAddedToCartLayer
  } = props

  const { addedToCartProduct } = useSelector(state => state.cart)

  const { img, price, producer, variety, category, quantity } = addedToCartProduct

  const totalPrice = price * quantity

  return (
    <>
      <StyledDarkOverlay
        onClick={() => {
          setIsActiveAddedToCartLayer(false)
        }}
      />
      <StyledContainer>
        <StyledAddedToCartContainer>
          <StyledTitle
            variant={'cardH1'}
          >
            Added To Cart
          </StyledTitle>
          <StyledProduct>
            <StyledImg
              src={img}
              alt={variety}
            />
            <StyledName
              variant={'cardBody1'}
            >
              {category} - {variety} - {producer}
            </StyledName>
            <StyledQuantity
              variant={'cardBody1'}
            >
              {quantity}
            </StyledQuantity>
            <StyledPrice
              variant={'cardBody1'}
            >
              {totalPrice}€
            </StyledPrice>
          </StyledProduct>
          <StyledButtonsContainer>
            <CardButton
              variant={'customText'}
              onClick={() => {
                setIsActiveAddedToCartLayer(false)
              }}
            >
              Continue Shopping
            </CardButton>
            <Link
              to={'/cart'}
            >
              <CardButton
                variant={'customText'}
              >
                View Cart
              </CardButton>
            </Link>
          </StyledButtonsContainer>
        </StyledAddedToCartContainer>
      </StyledContainer>
    </>
  )
}

AddedToCartOverlay.propTypes = {
  setIsActiveAddedToCartLayer: PropTypes.func
}

export default AddedToCartOverlay
