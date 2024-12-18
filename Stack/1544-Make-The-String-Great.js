/**
 * @param {string} s
 * @return {string}
 */
const makeGood = (s) => {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const lastEl = stack[stack.length - 1];
        if (lastEl && s[i] !== lastEl && s[i].toLowerCase() === lastEl.toLowerCase()) {
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }
    return stack.join('')
};



