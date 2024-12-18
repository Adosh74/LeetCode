const uniqueOccurrences = (arr) => {
    const obj = {}
    const obj2 = {}

    for (let i = 0 ; i < arr.length ; i++) {
        obj[arr[i]] ? obj[arr[i]]++ : obj[arr[i]] = 1
    }


    for (key in obj) {
        if(obj2[obj[key]]) {
            return false
        }
        obj2[obj[key]] = 1;
    }

    return true
};