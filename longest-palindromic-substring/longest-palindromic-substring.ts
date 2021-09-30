/*
    Time Complexity - O(n^2)

    Space Complexity - O(n)
*/

function longestPalindrome(s: string): string {
    let n = s.length;
    let res = '';
    for(let i = 0; i < n; i++) {
        expandPalindrome(i, i);
        if(s[i] === s[i+1]){
            expandPalindrome(i, i+1);
        }
    }
    return res;
    
    function expandPalindrome(l, r) {
        let string = s.slice(l, r + 1);        
        while(l >= 0 && r < n && s[l] === s[r]) {
            if(string.length > res.length) res = string;
            l--; r++;
            string = `${s[l]}${string}${s[r]}`;
        }
    }
};