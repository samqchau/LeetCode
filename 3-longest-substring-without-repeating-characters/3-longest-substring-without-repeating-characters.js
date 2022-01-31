var lengthOfLongestSubstring = function(s) {
    if(s.length === 0) return 0
    let l = 0, r = 0, longest = 1, chars = {};

    while(l < s.length && r < s.length) {
        if(!chars[s[r]]) {
            chars[s[r]] = true;
            longest = Math.max(longest, r - l + 1);
            r++;
        } else {
            chars[s[l]] = false;
            l++;
        }
    }
    return longest  
};