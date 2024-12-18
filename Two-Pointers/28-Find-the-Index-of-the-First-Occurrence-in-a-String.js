const strStr = (haystack, needle) => {
    if (!haystack.includes(needle)) {
        return -1
    }

    let index = -1

    if(haystack.startsWith(needle) && haystack.length === needle.length ){
        return 0
    
    }

    if(needle.length === 1 ){
        return haystack.indexOf(needle)
    
    }
    
    for(let i = 0 ; i < haystack.length - needle.length + 1; i++) {
        if(haystack[i] === needle[0]){
            let match = 0;
            for (let j = 0 ; j < needle.length ; j++ ) {
                if(haystack[i + j] == needle[j]) {
                 match++;
                } 
            }

            if (match === needle.length) {
                return i; 
            }
        }
    }

    return index;
    
};