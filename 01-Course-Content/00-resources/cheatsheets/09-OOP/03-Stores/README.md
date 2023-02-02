# Stores
This is a step in the right direction, but if we added more characters, we would run into some of the same issues again. Not only is the code not DRY, the attack method is being created and taking up memory space for every new elf. This is not very efficient. How do we solve this? Well, we could separate the methods out into a store.

```js
const elfMethodsStore = {
  attack() {
    return `attack with ${this.weapon}`;
  },
  say() {
    return `Hi, my name is ${this.name}, I am a ${this.type} elf.`;
  }
};

function createElf(name, type, weapon) {
  return {
    name: name, // old way
    type, // with ES6 assignment, if they are the same name
    weapon
  };
}

// each method has to be assigned to the store method to
// create the __proto__ chain
const dobby = createElf("Dobby", "house", "cloth");
dobby.attack = elfMethodsStore.attack;
dobby.say = elfMethodsStore.say;

const legolas = createElf("Legolas", "high", "bow");
legolas.attack = elfMethodsStore.attack;
legolas.say = elfMethodsStore.say;
```

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.