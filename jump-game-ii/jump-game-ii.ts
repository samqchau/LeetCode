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
        let res = [];
        for(let i = pos + nums[pos]; i > pos; i--) {
            let jumpsToEnd = helper(i, cache);
            res.push(jumpsToEnd);
            if(jumpsToEnd === 1) break;            
        }
        let minJumps = Math.min(...res);
        cache[pos] ? cache[pos] = Math.min(minJumps, cache[pos]) : cache[pos] = minJumps;
        
        return 1 + cache[pos]
    }
};