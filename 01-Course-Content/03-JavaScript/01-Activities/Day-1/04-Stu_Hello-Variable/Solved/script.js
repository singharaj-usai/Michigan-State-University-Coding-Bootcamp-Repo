// Declare variables using var
var personName = 'Sakura';
var pets = 1;
var funFact = 'I like pineapple on my pizza.';

// Use + to combine data and variable names in a single console log
console.log('My name is ' + personName + '.');
if (pets === 1){
  console.log('I have 1 pet.');
} else if ( !pets ){ // 0
  console.log('I have no pets :(');
}else{
  console.log('I have ' + pets + ' pets.');
}
console.log('Fun fact: ' + funFact);

// When re-assigning variables, use variable name
personName = 'Mateo';
pets = 5;
funFact = 'I was a yo-yo champ in third grade.';

// Logs message with re-assigned values
console.log('My name is ' +
  personName + '.');
console.log('I have ' + pets + ' pet(s).');
console.log('Fun fact: ' + funFact);
