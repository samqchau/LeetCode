/*
    -- Approach --
    Sort the nums array.
    Treat the array like a window, for each iteration, we will shrink the window size by one.
    The left most number is fixed. There will also be a left and right pointer.
    Now that three numbers are selected, check the sum.
    If the sum is equal to the target value and is new, add the three numbers to the results array and add their key to a hashmap.
    Else if the sum is greater than the target value move the left pointer right
    Else if the sum is less than the target value move the right pointer left
    
    Time Complexity - O(n^2)
    -nlog(n) sort
    -Shrinking window is produces a triangular time complexity n*(n-1) * 1/2.
    
    Space Complexity - O(n)
    -Results array
    -Boolean map
*/


function threeSum(nums: number[]): number[][] {
    if(nums.length < 3) return [];
    let res = []; let map = {};
    
    nums.sort((a,b) => {return a-b});
    for(let i = 0; i < nums.length; i++) {
        let l = i+1, r = nums.length - 1;
        while(l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            if(sum < 0) {
                l++;
            }
            else if (sum > 0) {
                r--;
            } else {
                let key = `${nums[i]},${nums[l]},${nums[r]}`;
                if(!map[key]) {
                    map[key] = true;
                    res.push([nums[i], nums[l], nums[r]]);
                }
                l++; r--;
            }
        }
    }
    
    return res;
};
