import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Label } from './Label' // Adjust the import path based on your project structure

it('renders label with provided children', () => {
  render(<Label>Test Label</Label>)
  const labelElement = screen.getByText('Test Label')
  expect(labelElement).toBeInTheDocument()
})

it('renders label with required attribute when isRequired is true', () => {
  render(<Label isRequired>Required Label</Label>)
  const labelElement = screen.getByText('Required Label')
  expect(labelElement).toHaveAttribute('required')
})

it('associates label with input using htmlFor prop', () => {
  render(<Label htmlFor={'testInput'}>Label For Input</Label>)
  const labelElement = screen.getByText('Label For Input')
  expect(labelElement).toHaveAttribute('for', 'testInput')
})

it('applies given className to the label', () => {
  const testClassName = 'test-class'
  render(<Label className={testClassName}>Label With Class</Label>)
  const labelElement = screen.getByText('Label With Class')
  expect(labelElement).toHaveClass(testClassName)
})
