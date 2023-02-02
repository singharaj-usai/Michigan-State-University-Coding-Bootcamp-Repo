# Merge Sort - The Candidate

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

The merge sort algorithm requires a bit of knowledge in recursion and both time and space complexity for an algorithm. The algorithm works by breaking the input array in half over and over again until the array's values are all in their own array. They are then compared to one another and merged back together in order.

Take a moment to assess the question being asked and restate it to the interviewer to ensure that you understand the expectations. It's okay to ask questions for clarification during an interview, as long as the question isn't seeking for the direct answer to the question. Some interview questions are purposely stated in a vague fashion to force a job candidate to ask follow-up questions for clarification, it shows that the candidate is thinking critically about the problem.

For this exercise, it's okay to take a moment and do some research on the question asked. In a real technical interview, however, expect to not have that ability. Use Google to search for information or examples of implementation, but don't copy and paste a solution, work your way through it.

Take a few moments to gather your thoughts and take the interviewer's questions as guides to help you come to a solution. You are not expected to have an answer immediately and it's sometimes okay to not come to a complete solution, interviewers want to see your process just as much as your results, so don't forget to pseudocode and verbally explain your thought process! 

## Workspace

Use the starter code provided to help outline and code your solution:

* [merge-sort.js](merge-sort.js)

## Potential Prompts from the Interviewer

Here are some prompts an interviewer may ask to ensure you understand the problem and can reach a solution. Use these to help guide yourself to a potential solution and practice answering these types of questions.

* **Prompt**: How would we get the middle point of an array? Can we simply split the array's length in half? 

* **Good Answer From Candidate**: We can simply split the array's length in half and use that as the index, but we'll want to floor the value first just in case there is an odd number of elements in the array.

* **Note**: Unlike a quick sort algorithm, we are more concerned about breaking our array in half as many times as possible and then sorting it after. To get the middle value, however, we'll want to make sure it's a whole number because it needs to represent an index in the array.

- - -

* **Prompt**: When merging two arrays together, do we need to loop through every index of each array?  

* **Good Answer From Candidate**: No, we will loop through both arrays until there isn't a next index to check in one of them. We'll get through one array, but the other one will have leftover values that will be concatenated onto the output array.

* **Note:** There is no guarantee that both arrays will be the same length, which is fine. The point of this merge functionality is to compare two arrays and create a new array out of it with all of the values merged in order.

- - -

* **Prompt**: How will the function know when to stop splitting the input array into smaller arrays for comparison and sorting?

* **Good Answer From Candidate**: It will know to stop splitting the input array and return it as-is when there is only one element left in the array.

* **Note**: We need to check if the array only has one element left or less before attempting to split it again. The `mergeSort()` function will stop recursively calling itself once every single element in the input array has been split.

- - -

* **Prompt**: What would be a good reason to use a merge sort algorithm compared to other sorting algorithms? What would be a reason NOT to use one?

* **Good Answer From Candidate**: A good reason to use a merge sort algorithm is that its Big O complexity in a worst-case scenario is still `O(n log(n))`, whereas some other algorithms may see a Big O complexity of `O(n^2)`, making them slower. A reason to not use this algorithm is that it takes up more space in memory because it is creating and storing numerous arrays. 

* **Note:** If the machine running this algorithm is powerful enough, having a larger space complexity will be okay if it means a more stable time complexity of `O(n log(n))`. Other sorting algorithms take up less memory during execution but may take longer to complete.

- - -
© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
