import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledRecoverPasswordForm,
  StyledTypography,
  StyledFormContainer,
  StyledButton
} from './RecoverPasswordForm.styled'
import Logo from '../Header/Logo'
import RenderFormInputs from '../RenderFormInputs/RenderFormInputs'
import { recoverPasswordFormData } from '../../data/recoverPasswordFormData'

export const RecoverPasswordForm = (props) => {
  const {
    setAuthenticationOperation,
    onSubmit
  } = props

  return (
    <StyledRecoverPasswordForm
      onSubmit={onSubmit}
    >
      <Logo />
      <StyledTypography
        variant={'h2'}
      >
        RECOVER PASSWORD
      </StyledTypography>
      <StyledFormContainer>
        <RenderFormInputs
          formData={recoverPasswordFormData}
        />
      </StyledFormContainer>
      <StyledButton
        variant={'customText'}
        type={'submit'}
      >
        RECOVER PASSWORD
      </StyledButton>
      <StyledButton
        variant={'customText'}
        onClick={() => setAuthenticationOperation('logIn')}
      >
        BACK TO LOGIN
      </StyledButton>
    </StyledRecoverPasswordForm>
  )
}

RecoverPasswordForm.propTypes = {
  setAuthenticationOperation: PropTypes.func,
  onSubmit: PropTypes.func
}

export default RecoverPasswordForm
