/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    if (s.length === 1)
        return 1
    if (s.length === 0)
        return 0

    const obj = {}

    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]]) {
            obj[s[i]] += 1;
        } else {
            obj[s[i]] = 1;
        }
    }

    console.log(obj)
    if (Object.keys(obj).length == 1) {
        const keys = Object.keys(obj);
        return obj[keys[0]]
    }


    let hasOdd = 0;
    let count = 0;
    for (key in obj) {
        if (obj[key] % 2 === 0) {
            count += obj[key];
        } else {
            if (obj[key] > 2) {
                count += obj[key] - 1;
                hasOdd = 1;
            } else {
                hasOdd = 1;
            }
        }
    }

    return hasOdd + count;
};