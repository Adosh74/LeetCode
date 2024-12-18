/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
    const obj = {};
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]]) {
            obj[s[i]]++;
        } else {
            obj[s[i]] = 1;
        }
    }


    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] === 1) {
            return i;
        }
    }

    return -1
}