import { Left, Maybe, Right } from './maybe';

export const tryCatch = async <T>(fn: () => any): Promise<Maybe<T>> => {
  try {
    return Right(await fn());
  } catch (error: any) {
    return Left(error);
  }
};
