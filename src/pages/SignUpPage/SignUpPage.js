import React from 'react'
import PropTypes from 'prop-types'

import { StyledSignUpPage } from './SignUpPage.styled'
import { FormProvider, useForm } from 'react-hook-form'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import { useAuthFunc } from '../../contexts/AuthFuncContext'

export const SignUpPage = (props) => {
  const {
    setAuthenticationOperation,
    setShowLogInMenu
  } = props

  const methods = useForm()
  const { handleSubmit } = methods

  const { onClickCreateAccount } = useAuthFunc()

  return (
    <StyledSignUpPage>
      <FormProvider
        {...methods}
      >
        <SignUpForm
          onSubmit={handleSubmit((data) => {
            onClickCreateAccount(data.signUpEmail, data.password)
            setShowLogInMenu(false)
          })}
          setAuthenticationOperation={setAuthenticationOperation}
          setShowLogInMenu={setShowLogInMenu}
        />
      </FormProvider>
    </StyledSignUpPage>
  )
}

SignUpPage.propTypes = {
  setAuthenticationOperation: PropTypes.func,
  setShowLogInMenu: PropTypes.func
}

export default SignUpPage
