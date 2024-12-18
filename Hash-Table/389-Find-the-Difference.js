/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    const obj = {}

    for (let i = 0; i < t.length; i++) {
        obj[t[i]] ? obj[t[i]]++ : obj[t[i]] = 1;
    }

    for (let i = 0; i < s.length; i++) {
        obj[s[i]]--
    }

    for (const key in obj) {
        if (obj[key] == 1) {
            return key
        }

    }



};