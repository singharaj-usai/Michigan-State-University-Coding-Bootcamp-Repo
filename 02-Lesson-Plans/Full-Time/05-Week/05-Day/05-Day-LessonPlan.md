# 05.5 Full-Time Lesson Plan: ES6 Classes

## Overview

Today's lesson will cover the basics of ES6 classes and how to use them when organizing and writing code. Students will practice implementing classes, using subclasses, and managing multiple classes. They will also learn the benefits of OOP and how to implement OOP in their code.

## Instructor Notes

* In this lesson, students will complete activities `21-Ins_Classes` through `28-Stu_Mini-Project`.

* You might find it difficult to remember a time when classes were unfamiliar to you. Read the [MDN Web Docs on classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) to review the most basic components.

* You might want to familiarize yourself with classes, subclasses, and the `super()` method before the lesson today, because it deals heavily with ES6 classes.

* Remind students to do a `git pull` of the class repo to have today's activities ready and open in VS Code. 

* If you are comfortable doing so, live-code the solutions to the activities. If not, just use the solutions provided and follow the prompts and talking points for review.

* Let students know that the Bonus at the end of each activity is not meant to be extra coding practice, but instead is a self-study on topics beyond the scope of this module for those who want to further their knowledge.

* If the students struggle with the `Everyone Do: Git` activity, walk through it with the students using the talking points provided. Otherwise, support the students as they do the activity and do a brief review at the end.

