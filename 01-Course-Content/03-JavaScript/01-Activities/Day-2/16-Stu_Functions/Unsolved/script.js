// isEqual using function declaration
function isEqual(x, y) {
  if (x === y) {
    console.log('They are equal in type and value');
  } else if (x == y) {
    console.log('They are equal in value');
  } else {
    console.log('They are not equal');
  }
  return;
}

// Arrow Function
const isEqualArrow = (x, y) => {
  if (x === y) {
    console.log('They are equal in type and value');
    return 1;
  } else if (x == y) {
    console.log('They are equal in value');
    return 2;
  } else {
    console.log('They are not equal');
  }
  console.log("Hi!")
  return;
}

isEqualArrow(10, 10);



// Logs "They are equal in type and value"
isEqual(10, 10);

// Refer to sample functions as needed!

// TODO: Call the isEqual function so that it logs "They are equal in value"

// TODO: Rewrite isEqual as a function expression called 'isEqualTakeTwo`

// TODO: Call the isEqualTakeTwo function so that it logs "They are not equal"

isEqual(10, "9")