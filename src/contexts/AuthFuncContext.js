import React from 'react'
import PropTypes from 'prop-types'
import { useAuthUser } from './UserContext'
import { signInWithFirebaseSDK, signOutWithFirebaseSDK } from '../firebaseConfig'
import { signIn, signUp, sendPasswordResetEmail, logOut, getUserData as getUserDataAPICall } from '../auth'

const errorProviderNotFound = () => {
  console.error('AuthFuncContext provider not found!')
}

const initialContextState = {
  isLoading: false,
  hasError: false,
  errorMessage: '',
  isInfoDisplayed: false,
  infoMessage: '',
  setIsLoading: errorProviderNotFound,
  setHasError: errorProviderNotFound,
  setErrorMessage: errorProviderNotFound,
  setIsInfoDisplayed: errorProviderNotFound,
  setInfoMessage: errorProviderNotFound,
  onClickLogin: errorProviderNotFound,
  onClickCreateAccount: errorProviderNotFound,
  onClickRecover: errorProviderNotFound,
  onClickLogout: errorProviderNotFound,
  getUserData: errorProviderNotFound,
  dismissError: errorProviderNotFound,
  dismissMessage: errorProviderNotFound
}

export const AuthFuncContext = React.createContext(initialContextState)

export const useAuthFunc = () => {
  const authFuncContextValue = React.useContext(AuthFuncContext)
  return authFuncContextValue
}

const AuthFuncContextProvider = (props) => {
  const { children } = props

  const {
    clearUser,
    setUser
  } = useAuthUser()

  const [isLoading, setIsLoading] = React.useState(initialContextState.isLoading)
  const [hasError, setHasError] = React.useState(initialContextState.hasError)
  const [errorMessage, setErrorMessage] = React.useState(initialContextState.errorMessage)
  const [isInfoDisplayed, setIsInfoDisplayed] = React.useState(initialContextState.isInfoDisplayed)
  const [infoMessage, setInfoMessage] = React.useState(initialContextState.infoMessage)

  const handleAsyncAction = React.useCallback(async (asyncAction) => {
    setIsLoading(() => true)
    try {
      await asyncAction()
    } catch (error) {
      setHasError(() => true)
      setErrorMessage(() => error.message || error.data.error.message)
    } finally {
      setIsLoading(() => false)
    }
  }, [])

  const getUserData = React.useCallback(async () => {
    const user = await getUserDataAPICall()

    setUser({
      id: user.localId,
      email: user.email
    })
  }, [setUser])

  const onClickLogin = React.useCallback(async (email, password) => {
    handleAsyncAction(async () => {
      await signIn(email, password)
      await Promise.all([
        signInWithFirebaseSDK(email, password),
        getUserData()
      ])
    })
  }, [getUserData, handleAsyncAction])

  const onClickCreateAccount = React.useCallback(async (createAccountEmail, createAccountRepeatPassword) => {
    handleAsyncAction(async () => {
      await signUp(createAccountEmail, createAccountRepeatPassword)
      setIsInfoDisplayed(() => true)
      setInfoMessage(() => 'User account created. User is logged in')
      await getUserData()
    })
  }, [getUserData, handleAsyncAction])

  const onClickRecover = React.useCallback(async (email) => {
    handleAsyncAction(async () => {
      await sendPasswordResetEmail(email)
      setIsInfoDisplayed(() => true)
      setInfoMessage(() => 'Check Your inbox!')
      await getUserData()
    })
  }, [getUserData, handleAsyncAction])

  const onClickLogout = React.useCallback(async () => {
    await Promise.all([
      signOutWithFirebaseSDK(),
      logOut()
    ])
    clearUser()
  }, [clearUser])

  const dismissError = React.useCallback(() => {
    setHasError(() => false)
    setErrorMessage(() => '')
  }, [setErrorMessage, setHasError])

  const dismissMessage = React.useCallback(() => {
    setIsInfoDisplayed(() => false)
    setInfoMessage(() => '')
  }, [setInfoMessage, setIsInfoDisplayed])

  return (
    <AuthFuncContext.Provider
      value={
        {
          isLoading,
          hasError,
          errorMessage,
          isInfoDisplayed,
          infoMessage,
          setIsLoading,
          setHasError,
          setErrorMessage,
          setIsInfoDisplayed,
          setInfoMessage,
          onClickLogin,
          onClickCreateAccount,
          onClickRecover,
          onClickLogout,
          getUserData,
          dismissError,
          dismissMessage
        }
    }
    >
      {children}
    </AuthFuncContext.Provider>
  )
}

AuthFuncContextProvider.propTypes = {
  children: PropTypes.node
}

export default AuthFuncContextProvider
