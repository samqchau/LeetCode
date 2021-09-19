/*
    Time Complexity - O(4^n * n)
    4 Recursive calls for each letter a key number can represent and 4 more for each number after that for the entire length of the input digits string.
    
    Space Complexity - O(n)
    DFS traversal of tree uses implicit stack space with the height of the tree which is the length of the string.
    
*/

function letterCombinations(digits: string): string[] {
    let res:string[] = [];
    let letters = {
        2: ['a','b','c'],
        3: ['d', 'e', 'f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','o'],
        7: ['p','q','r','s'],
        8: ['t','u','v'],
        9: ['w','x','y','z'],
    }
    if(digits.length === 0) return res
    function helper (s) {
        if(s.length === digits.length) {res.push(s); return}
        let key = digits[s.length];
        letters[key].forEach(l => helper(s + l))
    }
    
    helper('')
    return res
};