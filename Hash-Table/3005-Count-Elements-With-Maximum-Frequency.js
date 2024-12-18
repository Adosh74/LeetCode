/**
 * @param {number[]} nums
 * @return {number}
 */
const maxFrequencyElements = (nums) => {
    const obj = {}

    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] ? obj[nums[i]]++ : obj[nums[i]] = 1
    }

    let max = 0;
    let maxFreq = 0;

    for (key in obj) {
        if (obj[key] > maxFreq)
            maxFreq = obj[key]
    }

    for (key in obj) {
        if (obj[key] === maxFreq)
            max += 1
    }


    return max * maxFreq
};