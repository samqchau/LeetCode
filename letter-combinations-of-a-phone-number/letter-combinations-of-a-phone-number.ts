function letterCombinations(digits: string): string[] {
    if(digits.length === 0) return []
    let words = [];
    let map = {
        '2': ['a','b','c'],
        '3': ['d','e','f'],
        '4': ['g','h','i'],
        '5': ['j','k','l'],
        '6': ['m','n','o'],
        '7': ['p','q','r','s'],
        '8': ['t','u','v'],
        '9': ['w','x','y','z']
    }

    helper('');
    return words;
    
    function helper(s) {
        if(s.length === digits.length) words.push(s);
        let num = `${digits[s.length]}`;
        if(map[num]) {
            map[num].forEach(n => helper(s + n));
        }        
    }
};