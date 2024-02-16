import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Input } from './Input' // Adjust the import path based on your project structure

it('renders input and displays provided placeholder', () => {
  render(<Input placeholder={'Test Placeholder'} />)
  const inputElement = screen.getByPlaceholderText('Test Placeholder')
  expect(inputElement).toBeInTheDocument()
})

it('calls onChange handler when input changes', () => {
  const handleChange = jest.fn()
  render(<Input onChange={handleChange} />)
  const inputElement = screen.getByRole('textbox')
  fireEvent.change(inputElement, { target: { value: 'Hello World' } })
  expect(handleChange).toHaveBeenCalledTimes(1)
})

it('displays error message when errors are provided', () => {
  const errors = { 'input-id': { message: 'Error message' } }
  render(<Input
    id={'input-id'}
    errors={errors}
         />)
  const errorMessage = screen.getByText('Error message')
  expect(errorMessage).toBeInTheDocument()
})

it('forwards ref to the input element', () => {
  const ref = React.createRef()
  render(<Input ref={ref} />)
  expect(ref.current).toBeInstanceOf(HTMLInputElement)
})
