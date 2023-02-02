// 1) Where is carNoise stored?
//
const carNoise = 'Honk';
// 2) Where is goFast stored?
// 
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // 
  
  // 5) Where is makeNoise stored?
  //
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // 
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// 
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
