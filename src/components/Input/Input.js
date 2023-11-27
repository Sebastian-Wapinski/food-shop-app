import React from 'react'
import PropTypes from 'prop-types'

import { StyledInput, StyledErrorsMessage } from './Input.styled'

export const Input = React.forwardRef((props, ref) => {
  const {
    errors,
    id,
    autoComplete,
    type,
    placeholder,
    className,
    onBlur,
    onChange,
    name
  } = props

  return (
    <>
      <StyledInput
        ref={ref}
        id={id}
        autoComplete={autoComplete}
        type={type}
        placeholder={placeholder}
        className={className}
        onBlur={onBlur}
        onChange={onChange}
        name={name}
      />
      {
          errors[id] && <StyledErrorsMessage>{errors[id].message}</StyledErrorsMessage>
      }
    </>
  )
})

Input.displayName = 'Input'

Input.propTypes = {
  errors: PropTypes.object,
  id: PropTypes.string,
  autoComplete: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  name: PropTypes.string
}

export default Input
