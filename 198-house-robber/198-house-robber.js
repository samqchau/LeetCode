/**
 * @param {number[]} nums
 * @return {number}
*/
var rob = function(nums, i = 0, memo = {}) {
    if(memo[i] !== undefined) return memo[i]
    if (i > nums.length - 1) return 0
    let robHouse = rob(nums, i + 2, memo) + nums[i]
    let skipHouse = rob(nums, i + 1, memo)
    memo[i] = Math.max(robHouse, skipHouse)
    
    return memo[i]
};