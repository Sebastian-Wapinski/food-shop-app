import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import App from './components/App/App'

import { ThemeProvider } from 'styled-components'
import theme from './components/style/theme'
import ResetStyle from './components/style/Reset'

import { Provider } from 'react-redux'
import { store } from './store'

import { BrowserRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import UserContextProvider from './contexts/UserContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <ResetStyle />
            <UserContextProvider>
              <App />
            </UserContextProvider>
          </ThemeProvider>
        </Provider>
      </Router>
    </HelmetProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
