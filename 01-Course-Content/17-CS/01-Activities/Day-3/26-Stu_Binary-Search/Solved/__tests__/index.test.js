const binarySearch = require('../index');

test('binarySearch is a defined function', () => {
  expect(typeof binarySearch).toEqual('function');
});

test('binarySearch should return true', () => {
  let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(binarySearch(testArray, 7)).toEqual(true);
});

test('binarySearch should return false because 5643 is not in the array', () => {
  let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(binarySearch(testArray, 5643)).toEqual(false);
});

test('binarySearch should return true', () => {
  let testArray = [23, 67, 98, 102, 456].sort();
  expect(binarySearch(testArray, 102)).toEqual(true);
});
