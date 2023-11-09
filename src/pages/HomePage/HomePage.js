import React from 'react'
import PropTypes from 'prop-types'

import { StyledHomePage } from './HomePage.styled'

export const HomePage = (props) => {
  const {
    children,
    ...otherProps
  } = props

  return (
    <StyledHomePage
      {...otherProps}
    >
      Home
    </StyledHomePage>
  )
}

HomePage.propTypes = {
  children: PropTypes.node
}

export default HomePage
