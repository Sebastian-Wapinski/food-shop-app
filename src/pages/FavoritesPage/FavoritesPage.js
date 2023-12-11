import React from 'react'
import PropTypes from 'prop-types'

import { StyledFavoritesPage } from './FavoritesPage.styled'

export const FavoritesPage = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <StyledFavoritesPage
      {...otherProps}
    >
      Page In Progress
    </StyledFavoritesPage>
  )
}

FavoritesPage.propTypes = {
  children: PropTypes.node
}

export default FavoritesPage
