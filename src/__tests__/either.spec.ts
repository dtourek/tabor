import { either } from '../either';
import { failed, success } from '../maybe';

describe('either', () => {
  it('returns left', () => {
    expect(
      either(
        (err) => err,
        () => 'should not happens',
        failed(new Error('left')),
      ),
    ).toEqual(Error('left'));
  });

  it('should return right', () => {
    expect(
      either(
        (error) => error,
        (result) => result,
        success('success'),
      ),
    ).toEqual('success');
  });

  it('should return obj with result', () => {
    expect(
      either(
        (error) => error,
        (result) => ({ result }),
        success('success'),
      ),
    );
  });
});
