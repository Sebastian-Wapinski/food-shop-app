import React from 'react'

import { StyledApp } from './App.styled'
import { Route, Routes } from 'react-router-dom'

import PageNotFound from '../../pages/PageNotFound/PageNotFound'
import HomePage from '../../pages/HomePage/HomePage'
import ProductsPage from '../../pages/ProductsPage/ProductsPage'
import CartPage from '../../pages/CartPage/CartPage'
import PaymentStatusPage from '../../pages/PaymentStatusPage/PaymentStatusPage'

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
          {/* <Route
            path={'/favorites'}
            element={<FavoritesPage />}
          />
          <Route
            path={'/LogInFavorites'}
            element={<LogInFavoritesPage />}
          /> */}
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
          {/* <Route
            path={'/products/:allProductsFromCategory/:particularCategoryProducts'}
            element={<ParticularCategoryProductsPage />}
          /> */}
          <Route
            path={'*'}
            element={<PageNotFound />}
          />
        </Route>
        {/* <Route
            path={'/:product'}
            element={<ProductPage />}
          /> */}
      </Routes>
    </StyledApp>
  )
}

export default App
