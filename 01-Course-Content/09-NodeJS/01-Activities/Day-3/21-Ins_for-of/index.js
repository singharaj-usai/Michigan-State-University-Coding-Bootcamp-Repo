// 1. Using arrays
const songs = ['Bad Guy', 'The Wheels on the Bus', 'Friday'];

for (const song of songs) {
  console.log(song);
}

/* Output:
  Bad Guy
  The Wheels on the Bus
  Friday
*/

console.log('\n================================================\n');

// 2. Using multidimensional arrays
const moreSongs = [
  ['Bad Guy', 1],
  ['The Wheels on the Bus', 2],
  ['Friday', 3],
];

// for of loop
for (const song of moreSongs) {
  console.log(`${song[0]}'s chart position is ${song[1]}`);
}

/* Output:
  Bad Guy's chart position is 1
  The Wheels on the Bus's chart position is 2
  Friday's chart position is 3
*/