* The next module will have students writing and testing Express.js routes using an app called Insomnia. Direct students to the [Insomnia download page](https://insomnia.rest/download) and advise them to have it installed before the next module.

* Students will also start using Heroku in the upcoming module. Advise them to sign up for a Heroku account and install the Heroku CLI before they start the next module. Direct students to the [Heroku CLI installation guide on the Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/heroku/how-to-install-the-heroku-cli) for extra guidance.

## Learning Objectives

By the end of class, students will be able to:

* Implement classes to create new instances of objects.

* Extend basic classes with additional functionality. 

* Implement multiple classes with different purposes to practice the OOP paradigm.
  
## Time Tracker

| Start   | #   | Activity Name                       | Duration |
| ------- | --- | ----------------------------------- | -------- |
| 10:00AM | 1   | Instructor Do: Stoke Curiosity      | 0:10     |
| 10:10AM | 2   | Instructor Demo: Classes            | 0:05     |
| 10:15AM | 3   | Student Do: Classes                 | 0:15     |
| 10:30AM | 4   | Instructor Review: Classes          | 0:10     |
| 10:40AM | 5   | Instructor Demo: Subclasses         | 0:05     |
| 10:45AM | 6   | Student Do: Subclasses              | 0:15     |
| 11:00AM | 7   | Instructor Review: Subclasses       | 0:10     |
| 11:10AM | 8   | Instructor Demo: Multiple Classes   | 0:05     |
| 11:15AM | 9   | Student Do: Multiple Classes        | 0:15     |
| 11:30AM | 10  | Instructor Review: Multiple Classes | 0:10     |
| 11:40AM | 11  | Everyone Do: Git Stash              | 0:20     |
| 12:00PM | 12  | BREAK                               | 0:30     |
| 12:30PM | 13  | Instructor Demo: Mini Project       | 0:05     |
| 12:35PM | 14  | Student Do: Mini Project            | 0:60     |
| 1:35PM  | 15  | Instructor Review: Mini Project     | 0:10     |
| 1:45PM  | 16  | Introduce Challenge                 | 0:05     |
| 1:50PM  | 17  | FLEX                                | 0:40     |
| 2:30PM  | 18  | END                                 | 0:00     |

---

## Class Instruction

### 1. Instructor Do: Stoke Curiosity (10 min)

* Welcome students to class.

* Explain that we will revisit creating objects&mdash;but with a different syntax.

* The language specification **ES6** introduces a class syntax to JavaScript. Interestingly, classes do not actually provide any new functionality over constructor functions. Many developers describe them as **syntactic sugar**, or syntax that makes code more readable and intuitive.

* Open the [MDN Web Docs on classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) in your browser and explain the following:

  * Classes are written using the `class` and `constructor` keywords, as shown in the following example:

    ```js
    class Rectangle {
      constructor(height, width) {
        this.height = height;
        this.width = width;
      }
    }
    ```

  * However, instances of `Rectangle` (from the preceding example) are still created with the `new` keyword, just like with regular constructor functions.

  * This new syntax mimics how classes are written in other programming languages.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What other programming languages might use classes?

  * 🙋 Java, Python, C#, Ruby, and so on.

  * ☝️ Why would JavaScript try to mimic these other languages?

  * 🙋 To make it easier for developers to work across languages, to provide familiarity, and to move away from `prototype` syntax that can be confusing and clunky. 

  * ☝️ How would you write a `Rectangle` constructor function without using `class`?

  * 🙋 Create a function called `Rectangle()` that accepts two arguments.

* Answer any questions before moving on to the next activity.

### 2. Instructor Demo: Classes (5 min)

* Open `21-Ins_Classes/shape.js` in your IDE and explain the following:

  * 🔑 In an ES6 class declaration, we do not declare the parameters of the new object at the top of the function like we would in a constructor function. Instead, we use a built-in function called `constructor()`, as shown in the following example:

    ```js
    class Shape {
      constructor(area, perimeter) {
        this.area = area;
        this.perimeter = perimeter;
      }
    }
    ```

  * 🔑 The syntax for class methods differs from any function that we have encountered before. Instead of using arrow functions or the `prototype` property, the syntax looks similar to how we declare functions&mdash;just without the `function` keyword, as shown in the following example:
  
    ```js
    printInfo() {
      console.log(`Area: ${this.area}`);
      console.log(`Perimeter: ${this.perimeter}`);
    }
    ```

  * Although we are now using classes in JavaScript, JavaScript does not have classical inheritance like some programming languages do. Fundamentally, JavaScript still works the same&mdash;inheritance happens through prototypes. The class syntax merely makes developers' lives easier.

  * We instantiate objects the same way we did with constructor functions, as follows:

    ```js
    const shape = new Shape(25, 25);
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the value of `this` within the `printInfo()` method?

  * 🙋 `this` is equal to the instance of the object that is created with the `new` keyword. 

  * ☝️ How would we build something like this?

  * 🙋 We could look up more information on how to properly use the ES6 class syntax.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `22-Stu_Classes/README.md`.

### 3. Student Do: Classes (15 min)

* Direct students to the activity instructions found in `22-Stu_Classes/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Write and Implement Classes

  Work with a partner to implement the following user story:

  * As a user, I want a command-line RPG that allows two characters to battle each other.

  ## Acceptance Criteria

  * It's done when a new `Character` can be created with the following properties:

    * `name` is a string that contains the character's name.

    * `strength` is a number that indicates how much damage the character's attacks will inflict.

    * `hitPoints` is a number that indicates how many hit points the character has.

  * It's done when each `Character` has the following methods:

    * `printStats()` logs the character's name, strength, and hit points, as follows:

      ```js
      console.log(`Stats for ${this.name} are:\n`)
      console.log(`Each attack will do ${this.strength} damage`)
      console.log(`${this.name} has ${this.hitPoints} hit points remaining`)
      ```

    * `isAlive()` returns a Boolean based on whether or not a character's hit points are less than or equal to zero.

    * `attack()` accepts an opposing `Character` object and subtracts the current character's `strength` from the opponent's `hitPoints`.

  * It's done when I can run `node character.js` and see two instances of `Character` battle each other until one of them is defeated.

  ---

  ## 💡 Hints

  How can we start small? Can we benefit from first trying to make one character attack another until the game is over?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How can we add validation to ensure that each character is provided the proper three arguments when created?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 4. Instructor Review: Classes (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with ES6 classes? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `constructor()`

  * ✔️ `this`

  * ✔️ Method syntax

* Open `22-Stu_Classes/Solved/character.js` in your IDE and explain the following: 

  * 🔑 The `Character` class includes a `constructor()` method that accepts three arguments, as follows:

    ```js
    class Character {
      constructor(name, strength, hitPoints) {
        this.name = name;
        this.strength = strength;
        this.hitPoints = hitPoints;
      }
    }
    ```

  * 🔑 The `printStats()` method uses `this` to reference the current character's properties, as shown in the following example:

    ```js
    printStats() {
      console.log(`Stats for ${this.name} are as following:`);
      console.log(`Each attack will do ${this.strength} damage.`);
      console.log(`${this.name} has ${this.hitPoints} hit points remaining!`);
      console.log("------------");
    }
    ```

  * 🔑 The `isAlive()` method returns `false` if `this.hitPoints` is less than zero, as shown in the following example:

    ```js
    isAlive() {
      if (this.hitPoints <= 0) {
        console.log(`${this.name} has been defeated!`)
        return false;
      }
      return true;
    };
    ```

  * The `attack()` method updates the object being passed in as the argument, as shown in the following example:

    ```js
    attack(opponent) {
      console.log(`${this.name} hit ${opponent.name} for ${this.strength}`)
      opponent.hitPoints -= this.strength;
    };
    ```

  * We use the `new` keyword to create two new `Character` instances, as follows:

    ```js
    const grace = new Character("Grace", 30, 75);
    const dijkstra = new Character("Dijkstra", 20, 105);
    ```

  * We use `setInterval()` to run a game loop, using the `graceTurn` variable to swap who should attack first each time, as shown in the following example:

    ```js
    let graceTurn = true;

    const turnInterval = setInterval(() => {
      if(!grace.isAlive() || !dijkstra.isAlive()) {
        clearInterval(turnInterval);
        console.log("Game over!");
      } else if(graceTurn) {
        grace.attack(dijkstra);
        dijkstra.printStats();
      } else {
        dijkstra.attack(grace);
        grace.printStats();
      }
      
      graceTurn = !graceTurn;
    }, 2000);
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ On a technical level, how are these classes behaving differently than constructor functions?

  * 🙋 They aren't; classes are just syntactical sugar for constructors.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 5. Instructor Demo: Subclasses (5 min)

* Open `23-Ins_Subclasses/shape.js` in your IDE and demonstrate the following:

  * The `printInfo()` method will print each key in the newly constructed shape, as follows:
  
    ```js
    printInfo() {
      console.log(`Area: ${this.area}`);
      console.log(`Perimeter: ${this.perimeter}`);
    }
    ```

  * We set `module.exports` equal to the `Shape` class so that we can require it outside of this file, as follows:

    ```js
    module.exports = Shape;
    ```

* Open `23-Ins_Subclasses/rectangle.js` in your IDE and explain the following:

  * We import `Shape` from `shape.js`, as shown in the following example:

    ```js
    const Shape = require('./shape');
    ```

  * 🔑 We use the `extends` keyword to specify that the `Rectangle` class should inherit properties and methods from the `Shape` class, as shown in the following example:

    ```js
    class Rectangle extends Shape {

    }
    ```
  
  * In JavaScript, we can use the `super()` method inside the constructor to call the parent's constructor method and gain access to the parent's properties and methods. 

  * 🔑 In the `constructor()` method, we calculate the area and perimeter and pass them into the `super()` function. `super()` will call the constructor on the parent class, `Shape`, and use `area` and `perimeter`, as follows:
  
    ```js
    constructor(sideA, sideB) {
      const area = sideA * sideB;
      const perimeter = sideA * 2 + sideB * 2;

      super(area, perimeter);
    }
    ```

  * 🔑 Only after calling `super()` can we use `this` to define properties unique to the `Rectangle` shape, as shown in the following example:

    ```js
    this.sideA = sideA;
    this.sideB = sideB;
    ```

  * Because `Rectangle` inherits from `Shape`, we can access the `printInfo()` method from the parent class, as follows:

    ```js
    const rectangle = new Rectangle(12, 9);
    rectangle.printInfo();
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the benefit of inheriting, or extending, classes?

  * 🙋 We can make code more DRY by moving common methods and properties to a parent class.

  * ☝️ How would we build something like this?

  * 🙋 We could refer to this example or use external resources like MDN to find examples of class inheritance.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `24-Stu_Subclasses/README.md`.

### 6. Student Do: Subclasses (15 min) 

* Direct students to the activity instructions found in `24-Stu_Subclasses/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Implement Subclasses

  Work with a partner to implement the following user story:

  * As a developer, I want to extend basic vehicle classes with additional functionality. 

  ## Acceptance Criteria

  * It's done when I have created a `Car` class that extends the `Vehicle` class with the following features:

    * Inherits `id`, `numberOfWheels`, and `sound` from the `Vehicle` class, with `numberOfWheels` set as `4` and `sound` set as `beep`.

    * A `color` property.

    * A `passengers` property, which will hold an array of strings.

    * A `useHorn()` method that prints the car's sound to the console.

    * A `checkPassengers()` method that checks whether there are fewer than four passengers. 
    
      * If there are, print a message of how much room you have left in the car in the console.
      
      * Otherwise, print `"This car only seats 4 people. You have too many passengers!"` in the console.

  * It's done when I have created a `Boat` class that extends the `Vehicle` class with the following features:

    * Inherits `id`, `numberOfWheels`, and `sound` from the `Vehicle` class, with `numberOfWheels` set as `0` and `sound` set as `bwom`.

    * A `type` property.

    * A `crew` property, which will hold an array of strings.

    * A `useHorn()` method that prints the boat's sound to the console.

    * A `crewSoundOff()` method that prints each member of the crew `"reporting for duty!"` to the console.
    
  ## 📝 Notes

  Refer to the documentation: 

  [MDN Web Docs on extends](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How can we add additional methods to the `Boat` class after it has been created?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 7. Instructor Review: Subclasses (10 min)  

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with subclasses? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `extends`

  * ✔️ `super()`

  * ✔️ Class methods

* Open `24-Stu_Subclasses/Solved/vehicle.js` in your IDE and explain the following: 

  * We can keep a lot of the information that is shared between different types of vehicles in the `Vehicle` class. Note the different properties and the `printInfo()` method, as shown in the following example:

    ```js
    class Vehicle {
      constructor(id, numberOfWheels, sound) {
        this.id = id;
        this.numberOfWheels = numberOfWheels;
        this.sound = sound;
      }

      printInfo() {
        console.log(`This vehicle has ${this.numberOfWheels} wheels`);
        console.log(`This vehicle has an id of ${this.id}`);
      }
    }
    ```

* Open `24-Stu_Subclasses/Solved/car.js` in your IDE and explain the following:

  * 🔑 We bring in the `Vehicle` class so that we can use the `extends` keyword to create the `Car` class, as follows:

    ```js
    const Vehicle = require('./vehicle');

    class Car extends Vehicle { 

    }
    ```

  * 🔑 `super()` is called so that EVERY `Vehicle` that is a `Car` has four wheels and makes the `beep` sound. In addition, we add the `color` and `passengers` properties to the `Car`, as shown in the following example:

    ```js
    constructor(id, color, passengers) {
      super(id, 4, 'beep');
      this.color = color;
      this.passengers = passengers;
    }
    ```

  * For the `useHorn()` method, we can still access `sound` even though we did not define it in the `Car` class&mdash;because `Car` extends `Vehicle`, and we called `super()` with `'beep'` as an argument, as shown in the following example:

    ```js
    useHorn() {
      console.log(this.sound)
    }
    ```

  * 🔑 The `checkPassengers()` method checks the number of passengers. If there are more than four passengers, we print a message to the console. If there are fewer than four, then we calculate the number of people we can still fit in the car, as shown in the following example:

    ```js
    checkPassengers() {
      if (this.passengers.length > 4) {
        console.log(
          'This car only seats 4 people. You have too many passengers!'
        );
      } else {
        console.log(`You have room for ${4 - this.passengers.length} people.`);
      }
    }
    ```

* Open `24-Stu_Subclasses/Solved/boat.js` in your IDE and explain the following:

  * Just like the `Car` class, we need to require `Vehicle` so that we can create the `Boat` class. Everything else is similar to the `Car` class.

  * 🔑 We use the `crewSoundOff()` method to iterate through the `boatPassengers` array and print each member reporting for duty in the console, as shown in the following example:

    ```js
    crewSoundOff() {
      this.crew.forEach((member) => {
        console.log(`${member.name} reporting for duty!`);
      });
    }
    ```

* Navigate to `24-Stu_Subclasses/Solved` and run `node car.js` in your command line to demonstrate the following: 

  * Not only is the `printInfo()` method from the `Vehicle` class printing messages in the console, but the `useHorn()` and `checkPassengers()` methods from the `Car` class are printing their messages&mdash;as shown in the following example:

    ```sh
    ---CAR---
    This vehicle has 4 wheels
    This vehicle has an id of 15
    beep
    This car only seats 4 people. You have too many passengers!
    ```

* Navigate to `24-Stu_Subclasses/Solved` and run `node boat.js` in your command line to demonstrate the following: 

  * Again, not only is the `printInfo()` method from the `Vehicle` class printing messages in the console, but the `useHorn()` and `crewSoundOff()` methods from the `Boat` class are also printing their messages&mdash;as shown in the following example:

    ```sh
    ---BOAT---
    This vehicle has 0 wheels
    This vehicle has an id of 16
    bwom
    Blackbeard reporting for duty!
    Mary Read reporting for duty!
    Henry Morgan reporting for duty!
    Madame Cheng reporting for duty!
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why did we create the `crewSoundOff()` and `checkPassengers()` methods in their own classes instead of handling it in the `Vehicle` class?

  * 🙋 Even though we could handle the logic in `Vehicle`, doing so would defeat the purpose of creating a subclass.  Because each method is specific to the type of subclass, it makes organizational sense to keep that logic in the subclass.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on extends](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 8. Instructor Demo: Multiple Classes (5 min)

* Navigate to `25-Ins_Multiple-Classes` and run `node restaurant.js` from the command line to demonstrate the following:

  * Every order that is added to the queue is displayed.

  * The restaurant's total revenue is displayed.

  * At intervals of one second, each order is prepared.

* Open `25-Ins_Multiple-Classes/item.js` in your IDE and explain the following:

  * The `Item` class only contains the item's title and its price, as follows:

    ```js
    class Item {
      constructor(title, price) {
        this.title = title;
        this.price = price;
      }
    }
    ```

* Open `25-Ins_Multiple-Classes/order.js` in your IDE and explain the following:

  * In the application, each order only has one item.

  * We assign the order a random ID in the `constructor()` method, as follows:

    ```js
    class Order {
      constructor(item) {
        this.item = item;

        this.id = Math.floor(Math.random() * 99) + 1;
      }
    }
    ```

* Open `25-Ins_Multiple-Classes/restaurant.js` in your IDE and explain the following:

  * We import from `./order` and `./item` so that we can use the classes to create new instances later, as shown in the following example:

    ```js
    const Order = require("./order");
    const Item = require("./item");
    ```

  * In the `Restaurant` class, the `takeOrder()` method increases the restaurant's revenue by the price of the order, then adds the order to the restaurant's array of orders. See the following code for an example:

    ```js
    class Restaurant {
      constructor(name) {
        this.name = name;
        this.orders = [];
        this.revenue = 0;
      }

      takeOrder(order) {
        this.revenue += order.item.price;
        this.orders.push(order);
        console.log(`Added #${order.id} to the queue`);
        this.printRevenue();
      }
    }
    ```

  * In the `prepareOrders()` method, we set up an interval to remove an element from the front of the array every second. If there are no more orders left, we clear the interval, as shown in the following example:

    ```js
    prepareOrders() {
      const prepareInterval = setInterval(() => {
        if (this.orders.length === 0) {
          console.log("Finished cooking all orders!");

          clearInterval(prepareInterval);
        } else {
          // Pop the element off the beginning of the array
          const order = this.orders.shift();

          console.log(`#${order.id} has been prepared.`);
        }
      }, 1000);
    }
    ```

  * We create a new `Restaurant` and an array of `items` using the classes, as shown in the following example:

    ```js
    const restaurant = new Restaurant("McJared's");

    const items = [
      new Item("Burger", 5.99),
      new Item("Soda", 3.5),
      new Item("Chips", 2.0)
    ];
    ```

  * We map each item into an `order` object using the `Order` class, as follows:

    ```js
    const orders = items.map(item => new Order(item));
    ```

  * We iterate over the `orders` and add each order to the `restaurant` object before calling `prepareOrders()` to fulfill the orders, as follows:

    ```js
    orders.forEach(order => restaurant.takeOrder(order));

    restaurant.prepareOrders();
    ```

* Ask the class the following question(s):

  * ☝️ Why did we only call `prepareOrders()` once?

  * 🙋 `prepareOrders()` continues to prepare orders until the array is empty.

  * ☝️ Why do we have all of the initialization and method execution in the `restaurant.js` file and not inside `item.js` or `order.js`?

  * 🙋 To maintain separation of concerns. The code is easier to navigate if we give each class a clear responsibility. `Restaurant` is in charge of all operational things within the restaurant, whereas `Order` and `Item` are lightweight constructors.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `26-Stu_Multiple-Classes/README.md`.

### 9. Student Do: Multiple Classes (15 min) 

* Direct students to the activity instructions found in `26-Stu_Multiple-Classes/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 Store Class Not Functioning Correctly

  Work with a partner to resolve the following issues:

  * The `Store` class should have the functionality to process sales and replenish their stock.

  ## Expected Behavior

  * When a user buys an item, the `processProductSale()` method should decrement the store's stock of that item and increase the store's revenue by that item's price. 

  * When the store replenishes its stock of an item, the `replenishStock()` method should increase the store's stock of that item.

  * When I run `npm test`, all of the tests should pass.

  * When I run `npm start`, I should see messages logged in the console stating that the rare toy went out of stock but was replenished.

  * When I run `npm start`, I should see the store revenue at `80.95` at the end of all the transactions.

  ## Actual Behavior

  * When I run `npm test`, all of the tests fail.

  * When I run `npm start`, I see that the rare toy never goes out of stock.

  * When I run `npm start`, I see the store revenue at `0` at the end of all the transactions.

  ## Steps to Reproduce the Problem

  1. Run `npm install` from the command line.

  2. Run `npm test` from the command line to see the tests run.

  3. Run `npm start` from the command line to see transactions logged in the console.

  ## Assets

  The following example demonstrates the expected transactions of the store logged in the console:

    Welcome to Big Als Toy Barn!
    Purchased Action Figure for 14.99
    Purchased Action Figure for 14.99
    Purchased Rare Toy for 17.99
    Purchased Action Figure for 14.99
    Sorry, Rare Toy is out of stock!
    Replenished Rare Toy by 2
    Purchased Rare Toy for 17.99
    The revenue so far is 80.95

  ---

  ## 💡 Hints

  What do the tests in [store.test.js](./Unsolved/test/store.test.js) tell you about the expected functionality of the `Store` class?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is the `static` keyword, and when would we use static methods?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 10. Instructor Review: Multiple Classes (10 min)  

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel using multiple classes? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `processProductSale()` 

  * ✔️ `replenishStock()` 

