var one = 64;
var two = "656302";
var three = false;
var four = 64.55;
var five = "Howdy!";
var six;

// Insert comments to explain what each console log below will log to the console
console.log(typeof one); // number
console.log(typeof two); // string
console.log(typeof three); // boolean
console.log(typeof four); // number
console.log(typeof five); // string
console.log(typeof six); // undefined

four = "Hello!";
five = false;
six = 23;

// Insert comments to explain what each console log below will log to the console
console.log(typeof four); // string
console.log(typeof five); // boolean
console.log(typeof six); // number

six = 23 + "2"; // "232"
console.log(typeof six); // string