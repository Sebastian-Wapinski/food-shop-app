import React from 'react'
import PropTypes from 'prop-types'

import { useSelector } from 'react-redux'

import {
  StyledTotalPrice,
  StyledTotalPriceTitle,
  StyledTotalPriceAmount
} from './TotalPrice.styled'

export const TotalPrice = (props) => {
  const { className } = props

  const { totalPrice } = useSelector((state) => state.cart)

  return (
    <StyledTotalPrice
      className={className}
    >
      <StyledTotalPriceTitle
        variant={'cardBody1'}
      >
        Total Price:
      </StyledTotalPriceTitle>
      <StyledTotalPriceAmount
        variant={'cardBody1'}
      >
        {totalPrice}€
      </StyledTotalPriceAmount>
    </StyledTotalPrice>
  )
}

TotalPrice.propTypes = {
  className: PropTypes.string
}

export default TotalPrice
