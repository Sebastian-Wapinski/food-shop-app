import React from 'react'
import PropTypes from 'prop-types'

import { StyledLoginPage } from './LoginPage.styled'
import { FormProvider, useForm } from 'react-hook-form'
import LoginForm from '../../components/LoginForm/LoginForm'

export const LoginPage = (props) => {
  const {
    setAuthenticationOperation,
    onClickLogin,
    setShowLogInMenu
  } = props

  const methods = useForm()
  const { handleSubmit } = methods

  return (
    <StyledLoginPage>
      <FormProvider
        {...methods}
      >
        <LoginForm
          onSubmit={handleSubmit((data) => {
            onClickLogin(data.logInEmail, data.password)
            setShowLogInMenu(false)
          })}
          setAuthenticationOperation={setAuthenticationOperation}
          setShowLogInMenu={setShowLogInMenu}
        />
      </FormProvider>
    </StyledLoginPage>
  )
}

LoginPage.propTypes = {
  setAuthenticationOperation: PropTypes.func,
  onClickLogin: PropTypes.func,
  setShowLogInMenu: PropTypes.func
}

export default LoginPage
