# Quick Sort - The Candidate

As the candidate it is your job to properly restate the problem and expected output to ensure you understand what you have been asked to accomplish. If the interviewer prompts you with questions throughout each question, it is not in bad faith, but rather a nudge in the right direction to help your thought process. 

## Problem

Write a function that accepts an unsorted array of integers, sorts it, and returns the sorted array using the "Bubble Sort" algorithm with a Big O complexity of `O(n^2)`. For example, for the following array:

```js
const unsortedArr = [2, 42, 100, 23, 500, 34];
```

We would receive an array like this in return:

```js
const sortedArr = [2, 23, 34, 42, 100, 500];
```

- - - 

## Notes to the Candidate

The quick sort algorithm requires a bit of knowledge in how to handle recursion and how to visualize a binary tree. The key to learning it is to take it step-by-step and an visualize what the data looks like at each step.

Take a moment to assess the question being asked and restate it to the interviewer to ensure that you understand the expectations. It's okay to ask questions for clarification during an interview, as long as the question isn't seeking for the direct answer to the question. Some interview questions are purposely stated in a vague fashion to force a job candidate to ask follow-up questions for clarification, it shows that the candidate is thinking critically about the problem.

For this exercise, it's okay to take a moment and do some research on the question asked. In a real technical interview, however, expect to not have that ability. Use Google to search for information or examples of implementation, but don't copy and paste a solution, work your way through it.

Take a few moments to gather your thoughts and take the interviewer's questions as guides to help you come to a solution. You are not expected to have an answer immediately and it's sometimes okay to not come to a complete solution, interviewers want to see your process just as much as your results, so don't forget to pseudocode and verbally explain your thought process! 

## Workspace

Use the starter code provided to help outline and code your solution:

* [quick-sort.js](quick-sort.js)

## Potential Prompts from the Interviewer

Here are some prompts an interviewer may ask to ensure you understand the problem and can reach a solution. Use these to help guide yourself to a potential solution and practice answering these types of questions.

* **Prompt**: Why is it okay to select a pivot value at random and not simply taking the value at the middle of the array?

* **Good Answer From Candidate**: The array is likely unsorted, so picking a pivot value at random is just as efficient&mdash;if not more efficient&mdash;than using the value at the middle of the array.

* **Note**: With a quick sort, it is all about sorting the values a little bit at a time by splitting the array into smaller sets, sorting them as smaller sets, and concatenating all of the smaller sets to return the array with the values sorted. The a pivot value is what's used to determine where to split the array.

- - -

* **Prompt**: How can we go about selecting a pivot value out of an array?

* **Good Answer From Candidate**: We can use the JavaScript array `.splice()` method to remove an element from the array and use it as a pivot value.

* **Note**: You may not always recall the specific name to a JavaScript method that needs to be used, that's what Google is for! What's important, however, is that you know what action that tool performs and why it's used in the first place.

- - -

* **Prompt**: Once we get our initial left and right arrays populated, are all of the values sorted?

* **Good Answer From Candidate**: They likely won't be sorted just yet, but we now have two halves that are closer to being sorted amongst themselves. We can run each of them through the same functionality until they're sorted.

* **Note**: This is where recursion comes in. We have our array split into two halves based on the pivot value, which has already done a bit of sorting for us, but they aren't fully sorted just yet. With our smaller sets, however, we can run them each through the quick sort functionality again and continue to split and sort our arrays until they're fully sorted. 

- - -

* **Prompt**: Since we pulled the pivot value out of the array, how do we reinsert it into the array and have it be sorted?

* **Candidate Explains Solution**: Because the array was sorted to the left and right of the pivot value, we can insert it between the two using array concatenation and assume it'll be greater than (or equal to) anything in the left array and less than anything in the right array.

* **Note**: The pivot value for each iteration of the quick sort function has an important role because it is what connects the values lesser than or equal to it in the left array to the values greater than it in the right array.

- - -
© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
