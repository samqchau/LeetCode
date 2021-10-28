/*
    Approach
    Time Complexity - O(n**2)
    Space Complexity - O(1)
*/
function rotateString(s: string, goal: string): boolean {
    if(s.length !== goal.length) return false
    let n = s.length;
    for(let i = 0; i < n; i++) {
        if(s[0] === goal[i]) {
            for(let j = 0; j < n; j++) {
                if(s[j] !== goal[i + j > n - 1 ? (i + j) % n : i + j]) break;
                if(j === n - 1) return true
            }
        }
    }
    return false
};