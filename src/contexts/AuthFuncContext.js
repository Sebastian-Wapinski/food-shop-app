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
  message: '',
  isInfoDisplayed: false,
  setIsLoading: errorProviderNotFound,
  setHasError: errorProviderNotFound,
  setIsInfoDisplayed: errorProviderNotFound,
  setMessage: errorProviderNotFound,
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
  const [isInfoDisplayed, setIsInfoDisplayed] = React.useState(initialContextState.isInfoDisplayed)
  const [message, setMessage] = React.useState(initialContextState.message)

  const handleAsyncAction = React.useCallback(async (asyncAction) => {
    setIsLoading(() => true)
    try {
      await asyncAction()
    } catch (error) {
      setHasError(() => true)
      if (error.message || error.data.error.message === 'EMAIL_EXISTS') {
        setMessage(() => 'Try another email - this email exists')
      } else if (error.message || error.data.error.message === 'INVALID_LOGIN_CREDENTIALS') {
        setMessage(() => 'Wrong Email or Password')
      } else {
        setMessage(() => error.message || error.data.error.message)
      }
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
      setMessage(() => 'User account created. User is logged in')
      await getUserData()
    })
  }, [getUserData, handleAsyncAction])

  const onClickRecover = React.useCallback(async (email) => {
    handleAsyncAction(async () => {
      await sendPasswordResetEmail(email)
      setIsInfoDisplayed(() => true)
      setMessage(() => 'Check Your inbox!')
    })
  }, [handleAsyncAction])

  const onClickLogout = React.useCallback(async () => {
    await Promise.all([
      signOutWithFirebaseSDK(),
      logOut()
    ])
    clearUser()
  }, [clearUser])

  const dismissError = React.useCallback(() => {
    setHasError(() => false)
    setMessage(() => '')
  }, [setMessage, setHasError])

  const dismissMessage = React.useCallback(() => {
    setIsInfoDisplayed(() => false)
    setMessage(() => '')
  }, [setMessage, setIsInfoDisplayed])

  return (
    <AuthFuncContext.Provider
      value={
        {
          isLoading,
          hasError,
          message,
          isInfoDisplayed,
          setIsLoading,
          setHasError,
          setMessage,
          setIsInfoDisplayed,
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
