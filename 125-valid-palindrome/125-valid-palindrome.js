/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let p1 = 0, p2 = s.length - 1;
    
    while(p1 < s.length && (!isAlphaNumeric(s[p1]))) {
        p1++;
    }
    while(p2 > 0 && (!isAlphaNumeric(s[p2]))) {
        p2--;
    }
    while(p1 < p2) {
        let c1 = s[p1], c2 = s[p2];
        if(c1 !== c2) return false
        p1++; p2--;
        while(p1 < s.length && (!isAlphaNumeric(s[p1]))) {
            p1++;
        }
        while(p2 > 0 && (!isAlphaNumeric(s[p2]))) {
            p2--;
        }
    }
    return true
    
    function isAlphaNumeric(char) {
        let letterLowerBound = 'a'.charCodeAt(), letterUpperBound = 'z'.charCodeAt();
        let numLowerBound = '0'.charCodeAt(), numUpperBound = '9'.charCodeAt();
        let charCode = char.charCodeAt();
        return (
            (charCode <= letterUpperBound && charCode >= letterLowerBound) ||
            (charCode <= numUpperBound && charCode >= numLowerBound)
        )
    }
};

