# Left Rotation

In this activity, you will write code to create a function that takes an array of integers and a positive integer as arguments. The function should then rotate the elements of the array to the left by the given number.

## Instructions

1. Open [Unsolved/left-rotation.js](Unsolved/left-rotation.js) in your code editor. **This is the only file you will modify in this activity.**

2. In this file, write code in the body of the `leftRotation` function to achieve the following:

   * Rotate the elements in the given array to the left by the given `positions` number.

     For example, given the following array and `positions` number:

     ```js
     const arr = [1, 2, 3];
     const positions = 2;
     ```

     The given array should be updated to the following:

     ```js
     [3, 1, 2];
     ```

   * If an empty array is provided, the array should not be modified.

3. To complete this problem, simply modify the original array. There is no need to return anything from this function.

4. You can check if your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

   * Functions that pass the tests are denoted with a green checkmark.

   * Functions that fail the tests are denoted with a red x and an error message.

### Hints

* In order to "rotate" an array to the left by one position, remove the first element of the array and add it to the end of the array.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
