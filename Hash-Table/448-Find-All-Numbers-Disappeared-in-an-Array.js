/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums) => {
    const obj = {}

    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = 1;
    }

    const result = []

    for (let i = 1; i <= nums.length; i++) {
        if (!obj[i]) {
            result.push(i)
        }
    }

    return result

};