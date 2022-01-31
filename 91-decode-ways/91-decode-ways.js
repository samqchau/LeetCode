var numDecodings = function(s, i = 0, memo = {}) {
    if(memo[i]) return memo[i]
    if(s[i] == 0) return 0
    if(i >= s.length - 1) return 1
    memo[i] = numDecodings(s, i + 1, memo) + (Number(`${s[i]}${s[i + 1]}`) <= 26 ? numDecodings(s, i + 2, memo) : 0)
    return memo[i]
};