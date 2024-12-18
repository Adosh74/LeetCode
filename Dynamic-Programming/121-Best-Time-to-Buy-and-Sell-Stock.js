/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let min = prices[0];
    let profit = 0;
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else {
            profit = prices[i] - min;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }

    return maxProfit;


}
