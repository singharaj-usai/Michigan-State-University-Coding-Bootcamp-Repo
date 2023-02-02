// TODO: Add a comment describing what the `position` parameter means for this function.
// The position parameter represents the position of a number in the Fibonacci sequence.
// The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1.
const fibonacci = (position) => {
  // TODO: Add a comment describing the purpose of this conditional statement.
  // The purpose of the conditional statement is to check if the position is less than 2.
  // If it is, the function returns the position value, since the first two numbers in the Fibonacci sequence are 0 and 1.
  if (position < 2) {
    return position;
  }

  // TODO: Add a comment describing the purpose of this return statement.
  // The purpose of the return statement is to calculate the value of the Fibonacci number at the given position by adding the values of the two preceding numbers in the sequence.
  // The fibonacci() function is called recursively, with the position parameter decremented by 1 and 2, until the base case (position less than 2) is reached.
  return fibonacci(position - 1) + fibonacci(position - 2);
};

// TODO: What will this return?
// This code will output 34, which is the 9th number in the Fibonacci sequence.
console.log(fibonacci(9));
