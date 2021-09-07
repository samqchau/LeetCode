/*
    Time Complexity - O(n)
    One for loop dependent on the input size of nums
    
    Space Complexity - O(1)
    Constant space
*/

function thirdMax(nums: number[]): number {
    let maxes: number[] = new Array(3).fill(-Number.MAX_SAFE_INTEGER);
    
    for(let i = 0; i < nums.length; i++) {
        let num:number = nums[i]
        console.log(maxes)
        updateMaxArray(maxes, num)
        console.log(maxes)
    }

    return maxes[0] > -Number.MAX_SAFE_INTEGER ? maxes[0] : maxes[2];
};

function updateMaxArray(arr: number[], num: number) {
    for(let i = arr.length - 1; i >= 0; i--) {
        if(num === arr[i]) break;
        if(num > arr[i]) {
            let temp = arr[i]
            arr[i] = num;
            num = temp
        }
    }
}