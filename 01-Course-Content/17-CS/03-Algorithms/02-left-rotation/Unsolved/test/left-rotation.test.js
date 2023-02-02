const expect = chai.expect;

describe('leftRotation', () => {
  it(`should update the given array to [3, 1, 2] when given the array [1, 2, 3] and the number 2`, () => {
    const arr = [1, 2, 3];
    const positions = 2;

    leftRotation(arr, positions);

    expect(arr).to.eql([3, 1, 2]);
  });

  it(`should update the given array to [8, 8, 1] when given the array [1, 8, 8] and the number 1`, () => {
    const arr = [8, 8, 1];
    const positions = 3;

    leftRotation(arr, positions);

    expect(arr).to.eql([8, 8, 1]);
  });

  it(`should update the given array to [1] when given the array [1] and the number 20`, () => {
    const arr = [1];
    const positions = 20;

    leftRotation(arr, positions);

    expect(arr).to.eql([1]);
  });

  it(`should update the given array to [3, 1, 8, 0, 1] when given the array [0, 1, 3, 1, 8] and the number 4`, () => {
    const arr = [3, 1, 8, 0, 1];
    const positions = 8;

    leftRotation(arr, positions);

    expect(arr).to.eql([0, 1, 3, 1, 8]);
  });

  it(`should update the given array to [4, 8, 15, 16, 23, 42] when given the array [4, 8, 15, 16, 23, 42] and the number 0`, () => {
    const arr = [4, 8, 15, 16, 23, 42];
    const positions = 0;

    leftRotation(arr, positions);

    expect(arr).to.eql([4, 8, 15, 16, 23, 42]);
  });

  it(`should update the given array to [1, 2, 3] when given the array [1, 2, 3] and the number 3`, () => {
    const arr = [1, 2, 3];
    const positions = 3;

    leftRotation(arr, positions);

    expect(arr).to.eql([1, 2, 3]);
  });
});
