import React from 'react'
import PropTypes from 'prop-types'

import { StyledCartButton } from './CartButton.styled'

export const CartButton = (props) => {
  const {
    children,
    className,
    variant
  } = props

  return (
    <StyledCartButton
      className={className}
      $variant={variant}
    >
      {children}
    </StyledCartButton>
  )
}

CartButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['changeQuantity', 'addToCart'])
}

export default CartButton
