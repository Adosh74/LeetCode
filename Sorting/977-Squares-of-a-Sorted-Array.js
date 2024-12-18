var sortedSquares = function(nums) {
    const newNums = nums.map( el => {
        return el ** 2;
    })    

    return newNums.sort((a, b) => a - b) 
};