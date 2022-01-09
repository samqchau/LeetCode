/**
 * @param {number[]} nums
 * @return {number[]}
*/
var productExceptSelf = function(nums) {
    let output = new Array(nums.length).fill(1), l = 1, r = 1;
    for(let i = 0; i < nums.length; i++) {
        output[i] *= l;
        l *= nums[i];
    }
    for(let i = nums.length - 1; i >= 0; i--) {
        output[i] *= r;
        r *= nums[i]
    }
    return output
};