import React from 'react'
import PropTypes from 'prop-types'

import { useNavigate } from 'react-router-dom'

import { StyledButtonsChangingPages, StyledButton, StyledPagesInfo } from './ButtonsChangingPages.styled'

export const ButtonsChangingPages = (props) => {
  const {
    currentPageNumber,
    allPages,
    path
  } = props

  const navigate = useNavigate()

  const setPrevPage = () => {
    if (currentPageNumber > 1) {
      const newPageNumber = currentPageNumber - 1
      navigate(`${path}/${newPageNumber}`)
    }
  }

  const setNextPage = () => {
    if (currentPageNumber < allPages) {
      const newPageNumber = currentPageNumber + 1
      navigate(`${path}/${newPageNumber}`)
    }
  }

  return (
    <StyledButtonsChangingPages>
      <StyledButton
        onClick={setPrevPage}
        disabled={(currentPageNumber === 1)}
        data-testid={'prevButton/ButtonsChangingPages'}
      >
        &lsaquo;
      </StyledButton>
      <StyledPagesInfo>{currentPageNumber}/{allPages}</StyledPagesInfo>
      <StyledButton
        onClick={setNextPage}
        disabled={(currentPageNumber === allPages)}
        data-testid={'nextButton/ButtonsChangingPages'}
      >
        &rsaquo;
      </StyledButton>
    </StyledButtonsChangingPages>
  )
}

ButtonsChangingPages.propTypes = {
  currentPageNumber: PropTypes.number,
  allPages: PropTypes.number,
  path: PropTypes.string
}

export default ButtonsChangingPages
