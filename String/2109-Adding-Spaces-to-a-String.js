const addSpaces = (s, spaces) => {
    let result = ''
    let spacesIndex = 0;

    for(let i = 0 ; i < s.length ; i++) {
        if((i ) === spaces[spacesIndex]) {
            result += ' ';
            
            spacesIndex++;
        } 
            result += s[i];
        
    } 

    return result

};