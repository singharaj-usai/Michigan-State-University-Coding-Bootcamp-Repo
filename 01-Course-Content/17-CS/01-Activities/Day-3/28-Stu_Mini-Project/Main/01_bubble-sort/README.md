# Bubble Sort - The Interviewer

As the interviewer, it is your job to properly state the problem to the interviewee and the output a solution will provide. If an interviewee asks a question, try and answer in a way that encourages them to come to an answer themselves.

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

## Notes to the Interviewer

This is a good mid-level interview question that will test if the candidate can visualize a problem and walk through the steps to a solution. There are multiple ways to get to this solution, so don't immediately course correct if the candidate is going in one direction over another. If it's a less efficient solution and time remains, prompt candidate to see if they can think of another way of solving it.

Allow the candidate a few moments to gather their thoughts around a solution or quickly research a potential solution, answering any questions as they arise. Spend this time reviewing the solution to help support your prompts to the candidate. 

## Solutions

Use the comments in the following solution code to help guide with the prompts:

* [bubble-sort.js](bubble-sort.js)

* [bubble-sort-force.js](bubble-sort-force.js)

## Prompts from the Interviewer

Use these prompts to help guide a candidate to a solution without giving away the answer as they work through the question:

* **Prompt**: Can you think of a way to solve this problem with force?

* **Ask If**: Ask this question to candidates who have trouble getting started on the question on their own.

* **Candidate Explains Solution**: The forced solution is to take a select an element in the array one index at a time and loop through the rest of the array to compare and swap values when needed.

* **Note**: This is very slow for large input arrays, so it's not the _best_ answer, but it's a good start.

- - -

* **Prompt**: How would we know if a value in the array needs to be swapped and sorted?

* **Ask If**: Ask this question to candidates that are having a hard time visualizing what needs to be done.

* **Candidate Explains Solution**: We want the candidate to be able to identify an unsorted element by checking if it's less than or greater than an element later in the array.

* **Follow-Up**: What happens when we identify a value that should be swapped with another?

* **Note**: Use this to nudge candidate into using some sort of swap functionality with a `tmp` variable to store data and switch values.

- - -

* **Prompt**: If we don't want to use the force method and implement one that's a bit more efficient, how can we know if the array is sorted early?

* **Ask If**: Ask this if candidate opted to not go with the force route and wanted to optimize.

* **Candidate Explains Solution**: Strong candidates will be able to explain that there is a need for a flag variable that let's a loop know if it's done or not. 

- - -
© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
