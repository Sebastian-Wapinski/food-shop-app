import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledLoginForm,
  StyledTypography,
  StyledButton,
  StyledFormContainer,
  StyledFontAwesomeIcon,
  StyledImgContainer
} from './LoginForm.styled'
import Logo from '../Header/Logo'
import RenderFormInputs from '../RenderFormInputs/RenderFormInputs'
import { loginFormData } from '../../data/loginFormData'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

export const LoginForm = (props) => {
  const {
    onSubmit,
    setAuthenticationOperation,
    setShowLogInMenu
  } = props

  return (
    <StyledLoginForm
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
  setAuthenticationOperation: PropTypes.func,
  setShowLogInMenu: PropTypes.func
}

export default LoginForm
