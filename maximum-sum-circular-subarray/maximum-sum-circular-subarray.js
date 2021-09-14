/**
 * @param {number[]} nums
 * @return {number}
 
 Time Complexity - O(n)
 One for loop that iterates through the nums array one time.
 
 Space Complexity - O(1)
 Constant space. Optimized Kadane's.
 */
var maxSubarraySumCircular = function(nums) {
    let lmin = nums[0];
    let gmin = nums[0];
    let lmax = nums[0];
    let gmax = nums[0];
    let total = nums[0];
    for(let i = 1; i < nums.length; i++){
        let n = nums[i]
        lmin = Math.min(n, lmin + n)
        lmax = Math.max(n, lmax + n);
        if(gmin > lmin) gmin = lmin
        if(gmax < lmax) gmax = lmax
        total += n;
    }
    return gmax > 0 ? Math.max(gmax, total - gmin) : gmax
};