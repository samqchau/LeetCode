/**
 * @param {number[]} nums
 * @return {number}
*/
var rob = function(nums, i = 0, memo = {}) {
    if(memo[i] !== undefined) return memo[i]
    if (i > nums.length - 1) return 0
    let skipHouse = rob(nums, i + 1, memo)
    let robHouse = rob(nums, i + 2, memo) + nums[i];
    memo[i] = Math.max(skipHouse, robHouse);
    return memo[i]
};