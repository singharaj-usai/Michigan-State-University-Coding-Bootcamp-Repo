# One Edit Away

In this activity, you will create a function that takes in two strings and returns true if they are exactly one character edit away from each other, else return false.

## Instructions

* Open [Unsolved/one-edit-away.js](Unsolved/one-edit-away.js) in your code editor. **This is the only file you will modify in this activity.**

  * In this file, you will write code in the body of the `oneEditAway` function to achieve the following:

    * Return `true` if the strings are one character edit away from each other, else return `false`.

    * For example, if given the following strings:

       ```js
       var str1 = "Hello";
       var str2 = "Hexlo";
       ```

    * The following should be returned:

       ```js
       true;
       ```

    * Because the "x" in the second string could be edited to an "l" to make the strings the same.

    * Given the following strings:

       ```js
       var str1 = "wo";
       var str2 = "wow";
       ```

    * The following should be returned:

       ```js
       true;
       ```

    * Because a "w" could be added to the end of the first string to make the strings match.

    * Given the following strings:

       ```js
       var str1 = "hello";
       var str2 = "hexxo";
       ```

    * The following should be returned:

       ```js
       false;
       ```

    * Because it would require more than one edit to make the strings match.

     * Given the following strings:

       ```js
       var str1 = "hello";
       var str2 = "hello";
       ```

    * The following should be returned:

       ```js
       false;
       ```

    * Because the strings are the same, they are no edits away. We only return `true` if the strings are _exactly_ one edit away.

* You can check to see if your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

  * Functions that _pass_ the tests will be denoted with a **green check mark**.

  * Functions that _fail_ the tests will be denoted with a **red x and an error message**.

### Hints

* Think about different edits that can be made to a string. Besides changing a letter to another letter, what other ways can a string be edited?

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
