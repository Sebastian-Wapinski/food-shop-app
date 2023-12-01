import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton } from './Button.styled'

export const Button = (props) => {
  const {
    children,
    className,
    onClick,
    variant,
    isDisabled
  } = props

  return (
    <StyledButton
      className={className}
      $variant={variant}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  variant: PropTypes.oneOf(['changeQuantity', 'addToCart', 'delete', 'customText'])
}

export default Button
