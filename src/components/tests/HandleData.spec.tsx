import { render, screen } from '@testing-library/react'
import HandleData from '../HandleData'
import '@testing-library/jest-dom'
import { UserHandle } from '../../types'

const mockData: UserHandle = {
    name: 'name',
    handle: 'testhandle',
    image: 'https://example.com/image.jpg',
    description: 'This is a test description',
    links: JSON.stringify([
        { name: 'facebook', url: 'https://facebook.com', enabled: true },
        { name: 'twitter', url: 'https://twitter.com', enabled: false },
        { name: 'instagram', url: 'https://instagram.com', enabled: true },
    ]),
}

describe('HandleData', () => {
    it('renders handle, image, and description correctly', () => {
        render(<HandleData data={mockData} />)
        expect(screen.getByText('testhandle')).toBeInTheDocument()
        expect(screen.getByAltText('testhandle')).toBeInTheDocument()
        expect(screen.getByText('This is a test description')).toBeInTheDocument()
    })

    it('renders enabled links correctly', () => {
        render(<HandleData data={mockData} />)
        expect(screen.getByText('Visit my: facebook')).toBeInTheDocument()
        expect(screen.getByText('Visit my: instagram')).toBeInTheDocument()
        expect(screen.queryByText('Visit my: twitter')).not.toBeInTheDocument()
    })

    it('renders message when no links are enabled', () => {
        const noLinksData = { ...mockData, links: JSON.stringify([]) }
        render(<HandleData data={noLinksData} />)
        expect(screen.getByText('There is no links in this profile')).toBeInTheDocument()
    })
})