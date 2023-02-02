# Merge Sort - The Interviewer

As the interviewer, it is your job to properly state the problem to the interviewee and the output a solution will provide. If an interviewee asks a question, try and answer in a way that encourages them to come to an answer themselves.

## Problem

Write a function that accepts an unsorted array of integers, sorts it, and returns the sorted array using the "Merge Sort" algorithm with a Big O complexity of `O(n log(n))`. For example, for the following array:

```js
const unsortedArr = [2, 42, 100, 23, 500, 34];
```

We would receive an array like this in return:

```js
const sortedArr = [2, 23, 34, 42, 100, 500];
```

- - - 

## Notes to the Interviewer

This is a good question to ask candidates to test their understanding of recursion.

The key to understanding this algorithm is to understand that the array is recursively split into smaller arrays and then merged back together by comparing the values of one to the other. Like the quick sort, it sorts the array over time by sorting smaller pieces of it at a time and then concatenating them all back together in the form of a sorted array.

Allow the candidate a few moments to gather their thoughts around a solution or quickly research a potential solution, answering any questions as they arise. Spend this time reviewing the solution to help support your prompts to the candidate. 

## Solutions

Use the comments in the following solution code to help guide with the prompts:

* [merge-sort.js](merge-sort.js)

## Prompts from the Interviewer

Use these prompts to help guide a candidate to a solution without giving away the answer as they work through the question:

* **Prompt**: How would we get the middle point of an array? Can we simply split the array's length in half? 

* **Ask If**: Ask this question to candidates as they begin to outline their solution.

* **Candidate Explains Solution**: We can simply split the array's length in half and use that as the index, but we'll want to floor the value first just in case there is an odd number of elements in the array.

- - -

* **Prompt**: When merging two arrays together, do we need to loop through every index of each array?  

* **Ask If**: Ask this question to candidates that may not have the correct conditions in place for merging the arrays.

* **Candidate Explains Solution**: No, we will loop through both arrays until there isn't a next index to check in one of them. We'll get through one array, but the other one will have leftover values that will be concatenated onto the output array.

- - -

* **Prompt**: How will the function know when to stop splitting the input array into smaller arrays for comparison and sorting?

* **Ask If**: Ask this question to candidates that don't see where the exit condition needs to be placed.

* **Candidate Explains Solution**: It will know to stop splitting the input array and return it as-is when there is only one element left in the array.

- - -

* **Prompt**: What would be a good reason to use a merge sort algorithm compared to other sorting algorithms? What would be a reason NOT to use one?

* **Ask If**: Ask this question if the candidate has come to a solution and can explain how it works.

* **Candidate Explains Solution**: A good reason to use a merge sort algorithm is that its Big O complexity in a worst-case scenario is still `O(n log(n))`, whereas some other algorithms may see a Big O complexity of `O(n^2)`, making them slower. A reason to not use this algorithm is that it takes up more space in memory because it is creating and storing numerous arrays. 

- - -
© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
