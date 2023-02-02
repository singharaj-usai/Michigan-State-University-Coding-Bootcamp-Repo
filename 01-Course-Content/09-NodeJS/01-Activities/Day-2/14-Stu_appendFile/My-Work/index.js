// TODO: What are we importing?
// Import the 'fs' module for file system operations
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
// Append a string to the file specified in the first argument.
// The string to be added is the second argument.
// The third argument is a callback function that is called when the append operation is complete.
// If an error occurs during the operation, the error is passed as an argument to the callback. Otherwise, the callback is called with no arguments.
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
// TODO: Describe how this ternary operator works
// If there is an error, log it to the console. Otherwise, log a message indicating the commit was successfully logged.
// The ternary operator in this code is used to check if there was an error when appending to the file.
// If there was an error, it will log the error to the console. Otherwise, it will log a message to the console saying 'Commit logged!'.
  err ? console.error(err) : console.log('Commit logged!')
);
