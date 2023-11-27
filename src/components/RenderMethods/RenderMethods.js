import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledRenderMethods,
  RadioContainer,
  StyledInput,
  StyledLabel
} from './RenderMethods.styled'

export const RenderMethods = (props) => {
  const {
    data,
    methodsName,
    checkedId,
    setChecked
  } = props

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
                onClick={() => setChecked(id)}
              />
              <StyledLabel
                htmlFor={id}
                onClick={() => setChecked(id)}
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
  setChecked: PropTypes.func
}

export default RenderMethods
