const validPalindrome = (s) => {
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        if (s[l] !== s[r]) {
            return isPalindrome(s, l + 1, r) || isPalindrome(s, l, r - 1);
        }
        l++;
        r--;
    }
    return true;
};

const isPalindrome = (s, l, r) => {
    while (l < r) {
        if (s[l] !== s[r]) return false;
        l++;
        r--;
    }
    return true;
}