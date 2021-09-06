/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    let count = 0;
    
    function helper(s) {
        console.log('helper')
        if(s.length > sequence.length) return
        if(contains(s)) {
            count++;
            let str = s + word
            console.log(str)
            helper(str)
        }
    }
    
    function contains(s) {
        console.log('contains')
        for(let i = 0; i < sequence.length; i++) {
            if(sequence[i] === s[0]) {
                for(let j = 0; j < s.length; j++) {
                    if(sequence[i+j] !== s[j]) {break}
                    else if(j === s.length - 1) return true
                }
            }
        }
        return false
    }
    
    helper(word);
    return count;
};