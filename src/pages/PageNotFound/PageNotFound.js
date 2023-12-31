import React from 'react'

import { StyledPageNotFound, StyledParagraph, StyledButton } from './PageNotFound.styled'
import { useNavigate } from 'react-router'
import { Helmet } from 'react-helmet-async'

export const PageNotFound = () => {
  const navigate = useNavigate()

  return (
    <StyledPageNotFound>
      <Helmet>
        <title>Page Not Found</title>
        <meta
          name={'Page Not Found'}
          content={'Page Not Found'}
        />
      </Helmet>
      <StyledParagraph
        variant={'h1'}
      >
        PAGE NOT FOUND
      </StyledParagraph>
      <StyledButton
        variant={'customText'}
        onClick={() => {
          navigate('/')
        }}
      >
        GO HOME PAGE
      </StyledButton>
    </StyledPageNotFound>
  )
}

export default PageNotFound
