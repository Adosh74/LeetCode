/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
    const obj1 = {};
    const obj2 = {};

    for (let i = 0; i < nums1.length; i++) {
        obj1[nums1[i]] = obj1[nums1[i]] + 1 || 1;
    }

    for (let i = 0; i < nums2.length; i++) {
        obj2[nums2[i]] = obj2[nums2[i]] + 1 || 1;
    }

    const result = [];
    for (let key in obj1) {
        if (obj2[key]) {
            const iteration = obj2[key] < obj1[key] ? obj2[key] : obj1[key];
            for (let i = 0; i < iteration; i++) {
                result.push(key)
            }
        }
    }

    return result;
}