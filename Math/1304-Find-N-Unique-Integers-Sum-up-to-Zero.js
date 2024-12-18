const sumZero = (n) => {
    if (n == 1)
        return [0];

    const result = [];
    let newN = n
    if (n % 2 != 0) {
        result.push(0)
        newN = n - 1;
    }

    for (let i = 0; i < (newN / 2); i++) {
        result.push((i + 1))
        result.push(((i + 1) * -1))
    }

    return result
};