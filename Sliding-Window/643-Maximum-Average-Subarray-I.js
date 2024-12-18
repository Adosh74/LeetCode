const findMaxAverage = (nums, k) => {
    let max = -Infinity;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (i >= k - 1) {
            max = Math.max(max, sum);
            sum -= nums[i - k + 1];
        }
    }
    return max / k;

}