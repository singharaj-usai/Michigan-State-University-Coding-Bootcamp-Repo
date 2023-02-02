// Create our input data
const unsortedInputArray = [];

// seed data in unsortedInputArray
for (let i = 0; i < 2000; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 2000));
}

// This version looks simpler, but isn't as efficient since it's going to force its way through the entire array, even if it's already sorted
const bubbleSort = (array) => {
  // for each index in the array...
  for (let i = 0; i < array.length; i++) {
    // ...loop through the entire array
    for (let j = 0; j < array.length; j++) {
      // switch values as needed
      if (array[j] > array[j + 1]) {
        const tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }

  return array;
};

const sorted = bubbleSort(unsortedInputArray);
console.log('Post Sort:', sorted.join(' '));
console.log('DONE!');
