/*
    Approach
    Iterate through the array. 
    For every element, i = 0; i < n; i++
        Check the next k elements j = 0; j < k; j++
        If the elements are the same, return true
    return false
    
    Time Complexity - O(n * k)
    Space Complexity - O(1)
*/

function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let n:number = nums.length;
    for(let i:number = 0; i < n; i++) {
        for(let j:number = 1; j <= k; j++) {
            if(nums[i] === nums[i + j]) return true
        }
    }
    return false
};