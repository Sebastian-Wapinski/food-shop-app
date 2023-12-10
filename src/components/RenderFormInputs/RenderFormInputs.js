import React from 'react'
import PropTypes from 'prop-types'

import { StyledRenderFormInputs, StyledLabel, StyledInput, StyledInputContainer } from './RenderFormInputs.styled'

import { useFormContext } from 'react-hook-form'

export const RenderFormInputs = (props) => {
  const {
    formData
  } = props

  const methods = useFormContext()
  const { register, formState: { errors } } = methods

  return (
    <StyledRenderFormInputs>
      {
        formData.map(input => {
          const { label, id, validationParams, isRequired, placeholder, type = 'text' } = input
          return (
            <StyledInputContainer key={id}>
              <StyledLabel
                htmlFor={id}
                isRequired={isRequired}
              >
                {label}
              </StyledLabel>
              <StyledInput
                autoComplete={'one-time-code'}
                type={type}
                id={id}
                errors={errors}
                placeholder={placeholder}
                {...register(id, { ...validationParams })}
              />
            </StyledInputContainer>
          )
        })
      }
    </StyledRenderFormInputs>
  )
}

RenderFormInputs.propTypes = {
  formData: PropTypes.array
}

export default RenderFormInputs
