/**
 * @param {number[]} nums
 * @return { }
 */
const missingNumber =(nums) => {
    let expectedSum = 0;
    for (let i = 0; i < nums.length + 1; i++) {
        expectedSum += i;
    }
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    
    return expectedSum - sum;
}