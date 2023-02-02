const originalArray = [1, 3, 2, 5, 10];

// evenNumbers is equal to a new array of even numbers returned by filter(). filter() will use an anonymous function as a condition. 
const evenNumbers = originalArray.filter(function(data) {
  // The anonymous function uses a conditional to check if a number is divisible by 2. 
  if (data % 2 === 0) {
    // If a number is even (divisible by 2), the condition returns true.
    return true;
  }
});

console.log(evenNumbers);
console.log(originalArray);

const isPrime = num => {
  // Set up a loop the starts with 2 and continues to increment i as long as i is less than 2
  for (let i = 2; i < num; i++) {
    // isPrime will return false if num is divisible by any number other than 1 or num.
    if (num % i === 0) return false;
  }
  // Otherwise, isPrime will return num, unless num == 1.
  return num !== 1;
};


// TODO: Describe how filter is working in this example. What will the value of primeArray be?
// In the first example, the filter method is iterating through each element in the originalArray and passing it as an argument to the isPrime function.
// The filter method will include each element in the returned array if the isPrime function returns true for that element, and will exclude the element if the function returns false.
// The value of primeArray will be an array containing the elements from originalArray for which the isPrime function returns true.
const primeArray = originalArray.filter(isPrime);


// TODO: Describe how filter is working in this example. What will the value of moreThan5Array be?
// In the second example, the filter method is using an anonymous function as a condition, which checks if each element in originalArray is greater than 5.
// If an element is greater than 5, it will be included in the returned array, and if it is not, it will be excluded.
// The value of moreThan5Array will be an array containing the elements from originalArray that are greater than 5.
const moreThan5Array = originalArray.filter(num => num > 5);

