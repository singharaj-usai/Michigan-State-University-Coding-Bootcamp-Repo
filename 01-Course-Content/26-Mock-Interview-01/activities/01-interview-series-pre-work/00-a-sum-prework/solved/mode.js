/*
The mode is the number that is repeated 
more often than any other.
*/
function sortArr(arr){
	var sortedArr = arr.sort(function(a, b){return a - b})
	return sortedArr;
}

function calculateMode(arr){
	// Step One:
		// Q: What are you going to do? 
		// A: Checking for empty array, if empty - return 'out of function' or 'empty array'
		
		// Q: How are you going to do it? 
		// A: with a conditional check and return statement

		// Q: Why are you going to do it? 
		// A:  To handle a possible edge case 
	if(arr.length < 0){
		return "empty array";
	}
	// Step Two:
		// Q: What are you going to do? 
		// A: Instantiate a variable `sortedArr` with an 
		// assigned value of the sorted input array

		// Q: How are you going to do it? 
		// A: Keyword `var` and assignment operator

		// Q: Why are you going to do it? 
		// A: To have a pointer to the value of the sorted array

	// Step Three:
		// Q: What are you going to do? 
		// A: Sort the array

		// Q: How are you going to do it? 
		// A: by calling on a helper function `sortArr` and passing the input array as an argument

		// Q: Why are you going to do it? 
		// A: to sort the array as one possible process for solving for `mode`

	var sortedArr = sortArr(arr);

	//track the max number and the number of times it has occurred
	
	// Step Four:
		// Q: What are you going to do? 
		// A: Instantiate two variables - `maxNum` & `maxCount` and assign them to the values of the first index of the input array and 1, respectively.

		// Q: How are you going to do it? 
		// A: Keyword `var` and assignment operator

		// Q: Why are you going to do it? 
		// A: Now, we are certain the array is not empty, and we know that there is an element at index 1 and that it has occurred once. 
		// at this point in time, this is the element that has occurred the most. 

	var maxNum = sortedArr[0];
	var maxCount = 1;

	//track the current number and the number of times it has occurred
	
	// Step Five:
		// Q: What are you going to do? 
		// A: Instantiate two variables - `currentNum` & `currentCount` and assign them to be the value of the first index of the input array and 1.

		// Q: How are you going to do it? 
		// A: Keyword `var` and assignment operator

		// Q: Why are you going to do it? 
		// A: We need a way of tracking the current num and count to compare them against the final max num and max count. 
	var currentNum = sortedArr[0];
	var currentCount = 1;

	// Step Six:
		// Q: What are you going to do? 
		// A: Iterate over the array starting at element 2 (index 1)

		// Q: How are you going to do it? 
		// A: with a for loop, starting at index 1

		// Q: Why are you going to do it? 
		// A: to examine each element
	for(var i = 1; i < sortedArr.length;i++){
		// Step Seven:
			// Q: What are you going to do? 
			// A: Check to see if the element at index `i` is equal to the value of the variable `currentNum`
			// if it is the same element, we will `increment the count of currentCount`

			// Q: How are you going to do it? 
			// A: with a comparison operator

			// Q: Why are you going to do it? 
			// A: To count the number of times we see a value
		if(sortedArr[i] === currentNum){
			currentCount++
		}else {
			// Step Eight:
				// Q: What are you going to do? 
				// A: Compare `currentCount` to `maxCount`
				// and assign `maxNum` to be `currentNum` and `maxCount` to be `currentCount`
				// if and only if `currentCount` is greater than `maxCount`

				// Q: How are you going to do it? 
				// A: with a conditional statement with a comparison operator and then an assignment operator

				// Q: Why are you going to do it? 
				// A: To accurately track the element that has occurred the max number of times
			if(currentCount > maxCount){
				maxNum = currentNum;
				maxCount = currentCount;
			}else {
				// Step Nine:
					// Q: What are you going to do? 
					// A: Reassign the value of `currentNum` to be element at index `i` and `currentCount` to `1`

					// Q: How are you going to do it? 
					// A: with an assignment operator

					// Q: Why are you going to do it? 
					// A: to start a new count for the new current element
				currentNum = sortedArr[i];
				currentCount = 1;
			}
		}

	}
	// Step Ten:
		// Q: What are you going to do? 
		// A: Return `maxNum`

		// Q: How are you going to do it? 
		// A: With a return statement

		// Q: Why are you going to do it? 
		// A: To have the output / final return value of the function be the `maxNum`, the number that has occurred with the most frequency.
	return maxNum
		
}



var testCaseOne = [13, 18, 13, 14, 13, 16, 14, 21, 13];//13

console.log(calculateMode(testCaseOne));

var testCaseTwo =[1,3,1,1,8];//1
console.log(calculateMode(testCaseTwo));

var testCaseThree = [2,14,9,10,18,14];//14
console.log(calculateMode(testCaseThree));

var testCaseFour = [2,3,4,5,6];//2
console.log(calculateMode(testCaseFour));

/*
## Prompt #4 `mode`

Create a function `mode` that takes in an array of integers as an argument. 

Your function returns the mode of your input array.


The mode is the number that is repeated more often than any other.


Note: Complete only the Pseudocode

## List You Pseudocode Below: `mode`


Step One:

Q: What are you going to do? 

A: 

Q: How are you going to do it? 

A: 

Q: Why are you going to do it? 

A: 

Step Two: 

Q: What are you going to do? 

A: 

Q: How are you going to do it? 

A: 

Q: Why are you going to do it? 

A: 

Step Two: 

Q: What are you going to do? 

A: 

Q: How are you going to do it? 

A: 

Q: Why are you going to do it? 

A: 

*/ 