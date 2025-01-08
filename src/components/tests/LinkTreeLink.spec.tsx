import { render, screen } from '@testing-library/react'
import LinkTreeLink from '../LinkTreeLink'
import '@testing-library/jest-dom'
import { SocialNetwork } from '../../types'

const mockLink: SocialNetwork = {
    id: 1,
    name: 'facebook',
    url: 'https://facebook.com',
    enabled: true,
}

describe('LinkTreeLink', () => {
    it('renders link with correct name', () => {
        render(<LinkTreeLink link={mockLink} />)
        expect(screen.getByText('Visit my:')).toBeInTheDocument()
        expect(screen.getByText('facebook')).toBeInTheDocument()
    })

    it('renders link with correct background image', () => {
        render(<LinkTreeLink link={mockLink} />)
        const backgroundImageDiv = screen.getByTestId('link-tree-link-image')
        expect(backgroundImageDiv).toHaveStyle(`background-image: url('/social/icon_facebook.svg')`)
    })
})