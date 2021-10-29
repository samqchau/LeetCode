/*
    Approach
    Write functions that check if the character is valid or not
    Namely, the +, -, e, E, .
    
    If Special Character
        if + || -
        else if E || e
        else .
    else if function charIsNumber
        i++
    else invalid character return false
    
    Time Complexity - O(n + n) --> O(n)
    Space Complexity - O(1)
*/

function isNumber(s: string): boolean {
    let validChars = {
        '+': true,
        '-': true,
        'e': true,
        'E': true,
        '.': true,
    }
    
    let i = 0, n = s.length;
    let foundE = false, foundDecimal = false, foundNumber = false;

    if(s[i] === '-' || s[i] === '+') {
        if(validSign(s, i)) i++;
        else return false
    }
    
    while (i < n) {
        let char = s[i];
        if(validChars[s[i]]) {        
            if(char === 'e' || char === 'E') {
                if(foundE || !foundNumber) return false
                if(validE(s, i, foundNumber))
                {
                    foundE = true; foundDecimal = true;
                    i++;
                    if(s[i] === '+' || s[i] === '-') {
                        if(validSign(s, i)) {
                            i++;
                        } else return false;
                    }
                } else return false
            } 
            else if (char === '.') {
                if(foundDecimal) return false
                if(validDecimal(s, i, foundNumber)) {
                    foundDecimal = true;
                    i++;
                } else return false                
            } else return false 
        } else if (validNumber(char)) {
            foundNumber = true;
            i++;
        }
        else return false
    }
    return true
};

function validE (s, i, foundNumber) {
    let n = s.length;
    if(!foundNumber) return false
    else if(i === 0 && n === 1) return false
    else if (i === n - 1) return false
    else if (s[i + 1] === 'e' || s[i + 1] === 'E') return false
    return true;
}

function validDecimal (s, i, foundNumber) {
    let n = s.length;
    if(n === 1) return false
    else if(!foundNumber && i === n - 1) return false
    else if(s[i + 1] === '.') return false
    else if (s[i + 1] === 'e' || s[i + 1] === 'E') {
        return validE(s, i + 1, foundNumber);
    }
    return true
}

function validSign (s, i) {
    let n = s.length;
    if(i === n - 1) return false
    else if(s[i + 1] === '+' || s[i + 1] === '-' || s[i + 1] === 'e' || s[i + 1] === 'E') return false
    else if(s[i + 1] === '.') return validDecimal(s, i+1, false)
    else return true
}

function validNumber (s) {
    return Number(s) || s === '0'
}