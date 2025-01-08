import { render, screen } from '@testing-library/react'
import ErrorMessage from '../ErrorMessage'
import '@testing-library/jest-dom'

describe('ErrorMessage', () => {
    it('renders correctly with given children', () => {
        render(<ErrorMessage>Test Error</ErrorMessage>)
        expect(screen.getByText('Test Error')).toBeInTheDocument()
    })

    it('applies correct class names', () => {
        render(<ErrorMessage>Test Error</ErrorMessage>)
        const errorMessage = screen.getByText('Test Error')
        expect(errorMessage).toHaveClass('bg-red-50 text-red-600 p-3 uppercase text-sm font-bold text-center')
    })
})