/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let res = [];
    let i = 0;
    while (i < nums.length) {
        let left = nums[i]

        while (i + 1 < nums.length && nums[i + 1] == nums[i] + 1) {
            i++
        }

        if (left != nums[i]) {
            res.push(`${left}->${nums[i]}`)
        } else {
            res.push(nums[i].toString())
        }

        i++
    }
    return res;
};