import {head, tail} from "../array";

describe('array', () => {
  describe('head', () => {
    it('should return undefined when empty array', () => {
      expect(head([])).toEqual(undefined)
    })

    it('should return first element successfully', () => {
      expect(head([1])).toEqual(1)
      expect(head([3,5])).toEqual(3)
      expect(head(['x','a'])).toEqual('x')
      expect(head([[],['v']])).toEqual([])
      expect(head([{ a:1 }, { a: 2 }])).toEqual({ a:1 })
    })
  })

  describe('tail', () => {
    it('should return undefined when empty array', () => {
      expect(tail([])).toEqual(undefined)
    })

    it('should return last element', () => {
      expect(tail(['a'])).toEqual('a')
      expect(tail([1,5])).toEqual(5)
      expect(tail([[], ['x']])).toEqual(['x'])
    })
  })
})
