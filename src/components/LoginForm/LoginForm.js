import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledLoginForm,
  StyledTypography,
  StyledButton,
  StyledFormContainer
} from './LoginForm.styled'
import Logo from '../Header/Logo'
import RenderFormInputs from '../RenderFormInputs/RenderFormInputs'
import { loginFormData } from '../../data/loginFormData'

export const LoginForm = (props) => {
  const {
    onSubmit,
    setAuthenticationOperation
  } = props

  return (
    <StyledLoginForm
      onSubmit={onSubmit}
    >
      <Logo />
      <StyledTypography
        variant={'h2'}
      >
        LOG IN
      </StyledTypography>
      <StyledFormContainer>
        <RenderFormInputs
          formData={loginFormData}
        />
      </StyledFormContainer>
      <StyledButton
        variant={'customText'}
        type={'submit'}
      >
        LOGIN
      </StyledButton>
      <StyledButton
        variant={'customText'}
        onClick={() => setAuthenticationOperation('signUp')}
      >
        CREATE ACCOUNT
      </StyledButton>
      <StyledButton
        variant={'customText'}
        onClick={() => setAuthenticationOperation('recoveryPassword')}
      >
        FORGOT PASSWORD
      </StyledButton>
    </StyledLoginForm>
  )
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  setAuthenticationOperation: PropTypes.func
}

export default LoginForm
