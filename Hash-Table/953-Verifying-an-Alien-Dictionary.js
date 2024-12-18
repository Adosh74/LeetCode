const isAlienSorted = (words, order) => {
    const obj = {}

    // for (let i = 0; i < order.length) {
    //     obj[order[i]] = i
    // }

    for (let i = 0; i < words.length - 1; i++) {
        const wordOne = words[i];
        const wordTwo = words[i + 1];

        for (let j = 0; j < wordOne.length; j++) {
            if (wordOne[j] !== wordTwo[j]) {
                if (order.indexOf(wordOne[j]) > order.indexOf(wordTwo[j]))
                    return false
                break;
            }
        }
    }

    return true
};