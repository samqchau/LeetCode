/**
 * @param {string} s
 * @return {number}
 
 Time complexity - O(n)
 One for loop dependent on the size of the input string. In the worst case, this funciton iterates through the entire string once.
 
 Space complexity - O(1)
 Space consumption is constant with growing input.
*/

var lengthOfLastWord = function(s) {
    let len = 0;
    let trimming = true;
    
    for(let i = s.length - 1; i >= 0; i--) {
        let char = s[i];
        if(trimming) {
            if(char != " ") {
                trimming = false;
                len++;
            } else {
                continue;
            }
        } else {
            if(char !== " ") {
                len++
            } else {
                return len
            }
        }
    }
    
    return len;
};