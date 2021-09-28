/*
    Time Complexity - O(m * n)
    Check every square on the grid once. After we check once, result it cached so we don't have to traverse repeated subtrees.
    
    Space Complexity - O(m * n)
    Store every square on the grid in cache O(m * n).
    Implicit stack space for recursive call O(m + n).
*/

function uniquePaths(m: number, n: number): number {
    function helper(x, y, cache = {}) {
        if(x === m - 1 || y === n - 1) return 1
        let key = `${x},${y}`
        if(cache[key]) return cache[key];
        let sum = 0;
        sum += helper(x + 1, y, cache);
        sum += helper(x, y + 1, cache);
        cache[key] = sum
        return cache[key];
    }
    return helper(0, 0)
};