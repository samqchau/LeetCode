/*
    Time Complexity - O(n)
    Space Complexity - O(1)
*/

function validPalindrome(s: string, skipped = false): boolean {
    for(let i = 0; i < s.length; i++) {
        let j = s.length - 1 - i;
        if(s[i] !== s[j]) {
            if(skipped) return false
            else {
                return validPalindrome(s.substring(i, j), skipped = true) || validPalindrome(s.substring(i + 1, j + 1), skipped = true)
            }
        }
    }
    return true
};