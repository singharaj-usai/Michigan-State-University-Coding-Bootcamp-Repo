const expect = chai.expect;

describe('multiplyInto20', function () {
  it('should return true when given the array [2, 8, 7, 5, 4, 3]', function () {
    const arr = [2, 8, 7, 5, 4, 3];

    const result = multiplyInto20(arr);

    expect(result).to.eql(true);
  });

  it('should return true when given the array [1, 9, 2, 6, 20]', function () {
    const arr = [1, 9, 2, 6, 20];

    const result = multiplyInto20(arr);

    expect(result).to.eql(true);
  });

  it('should return true when given the array [-2, 5, 50, 2, -10, 18, 20]', function () {
    const arr = [-2, 5, 50, 2, -10, 18, 20];

    const result = multiplyInto20(arr);

    expect(result).to.eql(true);
  });

  it('should return false when given the array [4, 8, 15, 16, 23, 42]', function () {
    const arr = [4, 8, 15, 16, 23, 42];

    const result = multiplyInto20(arr);

    expect(result).to.eql(false);
  });

  it('should return false when given the array []', function () {
    const arr = [];

    const result = multiplyInto20(arr);

    expect(result).to.eql(false);
  });

  it('should return false when given the array [-20, -2, -6, -5, -108]', function () {
    const arr = [-20, -2, -6, -5, -108];

    const result = multiplyInto20(arr);

    expect(result).to.eql(false);
  });
});
