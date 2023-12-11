import React from 'react'

import { StyledApp } from './App.styled'
import { Route, Routes } from 'react-router-dom'

import PageNotFound from '../../pages/PageNotFound/PageNotFound'
import HomePage from '../../pages/HomePage/HomePage'
import ProductsPage from '../../pages/ProductsPage/ProductsPage'
import CartPage from '../../pages/CartPage/CartPage'
import PaymentStatusPage from '../../pages/PaymentStatusPage/PaymentStatusPage'
import AboutUs from '../../pages/AboutUs/AboutUs'
import OrdersPage from '../../pages/OrdersPage/OrdersPage'
import FavoritesPage from '../../pages/FavoritesPage/FavoritesPage'

export const App = () => {
  return (
    <StyledApp>
      <Routes>
        <Route
          path={'/'}
          element={<HomePage />}
        >
          <Route
            path={'/cart'}
            element={<CartPage />}
          />
          <Route
            path={'/cart/:paymentStatus'}
            element={<PaymentStatusPage />}
          />
          <Route
            path={'/favorites'}
            element={<FavoritesPage />}
          />
          <Route
            path={'/products/page/:pageNumAllProducts'}
            element={<ProductsPage />}
          />
          <Route
            path={'/products/:allProductsFromCategory/page/:pageNumFromCategory'}
            element={<ProductsPage />}
          />
          <Route
            path={'/products/:allProductsFromCategory/:particularCategoryProducts/page/:pageNumParticularCategory'}
            element={<ProductsPage />}
          />
          <Route
            path={'/cart/:paymentStatus'}
            element={<PaymentStatusPage />}
          />
          <Route
            path={'/about us'}
            element={<AboutUs />}
          />
          <Route
            path={'/profile/orders'}
            element={<OrdersPage />}
          />
        </Route>
        <Route
          path={'/'}
          element={<HomePage />}
        >
          <Route
            path={'*'}
            element={<PageNotFound />}
          />
        </Route>
      </Routes>
    </StyledApp>
  )
}

export default App
