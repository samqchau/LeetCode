var numIslands = function(grid) {
    let numIslands = 0, visited = {}, m = grid[0].length, n = grid.length;
    
    for(let row = 0; row < n; row++) {
        for(let col = 0; col < m; col++) {
            if(grid[row][col] === '1') {
                numIslands += dfs(col, row)
            }
        }
    }
    
    return numIslands
    
    function dfs(x, y, visiting = {}) {
        let key = `${x},${y}`
        if(visiting[key]) return 0
        if(visited[key]) return 0
        if(x < 0 || x === m || y < 0 || y === n) return 0
        if(grid[y][x] === '0') return 0
        
        visiting[key] = true
        dfs(x - 1, y, visiting)
        dfs(x + 1, y, visiting)
        dfs(x, y - 1, visiting)
        dfs(x, y + 1, visiting)
        delete visiting[key]
        visited[key] = true
        
        return 1
    }
};