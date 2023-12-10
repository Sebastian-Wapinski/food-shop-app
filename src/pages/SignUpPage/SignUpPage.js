import React from 'react'
import PropTypes from 'prop-types'

import { StyledSignUpPage } from './SignUpPage.styled'
import { FormProvider, useForm } from 'react-hook-form'
import SignUpForm from '../../components/SignUpForm/SignUpForm'

export const SignUpPage = (props) => {
  const {
    setAuthenticationOperation,
    onClickCreateAccount,
    setShowLogInMenu
  } = props

  const methods = useForm()
  const { handleSubmit } = methods

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
        />
      </FormProvider>
    </StyledSignUpPage>
  )
}

SignUpPage.propTypes = {
  setAuthenticationOperation: PropTypes.func,
  onClickCreateAccount: PropTypes.func,
  setShowLogInMenu: PropTypes.func
}

export default SignUpPage
