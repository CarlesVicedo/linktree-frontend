import { isValidUrl } from './index'

describe('isValidUrl', () => {
    it('returns true for valid URLs', () => {
        expect(isValidUrl('https://www.example.com')).toBe(true)
        expect(isValidUrl('http://example.com')).toBe(true)
        expect(isValidUrl('https://sub.example.com')).toBe(true)
        expect(isValidUrl('https://example.com/path?query=param')).toBe(true)
    })

    it('returns false for invalid URLs', () => {
        expect(isValidUrl('invalid-url')).toBe(false)
        expect(isValidUrl('htp://invalid-url')).toBe(false)
        expect(isValidUrl('')).toBe(false)
        expect(isValidUrl('http://')).toBe(false)
    })
})