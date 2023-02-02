# Smallest Difference

In this activity, you will write code to create a function that takes in two sorted arrays of integers. Your function should return a new two element array containing one number from each sorted array with the smallest difference.

## Instructions

* Open [03-smallest-difference/Unsolved/smallest-difference.js](./Unsolved/smallest-difference.js) in your code editor; this is the only file you will modify in this activity.

  * In this file, you will write code in the body of the `smallestDifference` function to achieve the following:

    * Return a two-element array that contains the integers from both arrays with the smallest distance.

    * For example, given the following arrays:

    ```js
    var arr1 = [1, 6, 7, 9];
    var arr1 = [8, 9, 10, 11, 12, 13];
    ```

    * The following should be returned since both arrays contain the number `9` and the difference between same numbers is `0`:

    ```js
    [9, 9];
    ```

    * Given the following arrays:

    ```js
    var arr1 = [2, 4, 6, 8, 15, 20];
    var arr2 = [17, 25, 30, 47];
    ```

    * The following should be returned since the difference between `15` and `17` is `2`, the smallest difference between any two numbers across the arrays:

    ```js
    [15, 17];
    ```

    * Assume each array will contain at least one integer.

* You can check to see if your function works properly by opening [03-smallest-difference/Unsolved/test.html](./Unsolved/test.html) in your web browser.

  * Functions that pass the tests will be denoted with a green check mark.

  * Functions that fail the tests will be denoted with a red x and an error message.

### Hints

* How can you use the fact that the arrays are sorted to your advantage?

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
