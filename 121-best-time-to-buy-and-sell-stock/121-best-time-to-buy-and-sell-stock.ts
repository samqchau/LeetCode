function maxProfit(prices: number[]): number {
    if(prices.length < 2) return 0
    let minPrice = prices[0], maxProfit = 0;
    for(let i = 1; i < prices.length; i++) {
        let p = prices[i];
        let profit = p - minPrice;
        maxProfit = Math.max(profit, maxProfit);
        if(p < minPrice) minPrice = p;
    }
    return maxProfit
};