/*
    Approach - Traverse graph if we reach the target node return true else keep traversing
    Time Complexity - O(v)
    DFS traversal visits every vertex and edge once
    
    Space Compelxity - O(v + e)
    Implicit stack space used for dfs traversal is number of vertices at the worst
    Adjacency List stores every edge for every node. (v + e)
*/

function validPath(n: number, edges: number[][], start: number, end: number): boolean {
    let adjacencyList = new Array(n).fill(0).map(_ => new Array());
    for(let i = 0; i < edges.length; i++) {
        let node1 = edges[i][0]; let node2 = edges[i][1];
        adjacencyList[node1].push(node2);
        adjacencyList[node2].push(node1);        
    }
    return dfs(start);
    
    function dfs(node, visiting = {}, visited = {}):boolean {
        if(node === end) return true
        if(visiting[node] || visited[node]) return false
        visiting[node] = true;
        let neighbors = adjacencyList[node];
        for(let i = 0; i < neighbors.length; i++) {
            if(dfs(neighbors[i], visiting, visited)) return true
        }
        visiting[node] = false; visited[node] = true;
        return false;
    }
};