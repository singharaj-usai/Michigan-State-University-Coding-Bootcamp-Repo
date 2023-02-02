// TODO: Add a comment describing what the `position` parameter means for this function.
const fibonacci = (position) => {
  // TODO: Add a comment describing the purpose of this conditional statement.
  if (position < 2) {
    return position;
  }

  // TODO: Add a comment describing the purpose of this return statement.
  return fibonacci(position - 1) + fibonacci(position - 2);
};

// TODO: What will this return?
console.log(fibonacci(9));
