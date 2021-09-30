/*
    Time Complexity - O(n)
    
    Space Complexity - O(n)
    Memoized solution stores up to n values
    Recursive implicit call stack could be size n
*/

function jump (nums: number[]): number {
    let n = nums.length;
    if(nums.length < 2) return 0;
    return helper(0);    
    
    function helper(pos, cache={}):number {
        if(pos >= n-1) return 0;
        if(cache[pos]) return 1 + cache[pos];
        let res = Number.MAX_SAFE_INTEGER;
        for(let i = pos + nums[pos]; i > pos; i--) {
            let jumpsToEnd = helper(i, cache);
            res = Math.min(jumpsToEnd, res);
            if(jumpsToEnd === 1) break;            
        }
        cache[pos] ? cache[pos] = Math.min(res, cache[pos]) : cache[pos] = res;
        
        return 1 + cache[pos]
    }
};