/*
    Approach
    if the string is a palindrome.
        return 1
    else return 2
    
    Time Complexity - O(n)
    Space Complexity - O(1)
*/

function removePalindromeSub(s: string): number {
    return isPalindrome(s) ? 1 : 2
};

function isPalindrome(s) {
    let l = 0, r = s.length - 1;
    while(l < r) {
        if(s[l] !== s[r]) return false
        l++; r--;
    }
    return true
}