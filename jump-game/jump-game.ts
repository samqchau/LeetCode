/*
    Time Complexity - O(n)
    Jump from each index once. If we've already jumped there it's constant look up.
    
    Space Complexity - O(n)
    Recursive calls use implicit stack space, in the worst case it could be length n.
    Use an array of booleans size n.
    
    Approach
    We start at square 0. We mark every square we can jump to as true. Jump as far as we can recursively returning early if we reach the end. If we still haven't found the end, check the lesser jump distances. If our position === nums.length - 1 we can return early.
*/

function canJump(nums: number[]): boolean {    
    let n = nums.length;
    let isJumpable = new Array(n).fill(false);
    return maxJump(0);
    
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
