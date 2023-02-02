# Quick Sort - The Interviewer

As the interviewer, it is your job to properly state the problem to the interviewee and the output a solution will provide. If an interviewee asks a question, try and answer in a way that encourages them to come to an answer themselves.

## Problem

Write a function that accepts an unsorted array of integers, sorts it, and returns the sorted array using the "Quick Sort" algorithm with a Big O complexity of `O(n log(n))`. For example, for the following array:

```js
const unsortedArr = [2, 42, 100, 23, 500, 34];
```

We would receive an array like this in return:

```js
const sortedArr = [2, 23, 34, 42, 100, 500];
```

- - - 

## Notes to the Interviewer

This is a good question to ask candidates to test their understanding of recursion. It is a more difficult sorting algorithm than a bubble sort, so make sure the candidate can visualize how it works prior to coding a solution.

The key to understanding this algorithm is that we randomly select a value in the array to serve as the "pivot" value. This value will be used to sort the rest of the array's elements by pushing them into new arrays to hold elements lesser than or equal the pivot value (to the left) and elements greater than the pivot value (to the right). We then run those left and right arrays through the same sorting functionality over and over again until the left and right arrays are sorted and then concatenate them together and return the full sorted array. 

Allow the candidate a few moments to gather their thoughts around a solution or quickly research a potential solution, answering any questions as they arise. Spend this time reviewing the solution to help support your prompts to the candidate. 

## Solutions

Use the comments in the following solution code to help guide with the prompts:

* [quick-sort.js](quick-sort.js)

## Prompts from the Interviewer

Use these prompts to help guide a candidate to a solution without giving away the answer as they work through the question:

* **Prompt**: Why is it okay to select a pivot value at random and not simply taking the value at the middle of the array?

* **Ask If**: Ask this question to candidates that are having a hard time understanding the use of a pivot value.

* **Candidate Explains Solution**: The array is likely unsorted, so picking a pivot value at random is just as efficient&mdash;if not more efficient&mdash;than using the value at the middle of the array.

- - -

* **Prompt**: How can we go about selecting a pivot value out of an array?

* **Ask If**: Ask this question to candidates who have trouble with the functionality for removing an element from the array.

* **Candidate Explains Solution**: We can use the JavaScript array `.splice()` method to remove an element from the array and use it as a pivot value.

- - -

* **Prompt**: Once we get our initial left and right arrays populated, are all of the values sorted?

* **Ask If**: Ask this question to candidates that don't fully grasp the need for recursion here.

* **Candidate Explains Solution**: They likely won't be sorted just yet, but we now have two halves that are closer to being sorted amongst themselves. We can run each of them through the same functionality until they're sorted.

- - -

* **Prompt**: Since we pulled the pivot value out of the array, how do we reinsert it into the array and have it be sorted?

* **Ask If**: Ask this question if the candidate is having difficulty visualizing how to return the sorted array.

* **Candidate Explains Solution**: Because the array was sorted to the left and right of the pivot value, we can insert it between the two using array concatenation and assume it'll be greater than (or equal to) anything in the left array and less than anything in the right array.

- - -
© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
