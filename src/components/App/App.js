import React from 'react'

import { StyledApp } from './App.styled'
import { Route, Routes } from 'react-router-dom'

import PageNotFound from '../../pages/PageNotFound/PageNotFound'
import HomePage from '../../pages/HomePage/HomePage'
import ProductsPage from '../../pages/ProductsPage/ProductsPage'

export const App = () => {
  return (
    <StyledApp>
      <Routes>
        <Route
          path={'/'}
          element={<HomePage />}
        >
          {/* <Route
            path={'/basket'}
            element={<BasketPage />}
          />
          <Route
            path={'/favorites'}
            element={<FavoritesPage />}
          />
          <Route
            path={'/LogInFavorites'}
            element={<LogInFavoritesPage />}
          /> */}
          <Route
            path={'/products'}
            element={<ProductsPage />}
          />
          <Route
            path={'/products/:allProductsFromCategory'}
            element={<ProductsPage />}
          />
          <Route
            path={'/products/:allProductsFromCategory/:particularCategoryProducts'}
            element={<ProductsPage />}
          />
          {/* <Route
            path={'/products/:allProductsFromCategory/:particularCategoryProducts'}
            element={<ParticularCategoryProductsPage />}
          /> */}
        </Route>
        {/* <Route
            path={'/:product'}
            element={<ProductPage />}
          /> */}
        <Route
          path={'*'}
          element={<PageNotFound />}
        />
      </Routes>
    </StyledApp>
  )
}

export default App
