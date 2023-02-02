const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7];

// This implementation will identify the first index that holds our searched element and return that index:
const linearSearch = (array, element) => {
  // Loop the given array.
  for (let index = 0; index < array.length; index++) {
    // Check to see if the index of the given array is equal to the element we are searching for.
    if (array[index] === element) {
      // Exit the search by returning the index of the element.
      return index;
    }
  }
  // -1 when no matching element was found in the given array.
  return -1;
};

console.log(linearSearch(arr, 77));

// A different implementation of this function that will return an array of every index the searched element appears:
const linearSearchMultipleElements = (array, element) => {
  // Create an empty array to store the indexes of the matching elements.
  const elemIndexes = [];

  // Loop the the given array.
  for (let index = 0; index < array.length; index++) {
    // Check to see if the index of the given array is equal to the element we are searching for.
    if (array[index] === element) {
      // Pushes the index of the element we are searching for to the array we created.
      elemIndexes.push(index);
    }
  }

  // Before returning the array of indexes, we first need to check if we have collected any.
  if (elemIndexes.length === 0) {
    return 'Not found';
  } else {
    return elemIndexes;
  }
};

console.log(linearSearchMultipleElements(arr, 77));

module.exports = { linearSearch, linearSearchMultipleElements };
