// Helper function to evaluate if a number is within a given range
const inRange = (x, min, max) => (x - min) * (x - max) <= 0;

function Student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;

  // Method that will simulate method overloading in JavaScript
  this.displayGrade = function (grade) {
    const input = grade;
    if (!input) {
      throw new Error('no grade provided');
    }
    let response;
    // Return a letter grade if a number grade was passed
    // Ex. 95 => 'A'
    if (typeof input === 'number') {
      // TODO: Add logic here to return a single letter grade
      if (inRange(input, 90, 100)) {
        response = 'A';
      } else if (inRange(input, 80, 89)) {
        response = 'B';
      } else if (inRange(input, 70, 79)) {
        response = 'C';
      } else if (inRange(input, 60, 69)) {
        response = 'D';
      } else if (inRange(input, 0, 59)) {
        response = 'F';
      } else {
        response = 'Invalid Grade';
      }
      return response;
    }
    // Return a range if a letter grade was passed
    // Ex. 'A' => '90 - 100'
    if (typeof input === 'string') {
      // TODO: Add logic here to return range as a string
      if (input.toUpperCase() === 'A') {
        response = '90 - 100';
      } else if (input.toUpperCase() === 'B') {
        response = '80 - 89';
      } else if (input.toUpperCase() === 'C') {
        response = '70 - 79';
      } else if (input.toUpperCase() === 'D') {
        response = '60 - 69';
      } else if (input.toUpperCase() === 'F') {
        response = '0 - 59';
      } else {
        response = 'Invalid Grade';
      }
      return response;
    }
  };
}

const John = new Student('John', 'Appleseed', '30');
console.log('John.displayGrade():', John.displayGrade(95));
console.log('John.displayGrade():', John.displayGrade('B'));
