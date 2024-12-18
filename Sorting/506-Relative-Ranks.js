const findRelativeRanks = (score) => {
    const newScore = score.map(el => el).sort((a, b) => b - a);
    const obj = {}
    const output = []

    for(let i = 0 ; i < score.length ; i++) 
        obj[score[i]] = 0;


    for(let i = 0 ; i < newScore.length ; i++)
        obj[newScore[i]] = i+1;
    
    for(let i =0 ; i < score.length ; i++) {
        if(obj[score[i]] === 1) {
            output.push("Gold Medal")
        } else if(obj[score[i]] === 2) {
            output.push("Silver Medal")
        } else if(obj[score[i]] === 3) {
            output.push("Bronze Medal")
        } else {
            output.push(`${obj[score[i]]}`)
        }
    }

    return output;
};