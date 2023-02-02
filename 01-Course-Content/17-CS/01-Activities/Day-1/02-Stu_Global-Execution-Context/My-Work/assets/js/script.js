// 1) Where is carNoise stored?
// carNoise is stored in the memory of the computer as a constant variable in the global scope.
const carNoise = 'Honk';
// 2) Where is goFast stored?
// goFast is stored in the memory of the computer as a constant variable in the global scope.
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // goFast is called with an argument of 80 if the user confirms the prompt.
  // speed is assigned a value of 80 when it is passed as an argument to the goFast function. This value is stored in the memory of the computer as a local variable within the goFast function.

  // 5) Where is makeNoise stored?
  // makeNoise is stored in the memory of the computer as a local variable within the goFast function.
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // makeNoise is called with an argument of carNoise, and a string is logged to the console. The string includes the value of the speed variable, which is 80, and the value of the sound argument, which is 'Honk'.
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// 
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
