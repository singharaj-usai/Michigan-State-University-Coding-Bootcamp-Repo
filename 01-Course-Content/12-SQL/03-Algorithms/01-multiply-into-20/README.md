# Multiply into 20

In this activity, you will be writing code to create a function that takes an array of unique numbers and returns `true` if the product of any two numbers is 20; else returns `false`.

## Instructions

* Open [Unsolved/multiply-into-20.js](Unsolved/multiply-into-20.js) in your code editor -- this is the only file you will modify in this activity.

  * In this file you will be writing code in the body of the `multiplyInto20()` function to achieve the following:

    * Return `true` if any two numbers in the given array multiply into 20; else return `false`.

    * See the following array for an example:

      ```js
      var arr = [3, 4, 5, 7, 9]; // 4 * 5 === 20
      ```

    * Given the preceding array, the following should be returned:

      ```js
      true
      ```

    * See the following array for another example:

      ```js
      var arr = [20, -20, 18, 2, 3, 4]; // no two numbers multiply into 20
      ```

    * Given the preceding array, the following should be returned:

      ```js
      false
      ```

* You can check whether your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

  * Functions that pass the tests will be denoted with a green check mark.

  * Functions that fail the tests will be denoted with a red X and an error message.

### Hints

* This problem can be solved using a nested `for` loop, comparing every number to every other number.

* This problem can also be solved using one loop, applying the same technique used in the previous Character Count and Is Unique problems.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
