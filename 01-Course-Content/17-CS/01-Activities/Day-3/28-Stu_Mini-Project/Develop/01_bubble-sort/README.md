# Bubble Sort - The Candidate

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

The bubble sort algorithm is a more common sorting algorithm one may receive in a technical interview. It is easier to grasp than some other sorting algorithms and allows the candidate to not only implement a solution, but also consider ways to optimize the solution.

Take a moment to assess the question being asked and restate it to the interviewer to ensure that you understand the expectations. It's okay to ask questions for clarification during an interview, as long as the question isn't seeking for the direct answer to the question. Some interview questions are purposely stated in a vague fashion to force a job candidate to ask follow-up questions for clarification, it shows that the candidate is thinking critically about the problem.

For this exercise, it's okay to take a moment and do some research on the question asked. In a real technical interview, however, expect to not have that ability. Use Google to search for information or examples of implementation, but don't copy and paste a solution, work your way through it.

Take a few moments to gather your thoughts and take the interviewer's questions as guides to help you come to a solution. You are not expected to have an answer immediately and it's sometimes okay to not come to a complete solution, interviewers want to see your process just as much as your results, so don't forget to pseudocode and verbally explain your thought process! 

## Workspace

Use the starter code provided to help outline and code your solution:

* [bubble-sort.js](bubble-sort.js)

## Potential Prompts from the Interviewer

Here are some prompts an interviewer may ask to ensure you understand the problem and can reach a solution. Use these to help guide yourself to a potential solution and practice answering these types of questions.

* **Prompt**: Can you think of a way to solve this problem with force?

* **Good Answer From Candidate**: The forced solution is to take a look through the array one index at a time and loop through the rest of the array to compare and swap values when needed.

* **Note**: This is very slow for large input arrays, so it's not the _best_ answer, but it's a good start. This will involve using two loops to check the array at a specific index and compare it to the rest of the values after it in the array, even if it's sorted already.

- - -

* **Prompt**: How would we know if a value in the array needs to be swapped and sorted?

* **Good Answer From Candidate**: We can identify an unsorted element by checking if it's less than or greater than an element later in the array.

* **Note**: We can assume that any value to the left of the current index in the array is already sorted, so we just need to concern ourselves with the values to the right of the current index.

- - -

* **Prompt**: What happens when we identify a value that should be swapped with another?

* **Good Answer From Candidate**: We swap the values by storing one value in a temporary variable and overwriting them at their identified indices in the array.

* **Note**: Some developers will make a specific function to handle swapping values in an array, but it's also okay to do it within the bubble sort algorithm itself. Swapping a value will necessitate a temporary variable to hold one value before it is overwritten by the value it's being swapped with.

- - -

* **Prompt**: If we don't want to use the force method and implement one that's a bit more efficient, how can we know if the array is sorted early?

* **Good Answer From Candidate**: We can use a `while` loop and implement a flag that checks if any values haven't been swapped, indicating that the array is now sorted.

* **Note**: The use of a `while` loop can allow us to avoid unnecessary iterations of the function and escape early if it detects the array is sorted. The way to do this is to set a flag at the beginning of the iteration and change its value only if it finds a value that needs to be swapped.  

- - -
© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
