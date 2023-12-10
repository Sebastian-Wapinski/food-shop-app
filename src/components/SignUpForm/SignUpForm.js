import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledSignUpForm,
  StyledTypography,
  StyledFormContainer,
  StyledButton,
  StyledLabel,
  StyledInput,
  StyledImgContainer,
  StyledFontAwesomeIcon
} from './SignUpForm.styled'
import Logo from '../Header/Logo'
import { signUpFormData } from '../../data/signUpFormData'
import { useFormContext } from 'react-hook-form'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

export const SignUpForm = (props) => {
  const {
    setAuthenticationOperation,
    onSubmit,
    setShowLogInMenu
  } = props

  const methods = useFormContext()
  const { watch, register, formState: { errors } } = methods
  const { signUpEmail, password, repeatPassword } = signUpFormData

  const typingPassword = watch('password')

  const registeredSignUpEmail = register(signUpEmail.id, {
    ...signUpEmail.validationParams
  })

  const registeredPassword = register(password.id, {
    ...password.validationParams
  })

  const registeredRepeatPassword = register(repeatPassword.id, {
    ...repeatPassword.validationParams,
    validate: (repeatPassword) => repeatPassword === typingPassword || 'Passwords must be the same!'
  })

  return (
    <StyledSignUpForm
      onSubmit={onSubmit}
    >
      <StyledImgContainer
        onClick={() => setShowLogInMenu(false)}
      >
        <StyledFontAwesomeIcon
          icon={faCircleXmark}
        />
      </StyledImgContainer>
      <Logo />
      <StyledTypography
        variant={'h2'}
      >
        SIGN UP
      </StyledTypography>
      <StyledFormContainer>
        <StyledLabel
          htmlFor={signUpEmail.id}
          isRequired={signUpEmail.isRequired}
        >
          {signUpEmail.label}
        </StyledLabel>
        <StyledInput
          autoComplete={'one-time-code'}
          type={signUpEmail.type}
          id={signUpEmail.id}
          errors={errors}
          placeholder={signUpEmail.placeholder}
          {...registeredSignUpEmail}
        />
        <StyledLabel
          htmlFor={password.id}
          isRequired={password.isRequired}
        >
          {password.label}
        </StyledLabel>
        <StyledInput
          autoComplete={'one-time-code'}
          type={password.type}
          id={password.id}
          errors={errors}
          placeholder={password.placeholder}
          {...registeredPassword}
        />
        <StyledLabel
          htmlFor={repeatPassword.id}
          isRequired={repeatPassword.isRequired}
        >
          {repeatPassword.label}
        </StyledLabel>
        <StyledInput
          autoComplete={'one-time-code'}
          type={repeatPassword.type}
          id={repeatPassword.id}
          errors={errors}
          placeholder={repeatPassword.placeholder}
          {...registeredRepeatPassword}
        />
      </StyledFormContainer>
      <StyledButton
        variant={'customText'}
        type={'submit'}
      >
        CREATE ACCOUNT
      </StyledButton>
      <StyledButton
        variant={'customText'}
        onClick={() => setAuthenticationOperation('logIn')}
      >
        BACK TO LOGIN
      </StyledButton>
    </StyledSignUpForm>
  )
}

SignUpForm.propTypes = {
  setAuthenticationOperation: PropTypes.func,
  onSubmit: PropTypes.func,
  setShowLogInMenu: PropTypes.func
}

export default SignUpForm
