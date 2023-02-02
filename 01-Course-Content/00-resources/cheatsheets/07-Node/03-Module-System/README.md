# Node.JS Module System
### In Node.js, each file is treated as a separate module. Modules provide us a way of re-using existing code.

## The require Function

We can re-use existing code by using the Node built-in **require()** function. This function imports code from another module.

```js
const fs = require('fs');
fs.readFileSync('hello.txt');

// OR...

const { readFileSync } = require('fs');
readFileSync('hello.txt');
```

## Built-in Modules

Some modules like fs are built in to Node. These modules contain Node-specific features.

**Key built-in modules include:**

* fs -- read and write files on your file system

* path -- combine paths regardless of which OS you're using

* process -- information about the currently running 

* process, e.g. process.argv for arguments passed in or process.env for environment variables

* http -- make requests and create HTTP servers

* https -- work with secure HTTP servers using SSL/TLS

* events -- work with the EventEmitter

* crypto -- cryptography tools like encryption and hashing

## Creating Modules

We can create our own modules by exporting a function from a file and importing it in another module.

```js
// In src/fileModule.js
function read(filename) { }
function write(filename, data) { }

module.exports = {
  read,
  write,
};

// In src/sayHello.js
const { write } = require('./fileModule.js')
write('hello.txt', 'Hello world!');
```

Some Node modules may instead use the shorthand syntax to export functions.

```js
// In src/fileModule.js
exports.read = function read(filename) { }
exports.write = function write(filename, data) { }
```

## ECMAScript Modules

The imports above use a syntax known as CommonJS (CJS) modules. Node treats JavaScript code as CommonJS modules by default. More recently, you may have seen the ECMAScript module (ESM) syntax. This is the syntax that is used by TypeScript.

```js
// In src/fileModule.mjs
function read(filename) { }
function write(filename, data) { }

export {
  read,
  write,
};

// In src/sayHello.mjs
import { write } from './response.mjs';
write('hello.txt', 'Hello world!');
```

We tell Node to treat JavaScript code as an ECMAScript module by using the .mjs file extension. Pick one approach and use it consistently throughout your Node project.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.