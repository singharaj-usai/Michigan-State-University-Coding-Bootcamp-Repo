function maxSumTwoConsecutive(arr){
    // this line accounts for situations where the top two consecutive integers could be negative
    var maxSum = Number.MIN_SAFE_INTEGER // Alternatively you could say `maxSum = -100000000`

    // loop through the array 
    for(var i = 1; i < arr.length; i++){
        // if the sum of two consecutive integers is greater than the maxSum, reassign maxSum to that sum
        if(arr[i-1]+arr[i]>maxSum)
            maxSum=arr[i-1]+arr[i]
    }
    return maxSum
}

console.log(maxSumTwoConsecutive([18,7,1,2,20,9]))