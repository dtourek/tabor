import { IEither } from "./either";

enum Statuses {
  failed = 'failed',
  success = 'success'
}

export interface IFail<T> {
  status: Statuses.failed;
  value: T;
}

export interface ISuccess<T> {
  status: Statuses.success;
  value: T;
}

export type IMaybe<T> = IEither<Error, T>;

export const failed = <T>(value: T): IFail<T> => ({
  status: Statuses.failed,
  value,
});

export const success = <T>(value: T): ISuccess<T> => ({
  status: Statuses.success,
  value,
});

export const isFailed = <A, B>(value: IEither<A, B>): value is IFail<A> => (value as IFail<A>).status === Statuses.failed;
export const isSuccess = <A, B>(value: IEither<A, B>): value is ISuccess<B> => (value as ISuccess<B>).status === Statuses.success;
