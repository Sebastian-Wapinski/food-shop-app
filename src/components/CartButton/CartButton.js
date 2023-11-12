import React from 'react'
import PropTypes from 'prop-types'

import { StyledCartButton } from './CartButton.styled'

export const CartButton = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <StyledCartButton
      {...otherProps}
    >
      {children}
    </StyledCartButton>
  )
}

CartButton.propTypes = {
  children: PropTypes.node
}

export default CartButton
