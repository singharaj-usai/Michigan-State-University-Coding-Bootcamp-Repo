# Reverse in Place

In this activity, you will write code to create a function that takes an array and reverses the array in place without using the built-in `reverse` method.

> **Note**: To reverse an array "in place" means to reverse the original array without creating a new array. This can be achieved by swapping elements within the original array.

## Instructions

1. Open [Unsolved/reverse-in-place.js](Unsolved/reverse-in-place.js) in your code editor. **This is the only file you will modify in this activity.**

2. In this file, write code in the body of the `reverseInPlace` function to achieve the following:

   * Reverse the array in place without using the built-in `reverse` method.

   * Return the array after it has been reversed.

     For example, given the following array:

     ```js
     const arr = [2, 4, 6, 8];
     ```

     The original `arr` array should be returned, but with its elements in reverse order:

     ```js
     [8, 6, 4, 2]; // this still refers to the original arr array
     ```

3. You can check if your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

   * Functions that pass the tests are denoted with a green checkmark.

   * Functions that fail the tests are denoted with a red x and an error message.

### Hints

* This is more easily achieved by using a `while` loop rather than a `for` loop. For more information, refer to this [documentation on JavaScript while loops](https://www.w3schools.com/js/js_loop_while.asp).

* Think about where each element in an array is moved to when an array is reversed.

* For more information, refer to this [StackOverflow post on swapping array elements](https://stackoverflow.com/questions/872310/javascript-swap-array-elements).

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
