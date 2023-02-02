# Most Songs in Playlist

In this activity you will be writing code to create a function that takes an array of numbers, each representing the duration of a song. You will return the maximum number of songs present in the array that can fit into a 60-minute playlist.

## Instructions

* Open [Unsolved/most-songs-in-playlist.js](Unsolved/most-songs-in-playlist.js) in your code editor -- this is the only file you will modify in this activity.

  * In this file you will be writing code in the body of the `mostSongsInPlaylist()` function to achieve the following:

    * Return the maximum number of elements present in the array, with a maximum sum of 60.

    * See the following array for an example:

      ```js
      var arr = [3, 4, 7, 2]; // 4 element array
      ```

    * Given the preceding array, the sum of `3`, `4`, `7`, and `2` is `16`, which is less than 60. All elements are used, so the answer is `4`.

    * See the following array for another example:

      ```js
      var arr = [4, 2, 5, 3, 1, 1, 2, 3, 4, 2, 5, 6, 3, 2, 4, 7, 3, 2, 3]; // 19 element array
      ```

    * Given the preceding array, the number `18` should be returned because all of the numbers in the array except `7` add up to `55`.

* You can check whether your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

  * Functions that pass the tests will be denoted with a green check mark.

  * Functions that fail the tests will be denoted with a red X and an error message.

### Hints

Wouldn't it be easier if there were a way to organize the array by the smallest to the largest number?

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
