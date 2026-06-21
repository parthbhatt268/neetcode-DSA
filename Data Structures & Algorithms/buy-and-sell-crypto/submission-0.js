class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
maxProfit(prices) {
    // Idea: single pass. Track the cheapest price seen so far.
    // At each bar, calculate profit if we sell today. Keep track of max.

    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        const profit = prices[i] - minPrice;
        maxProfit = Math.max(maxProfit, profit);
        minPrice = Math.min(minPrice, prices[i]);
    }

    return maxProfit;
}
}
