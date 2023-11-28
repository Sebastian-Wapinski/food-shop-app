import React from 'react'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'

import {
  StyledRenderMethods,
  RadioContainer,
  StyledInput,
  StyledLabel
} from './RenderMethods.styled'
import { actionChangeProductQuantity } from '../../modules/Cart/Cart.actions'

export const RenderMethods = (props) => {
  const {
    data,
    methodsName,
    checkedId,
    action
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
              >
                {labelName}
              </StyledLabel>
            </RadioContainer>
          )
        })
      }
    </StyledRenderMethods>
  )
}

RenderMethods.propTypes = {
  data: PropTypes.array,
  methodsName: PropTypes.string,
  checkedId: PropTypes.string,
  action: PropTypes.func
}

export default RenderMethods
