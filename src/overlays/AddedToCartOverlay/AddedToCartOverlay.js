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
  StyledPrice
} from './AddedToCartOverlay.styled'

export const AddedToCartOverlay = (props) => {
  const {
    setIsActiveAddedToCartLayer
  } = props

  const { addedToCartProduct } = useSelector(state => state.cart)

  console.log(addedToCartProduct, addedToCartProduct)

  return (
    <>
      <StyledDarkOverlay
        onClick={() => {
          setIsActiveAddedToCartLayer(false)
        }}
      />
      <StyledContainer>
        <StyledAddedToCartContainer>
          <StyledTitle>
            Added To Cart
          </StyledTitle>
          <StyledProduct>
            <StyledImg>

            </StyledImg>
            <StyledName>

            </StyledName>
            <StyledQuantity>

            </StyledQuantity>
            <StyledPrice>

            </StyledPrice>
          </StyledProduct>

        </StyledAddedToCartContainer>
      </StyledContainer>
    </>
  )
}

AddedToCartOverlay.propTypes = {
  setIsActiveAddedToCartLayer: PropTypes.func
}

export default AddedToCartOverlay
