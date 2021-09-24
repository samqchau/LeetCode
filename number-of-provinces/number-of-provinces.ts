/*
    Approach - DFS
    Time Complexity - O(v+e)
    Visit every node and edge once
    
    Space Complexity - O(v)
    Implicit stack space used for recursive calls. In the worst case, all nodes are connected so we visit every node at once.
*/

function findCircleNum(isConnected: number[][]): number {
    let adjacencyList = new Array(isConnected.length);
    for(let i = 0; i < adjacencyList.length; i++) {
        adjacencyList[i] = new Array()
    }
    
    for(let i = 0; i < isConnected.length; i++) {
        for(let j = 0; j < isConnected[0].length; j++) {
            if(i === j) continue;
            if(isConnected[i][j] === 1) adjacencyList[i].push(j)
        }
    }
    
    let visited = {}; let provinces = 0;
    for(let i = 0; i < adjacencyList.length; i++) {
        if(!visited[i]) {
            dfs(i);
            provinces++;
        }
    }
    return provinces;
    
    function dfs (nodeId, visiting = {}) {
        if(visited[nodeId] || visiting[nodeId]) return
        visiting[nodeId] = true;
        adjacencyList[nodeId].forEach(n => dfs(n, visiting));
        visited[nodeId] = true;
    }
};