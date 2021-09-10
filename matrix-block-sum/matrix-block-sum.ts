/*
    Time Complexity - O(n^4)
    O(n * m * k^2) --> O(n^4)
    m === n so iterating through the matrix takes n * n time.
    two for loops are nested within the matrix iteration
    with dependent on size k (k * k)
    
    Space Complexity - O(n)
    Stores a matrix of the same size as the input
    
*/

function matrixBlockSum(mat: number[][], k: number): number[][] {
    let m = mat.length;
    let n = mat[0].length
    let ans:Array<number[]> = [...new Array(m)].map(_ => new Array(n).fill(0))
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            let left:number = j - k < 0 ? 0 : j - k;
            let right:number = j + k > n - 1 ? n - 1 : j + k;
            let top:number =  i - k < 0 ? 0 : i - k;
            let bottom:number = i + k > m - 1 ? m - 1 : i + k;
            
            for(let o = top; o <= bottom; o++) {
                for(let p = left; p <= right; p++) {
                    ans[i][j] += mat[o][p]
                }
            }
        }
    }
    
    return ans
};