# Object.create
Having a store saved us some efficiency in memory, but this was a lot of manual work to assign each method. So, we were given Object.create to help create this chain without having to assign each method.

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
  // this creates the __proto__ chain to the store
  let newElf = Object.create(elfMethodsStore);
  console.log(newElf.__proto__); // { attack: [Function], say: [Function] }
  // this assigns all the methods
  newElf.name = name;
  newElf.type = type;
  newElf.weapon = weapon;
  // this returns the new Elf with everything attached
  return newElf;
}

const dobby = createElf("Dobby", "house", "cloth");
const legolas = createElf("Legolas", "high", "bow");
dobby.attack; // attack with cloth
legolas.attack; // attack with bow
```

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.