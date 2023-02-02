# Class
Confused yet? Prototype is a little weird and hard to read unless you really understand your prototypal inheritance. No one really liked using the prototype way of adding methods, so ES6 JavaScript gave us the **class** keyword. However, classes in JavaScript are not true classes, they are syntactic sugar. 

Under the hood, it is still using the old prototype method. They are in fact just "special functions" with one big difference; functions are hoisted and classes are not. You need to declare your class before it can be used in your codebase. 

Classes also come with a new method, the constructor that creates and instantiates an object created with **class**. Classes are able to be extended upon using the extends keyword, allowing subclasses to be created. 

If there is a **constructor** present in the extended class, the **super** keyword is needed to link the constructor to the base class. 

You can check if something is inherited from a class by using the keyword **instanceof** to compare the new object to the class.

```js
class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return `attack with ${this.weapon}`;
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    // pulls in name and weapon from Character
    this.type = type;
  }
}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }
  enrage() {
    return `double attack power`;
  }
}

const legolas = new Elf("Legolas", "high", "bow");
const gruul = new Ogre("Gruul", "club", "gray");

legolas.attack(); // attack with bow
gruul.enrage(); // double attack power
gruul.attack(); // attack with club

legolas instanceof Elf; //true
gruul instanceof Ogre; //true
```

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.