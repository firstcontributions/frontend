import { getCompactNumber } from './formatNumber'

describe('formatNumber', () => {
  describe('getCompactNumber', () => {
    it('should return compact number', () => {
      expect(getCompactNumber(1000)).toBe('1K')
    })
    it('should return compact number', () => {
      expect(getCompactNumber(1000 * 1000)).toBe('1M')
    })
    it('should return compact number', () => {
      expect(getCompactNumber(1729)).toBe('1.7K')
    })
    it('should return compact number', () => {
      expect(getCompactNumber(1000 * 1000 + 2000)).toBe('1M')
    })
  })
})
