import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button } from './Button' // Adjust the import path based on your project structure

it('renders button with provided children', () => {
  render(<Button>Click me</Button>)
  const buttonElement = screen.getByText('Click me')
  expect(buttonElement).toBeInTheDocument()
})

it('calls onClick handler when button is clicked', () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick}>Click me</Button>)
  const buttonElement = screen.getByText('Click me')
  fireEvent.click(buttonElement)
  expect(handleClick).toHaveBeenCalledTimes(1)
})

it('applies provided className to the button', () => {
  render(<Button className={'custom-button'}>Click me</Button>)
  const buttonElement = screen.getByText('Click me')
  expect(buttonElement).toHaveClass('custom-button')
})

it('disables the button when isDisabled is true', () => {
  render(<Button isDisabled>Click me</Button>)
  const buttonElement = screen.getByText('Click me')
  expect(buttonElement).toBeDisabled()
})

it('renders button with provided children', () => {
  render(<Button>Click me</Button>)
  const buttonElement = screen.getByText('Click me')
  expect(buttonElement).toBeInTheDocument()
})
