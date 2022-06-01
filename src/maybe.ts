enum Statuses {
  left = 'left',
  right = 'right'
}

interface Left<T> {
  status: Statuses.left;
  value: T;
}

interface Right<T> {
  status: Statuses.right;
  value: T;
}

export type Either<A, B> = Left<A> | Right<B>;
export type Maybe<T> = Either<Error, T>;

export const Left = <T>(value: T): Left<T> => ({
  status: Statuses.left,
  value,
});

export const Right = <T>(value: T): Right<T> => ({
  status: Statuses.right,
  value,
});

export const isLeft = <A, B>(value: Either<A, B>): value is Left<A> => (value as Left<A>).status === Statuses.left;
export const isRight = <A, B>(value: Either<A, B>): value is Right<B> => (value as Right<B>).status === Statuses.right;
