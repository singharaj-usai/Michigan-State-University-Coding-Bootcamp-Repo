// Create our input data
const unsortedInputArray = [];
// seed data in unsortedInputArray
for (let i = 0; i < 2000; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 2000));
}

// TODO: create quick sort function
const quickSort = (array) => {};

const sorted = quickSort(unsortedInputArray);
console.log('Post Sort:', sorted.join(' '));
console.log('DONE!');
