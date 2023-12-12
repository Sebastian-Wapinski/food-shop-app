import React from 'react'
import PropTypes from 'prop-types'

import { StyledRecoveryPasswordPage } from './RecoveryPasswordPage.styled'
import { FormProvider, useForm } from 'react-hook-form'
import RecoverPasswordForm from '../../components/RecoverPasswordForm/RecoverPasswordForm'
import { useAuthFunc } from '../../contexts/AuthFuncContext'

export const RecoveryPasswordPage = (props) => {
  const {
    setAuthenticationOperation,
    setShowLogInMenu
  } = props

  const methods = useForm()
  const { handleSubmit } = methods

  const { onClickRecover } = useAuthFunc()

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
  setShowLogInMenu: PropTypes.func
}

export default RecoveryPasswordPage
