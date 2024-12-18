/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {

    const words = s.split(' ');
    if (pattern.length !== words.length) return false;
    const obj = {};
    for (let i = 0; i < words.length; i++) {
        if ((obj[pattern[i]] && obj[pattern[i]] !== words[i])) {
            return false;
        }
        obj[pattern[i]] = words[i];
    }
    return new Set(Object.values(obj)).size === Object.values(obj).length;
};