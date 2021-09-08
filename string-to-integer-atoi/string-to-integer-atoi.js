/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;
    let sign = null;
    let res = 0;
    let max = 2**31 - 1;
    let min = -1 * (2**31);
    
    while(i < s.length) {
        if(s[i] === ' ') i++;
        else break;
    }

    if(i < s.length) {
        if(s[i] === '-') {
            sign = -1;
            i++;
        }
        else if(s[i] === '+') {
            sign = 1;
            i++;
        }
    }

    while(i < s.length) {
        if(s[i] >= 'a' && s[i] <= 'z' || s[i] >= 'A' && s[i] <= 'Z' || s[i] === '.' || s[i] === ' ' || s[i] === '-' || s[i] === '+') 
            break; 
        let num = s[i] - '0'
        res = res * 10 + num;
        i++;
    }

    if(sign === -1 && sign * res <= min) return min
    else if(res >= max && (sign === 1 || sign === null)) return max
    else return sign === null ? res : sign * res
};