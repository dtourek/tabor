import { fail, IMaybe, success } from './maybe';

export const tryCatch = async <T>(fn: () => any): Promise<IMaybe<T>> => {
  try {
    return success(await fn());
  } catch (error: any) {
    return fail(error);
  }
};
