/*
    Approach
    We start at square 0 so it's marked as true. We are going to mark every square that we can jump to as true. Jump as far as we can and then mark everything up to that point as true. If we find something that was true, everything before that is true. If our position === nums.length - 1 we can return early.
*/

function canJump(nums: number[]): boolean {    
    let n = nums.length;
    let isJumpable = new Array(n).fill(false);
    return maxJump(0) ? true : isJumpable[n-1];
    return 
    
    function maxJump(pos) {
        if(pos >= n - 1) return true;
        if(isJumpable[pos]) return false;
        isJumpable[pos] = true;
        let jumpDistance = nums[pos];
        for(let i = pos + jumpDistance; i >= pos + 1; i--) {            
            let reachedEnd = maxJump(i);
            if(reachedEnd) return true
        }
        return false
    }
};