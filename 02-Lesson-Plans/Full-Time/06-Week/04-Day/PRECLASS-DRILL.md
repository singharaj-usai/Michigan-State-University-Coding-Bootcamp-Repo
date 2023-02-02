### Pre-class Drill

* 20 min before class starts write the following problem on the board or Slack it out:

```js
Write a function that takes an array of numbers and a function as parameters. The function paremeter should do something to a numbers (increment, double, decrement, etc) and return the result. Your function should return the array that results from applying the function parameter to each element in the number array. 

Ex:
Input: [1,2,3]  function(num){return num * 2*}
Output: [2,4,6]

Input: [1,2,3]  function(num){return num + 1}
Output: [2,3,4]

Input: [1,2,3] function(num) {return num /2}
Output: [.5, 1. 1.5]

Input: [1,2,3] function(num) {return num - 2}
Output: [-1, 0, 1]
```
 
* After 15 minutes take 5 minutes to go over the solution. You should start recording when going over the answer and Slack out the answer at the end of office hours before class starts.

* Ask students if they found a solution and go over their solution (or the ones below if no student-solution is provided). 

* Be sure to praise students who provide a solution even if it isn't fully correct. Discuss its merits and potential pitfalls.

```js
const map = function(arr, cb){
  const newArr = [];

  for (let i = 0; i < arr.length; i++){
    const newNum = cb(arr[i]);
    newArr.push(newNum);
  }
  
  return newArr;
}
```

* Point out how this function can be used to accomplish the same thing we accomplished last class (doubling array). Discuss how it's more versatile and reusable. 

* Time permitting, take this opportunity to introduce students to the `.map()` array method.

* Time permitting, discuss some use-cases for the `.map()` function.
 