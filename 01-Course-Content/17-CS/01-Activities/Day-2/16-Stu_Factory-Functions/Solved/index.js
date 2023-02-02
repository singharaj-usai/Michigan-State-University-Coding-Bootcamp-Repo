function student(name, gradeYear) {
  // Store the function's arguments as an object named `studentInfo`.
  let studentInfo = {
    name: name,
    gradeYear: gradeYear,
  };

  return {
    // Return an inner function which has access to the outer function's scope.
    greet: function () {
      console.log(
        // Access the students name and grade year using dot notation.
        `My name is ${studentInfo.name} and I am in ${studentInfo.gradeYear} grade`
      );
    },
  };
}

// Create a new student passing a name and grade year as arguments.
const newStudent = student('Dominique', '11th');

// Call the `greet` function on the newly created student.
newStudent.greet();

module.exports = student;
