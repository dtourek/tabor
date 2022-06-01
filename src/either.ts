import { isLeft, Maybe } from './maybe';

export const either = <OnError, OnSuccess>(onError: (error: Error) => OnError, onSuccess: (value: OnSuccess) => any, condition: Maybe<OnSuccess>) => {
  if (isLeft(condition)) {
    return onError(condition.value);
  }
  return onSuccess(condition.value);
};
