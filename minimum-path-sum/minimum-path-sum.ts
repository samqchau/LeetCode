/*
    Time Complexity - O()
    ???
    
    Space Complexity - O(n)
    Implicit recursive calls are length of longest path in worst case (m+n)
    Cache for memoization would be size of input grid in worst case
*/

function minPathSum(grid: number[][]): number {
    let m = grid.length; let n = grid[0].length;
    
    function helper(x, y, cache = {}) {
        let key = `${x},${y}`
        if(cache[key]) return cache[key];
        else if(x === m || y === n) return Number.MAX_SAFE_INTEGER;
        else if(x === m - 1 && y === n - 1) return grid[x][y];
        cache[key] = grid[x][y] + Math.min(helper(x+1,y, cache), helper(x,y+1, cache));
        return cache[key]
    }
    
    return helper(0, 0);
};