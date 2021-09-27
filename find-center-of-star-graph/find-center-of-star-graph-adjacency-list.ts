/*
    Time Complexity - O(1)
    Space Complexity - O(n)
*/

function findCenter(edges: number[][]): number {
    let adjacencyList = {};
    for(let i = 0; i < edges.length; i++) {
        let edge = edges[i];
        let node1 = edge[0]; let node2 = edge[1];
        adjacencyList[node1] ? adjacencyList[node1].push(node2) : adjacencyList[node1] = [node2];
        adjacencyList[node2] ? adjacencyList[node2].push(node1) : adjacencyList[node2] = [node1];
    }
    for(let key of Object.keys(adjacencyList)) {
        if(adjacencyList[key].length > 1) return Number(key)
    }
};
