import React from 'react'
import PropTypes from 'prop-types'

import { StyledCartButton } from './CartButton.styled'

export const CartButton = (props) => {
  const {
    children,
    className,
    onClick,
    variant
  } = props

  return (
    <StyledCartButton
      className={className}
      $variant={variant}
      onClick={onClick}
    >
      {children}
    </StyledCartButton>
  )
}

CartButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['changeQuantity', 'addToCart'])
}

export default CartButton
