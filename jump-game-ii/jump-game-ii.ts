/*
    Time Complexity - O(n)
    
    Space Complexity - O(n)
    Memoized solution stores up to n values
    Recursive implicit call stack could be size n
*/

function jump (nums: number[]): number {
    let n = nums.length;
    if(n < 2) return 0
    let dp = new Array(n).fill(0);
    let furthest = 0;
    for(let i = 0; i < n; i++) {
        let jumpPower = nums[i];
        for(let j = i + 1; j <= i + jumpPower; j++) {
            if(j >= n - 1) return dp[i] + 1;
            if(j > furthest) {
                dp[j] = dp[i] + 1;
            }
        }
        furthest = Math.max(furthest, i + jumpPower)
    }
    return dp[n-1];
};