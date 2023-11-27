import React from 'react'

import { StyledRenderInputs, StyledLabel, StyledInput, StyledInputContainer } from './RenderInputs.styled'

import { useFormContext } from 'react-hook-form'
import { formCreationData } from '../../data/formCreationData'

export const RenderInputs = () => {
  const methods = useFormContext()
  const { register, formState: { errors } } = methods

  return (
    <StyledRenderInputs>
      {
        formCreationData.map(input => {
          const { label, id, validationParams, isRequired, placeholder } = input
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
                type={'text'}
                id={id}
                errors={errors}
                placeholder={placeholder}
                {...register(id, { ...validationParams })}
              />
            </StyledInputContainer>
          )
        })
      }
    </StyledRenderInputs>
  )
}

export default RenderInputs
