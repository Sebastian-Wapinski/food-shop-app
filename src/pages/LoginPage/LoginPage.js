import React from 'react'
import PropTypes from 'prop-types'

import { StyledLoginPage } from './LoginPage.styled'
import { FormProvider, useForm } from 'react-hook-form'
import LoginForm from '../../components/LoginForm/LoginForm'
import { useAuthFunc } from '../../contexts/AuthFuncContext'

export const LoginPage = (props) => {
  const {
    setAuthenticationOperation,
    setShowLogInMenu
  } = props

  const methods = useForm()
  const { handleSubmit } = methods

  const { onClickLogin } = useAuthFunc()

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
  setShowLogInMenu: PropTypes.func
}

export default LoginPage
