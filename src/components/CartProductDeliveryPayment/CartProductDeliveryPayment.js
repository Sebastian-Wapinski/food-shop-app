import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledCartProductDeliveryPayment,
  StyledName,
  StyledPrice
} from './CartProductDeliveryPayment.styled'

export const CartProductDeliveryPayment = (props) => {
  const {
    product
  } = props

  const { price, labelName } = product

  return (
    <StyledCartProductDeliveryPayment>
      <StyledName
        variant={'cardH1'}
      >
        {labelName}
      </StyledName>
      <StyledPrice
        variant={'cardBody1'}
      >
        {price}€
      </StyledPrice>
    </StyledCartProductDeliveryPayment>
  )
}

CartProductDeliveryPayment.propTypes = {
  product: PropTypes.object
}

export default CartProductDeliveryPayment
