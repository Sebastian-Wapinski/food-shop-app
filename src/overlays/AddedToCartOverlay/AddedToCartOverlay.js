import React from 'react'
import PropTypes from 'prop-types'

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
    isActiveAddedToCartLayer,
    setIsActiveAddedToCartLayer
  } = props

  return (
    isActiveAddedToCartLayer ?
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
      :
      null
  )
}

AddedToCartOverlay.propTypes = {
  isActiveAddedToCartLayer: PropTypes.bool,
  setIsActiveAddedToCartLayer: PropTypes.func
}

export default AddedToCartOverlay
