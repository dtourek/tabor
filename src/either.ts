import { IFail, isFail, ISuccess, IMaybe } from './maybe';

export type IEither<A, B> = IFail<A> | ISuccess<B>;

export const either = <OnError, OnSuccess>(onError: (error: Error) => OnError, onSuccess: (value: OnSuccess) => any, condition: IMaybe<OnSuccess>) => {
  if (isFail(condition)) {
    return onError(condition.value);
  }
  return onSuccess(condition.value);
};
