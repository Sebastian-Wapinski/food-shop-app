import React from 'react'

import { useSelector } from 'react-redux'

import {
  StyledTotalPrice,
  StyledTotalPriceTitle,
  StyledTotalPriceAmount
} from './TotalPrice.styled'

export const TotalPrice = () => {
  const { totalPrice } = useSelector((state) => state.cart)

  return (
    <StyledTotalPrice>
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

export default TotalPrice