* Open `26-Stu_Multiple-Classes/Solved/index.js` in your IDE and explain the following: 

  * The rare toy can only be purchased once before it goes out of stock. We can restock by using the `replenishStock()` method, as shown in the following example:

    ```js
    store.processProductSale('Rare Toy'); // <= Should be out of stock

    store.replenishStock('Rare Toy', 2); // <= Should be restocked
    store.processProductSale('Rare Toy');
    ```

  * Also, at the end of all the transactions, the store's revenue should be `80.95`, as follows:

    ```js
    store.printRevenue(); // <= Should be 80.95
    ```

* Open `26-Stu_Multiple-Classes/Solved/store.js` in your IDE and explain the following:

  * We can create a new store by passing in the `name` and `stock` properties. The constructor will set `revenue` to `0`.

  * 🔑 In the `processProductSale()` method, we loop through each stock item in the store. Once we've found one with a name that matches the item we want to process, we decrease its count by one and increase the store's revenue by the price of the item. See the following code for an example:

    ```js
    processProductSale(name) {
      this.stock.forEach(item => {
        if (item.name === name) {
          if (item.count > 0) {
            item.count--;
            this.revenue += item.price;
            console.log(`Purchased ${item.name} for ${item.price}`);
          } else {
            console.log(`Sorry, ${item.name} is out of stock!`);
          }
        }
      });
    }
    ```

  * 🔑 In `replenishStock()` we find the matching item by name and increase its count by the specified number, as follows:

    ```js
    replenishStock(name, count) {
      this.stock.forEach(item => {
        if (item.name === name) {
          item.count += count;
          console.log(`Replenished ${item.name} by ${item.count}`);
        }
      });
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why did we write the store initialization and product processing in a separate `index.js` file instead of including it inside `store.js`?

  * 🙋 We break away from `store.js` in this activity so that we can run isolated unit tests. If we included all of the method calls in `store.js`, then all of those method calls would run when we try to test individual methods in `store.js`.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `27-Evr_Git-Stash-Pop/README.md`.

### 11. Everyone Do: git stash and pop (20 min)

* Open the [Git documentation on stashing](https://www.git-scm.com/docs/git-stash) in your browser and explain the following:

  * `git stash` saves your uncommitted changes in a non-destructive manner, then reverts those changes from your working copy.

* Direct students to the activity instructions found in `27-Evr_Git-Stash-Pop/README.md`.

* While everyone is working on the activity, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

* To demonstrate `git stash`, edit some of the files in the class repository, if you haven't already.

* Open your command line and demonstrate the following:

  * Running `git status` shows that there are untracked changes.

  * Running `git stash` will set aside those changes in the stack.

  * Running `git stash pop` will reapply those changes.
  
* Answer any questions before students go on break.

### 12. BREAK (30 min)

### 13. Instructor Demo: Mini-Project (5 min) 

* Navigate to `28-Stu_Mini-Project/Main` from the command line, run `npm install` and `npm start`, and demonstrate the following:

  * The user is presented with a series of underscores that represent a word for them to guess.

  * The user can input a letter, and the game will inform them whether they are correct or incorrect.

  * The game ends when the user guesses every letter or runs out of guesses.

* Navigate to `28-Stu_Mini-Project/Develop` from the command line, run `npm install` and `npm run test`, and explain the following:

  * The `develop` version of the game does not work, because the `Word` and `Letter` classes have not been completed.

  * 🔑 We have tests for both of these classes that currently fail.

* Explain that the main game logic is already in place. Once the `Word` and `Letter` classes have been written, students can run `npm start` to play the game.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Which test should we focus on fulfilling first?

  * 🙋 The `Letter` test, because the `Word` class will need to leverage the `Letter` class.

  * ☝️ How can we know what the `Word` and `Letter` classes should look like?

  * 🙋 The tests will outline expectations for the methods used.

* Answer any questions before allowing students to start the mini-project.

### 14. Student Do: Mini-Project (60 min)

* Direct students to the activity instructions found in `28-Stu_Mini-Project/README.md`.

* Break your students into groups that will work together on this activity.

  ```md
  # 🏗️ Build Word-Guessing Game

  Work with a partner to implement the following user story:

  * As a user, I want to be able to play a word-guessing game from the command line.

  ## Acceptance Criteria

  * It's done when the `Letter` and `Word` classes fulfill the tests in the `tests` folder.

  * It's done when the user can run the command `npm start` to play the game.

  ---

  ## 💡 Hints

  How do the tests suggest how each method and class should be written?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What does the `chalk` npm package do?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 15. Instructor Review: Mini-Project  (10 min)  

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with this mini-project? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ Class syntax

  * ✔️ Array methods

