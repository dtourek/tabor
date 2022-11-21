import { IEither } from "./either";

enum Statuses {
  fail = 'fail',
  success = 'success'
}

export interface IFail<T> {
  status: Statuses.fail;
  value: T;
}

export interface ISuccess<T> {
  status: Statuses.success;
  value: T;
}

export type IMaybe<T> = IEither<Error, T>;

export const fail = <T>(value: T): IFail<T> => ({
  status: Statuses.fail,
  value,
});

export const success = <T>(value: T): ISuccess<T> => ({
  status: Statuses.success,
  value,
});

export const isFail = <A, B>(value: IEither<A, B>): value is IFail<A> => (value as IFail<A>).status === Statuses.fail;
export const isSuccess = <A, B>(value: IEither<A, B>): value is ISuccess<B> => (value as ISuccess<B>).status === Statuses.success;
