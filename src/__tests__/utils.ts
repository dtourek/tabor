import {isNull} from "../utils";

describe('utils', () => {
  describe('isNull', () => {
    it('should return false', () => {
      expect(isNull('')).toEqual(false)
      expect(isNull('a')).toEqual(false)
      expect(isNull('0')).toEqual(false)
      expect(isNull(0)).toEqual(false)
      expect(isNull([])).toEqual(false)
      expect(isNull({})).toEqual(false)
      expect(isNull(undefined)).toEqual(false)
      expect(isNull(NaN)).toEqual(false)
    })

    it('should return true', () => {
      expect(isNull(null)).toEqual(true)
    })
  })
})
