import React from 'react'
import PropTypes from 'prop-types'

import { StyledCardButton } from './CardButton.styled'

export const CardButton = (props) => {
  const {
    children,
    className,
    onClick,
    variant
  } = props

  return (
    <StyledCardButton
      className={className}
      $variant={variant}
      onClick={onClick}
    >
      {children}
    </StyledCardButton>
  )
}

CardButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['changeQuantity', 'addToCart', 'delete'])
}

export default CardButton
