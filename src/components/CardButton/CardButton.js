import React from 'react'
import PropTypes from 'prop-types'

import { StyledCardButton } from './CardButton.styled'

export const CardButton = (props) => {
  const {
    children,
    className,
    onClick,
    variant,
    isDisabled
  } = props

  return (
    <StyledCardButton
      className={className}
      $variant={variant}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </StyledCardButton>
  )
}

CardButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  variant: PropTypes.oneOf(['changeQuantity', 'addToCart', 'delete'])
}

export default CardButton
