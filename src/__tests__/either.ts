import { either } from '../either';
import { Left, Right } from '../maybe';

describe('either', () => {
  it('returns left', () => {
    expect(
      either(
        (err) => err,
        () => 'should not happens',
        Left(new Error('left')),
      ),
    ).toEqual(Error('left'));
  });

  it('should return right', () => {
    expect(
      either(
        (error) => error,
        (result) => result,
        Right('success'),
      ),
    ).toEqual('success');
  });

  it('should return obj with result', () => {
    expect(
      either(
        (error) => error,
        (result) => ({ result }),
        Right('success'),
      ),
    );
  });
});
