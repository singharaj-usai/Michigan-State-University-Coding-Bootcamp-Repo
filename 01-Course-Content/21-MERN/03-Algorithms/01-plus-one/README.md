# Plus One

In this activity, you will create a function that takes in an array of digits representing a non-negative integer and add 1 to it. The digits are arranged such that the most significant digits are on the left and each element in the array contains a single integer digit.

## Instructions

* Open [Unsolved/plus-one.js](Unsolved/plus-one.js) in your code editor. **This is the only file you will modify in this activity.**

  * In this file, you will be writing code in the body of the `plusOne` function to achieve the following:

    * Add 1 to the digits array, then modify and return the original array.

    * Do not use any Array methods, such as `.join` or `.split`.

    * For example, given the following array:

       ```js
       var digits = [1, 2, 3];
       ```

    * The following should be returned:

       ```js
       [1, 2, 4];
       ```

    * Given the following array:

       ```js
       var digits = [9];
       ```

    * The following should be returned:

       ```js
       [1, 0];
       ```

* You can check to see if your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

  * Functions that _pass_ the tests will be denoted with a **green check mark**.

  * Functions that _fail_ the tests will be denoted with a **red x and an error message**.

### Hints

* How will you handle the case where a digit overflows (i.e., becomes more than 9)?

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
