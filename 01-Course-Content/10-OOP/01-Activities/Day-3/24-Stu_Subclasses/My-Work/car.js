// TODO: Import the parent class
const Vehicle = require("./vehicle");

// TODO: Create a `Car` class that extends the `Vehicle` class
class Car extends Vehicle {
  constructor(numWheels, color, passengers) {
    super(numWheels, "car", passengers);
    this.color = color;
  }

  useHorn() {
    console.log("Beep beep!");
  }

  checkPassengers() {
    console.log(`Number of passengers: ${this.passengers.length}`);
  }
}

const carPassengers = [
  'Aristotle',
  'Confucius',
  'Socrates',
  'Lao-Tzu',
  'Plato',
];

const car = new Car(15, 'blue', carPassengers);

console.log('---CAR---');
car.printInfo();
car.useHorn();
car.checkPassengers();
