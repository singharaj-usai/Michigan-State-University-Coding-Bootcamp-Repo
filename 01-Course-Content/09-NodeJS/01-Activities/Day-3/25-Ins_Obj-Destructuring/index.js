const arya = {
  name: 'Arya Stark',
  parents: ['Eddard Stark', 'Catelyn Stark'],
};

const jaime = {
  name: 'Jaime Lannister',
  parents: ['Tywin Lannister', 'Joanna Lannister'],
};

// In the past, if we wanted to pull off an object's property we'd have to do something like this:

const aryaName = arya.name; // arya["name"]
const aryaParents = arya.parents;

console.log(aryaName); // logs `"Arya Stark"`
console.log(aryaParents); // logs `["Eddard Stark", "Catelyn Stark"]`

// Now with ES6 object destructuring syntax, we can do this:

const { name, parents } = arya;

console.log(name); // logs `"Arya Stark"`
console.log(parents); // logs `["Tywin Lannister", "Joanna Lannister"]`

// We can also rename our destructured properties like so:

const { name: jaimeName } = jaime;
console.log(jaimeName); // logs `"Jaime Lannister"`

// We can also destructure parameters using the same feature. e.g. previously we might have done something like this:

const logCharacter = (character) =>
  console.log(
    `${character.name}'s parents are: ${character.parents[0]} and ${character.parents[1]}.`
  );

logCharacter(arya);

// We can also use array destructuring to pull off an array's elements
const locations = ['Winterfell', 'Casterly Rock', 'Kings Landing', 1, 2,3, 'blah'];
const [winterfell, casterlyRock, kingLanding, ...restOfLocations] = locations;

console.log(winterfell); // logs `"Winterfell"`
console.log(casterlyRock); // logs `"Casterly Rock"`
console.log(kingLanding); // logs `"Kings Landing"`

// But now we can do this:

const betterLogCharacter = ({ name, parents }) =>
  console.log(`${name}'s parents are: ${parents[0]} and ${parents[1]}.`);

betterLogCharacter(jaime);
