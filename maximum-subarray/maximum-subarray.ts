/*
    Time Complexity - O(nlogn)
    Space Complexity - O(n)    
*/
function maxSubArray(nums: number[]): number {
    function helper (l, r) {
        if(l === r) return nums[l]
        else if(l > r) return -Infinity;        
        let mid = Math.floor(l + (r-l)/2);
        let lsum = helper(l, mid)
        let rsum = helper(mid+1, r);
        const crossingSum = findCrossingSum(l, mid, r);
        return Math.max(lsum, crossingSum, rsum);
    }
    
    function findCrossingSum(l, mid, r) {
        let sum = 0;
        let lsum = -Infinity;
        for(let i = mid; i >= l; i--) {
            sum += nums[i];
            lsum = Math.max(lsum, sum);
        }
        sum = 0;
        let rsum = -Infinity;
        for(let i = mid + 1; i <= r; i++) {
            sum += nums[i];
            rsum = Math.max(rsum, sum);
        }
        
        return lsum + rsum;
    }
    return helper(0, nums.length - 1);
};