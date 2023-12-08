import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { STORE_NAME } from './consts'

import cartReducer from './modules/Cart/Cart.reducer'
import cacheFirebaseDataReducer from './modules/CacheFirebaseData/CacheFirebaseData.reducer'

const reducers = combineReducers({
  cart: cartReducer,
  cacheFirebaseData: cacheFirebaseDataReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const preloadedState = JSON.parse(localStorage.getItem(STORE_NAME)) || undefined

export const store = createStore(
  reducers,
  preloadedState,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem(STORE_NAME, JSON.stringify(state))
})
