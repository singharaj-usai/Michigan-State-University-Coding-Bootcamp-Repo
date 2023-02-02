// The `position` parameter is what position in the Fibonacci sequence we want to find the value of
const fibonacci = (position) => {
  // Since this implementation of the algorithm excludes searching for negative positions, we check if the value of `position` is less than two.
  // If the value of `position` is 1, return 1 because it's the value at that position of the sequence.
  // If the value of `position` is 0, return 0 because it's the value at that position of the sequence.
  if (position < 2) {
    return position;
  }

  // The current value at this position is evaluated by adding the sum of the values at the two preceding positions of the sequence
  // By calling itself, we form a loop.
  // With each subsequent call smaller arguments are used until the base condition is reached
  return fibonacci(position - 1) + fibonacci(position - 2);
};

// This will return the value of the Fibonacci sequence at the ninth position
console.log(fibonacci(9));
