/*
    Time Complexity - O(n)
    Iterate through the entire input array once
    
    Space Complexity - O(1)
    Sorts in place
*/
function sortArrayByParity(nums: number[]): number[] {
    let p:number = 0
    for(let i = 0; i < nums.length; i++) {
        let num:number = nums[i];
        if(num % 2 === 0) {
            nums[i] = nums[p]
            nums[p] = num;
            p++;
        }
    }
    return nums;
};