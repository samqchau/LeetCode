/**
    Time Complexity - O(n)
    Adjacent while loops all dependent on input 's' length
    
    Space Complexity - O(1)
    Space requirements do not grow with input size
    
 */
var myAtoi = function(s) {
    let i = 0;
    let sign = 1;
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

    if(sign === 1) {
        return max < res ? max : res
    } else if(sign === -1) {
        return min > res * -1 ? min : res * -1
    }
};
