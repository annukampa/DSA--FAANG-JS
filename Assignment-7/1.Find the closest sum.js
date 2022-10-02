function findClosestSum(arr, target) {
    let sum = 0;
    let diff;
    for (let i = 1, iLen = arr.length; i < (iLen - 1); i++) {
        let numSum = arr[i - 1] + arr[i] + arr[i + 1];
        if (!diff || (diff > (numSum > target ? numSum - target : target - numSum))) {
            diff = numSum > target ? numSum - target : target - numSum;
            sum = arr[i - 1] + arr[i] + arr[i + 1];
        }
    }
    return sum;
}

//driver program
findClosestSum([-1, 2, 1, -4], 1);
