/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

import { StyledLoginPage } from './LoginPage.styled'
import { FormProvider, useForm } from 'react-hook-form'
import LoginForm from '../../components/LoginForm/LoginForm'

export const LoginPage = (props) => {
  const {
    setAuthenticationOperation
  } = props

  const methods = useForm()
  const { handleSubmit } = methods

  return (
    <StyledLoginPage>
      <FormProvider
        {...methods}
      >
        <LoginForm
          onSubmit={handleSubmit()}
          setAuthenticationOperation={setAuthenticationOperation}
        />
      </FormProvider>
    </StyledLoginPage>
  )
}

LoginPage.propTypes = {
  setAuthenticationOperation: PropTypes.func
}

export default LoginPage
