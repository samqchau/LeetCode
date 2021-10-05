/**
    Approach
    Start iterating from the right side of the nums array.
    Iterating from nums.length - 2; i >= 0; i--;
        for(let j = nums.length - 1; j > i; j--)
            if nums[j] > nums[i]
                swap; return nums;
                
    return nums.reverse()
            
    Time Complexity - O(n^2)
    Space Complexity - O(1)
    
 */
function nextPermutation(nums: number[]): void {
    for(let i = nums.length - 2; i >= 0; i--) {
        let l = nums[i];
        for(let j = nums.length - 1; j > i; j--) {
            let r = nums[j];
            if(l < r) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                /*
                    From i + 1. Sort in ascending order.
                    In this case, we use a shallow copy of the nums array to sort it, but we could replace this with a sorting algorithm like heap sort that can do this in place.
                */
                let subarr = nums.slice(i + 1, nums.length);
                subarr.sort((a,b) => {return a - b});
                for(let m = 0; m < subarr.length; m++) {
                    nums[i + 1 + m] = subarr[m];
                }
                return;
            }
        }
    }
    nums = nums.reverse()
};