import React from 'react'

import { StyledFavoritesPage, StyledTitle } from './FavoritesPage.styled'
import { Helmet } from 'react-helmet-async'

export const FavoritesPage = () => {
  return (
    <StyledFavoritesPage>
      <Helmet>
        <title>Favorites</title>
        <meta
          name={'Favorites'}
          content={'Favorites products'}
        />
      </Helmet>
      <StyledTitle
        variant={'h2'}
      >
        Favorites in progress
      </StyledTitle>
    </StyledFavoritesPage>
  )
}

export default FavoritesPage
