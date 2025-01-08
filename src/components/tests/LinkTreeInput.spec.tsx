import { render, screen, fireEvent } from '@testing-library/react'
import LinkTreeInput from '../LinkTreeInput'
import '@testing-library/jest-dom'

const mockItem = {
    name: 'facebook',
    url: 'https://facebook.com',
    enabled: true,
}

const handleUrlChange = jest.fn()
const handleEnableLink = jest.fn()

describe('LinkTreeInput', () => {
    it('renders input with correct value', () => {
        render(
            <LinkTreeInput
                item={mockItem}
                handleUrlChange={handleUrlChange}
                handleEnableLink={handleEnableLink}
            />
        )
        const input = screen.getByRole('textbox')
        expect(input).toHaveValue('https://facebook.com')
    })

    it('calls handleUrlChange on input change', () => {
        render(
            <LinkTreeInput
                item={mockItem}
                handleUrlChange={handleUrlChange}
                handleEnableLink={handleEnableLink}
            />
        )
        const input = screen.getByRole('textbox')
        fireEvent.change(input, { target: { value: 'https://newurl.com' } })
        expect(handleUrlChange).toHaveBeenCalled()
    })

    it('calls handleEnableLink on switch toggle', () => {
        render(
            <LinkTreeInput
                item={mockItem}
                handleUrlChange={handleUrlChange}
                handleEnableLink={handleEnableLink}
            />
        )
        const switchElement = screen.getByRole('switch')
        fireEvent.click(switchElement)
        expect(handleEnableLink).toHaveBeenCalledWith('facebook')
    })
})