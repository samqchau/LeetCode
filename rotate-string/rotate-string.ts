/*
    Time Complexity - O(n^2)
    Two nested for loops
    
    Space Complexity - O(1)
    Space requirements do not grow with input size
*/
function rotateString(s: string, goal: string): boolean {
    let n = s.length;
    for(let i = 0; i < n; i++) {
        if(s[0] === goal[i]) {
            for(let j = 0; j < n; j++) {
                let p2 = i + j >= n ? (i+j) % n : i + j
                if(s[j] !== goal[p2]) break;
                if(j === n - 1) return true
            }
        }
    }
    return false
};