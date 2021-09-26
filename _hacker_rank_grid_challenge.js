/*
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 * 
 * Time Complexity - O(n^2)
 * Two nested for loops, and nlogn sort on all matrix's rows
 * 
 * Space Complexity - O(1)
 * Space requirements independent from input size
 */

function gridChallenge(grid) {
    for(let i = 0; i < grid.length; i++) {
        let str = grid[i];
        grid[i] = str.split('').sort().join('');
    }
    for(let i = 0; i < grid[0].length; i++) {
        let prev = -1;
        for(let j = 0; j < grid.length; j++) {
            let str = grid[j];
            let charCodeAt = str.charCodeAt(i);
            if(charCodeAt < prev) return "NO"
            prev = charCodeAt;
        }
    }
    return "YES"
}
