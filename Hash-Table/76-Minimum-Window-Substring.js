const minWindow = (s, t) => {
    if (t === s) return s
    if (t.length > s.length) return ""

    const tMap = new Map()
    const sMap = new Map()
    for (let i = 0; i < t.length; i++) {
        tMap.set(t[i], tMap.has(t[i]) ? tMap.get(t[i]) + 1 : 1)
    }

    let required = tMap.size
    let left = 0
    let right = 0
    let formed = 0
    let windowCounts = new Map()
    let ans = [-1, 0, 0]

    while (right < s.length) {
        let c = s[right]
        windowCounts.set(c, windowCounts.has(c) ? windowCounts.get(c) + 1 : 1)

        if (tMap.has(c) && windowCounts.get(c) === tMap.get(c)) {
            formed++
        }

        while (left <= right && formed === required) {
            c = s[left]
            if (ans[0] === -1 || right - left + 1 < ans[0]) {
                ans[0] = right - left + 1
                ans[1] = left
                ans[2] = right
            }

            windowCounts.set(c, windowCounts.get(c) - 1)
            if (tMap.has(c) && windowCounts.get(c) < tMap.get(c)) {
                formed--
            }

            left++
        }

        right++
    }

    return ans[0] === -1 ? "" : s.substring(ans[1], ans[2] + 1)

};