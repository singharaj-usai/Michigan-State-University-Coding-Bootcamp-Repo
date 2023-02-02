class Character {
  // TODO: Add a constructor
  constructor(name, strength, hitPoints) {
    this.name = name;
    this.strength = strength;
    this.hitPoints = hitPoints;
  }
  // TODO: Create a printStats() method that console logs `this.name`, `this.strength`, and `this.hitPoints`
  printStats() {
    console.log(`Name: ${this.name}`);
    console.log(`Strength: ${this.strength}`);
    console.log(`Hit Points: ${this.hitPoints}`);
  }
  // TODO: Create a isAlive() method that returns a boolean based on whether or not a character's "hitpoints" are <= 0
  isAlive() {
    return this.hitPoints > 0;
  }
  // TODO: Create a attack() method that accepts an opponent object and decreases the opponent's "hitPoints" by this character's strength
  attack(opponent) {
    opponent.hitPoints -= this.strength;
  }
}

const character1 = new Character("Foo", 10, 100);
const character2 = new Character("Bar", 5, 75);

character1.printStats();
// Name: Foo
// Strength: 10
// Hit Points: 100

character2.printStats();
// Name: Bar
// Strength: 5
// Hit Points: 75

console.log(character1.isAlive()); // true
console.log(character2.isAlive()); // true

character1.attack(character2);
character2.printStats();
// Name: Bar
// Strength: 5
// Hit Points: 70

console.log(character2.isAlive()); // true

character1.attack(character2);
character2.attack(character1);
character1.printStats();
// Name: Foo
// Strength: 10
// Hit Points: 90

// Creates two unique characters using the "character" constructor
const grace = new Character('Grace', 30, 75);
const dijkstra = new Character('Dijkstra', 20, 105);

// This keeps track of whose turn it is
let graceTurn = true;

grace.printStats();
dijkstra.printStats();

const turnInterval = setInterval(() => {
  // If either character is not alive, end the game
  if (!grace.isAlive() || !dijkstra.isAlive()) {
    clearInterval(turnInterval);
    console.log('Game over!');
  } else if (graceTurn) {
    grace.attack(dijkstra);
    dijkstra.printStats();
  } else {
    dijkstra.attack(grace);
    grace.printStats();
  }

  // Switch turns
  graceTurn = !graceTurn;
}, 2000);
