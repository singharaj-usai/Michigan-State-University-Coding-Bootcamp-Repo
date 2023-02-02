const multiplyInto20 = function(arr) {
  const numMap = {};

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];

    let neededNumber = 20 / currentNum;

    if (numMap[neededNumber]) {
      return true;
    }
    numMap[currentNum] = true;
  }

  return false;
};
