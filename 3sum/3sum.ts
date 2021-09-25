/*
    Time Complexity - O(n^2)
    -sort O(nlogn)
    -for loop with nested while loop O(n^2)
    
    Space Complexity - O(n)
    -results array O(n)
    -map to keep track of triplets O(n)
*/
function threeSum(nums: number[]): number[][] {
    let res = []; let sets = {};
    if(nums.length < 3) return res
    nums.sort((a,b) => a - b);
    for(let i = 0; i < nums.length; i++) {
        let j = i + 1;
        let k = nums.length - 1;
        while(j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if(sum < 0) {
                j++;
            } else if (sum > 0) {
                k--;
            } else {
                let key = `${nums[i]},${nums[j]},${nums[k]}`
                if(!sets[key]) {
                    res.push([nums[i], nums[j], nums[k]]);
                    sets[key] = true;
                }
                j++; k--;
            }
        }
    }
    return res;
};