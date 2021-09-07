/*
    Time Complexity
    O(s + t) --> O(n) - Two for loops, one dependent on input size of s and one dependent on input size of t.
    
    Space Complexity
    O(n) - One hashmap - In the worst case, every letter in string s is unique resulting in a hashmap with n entries.
*/

function findTheDifference(s: string, t: string): string {
    let map: {[key: string]: number} = {};
    for(let i = 0; i < s.length; i++) {
        if(map[s[i]]) {
            map[s[i]]++
        } else {
            map[s[i]] = 1
        }
    }
    for(let i = 0; i < t.length; i++) {
        if(map[t[i]]){
            map[t[i]]--;
            if(map[t[i]] < 0) return t[i]
        } else {
            return t[i]
        }
    }
};