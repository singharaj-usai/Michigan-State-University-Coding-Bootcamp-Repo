//Consecutive segments
consecutive = (arr) => {
  // All sequences
  const seqs = []
  // A single sequnce
  let seq = [arr[0]]

  // When we've checked everything in the array
  for (let i = 0; i < arr.length; i++) {
    // if the next arr element is consecutive, then push it to the 'seq' array
    if (arr[i + 1] - arr[i] === 1) {
      seq.push(arr[i + 1])
    // otherwise, push the whole 'seq' array into the container 'seqs' array and restart a new 'seq' arrat
    } else {
      seqs.push(seq)
      seq = [arr[i + 1]]
    }
  }
  return seqs
}

console.log(consecutive([1, 2, 3, 6, 7, 8, 15, 18, 19, 21, 22, 24])) //[[1,2,3],[6,7,8],[15],[18,19],[21,22],[24]]