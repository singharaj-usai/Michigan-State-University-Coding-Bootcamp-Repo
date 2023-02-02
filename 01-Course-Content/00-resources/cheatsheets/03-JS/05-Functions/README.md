# Functions
JavaScript functions are blocks of code that perform a certain task. A basic function looks like this:

```js
function name(parameter1, parameter2, parameter3) {
    // what the function does
}
```

As you can see, it consists of the **function** keyword plus a name. The function’s parameters are in the brackets and you have curly brackets around what the function performs. You can create your own, but to make your life easier – there are also a number of default functions.

## Outputting Data
A common application for functions is the output of data. For the output, you have the following options:

* alert() — Output data in an alert box in the browser window
* confirm() — Opens up a yes/no dialog and returns true/false depending on user click
* console.log() — Writes information to the browser console, good for debugging purposes
* document.write() — Write directly to the HTML document
* prompt() — Creates a dialogue for user input

## Global Functions
Global functions are functions built into every browser capable of running JavaScript.

* decodeURI() — Decodes a [Uniform Resource Identifier (URI)](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier) created by **encodeURI** or similar
*  decodeURIComponent() — Decodes a URI component
*  encodeURI() — Encodes a URI into UTF-8
encodeURIComponent() — Same but for URI components
*  eval() — Evaluates JavaScript code represented as a string
*  isFinite() — Determines whether a passed value is a finite number
*  isNaN() — Determines whether a value is NaN or not
*  Number() —- Returns a number converted from its argument
*  parseFloat() — Parses an argument and returns a floating-point number
*  parseInt() — Parses its argument and returns an integer

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.