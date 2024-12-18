/**
 * @param {number[]} colors
 * @return {number}
 */
const numberOfAlternatingGroups = (colors) => {
    let count = 0;
    const len = colors.length;
    for (let i = 0; i < colors.length ; i++) {
        
        if(colors[i] == colors[(i+2) % len] && colors[i] != colors[(i+1) % len] )
            count++
    }

    return count
};