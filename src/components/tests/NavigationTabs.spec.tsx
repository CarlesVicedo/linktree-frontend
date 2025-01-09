import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter, useNavigate } from 'react-router-dom'
import NavigationTabs from '../NavigationTabs'
import '@testing-library/jest-dom'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: jest.fn(),
    useNavigate: jest.fn(),
}))

describe('NavigationTabs', () => {
    it('navigates to the correct tab on select change', () => {
        const mockNavigate: jest.Mock = jest.fn()
            ; (useNavigate as jest.Mock).mockReturnValue(mockNavigate)
        render(
            <MemoryRouter>
                <NavigationTabs />
            </MemoryRouter>
        )
        const select = screen.getByRole('combobox')
        fireEvent.change(select, { target: { value: '/admin/profile' } })
        expect(mockNavigate).toHaveBeenCalledWith('/admin/profile')
    })
})