const reverseVowels = (s) => {
    const modifiedS = s.split('')
    let r = modifiedS.length - 1;
    let l = 0;

    const vowels = { 
        'a': 1,
        'e': 1,
        'i': 1,
        'o': 1,
        'u': 1,
        'A': 1,
        'E': 1,
        'I': 1,
        'O': 1,
        'U': 1,
    }

    while (r > l) {
        
        if(vowels[modifiedS[r]] && vowels[modifiedS[l]]) {
            const temp = modifiedS[l]
            modifiedS[l] = modifiedS[r];
            modifiedS[r] = temp;
            r--;
            l++
        }
        if(!vowels[modifiedS[r]]){
            r--
        }
        if(!vowels[modifiedS[l]]){
            l++;
        }
    }

    return modifiedS.join('');
};