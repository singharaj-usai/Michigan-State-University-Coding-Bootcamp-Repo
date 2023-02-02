### Pre-class Drill

* 20 min before class starts write the following problem on the board or Slack it out:

```js
Write a function that takes an array of numbers and a function as parameters. The function paremeter should return true if the input meets a certain condition or false otherwise. Your function should return true if the function parameter returns true for _any_ of the array elements in the array parameter or false otherwise. 

Ex:

Input: [1,2,3]  function(num){return num === 2}
Output: true

Input: [1,5,3]  function(num){return num === 2}
Output: false

Input: [1,2,3]  function(num){return num % 2 === 0}
Output: true

Input: [1,5,3]  function(num){return num % 2 === 0}
Output: false
```
 
* After 15 minutes take 5 minutes to go over the solution. You should start recording when going over the answer and Slack out the answer at the end of office hours before class starts.

* Ask students if they found a solution and go over their solution (or the ones below if no student-solution is provided). 

* Be sure to praise students who provide a solution even if it isn't fully correct. Discuss its merits and potential pitfalls.

```js
const any = function(arr, cb){
  const isTrue = false;

  for (let i = 0; i < arr.length; i++){
    const cbOutput = cb(arr[i]);
    if(cbOutput){
      isTrue = cbOutput;
    }
  }
  
  return isTrue;
}
```

* Time permitting, take this opportunity to introduce students to the `.some()` array method and the term `predicate function`.

* Remind students of the usefulness of array methods and encourage them to familiarize themselves with as many as possible.  `https://www.w3schools.com/jsref/jsref_obj_array.asp`
 
* Time permitting, discuss some use-cases for the `.some()` function.
 