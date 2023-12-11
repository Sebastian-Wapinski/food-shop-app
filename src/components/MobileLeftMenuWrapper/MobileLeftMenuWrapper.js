import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledDarkOverlay,
  StyledMenuBackground
} from './MobileLeftMenuWrapper.styled'

export const MobileLeftMenuWrapper = (props) => {
  const {
    children,
    showWrapper,
    setShowWrapper
  } = props

  return (
    showWrapper ?
      <>
        <StyledDarkOverlay
          $showWrapper={showWrapper}
          onClick={() => {
            setShowWrapper(false)
          }}
        />
        <StyledMenuBackground
          $showWrapper={showWrapper}
        >
          {children}
        </StyledMenuBackground>
      </>
      :
      <>
        <StyledDarkOverlay
          $showWrapper={showWrapper}
          onClick={() => {
            setShowWrapper(false)
          }}
        />
        <StyledMenuBackground
          $showWrapper={showWrapper}
        />
      </>
  )
}

MobileLeftMenuWrapper.propTypes = {
  children: PropTypes.node,
  showWrapper: PropTypes.bool,
  setShowWrapper: PropTypes.func
}

export default MobileLeftMenuWrapper
