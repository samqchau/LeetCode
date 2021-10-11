/*
    Time Complexity - O(n)
    Space Complexity - O(1)
*/


function sortColors(nums: number[]): void {
    let l = 0, r = nums.length - 1, i = 0;
    while(l <= r && i <= r) {
        if(nums[i] === 0) {
            swap(nums, l, i);
            l++;
            i++;
        } else if(nums[i] === 2) {
            swap(nums, r, i);
            r--;
        } else {
            i++;
        }
    }
};

function swap(arr, l, r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
}