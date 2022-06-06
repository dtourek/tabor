import {isNumber, toNumber} from "../number";

describe('number', () => {
  describe('isNumber', () => {
    it('should return false', () => {
      expect(isNumber('x')).toEqual(false)
      expect(isNumber('1')).toEqual(false)
      expect(isNumber(null)).toEqual(false)
      expect(isNumber(undefined)).toEqual(false)
      expect(isNumber([])).toEqual(false)
      expect(isNumber({})).toEqual(false)
    })

    it('should return true on zero', () => {
      expect(isNumber(0)).toEqual(true)
    })


    it('should return false on Infinity', () => {
      expect(isNumber(Infinity)).toEqual(false)
    })

    it('should return false on BigInt', () => {
      expect(isNumber(BigInt(9007199254740991))).toEqual(false)
    })

    it('should return false on NaN', () => {
      expect(isNumber(NaN)).toEqual(false)
    })

    it('should return true on int value', () => {
      expect(isNumber(6)).toEqual(true)
    })

    it('should return true on float value', () => {
      expect(isNumber(0.5)).toEqual(true)
    })

    it('should return true on Hexadecimal', () => {
      expect(isNumber(0xFF)).toEqual(true)
    })
  })

  describe('toNumber', () => {
    it('should return undefined', () => {
      expect(toNumber(undefined)).toEqual(undefined)
      expect(toNumber(null)).toEqual(undefined)
    })

    it('should return 0', () => {
      expect(toNumber('0')).toEqual(0)
    })

    it('should return int value', () => {
      expect(toNumber('10')).toEqual(10)
    })

    it('should return x value', () => {
      expect(toNumber(NaN)).toEqual(undefined)
      expect(toNumber(Infinity)).toEqual(undefined)
      expect(toNumber(BigInt(123464651321321))).toEqual(undefined)
    })

  })
})
