# Simplify Path

In this activity you will be writing code to create a function that takes in a string representing an absolute file path and then simplifies it, similar to `path.join`.

## Instructions

* Open [Unsolved/simplify-path.js](Unsolved/simplify-path.js) in your code editor -- this is the only file you will modify in this activity.

  * In this file you will be writing code in the body of the `simplifyPath()` function to achieve the following:

    * Return a simplified canonical version of the file path.

      * See the following path for an example:

        ```js
        var path = "/home/";
        ```

      * Given the preceding path, the following should be returned, because the second forward slash is unnecessary:

        ```js
        "/home";
        ```

      * See the following path for another example:

        ```js
        var path = "/../";
        ```

      * Given the preceding path, the following should be returned, because there's no way to `cd ..` from the root directory.

        ```js
        "/";
        ```

      * See the following path for another example:

        ```js
        var path = "/a/./b/../../c/";
        ```

      * We start at folder `a`, then `cd` into folder `b`, which is inside `a`. We come up one level, back to `a`, and up another level, to the root, then go into `c`, which is at the root level. So, given the preceding path, the following should be returned:


        ```js
        "/c";
        ```

      * See the following path for another example:

        ```js
        var path = "/a/../../b/../c//.//";
        ```

      * This is like the previous example, but consecutive instances of `/` are collapsed into one `/`, and a single `.` alone doesn't change directories. So, given the preceding path, the following should be returned:

        ```js
        "/c";
        ```

      * See the following path for another example:

        ```js
        var path = "/a/b/c/d/..";
        ```

      * Given the preceding path, the following should be returned, because we `cd` into `/a/b/c/d/` and then come up one directory: 

        ```js
        "/a/b/c";
        ```

* You can check whether your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

  * Functions that pass the tests will be denoted with a green check mark.

  * Functions that fail the tests will be denoted with a red X and an error message.

### Hints

Examine the examples provided here to make sure that you understand file paths. Experiment in your terminal to learn how changing directories will affect your folder location.

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
