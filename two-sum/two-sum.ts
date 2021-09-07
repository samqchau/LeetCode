/*
    Time Complexity
    O(n) - One for loop dependent on the length of input nums
    
    Space Complexity
    O(n) - In the worst case, the second number needed for the result is at index nums.length-1 in which case the hashmap will have n-2 entries
*/

function twoSum(nums: number[], target: number): number[] {
    let map: {[key: number]: number} = {}
    
    for(let i = 0; i < nums.length; i++) {
        let num: number = nums[i];
        if(map[target - num] !== undefined) return [map[target-num], i]
        else {
            map[num] = i
        }
    }
};