// TODO: Declare variable 'shout' with the value 'Shout' so it's available to `justShout` and `shoutItAllOut` functions

// The "shout" variable would have to be a global scope outside the functions so both of the functions can access it
// var shout = "Shout!";
function justShout() {
  console.log(shout + ", " + shout);
  return;
}

function shoutItAllOut() {
  console.log(shout + " it all out! ");
  return;
}

justShout();
shoutItAllOut();

// TODO: Declare variable 'animal' with the value 'Tigers' so it is only available to the 'sayTigers' function
function sayLions() {
  var animal = "Lions"; // var lions = "Lions";
  console.log(animal); // console.log(lions);
  return;
}

function sayTigers() {
  var animal = "Tigers"; // var tiger = "Tigers";
  console.log("and " + animal + " and "); // console.log("and " + tiger + " and ");
  return;
}

// TODO: The variable 'bears' should only declared once and 'sayBears' should return "Bears! OH MY!". 
var bears = "Bears"; // <- Keep it as a global scope variable

function sayBears() {
    var bears = "Pandas"; // <- Remove this variable because it's a shadowed variable
    console.log(bears + "! OH MY!");
    return;
}

sayLions();
sayTigers();
sayBears();

// TODO: The variable 'sing' should be declared once in the local scope.
var sing = "Sing"; // <-- Move this below "function singAlong()" so it's a local scope and not a global scope

function singAlong() {
  console.log(sing + ",");
  var singASong = function () {
    console.log(sing + " a Song.");
  };
  singASong();
}

singAlong();
