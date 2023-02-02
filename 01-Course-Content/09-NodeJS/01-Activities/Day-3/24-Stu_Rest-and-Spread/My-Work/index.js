// Exercise 1
// This code is creating an array called "songs"
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// TODO: Which operator is being used here?
// The spread operator is being used here to create a new array called "newSongs" that is a copy of the "songs" array
const newSongs = [...songs];

// TODO: What do you expect to be logged in the console?
// This code logs the new array to the console
console.log(newSongs);

// Exercise 2
// This code creates a function called "addition" that takes in three arguments, "x", "y", and "z"
const addition = (x, y, z) => {
  // This code creates a new array called "array" that consists of the three arguments passed to the function
  const array = [x, y, z];
  // TODO: What does the reduce() method do?
  // This code uses the reduce() method to sum up the values in the "array" and returns the result
  return array.reduce((a, b) => a + b, 0);
};
// TODO: What do you expect to be logged in the console?
// This code logs the result of the "addition" function when called with the arguments 1, 2, and 3
console.log(addition(1, 2, 3));

// TODO: What is this syntax that is being used as the parameter?
// This code creates a function called "additionSpread" that uses the rest operator as a parameter
const additionSpread = (...array) => {
  // This code uses the reduce() method to sum up the values in the "array" and returns the result
  return array.reduce((a, b) => a + b, 0);
};

// TODO: What do you expect to be logged in the console?
// This code logs the result of the "additionSpread" function when called with the arguments 1, 2, and 3
console.log(additionSpread(1, 2, 3));

// TODO: What do you expect to be logged in the console?
// This code logs the result of the "additionSpread" function when called with the arguments 1, 2, 3, 4, and 100
console.log(additionSpread(1, 2, 3, 4, 100));
