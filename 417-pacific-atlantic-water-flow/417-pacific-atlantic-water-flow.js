var pacificAtlantic = function(heights) {
    let pacific = {}, atlantic = {}
    let m = heights[0].length, n = heights.length;
    let res = []
    
    for(let col = 0; col < m; col++) {
        dfs(0, col, pacific)
        dfs(n-1, col, atlantic)
    }
    
    for(let row = 0; row < n; row++) {
        dfs(row, 0, pacific)
        dfs(row, m-1, atlantic)
    }
    
    for(let key in pacific) {
        if(atlantic[key]) {
            let [row, col] = key.split(',')
            res.push([row,col])
        }
    }
    
    return res
    function dfs(row, col, ocean, visiting = {}, visited = {}, prevHeight = -Infinity) {
        let key = `${row},${col}`
        if(row < 0 || row === n || col < 0 || col === m) return
        if(visiting[key] || visited[key]) return
        if(prevHeight > heights[row][col]) return
        let h = heights[row][col]
        visiting[key] = true
        dfs(row + 1, col, ocean, visiting, visited, h)
        dfs(row - 1, col, ocean, visiting, visited, h)
        dfs(row, col + 1, ocean, visiting, visited, h)
        dfs(row, col - 1, ocean, visiting, visited, h)
        delete visiting[key]
        ocean[key] = true
        visited[key] = true
    }
};