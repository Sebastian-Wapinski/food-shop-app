import React from 'react'

import { StyledApp } from './App.styled'
import { Route, Routes } from 'react-router-dom'

import PageNotFound from '../../pages/PageNotFound/PageNotFound'
import HomePage from '../../pages/HomePage/HomePage'

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
          />
          <Route
            path={'/:allProductsFromCategory'}
            element={<AllProductsFromCategoryPage />}
          />
          <Route
            path={'/:allProductsFromCategory/:particularCategoryProducts'}
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
