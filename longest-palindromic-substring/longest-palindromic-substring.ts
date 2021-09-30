
function longestPalindrome(s: string): string {
    let n = s.length;
    if(n < 2) return s;
    let res = '';
    let dp = new Array(n + 1).fill(0).map(_ => new Array(n + 1).fill(false));
    
    for(let i = 0; i < n; i++) {
        dp[i][i] = true;
        res = s[i];
    }
    for(let i = 0; i < n - 1; i++) {
        if(s[i] === s[i+1]) dp[i][i+1] = true;
        if(dp[i][i+1]) res = s.substring(i, i+2);
    }
    for(let i = n - 1; i >= 0; i--) {
        for(let j = i + 2; j <= n; j++) {
            dp[i][j] = s[i] === s[j] && dp[i+1][j-1];
            if(dp[i][j] && j-i + 1 > res.length) res = s.substring(i, j+1);
        }
    }
    return res
};