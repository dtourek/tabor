import { pipe } from "../pipe";

const addTwo = (a: number): number => a + 2

describe('pipe', () => {
  it('should return first value of first argument', () => {
    expect(pipe(1)).toEqual(1)
    expect(pipe(0)).toEqual(0)
    expect(pipe('')).toEqual('')
    expect(pipe(null)).toEqual(null)
    expect(pipe(undefined)).toEqual(undefined)
  })

  it('should return correct value', () => {
    const isOk = (value) => {
      if (!value) {
        return 'NOT OK!'
      }
      return 'OK!'
    }

    expect(pipe(false, isOk)).toEqual('NOT OK!')
    expect(pipe(true, isOk)).toEqual('OK!')
  })

  it('should return sum of numbers', () => {
    expect(pipe(5, addTwo, addTwo)).toEqual(9)
  })

  it('should change result types', () => {
    const result = pipe(1, (v) => `${v}`)
    expect(typeof result).toEqual('string')
    expect(result).toEqual('1')
  })
})

