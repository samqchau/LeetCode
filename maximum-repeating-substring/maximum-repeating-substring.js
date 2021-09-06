/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 
 Time Complexity - O(n^2)
 Two nested for loops in the contains function both dependent on the length of the input sequence
 
 Space Complexity - O(n)
 The maximum number of times helper could appear in the call stack at the same time. This depends on how many times larger the sequence input is than the word input. In the worst case, the length of the word input is 1 so our space complexity is dependent on the length of sequence.
*/
var maxRepeating = function(sequence, word) {
    let count = 0;
    
    function helper(s) {
        if(s.length > sequence.length) return
        if(contains(sequence, s)) {
            count++;
            let str = s + word
            helper(str)
        }
    }
    
    helper(word);
    return count;
};

function contains(sequence, s) {
    for(let i = 0; i < sequence.length; i++) {
        if(sequence[i] === s[0]) {
            for(let j = 0; j < s.length; j++) {
                if(sequence[i+j] !== s[j]) break
                if(j === s.length - 1) return true
            }
        }
    }
    return false
}
