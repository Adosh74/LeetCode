
const repeatedNTimes = (nums) => {
    const n = (nums.length / 2);
    const obj = {};

    for(let i = 0 ; i < nums.length ; i++) {
        obj[nums[i]] ? obj[nums[i]]++ : obj[nums[i]] = 1;
    }

    for(const key in obj) {
        if(obj[key] == n) {
            return key
        }
    }

    
};