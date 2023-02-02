// array-rotation
const test = [1,2,3,4,5,6]
// Given 3: [4,5,6,1,2,3]

function rotate(arr, r) {
  // creat an array 'copy' using the spread operator
  const copy = [...arr]
  // iterate through the array
  for (let i = 0 ; i < arr.length - r ; i++) {
    // if the current index is less than the rotational index, reassign elements of the original array 
    if (i < r) {
      arr[arr.length - (r-i)] = copy[i]
      arr[i] = copy[i + r]
    }
    else {
      arr[i] = copy[i + r]
    }
  }
  return arr
}

console.log("Rotate: ", rotate([1,2,3,4,5,6],3))

//OR

function rotateShiftPush(arr, r){
  // while r is greater than 0, shift (remove) the first element and push it to the end of the array
  while(r > 0){
    r--;
    var element = arr.shift();
    arr.push(element);
  }
  return arr;
}
console.log("rotateShiftPush: ",rotateShiftPush([1,2,3,4,5,6],3))


// OR 

// slice the elements from the rth index to the end of the array, and concatenate them to the elements from the beginning to the rth element
rotate1 = (arr, r) => arr.slice(r, arr.length).concat(arr.slice(0,r))
  
console.log("Rotate1: ", rotate1([1,2,3,4,5,6],3))