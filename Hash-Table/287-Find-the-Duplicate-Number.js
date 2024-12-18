/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = (nums) => {
    const obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            return nums[i];
        } else {
            obj[nums[i]] = 1;
        }
    }
}