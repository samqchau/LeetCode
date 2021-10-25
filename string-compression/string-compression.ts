/*
    Approach
    Start iterating through the array from the back.
    If the character is the same increment count.
        if i === 0 && count > 1
            splice(i + 1, count - 1, ...count.toString().split(''))            
    If the character is different
        if count > 1
            splice(i + 2, count, ...count.toString().split(''))

    Time Complexity - O(n^2)
    Space Complexity - O(1)
*/

function compress(chars: string[]): number {
    let n = chars.length;
    let char = chars[n-1];
    let count = 1;
    for(let i = n - 2; i >= 0; i--) {
        if(chars[i] === char) {
            count++;
            if(i === 0 && count > 1) {
                chars.splice(i + 1, count - 1, ...count.toString().split(''))
            }
        } else {
            if(count > 1) {
                chars.splice(i + 2, count - 1, ...count.toString().split(''))
            }
            char = chars[i];
            count = 1;
        }
    }
    return chars.length
};