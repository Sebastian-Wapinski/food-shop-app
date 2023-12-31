import React from 'react'
import PropTypes from 'prop-types'

import { StyledUserActions, StyledDarkOverlay } from './UserActions.styled'
import LoginPage from '../../pages/LoginPage/LoginPage'
import SignUpPage from '../../pages/SignUpPage/SignUpPage'
import RecoveryPasswordPage from '../../pages/RecoveryPasswordPage/RecoveryPasswordPage'

export const UserActions = (props) => {
  const {
    authenticationOperationInit,
    setShowLogInMenu
  } = props

  const [authenticationOperation, setAuthenticationOperation] = React.useState(authenticationOperationInit)

  return (
    <StyledUserActions>
      <StyledDarkOverlay
        onClick={() => setShowLogInMenu(false)}
      />
      {
        authenticationOperation === 'logIn' ?
          <LoginPage
            setAuthenticationOperation={setAuthenticationOperation}
            setShowLogInMenu={setShowLogInMenu}
          />
          :
          null
      }
      {
        authenticationOperation === 'signUp' ?
          <SignUpPage
            setAuthenticationOperation={setAuthenticationOperation}
            setShowLogInMenu={setShowLogInMenu}
          />
          :
          null
      }
      {
        authenticationOperation === 'recoveryPassword' ?
          <RecoveryPasswordPage
            setAuthenticationOperation={setAuthenticationOperation}
            setShowLogInMenu={setShowLogInMenu}
          />
          :
          null
      }
    </StyledUserActions>
  )
}

UserActions.propTypes = {
  authenticationOperationInit: PropTypes.string,
  setShowLogInMenu: PropTypes.func
}

export default UserActions
