import React from 'react'
import PropTypes from 'prop-types'

import { StyledTypography } from './Typography.styled'

export const Typography = (props) => {
  const {
    children,
    variant,
    className
  } = props

  return (
    <StyledTypography
      $variant={variant}
      className={className}
    >
      {children}
    </StyledTypography>
  )
}

Typography.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'button',
    'body1',
    'body2',
    'productImg',
    'cardH1',
    'cardBody1'
  ]),
  className: PropTypes.string
}

export default Typography
