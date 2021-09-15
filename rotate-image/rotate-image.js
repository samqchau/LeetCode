/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 Time Complexity - O(n^2)
 Two nested for loops to iterate through the input matrix
 
 Space Complexity - O(1)
 Matrix is modified in place
 */
var rotate = function(m) {
    let n = m.length;
    for(let i = 0; i < n / 2; i++) {
        for(let j = i; j < n - 1 - i; j++) {
            let top = m[i][j];
            let bottom = m[n-1-i][n-1-j];
            let left = m[n-1-j][i];
            let right = m[j][n-1-i];
            
            m[i][j] = left;
            m[n-1-j][i] = bottom;
            m[n-1-i][n-1-j] = right;
            m[j][n-1-i] = top;
        }
    }
    
};