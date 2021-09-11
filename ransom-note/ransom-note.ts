/*
    Time Complexity - O(n)
    Adjacent loops dependent on input size of magazine and ransomNote. O(n + m) --> O(n)
    
    Space Complexity - O(1)
    Store a count map. The maximum amount of data that can be stored is 26 distinct lowercase letters.
*/

function canConstruct(ransomNote: string, magazine: string): boolean {
    let dict = {};
    for(let i = 0; i < ransomNote.length; i++) {
        let char = ransomNote[i];
        if(dict[char]) dict[char]++;
        else dict[char] = 1
    }
    for(let i = 0; i < magazine.length; i++) {
        let char = magazine[i]
        if(dict[char]) dict[char]--
    }
    for(let char in dict) {
        if(dict[char] > 0) return false
    }
    return true
};