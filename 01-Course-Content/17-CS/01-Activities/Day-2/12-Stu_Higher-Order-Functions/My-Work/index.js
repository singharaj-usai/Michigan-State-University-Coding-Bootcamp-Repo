const grades = [56, 78, 99, 85];

// The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
// TODO: Complete the 'findAverage' function below.
function findAverage(accumulator, currentValue, index, array) {
    // To calculate the average of an array of numbers, you can use the following implementation for the findAverage function:
    accumulator += currentValue;
    if (index === array.length - 1) {
        return accumulator / array.length;
    }
    return accumulator;
}

// Then, you can pass the findAverage function to the reduce() method as follows:
// TODO: Pass the 'findAverage' into the reduce method.
let gradeAverage = grades.reduce(findAverage);
// Finally, you can output the average to the console using:
console.log(gradeAverage);
// This should output the average of the numbers in the grades array.