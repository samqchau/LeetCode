/*
    Time Complexity - O(v+e)
    Space Complexity - O(v+e)
*/

function allPathsSourceTarget(graph: number[][]): number[][] {
    let paths = []
    dfs(0)
    return paths
    
    function dfs(nodeId, path = [], visiting = {}) {
        if(visiting[nodeId]) return
        if(nodeId === graph.length - 1) {paths.push([...path, nodeId]); return}
        visiting[nodeId] = true;
        graph[nodeId].forEach(n => {
            dfs(n, [...path, nodeId], visiting);
        });
        visiting[nodeId] = false;
    }
};