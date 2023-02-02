# Rotation Point

In this activity you will be writing code to create a function that takes in an array of strings. These strings will be in sorted order, but the array might be rotated. Return the index of the rotation, or `-1` if there is none.

## Instructions

* Open [Unsolved/rotation-point.js](Unsolved/rotation-point.js) in your code editor -- this is the only file you will modify in this activity.

  * In this file you will be writing code in the body of the `rotationPoint()` function to achieve the following:

    * If the sorted array has been rotated, return the index of rotation, else return -1. The rotation point will be the first word that is less than the previous word alphabetically.

      * See the following array for an example:

        ```js
        var words = ["cool", "cat"];
        ```

      * Given the preceding array, the following should be returned, because "cat" precedes "cool" in alphabetical order:

        ```js
        1;
        ```

      * See the following array for another example:

        ```js
        var words = ["great", "ostrich", "panther", "ruby", "chosen", "feathers"];
        ```

      * Given the preceding array, the following should be returned, because "chosen" precedes "ruby" in alphabetical order:

        ```js
        4;
        ```

* You can check whether your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

  * Functions that pass the tests will be denoted with a green check mark.

  * Functions that fail the tests will be denoted with a red X and an error message.

### Hints

The process for checking whether one string precedes another alphabetically is similar to checking the order of numbers.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.