const kthDistinct = (arr, k) => {
    const obj = {}

    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] ? obj[arr[i]] += 1 : obj[arr[i]] = 1;
    }

    let distinct = [];

    for (key in obj) {
        if (obj[key] === 1) {
            distinct.push(key);
        }
    }

    if (k > distinct.length) {
        return "";
    }

    return distinct[k - 1];
};