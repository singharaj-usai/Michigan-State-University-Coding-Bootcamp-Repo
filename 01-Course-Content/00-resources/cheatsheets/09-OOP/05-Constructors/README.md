# Constructor Functions
Using **Object.create** is true prototypal inheritance, the code is cleaner and easier to read. However, you will not see this being used in most programs. 

Before **Object.create** came around, we had the ability to use constructor functions. 

Constructor functions are exactly like the function constructor we talked about above. The number and string functions were constructed and invoked with the **new** keyword and they were capitalized. The **new** keyword actually changes the meaning of this for the constructor function. 

Without **new**, this will point to the window object instead of the object that we just created. It is best practice to capitalize constructor functions to help us identify them and know to use the new keyword. 

Properties added to a constructor function can only be done using the this keyword, regular variables do not get added to the object.

```js
// constructor functions are typically capitalized
function Elf(name, type, weapon) {
  // not returning anything
  // "constructing" a new elf
  this.name = name;
  this.type = type;
  this.weapon = weapon;
}

// to use a constructor function
// the "new" keyword must be used
const dobby = new Elf("Dobby", "house", "cloth");
const legolas = new Elf("Legolas", "high", "bow");

// To add methods we need to add
Elf.prototype.attack = function() {
  // cannot be an arrow function
  // this would be scoped to the window obj
  return `attack with ${this.weapon}`;
};
// This would need to be repeated for each method.

dobby.attack(); // attack with cloth
legolas.attack(); // attack with bow
```

> **Nifty Snippet**: A constructor function in JavaScript is actually just a constructor itself.

```js
// What happens under the hood...
const Elf = new Function(
  'name',
  'type',
  'weapon',
  // the \ n just creates a new line
  // it can be ignored here
  'this.name = name \n
  this.type = type \n
  this.weapon = weapon`
  )

const dobby = new Elf('Dobby', 'house', 'cloth')
// This will work the same as our code above.
```

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.