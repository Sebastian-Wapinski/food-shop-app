import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledMessagePage,
  StyledTypography,
  StyledButton,
  StyledFontAwesomeIcon,
  StyledMessageContainer,
  StyledDarkOverlay
} from './MessagePage.styled'
import { faCircleExclamation, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

export const MessagePage = (props) => {
  const {
    buttonLabel = 'GO BACK',
    message,
    iconVariant = 'info',
    dismissInfo
  } = props

  return (
    <StyledMessagePage>
      <StyledDarkOverlay
        onClick={() => dismissInfo()}
      />
      <StyledMessageContainer>
        {
          iconVariant === 'info' ?
            <StyledFontAwesomeIcon icon={faCircleInfo}/>
            :
            iconVariant === 'error' ?
              <StyledFontAwesomeIcon icon={faCircleExclamation}/>
              :
              null
        }
        <StyledTypography
          variant={'body1'}
        >
          {message}
        </StyledTypography>
        <StyledButton
          variant={'customText'}
          onClick={() => dismissInfo()}
        >
          {buttonLabel}
        </StyledButton>
      </StyledMessageContainer>
    </StyledMessagePage>
  )
}

MessagePage.propTypes = {
  buttonLabel: PropTypes.string,
  message: PropTypes.string.isRequired,
  iconVariant: PropTypes.oneOf(['error', 'info']),
  dismissInfo: PropTypes.func.isRequired
}

export default MessagePage
