/**
 * @param {number[][]} matrix
 * @return {number[]}
 
 Time Complexity - O(n^2)
 Traverses the entire matrix once only, matrix traversal is O(m * n)
 
 Space Complexity - O(n)
 Storage of a matrix of the same size as the input
 
 */
var spiralOrder = function(matrix) {
    let spiralOrder = [];
    
    let left = 0 
    let right = matrix[0].length - 1;
    let top = 0;
    let bottom = matrix.length - 1;

    while(left <= right && top <= bottom) {        
        for(let j = left; j <= right; j++) {
            spiralOrder.push(matrix[top][j]);
        }
        for(let j = top + 1; j <= bottom; j++) {
            spiralOrder.push(matrix[j][right]);
        }
        for(let j = right - 1; j >= left; j--) {            
            if(top >= bottom) {break;}
            else spiralOrder.push(matrix[bottom][j]);
        }
        for(let j = bottom - 1; j > top; j--) {            
            if(left >= right) {break;}
            else {spiralOrder.push(matrix[j][left]);}
        }
        left++; right--; top++; bottom--;
    }
    return spiralOrder
};