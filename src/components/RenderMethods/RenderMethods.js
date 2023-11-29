import React from 'react'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'

import {
  StyledRenderMethods,
  RadioContainer,
  StyledInput,
  StyledLabel,
  StyledErrorsMessage
} from './RenderMethods.styled'
import { actionChangeProductQuantity } from '../../modules/Cart/Cart.actions'

export const RenderMethods = (props) => {
  const {
    data,
    methodsName,
    checkedId,
    action,
    errorMessage
  } = props

  const dispatch = useDispatch()

  return (
    <StyledRenderMethods>
      {
        data.map(method => {
          const { id, labelName, value } = method
          return (
            <RadioContainer
              key={`RenderMethods/${id}`}
            >
              <StyledInput
                type={'radio'}
                name={methodsName}
                id={id}
                value={value}
                checked={id === checkedId}
                onChange={() => {
                  dispatch(action(method))
                  dispatch(actionChangeProductQuantity())
                }}
              />
              <StyledLabel
                htmlFor={id}
                variant={'radio'}
              >
                {labelName}
              </StyledLabel>
            </RadioContainer>
          )
        })
      }
      {
          errorMessage && <StyledErrorsMessage variant={'errorMessageForm'}>{errorMessage}</StyledErrorsMessage>
      }
    </StyledRenderMethods>
  )
}

RenderMethods.propTypes = {
  data: PropTypes.array,
  methodsName: PropTypes.string,
  checkedId: PropTypes.string,
  action: PropTypes.func,
  errorMessage: PropTypes.string
}

export default RenderMethods
