# Factory Functions
As you can see, this code is already getting very repetitive and is not maintainable with only 1 character type. Imagine adding more characters, things would get out of control quickly. So, another way to create objects was introduced, **factory functions**. Factory functions return a new object every time they are ran. This could improve the code somewhat.

```js
function createElf(name, type, weapon) {
  return {
    name: name,
    type: type,
    weapon: weapon,
    say() {
      return `Hi, my name is ${name}, I am a ${type} elf.`;
    },
    attack() {
      return `${name} attacks with ${weapon}`;
    }
  };
}

const dobby = createElf("Dobby", "house", "cloth");
const legolas = createElf("Legolas", "high", "bow");

dobby.say(); // Hi, my name is Dobby, I am a house elf.
legolas.say(); // Hi, my name is Legolas, I am a high elf.
dobby.attack(); // Dobby attacks with cloth.
legolas.attack(); // Legolas attacks with bow.
```

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.