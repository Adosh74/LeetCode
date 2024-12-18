var isValid = function(s) {
    const brackets = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    const stack = []

    for(let i = 0 ; i < s.length ; i++) {
        if(brackets[s[i]]) {
            console.log(s[i], brackets[s[i]]);
            stack.push(brackets[s[i]])
        }else {
            const closed = stack.pop()
            console.log( closed, s[i]);
            if(closed !== s[i]) {
                return false
            }
        }
    }

    return stack.length === 0   
};
