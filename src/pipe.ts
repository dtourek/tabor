type Pipe = {
  <T>(init: T): T;
  <T, A>(init: T, a: (prevValue: T) => A ): A
  <T, A, B>(init: T, a: (prevValue: T) => A, b: (prevValue: A) => B): B
  <T, A, B, C>(init: T, a: (prevValue: T) => A, b: (prevValue: A) => B, c: (prevValue: B) => C): C
  <T, A, B, C, D>(init: T, a: (prevValue: T) => A, b: (prevValue: A) => B, c: (prevValue: B) => C, d: (prevValue: C) => D): D
  <T, A, B, C, D, E>(init: T, a: (prevValue: T) => A, b: (prevValue: A) => B, c: (prevValue: B) => C, d: (prevValue: C) => D, e: (prevValue: D) => E): E
  <T, A, B, C, D, E, F>(init: T, a: (prevValue: T) => A, b: (prevValue: A) => B, c: (prevValue: B) => C, d: (prevValue: C) => D, e: (prevValue: D) => E, f: (prevValue: E) => F): F
  <T, A, B, C, D, E, F, G>(init: T, a: (prevValue: T) => A, b: (prevValue: A) => B, c: (prevValue: B) => C, d: (prevValue: C) => D, e: (prevValue: D) => E, f: (prevValue: E) => F, g: (prevValue: F) => G): G
  <T, A, B, C, D, E, F, G, H>(init: T, a: (prevValue: T) => A, b: (prevValue: A) => B, c: (prevValue: B) => C, d: (prevValue: C) => D, e: (prevValue: D) => E, f: (prevValue: E) => F, g: (prevValue: F) => G, h: (prevValue: G) => H): H
  <T, A, B, C, D, E, F, G, H, I>(init: T, a: (prevValue: T) => A, b: (prevValue: A) => B, c: (prevValue: B) => C, d: (prevValue: C) => D, e: (prevValue: D) => E, f: (prevValue: E) => F, g: (prevValue: F) => G, h: (prevValue: G) => H, i: (prevValue: H) => I): I
  <T, A, B, C, D, E, F, G, H, I, J>(init: T, a: (prevValue: T) => A, b: (prevValue: A) => B, c: (prevValue: B) => C, d: (prevValue: C) => D, e: (prevValue: D) => E, f: (prevValue: E) => F, g: (prevValue: F) => G, h: (prevValue: G) => H, i: (prevValue: H) => I, j: (prevValue: I) => J): J
}

/**
 * Function which pipes functions together
 */
export const pipe: Pipe = (init, ...fns) => fns.reduce((acc: Function, curr: Function) => curr(acc), init);
