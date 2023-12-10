import React from 'react'
import PropTypes from 'prop-types'

import { StyledSignUpPage } from './SignUpPage.styled'

export const SignUpPage = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <StyledSignUpPage
      {...otherProps}
    >
      {children}
    </StyledSignUpPage>
  )
}

SignUpPage.propTypes = {
  children: PropTypes.node
}

export default SignUpPage
