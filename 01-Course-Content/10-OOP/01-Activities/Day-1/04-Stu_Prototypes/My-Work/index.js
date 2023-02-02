// TODO: Add a comment describing what kind of function this is
// This is a constructor function called 'Character' that takes in 5 parameters: 'name', 'type', 'age', 'strength', and 'hitpoints'.
// It will create a new object with these parameters as its properties when called with the 'new' keyword.
function Character(name, type, age, strength, hitpoints) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;
}

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
// .prototype allows the printStats method to be inherited by all instances of the Character constructor function.
// This means that any object created using the Character constructor will have access to the printStats method.
Character.prototype.printStats = function () {
  console.log(
    `Name: ${this.name}\nProfession: ${this.type}\nAge: ${this.age}\nStrength: ${this.strength}\nHitPoints: ${this.hitpoints}`
  );
  console.log('\n-------------\n');
};

// TODO: Add a comment describing the functionality of this method
Character.prototype.isAlive = function () {
  if (this.hitpoints > 0) {
    console.log(`${this.name} is still alive!`);
    console.log('\n-------------\n');
    return true;
  }
  console.log(`${this.name} has died!`);
  return false;
};

// TODO: Add a comment describing the functionality of this method
// This method allows the current Character object to attack another Character object by reducing its hitpoints by the current Character's strength.
Character.prototype.attack = function (character2) {
  character2.hitpoints -= this.strength;
};

// TODO: Add a comment describing the functionality of this method
// This method increases the age, strength, and hitpoints of the character by 1, 5, and 25 respectively, representing the character leveling up in their profession.
Character.prototype.levelUp = function () {
  this.age += 1;
  this.strength += 5;
  this.hitpoints += 25;
};

const warrior = new Character('Crusher', 'Warrior', 25, 10, 75);
const rogue = new Character('Dodger', 'Rogue', 23, 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);

// TODO: Add a comment describing what you expect to see printed in the console
// This method will print the stats of the warrior object, including its name, profession, age, strength, and hitpoints.
warrior.printStats();

// TODO: Add a comment describing what you expect to see printed in the console
// This function expects to see a console log indicating that the warrior is still alive.
warrior.isAlive();

rogue.levelUp();

// TODO: Add a comment describing what you expect to see printed in the console
// Expected output: Prints the stats of the 'rogue' character to the console
rogue.printStats();
