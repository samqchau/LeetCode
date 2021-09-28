/*
    Time Complexity - O(n)    
    Space Complexity - O(n)
*/

function climbStairs(n: number, cache = {}): number {
    if(n === 1) return 1
    else if(n === 2) return 2
    else if(cache[n]) return cache[n];
    cache[n] = climbStairs(n-1, cache) + climbStairs(n-2, cache);
    return cache[n]
};