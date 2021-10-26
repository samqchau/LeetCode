/*
    **Interpreted the question wrong and wrote a solution for removing longest palindromic substring, not subsequence. Because the entire string is only made of a's and b's, if we remove all the a's, only b's will be left. On the next iteration all b's will be removed therefore the maximum result will only ever be 2. If there were 3, 4, ...k elements instead, the maximum answer would be k.
    
    Approach
    res = 0
    While string still has length
        n = s.length
        create a sliding window to check to see if string is palindrome
            if string is a palindrome
                split the string.
                splice from l to r adding no elements
                join the string
                s = string
                increment res
                break;
    
    return res
    
    Time Complexity - O(n**2)
    Space Complexity - O(n)
*/

function removePalindromeSub(s: string): number {
    let res = 0;
    while(s.length) {
        let foundPalindrome = false;
        for(let j = s.length; j >= 0; j--) {
            for(let i = 0; i < s.length; i++) { 
            let ss = s.substring(i, j);
                if(isPalindrome(ss)) {
                    let str = ss.split('');
                    str.splice(i, j)
                    s = str.join('');
                    foundPalindrome = true;
                    res++;
                    break;
                }
            }
            if(foundPalindrome) break;
        }
    }
    return res >= 2 ? 2 : 1;
};

function isPalindrome (str) {
    let l = 0, r = str.length - 1;
    while(l < r) {
        if(str[l] !== str[r]) return false
        l++; r--;
    }
    return true
}