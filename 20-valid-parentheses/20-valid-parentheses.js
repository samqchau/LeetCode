/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = {
        '(' : ')',
        '{' : '}',
        '[' : ']',
    }, stack = [];
    
    for(let i = 0; i < s.length; i++) {
        let c = s[i];
        if(map[c]) stack.push(c)
        else if(map[stack.pop()] !== c) return false
    }
    
    return stack.length === 0
};