* Open `28-Stu_Mini-Project/Main/Letter.js` in your IDE and explain the following: 

  * 🔑 In the constructor, we determine whether a character is not a number or a letter. If not, make it visible right away, as shown in the following example:

    ```js
    class Letter {
      constructor(char) {

        this.visible = !/[a-z1-9]/i.test(char);
        this.char = char;
      }
    }
    ```

  * In the `toString()` method, we return the character if `this.visible` is `true`. Otherwise, we return a blank underscore, as shown in the following example:

    ```js
    toString() {
      if (this.visible === true) {
        return this.char;
      }
      return "_";
    }
    ```

  * In the `guess()` method, we set `this.visible` to `true` if the incoming character matches the object's own `char` property, as follows:

    ```js
    guess(charGuess) {
      if (charGuess.toUpperCase() === this.char.toUpperCase()) {
        this.visible = true;
        return true;
      }

      return false;
    }
    ```

* Open `28-Stu_Mini-Project/Main/Word.js` in your IDE and explain the following: 

  * 🔑 In the constructor, we create a new `Letter` object for each character in the word string, as follows:

    ```js
    class Word {
      constructor(word) {
        this.letters = word.split("").map(char => new Letter(char));
      }
    }
    ```

  * 🔑 The `getSolution()` method returns a string of all of the solved letters joined together, as follows:

    ```js
    getSolution() {
      return this.letters
        .map(letter => letter.getSolution())
        .join("");
    }
    ```

  * 🔑 The `guessLetter()` method checks whether the user guessed correctly by running `guess()` on every letter object, as shown in the following example:

    ```js
    guessLetter(char) {
      let foundLetter = false;
      this.letters.forEach(letter => {
        if (letter.guess(char)) {
          foundLetter = true;
        }
      });
      
      return foundLetter;
    }
    ```

  * 🔑 The `guessedCorrectly()` method uses the `every()` array method to only return true if `letter.visible` is true for every letter, as shown in the following example:

    ```js
    guessedCorrectly() {
      return this.letters.every(function(letter) {
        return letter.visible;
      });
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How did the tests help guide you in writing the classes?

  * 🙋 They defined the expectations for what each method should do or return.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) and the [Jest API documentation](https://jestjs.io/docs/en/api), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 16. Instructor Demo: Introduce Challenge (5 min)

* Navigate to `02-Challenge/Main` and run `node app.js` from the command line to demonstrate the following:

  * You will build a command-line application that generates information about a software engineering team. The application will prompt the user for information about the team manager and then about the team members. 
  
  * When we run the application using `node index.js`, we will receive the following output from Inquirer: 

    ```bash
    Please build your team
    ? What is the team manager's name? Xander
    ? What is the team manager's id? 25
    ? What is the team manager's email? Xander@gmail.com
    ? What is the team manager's office number? 1231231234
    ? Which type of team member would you like to add? Engineer
    ? What is your engineer's name? Alex
    ? What is your engineer's id? 5
    ? What is your engineer's email? alex@2u.edu
    ? What is your engineer's GitHub username? Alex
    ? Which type of team member would you like to add? I don't want to add any more team members
    ```
  
  * The project must include the classes `Employee`, `Manager`, `Engineer`, and `Intern`. The tests for these classes in the `tests` directory must all pass. 

  * Additionally, the submitted assignment should include a tests directory that will contain a test for `Employee`, `Engineer`, `Intern`, and `Manager`
  
  * Each test should verify that the user can get names via `getName()`, get ids via `getId()`, get roles via `getRole()`, and also be instantiated with the constructor.
  
  * These tests will ensure that the methods return the expected data. The final file structure of your project should look something like the following example:

    ```bash
    .
    ├── __tests__
    │   ├── Employee.test.js
    │   ├── Engineer.test.js
    │   ├── Intern.test.js
    │   └── Manager.test.js
    ├── dist
    │   ├── style.css
    │   └── team.html
    ├── index.js
    ├── lib
    │   ├── Employee.js
    │   ├── Engineer.js
    │   ├── Intern.js
    │   └── Manager.js
    ├── output
    │   └── team.html
    ├── package.json
    ├── src
    │   └── page-template.js
    ``` 

  * This application will take in user input and generate an HTML webpage that displays summaries for each person and outputs it to `/output/team.html`.
  
  * You can find a mockup of what that webpage should look like in the `02-Challenge/Assets` directory. 

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 We are learning how to write code that is readable, reliable, and maintainable. We will use Inquirer, the `fs` module, and Jest to test the application.

  * ☝️ How does this project build off or extend previously learned material?

  * 🙋 This exercise offers us more experience with classes, subclasses, and testing. It also allows us to practice writing JavaScript in Node.js.

  * ☝️ How does this project relate to your career goals?

  * 🙋 Object-oriented programming is universal across programming languages, so it will serve you well in any area of the industry. Additionally, test-driven development is becoming more and more popular, which will make you a competitive candidate in applicant pools.

* Ask TAs to direct students to the Challenge Requirements found in `02-Challenge/README.md`.

* Answer any questions before moving onto flex time.

### 17. FLEX (40 min)

* This time can be utilized for reviewing key topics learned so far in this module or getting started on the Challenge.

### 28. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
