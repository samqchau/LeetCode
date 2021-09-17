/*
    Time Complexity - O(n)
    Iterate through the numbers array one time
    
    Space Complexity - O(1)
    Space requirements do not grow with input size
*/

function majorityElement(nums: number[]): number {
    let count:number = 1;
    let candidate:number = nums[0];
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] === candidate) {
            count++;
            continue;
        } else if(count > 0) {
            count--;
        } else {
            count = 1;
            candidate = nums[i];
        }
    }
    return candidate
};