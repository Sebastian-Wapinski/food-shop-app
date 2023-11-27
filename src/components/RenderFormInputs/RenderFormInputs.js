import React from 'react'

import { StyledRenderFormInputs, StyledLabel, StyledInput, StyledInputContainer } from './RenderFormInputs.styled'

import { useFormContext } from 'react-hook-form'
import { formCreationData } from '../../data/formCreationData'

export const RenderFormInputs = () => {
  const methods = useFormContext()
  const { register, formState: { errors } } = methods

  return (
    <StyledRenderFormInputs>
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
    </StyledRenderFormInputs>
  )
}

export default RenderFormInputs
