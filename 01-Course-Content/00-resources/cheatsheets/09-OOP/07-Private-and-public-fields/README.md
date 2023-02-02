# Private and public fields
Most class based languages have the ability to create either public or private fields within a class. 

Adding these to classes in JavaScript is still an experimental feature in development. 

Support in browsers is limited, but can be implemented with systems like Babel. 

Public declarations are set above the constructor and can be used within the class, but do not get added to a new instance. 

The **private declarations** are set with the **#** sign in front of the variable and are only accessible within that class, they cannot be accessed or changed from outside.

```js
// public declarations
class Rectangle {
  height = 0;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// private declarations
class Rectangle {
  #height = 0;
  #width;
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
}
```

So, did we obtain perfect object oriented programming? Well, that is up for debate. It is really up to you the developer to decide which style of writing you like best. 

We did learn that object oriented programming helps make you code more understandable, easy to extend, easy to maintain, memory efficient, and DRY!

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.