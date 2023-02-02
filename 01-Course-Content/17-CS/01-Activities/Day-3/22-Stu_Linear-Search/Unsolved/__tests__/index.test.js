const { linearSearch } = require('../index');

test('linearSearch is a defined function', () => {
  expect(typeof linearSearch).toEqual('function');
});

test('linearSearch should return 6', () => {
  let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(linearSearch(testArray, 7)).toEqual(6);
});

test('linearSearch should return -1 because 5643 is not in the array', () => {
  let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(linearSearch(testArray, 5643)).toEqual(-1);
});
