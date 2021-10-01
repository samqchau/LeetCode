
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