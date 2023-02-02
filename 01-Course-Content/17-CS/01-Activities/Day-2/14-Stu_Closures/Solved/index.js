function counter() {
  // Create a 'count' variable inside of the outer function.
  let count = 0;

  // Return an inner function creating a closure.
  return {
    increment: function () {
      // Increment the outer function's 'count' variable by one.
      return ++count;
    },
  };
}

module.exports = counter;
