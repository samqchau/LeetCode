/*
    Time Complexity - O(n^2)
    Two nested for loops
    
    Space Complexity - O(1)
    Space independent from input size
*/
function findLHS(nums: number[]): number {
    let res = 0;
    for(let i = 0; i < nums.length; i++) {
        if(res > nums.length - i) return res
        let num = nums[i];
        let minCount = 0;
        let maxCount = 0;
        let count = 0;
        let valid = false;
        for(let j = i; j < nums.length; j++) {
            if(nums[j] === num) {
                count++;
                continue;
            }
            if(nums[j] - num === 1) {
                minCount++;
                valid = true;
            } else if (num - nums[j] === 1) {
                maxCount++;
                valid = true;
            }
        }
        if(valid) {
            res = Math.max(res, Math.max(minCount, maxCount) + count)
        }
    }
    return res
};