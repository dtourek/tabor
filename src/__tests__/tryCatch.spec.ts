import { tryCatch } from '../tryCatch';

describe('tryCatch', () => {
  const promise = (isResolved: boolean) =>
    new Promise((resolve, reject) => {
      if (!isResolved) {
        reject(new Error('Promise rejected!'));
      }
      resolve('Promise resolved!');
    });

  it('should return Left', async () => {
    expect(await tryCatch(() => Promise.reject(new Error('Rejected')))).toEqual({ status: 'left', value: Error('Rejected') });
  });

  it('should return right', async () => {
    expect(await tryCatch(() => Promise.resolve('ok'))).toEqual({ status: 'right', value: 'ok' });
  });

  it('should return left with async/await', async () => {
    expect(await tryCatch(async () => promise(false))).toEqual({ status: 'left', value: Error('Promise rejected!') });
  });

  it('should return right with async/await', async () => {
    expect(await tryCatch(async () => promise(true))).toEqual({ status: 'right', value: 'Promise resolved!' });
  });
});
