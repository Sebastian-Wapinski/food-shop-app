import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton } from './Button.styled'

export const Button = (props) => {
  const {
    children,
    onClick,
    className,
    type
  } = props

  return (
    <StyledButton
      onClick={onClick}
      className={className}
      type={type}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string
}

export default Button
