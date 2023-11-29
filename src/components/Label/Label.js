import React from 'react'
import PropTypes from 'prop-types'

import { StyledLabel } from './Label.styled'

export const Label = (props) => {
  const {
    children,
    isRequired,
    htmlFor,
    className,
    variant = 'text'
  } = props

  return (
    <StyledLabel
      required={isRequired}
      htmlFor={htmlFor}
      className={className}
      $variant={variant}
    >
      {children}
    </StyledLabel>
  )
}

Label.propTypes = {
  children: PropTypes.node,
  isRequired: PropTypes.bool,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['text', 'radio'])
}

export default Label
