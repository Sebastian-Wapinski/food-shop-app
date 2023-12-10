import React from 'react'
import PropTypes from 'prop-types'

import { StyledRecoveryPasswordPage } from './RecoveryPasswordPage.styled'

export const RecoveryPasswordPage = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <StyledRecoveryPasswordPage
      {...otherProps}
    >
      {children}
    </StyledRecoveryPasswordPage>
  )
}

RecoveryPasswordPage.propTypes = {
  children: PropTypes.node
}

export default RecoveryPasswordPage
