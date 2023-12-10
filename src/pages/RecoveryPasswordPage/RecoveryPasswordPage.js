import React from 'react'
import PropTypes from 'prop-types'

import { StyledRecoveryPasswordPage } from './RecoveryPasswordPage.styled'
import { FormProvider, useForm } from 'react-hook-form'
import RecoverPasswordForm from '../../components/RecoverPasswordForm/RecoverPasswordForm'

export const RecoveryPasswordPage = (props) => {
  const {
    setAuthenticationOperation,
    onClickRecover,
    setShowLogInMenu
  } = props

  const methods = useForm()
  const { handleSubmit } = methods

  return (
    <StyledRecoveryPasswordPage >
      <FormProvider
        {...methods}
      >
        <RecoverPasswordForm
          onSubmit={handleSubmit((data) => {
            onClickRecover(data.recoverEmail)
            setShowLogInMenu(false)
          })}
          setAuthenticationOperation={setAuthenticationOperation}
          setShowLogInMenu={setShowLogInMenu}
        />
      </FormProvider>
    </StyledRecoveryPasswordPage>
  )
}

RecoveryPasswordPage.propTypes = {
  setAuthenticationOperation: PropTypes.func,
  setShowLogInMenu: PropTypes.func,
  onClickRecover: PropTypes.func
}

export default RecoveryPasswordPage
