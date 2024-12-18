/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
    let set = new Set(nums);
    let max = -1;

    for (let num of set) {
        if (num > max && set.has(num) && set.has(-num)) {
            max = num;
        }
    }
    return max;
};