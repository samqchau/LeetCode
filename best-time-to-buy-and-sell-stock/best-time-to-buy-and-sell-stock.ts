/*
    Time complexity - O(n)    
    Space Complexity - O(1)
*/

function maxProfit(prices: number[]): number {
    let min = Infinity; let maxProfit:number = 0;
    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < min) min = prices[i];
        if(prices[i] - min > maxProfit) maxProfit = prices[i] - min;
    }
    return maxProfit > 0 ? maxProfit : 0;
};