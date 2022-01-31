var exist = function(board, word) {
    let m = board[0].length, n = board.length;
    
    for(let row = 0; row < n; row++ ) {
        for(let col = 0; col < m; col++ ) {
            if(board[row][col] === word[0]) {
                if(dfs(row, col, word)) return true;
            }
        }
    }
    
    return false
    
    function dfs(row, col, str, visiting = {}) {
        if(str.length === 0) return true
        let key = `${row},${col}`
        if(visiting[key]) return false
        if(row < 0 || col < 0 || row === n || col === m) return false
        if(board[row][col] !== str[0]) return false
        
        let s = str.slice(1)
        visiting[key] = true
        if(
            dfs(row - 1, col, s, visiting) ||
            dfs(row + 1, col, s, visiting) ||
            dfs(row, col - 1, s, visiting) ||
            dfs(row, col + 1, s, visiting)
        ) return true
        
        delete visiting[key]
        
        return false
    }
};