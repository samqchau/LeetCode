/**
 * @param {number[]} nums
 * @return {number}
*/
var rob = function(nums) {
    let dp = new Array(nums.length).fill(0);
    if(nums.length === 1) return nums[0]
    else if (nums.length === 2) return Math.max(nums[0], nums[1])
    else if(nums.length === 3) return Math.max(nums[0] + nums[2] , nums[1]);
    
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1]);
    for(let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1])
    }
    return dp[dp.length - 1]
};