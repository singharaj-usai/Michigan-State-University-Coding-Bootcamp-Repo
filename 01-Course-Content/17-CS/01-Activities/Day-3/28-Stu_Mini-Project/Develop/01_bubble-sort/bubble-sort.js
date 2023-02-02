// Create our input data
const unsortedInputArray = [];

// seed data in unsortedInputArray
for (let i = 0; i < 2000; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 2000));
}

// TODO: create bubble sort function
const bubbleSort = (array) => {};

const sorted = bubbleSort(unsortedInputArray);
console.log('Post Sort:', sorted.join(' '));
console.log('DONE!');
