/**
 * @param {string} s
 * @return {boolean}
 
  Time complexity - O(n)
  One for loop dependent on the length of the input string
        
  Space complexity - O(n)
  One stack with the maximum size of the length of the string. In cases where all characters are "opening" parenthesis, the stack will be the length of the string

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
