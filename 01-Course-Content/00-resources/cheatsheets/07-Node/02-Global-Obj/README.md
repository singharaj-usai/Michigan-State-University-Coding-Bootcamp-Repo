# Node.JS Global Object
In Node, we have a **global** object that we can always access. Features that we expect to be available everywhere live in this global object.

For example, to have some code execute after 5 seconds we can use either **global.setTimeout** or just **setTimeout**. The global keyword is optional.

```js
setTimeout(() => { 
  console.log('hello');
}, 5000);
```

Probably the most famous global is **global.console.log** which we write as just **console.log**.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.