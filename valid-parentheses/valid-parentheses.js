/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let n = s.length; 
    let stack = [];
    let complement = {
        ')' : '(',
        ']' : '[', 
        '}' : '{'
    }
    for(let i = 0 ; i < n; i++) {
        let char = s[i]
        if(char === "(" || char === "[" || char === "{") {
            stack.push(char);
        } else {
            let comp = complement[char];
            if(stack.pop() !== comp) {
                return false
            }
        }
    }
    return stack.length === 0 ? true : false;
};