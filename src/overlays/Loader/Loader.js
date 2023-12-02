import React from 'react'

import { StyledLoader } from './Loader.styled'
import Spinner from './Spinner'

export const Loader = () => {
  return (
    <StyledLoader>
      <Spinner />
    </StyledLoader>
  )
}

export default Loader
