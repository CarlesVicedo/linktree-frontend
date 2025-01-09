import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from '../Header'
import '@testing-library/jest-dom'

jest.mock('../nav/AdminNavigation', () => () => <div>Admin Navigation</div>)
jest.mock('../nav/HomeNavigation', () => () => <div>Home Navigation</div>)
jest.mock('../Logo', () => () => <div>Logo</div>)

describe('Header', () => {
    it('renders Logo component', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Header />
            </MemoryRouter>
        )
        expect(screen.getByText('Logo')).toBeInTheDocument()
    })

    it('renders HomeNavigation when on home route', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Header />
            </MemoryRouter>
        )
        expect(screen.getByText('Home Navigation')).toBeInTheDocument()
    })

    it('renders AdminNavigation when not on home route', () => {
        render(
            <MemoryRouter initialEntries={['/admin']}>
                <Header />
            </MemoryRouter>
        )
        expect(screen.getByText('Admin Navigation')).toBeInTheDocument()
    })
})