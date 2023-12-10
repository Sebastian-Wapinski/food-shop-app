import React from 'react'
import PropTypes from 'prop-types'

const errorProviderNotFound = () => {
  console.error('UserContext provider not found!')
}

const initialContextState = {
  isUserLoggedIn: false,
  id: '',
  userEmail: '',
  setIsUserLoggedIn: errorProviderNotFound,
  clearUser: errorProviderNotFound,
  setUser: errorProviderNotFound
}

export const UserContext = React.createContext(initialContextState)

export const useAuthUser = () => {
  const authUserContextValue = React.useContext(UserContext)
  return authUserContextValue
}

const UserContextProvider = (props) => {
  const { children } = props

  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(initialContextState.isUserLoggedIn)
  const [userEmail, setUserEmail] = React.useState(initialContextState.userEmail)
  const [userId, setUserId] = React.useState(initialContextState.userId)

  const clearUser = React.useCallback(() => {
    setIsUserLoggedIn(() => false)
    setUserEmail(() => '')
    setUserId(() => '')
  }, [])

  const setUser = React.useCallback((user) => {
    setIsUserLoggedIn(() => true)
    if (typeof user.email !== 'undefined')setUserEmail(() => user.email)
    if (typeof user.id !== 'undefined')setUserId(() => user.id)
  }, [])

  return (
    <UserContext.Provider
      value={
        {
          isUserLoggedIn,
          setIsUserLoggedIn,
          userEmail,
          userId,
          clearUser,
          setUser
        }
    }
    >
      {children}
    </UserContext.Provider>
  )
}

UserContextProvider.propTypes = {
  children: PropTypes.node
}

export default UserContextProvider
