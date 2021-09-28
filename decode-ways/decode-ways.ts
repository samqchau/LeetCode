/*
    Time Complexity - O(n)    
    Check how many paths for each index once.
    
    Space Complexity - O(n)
    -Recursive call implicit stack space in worst case is n
    -memoization table could store up to n values
*/

function numDecodings(s: string): number {
    return helper(0);
    
    function helper(i, memo = {}) {
        if(s[i] === '0') return 0
        else if(i >= s.length - 1) return 1
        if(memo[i]) return memo[i]
        
        let res = 0;        
        memo[i + 1] = helper(i + 1, memo);
        res += memo[i + 1];
        
        if(i < s.length - 1 && Number(s[i] + s[i+1]) <= 26) {
            memo[i+2] = helper(i+2, memo);
            res += memo[i+2];
        }
        return res
    }    
};