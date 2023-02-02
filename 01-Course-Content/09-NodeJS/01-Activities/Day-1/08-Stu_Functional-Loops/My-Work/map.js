const originalArray = [1, 3, 2, 5, 10];

// doubledArray is equal to a new array of numbers multiplied by 2 and returned by map(). map() will use an anonymous function as a condition. 
// In the first map() example, a new array, doubledArray, is created by multiplying each element in originalArray by 2.
const doubledArray = originalArray.map(function(data) {
  // The anonymous function returns each number multiplied by 2. The returned result is added to a new array.
  return data * 2;
});

console.log(doubledArray);
console.log(originalArray);


// TODO: Describe how map is working in the example below. What will the value of tripledArray be?
// In the second map() example, a new array, tripledArray, is created by multiplying each element in originalArray by 3.
const tripledArray = originalArray.map(data => data * 3);

// TODO: Describe how map is working in the example below. What will the value of oddOrEven be?
// In the third map() example, a new array, oddOrEven, is created by determining whether each element in originalArray is odd or even.
const oddOrEven = originalArray.map(num => {
  if (num % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
});

// If the element is even, the string 'even' is added to the array.
// If the element is odd, the string 'odd' is added to the array.
// The value of tripledArray will be an array of numbers that are three times the value of the corresponding element in originalArray.
// The value of oddOrEven will be an array of strings, either 'odd' or 'even', depending on whether the corresponding element in originalArray is odd or even.
