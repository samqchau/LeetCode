/*
    Approach
    1. Count indegrees - Remove all nodes indegree zero until all nodes are gone, or no more nodes have in degree zero. Return true if done.length === numCourses
    2. DFS TRAVERSAL - Create adjacency list > DFS on all nodes. Add node to visiting --> DFS all children --> if node is visited return / if node is visiting return false / DFS(node.neighbors) --> Remove from visiting Add to visited
    
    Time Complexity - O(V + E)
    Visit every node and edge at least once
    
    Space Complexity - O(N)
    1. Indegrees, adjacency list, done pile O(3N)
    2. Visited, Visiting, Adjacency List
*/

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    let inDegrees:number[] = new Array(numCourses).fill(0);
    let adjacencyList:number[][] = new Array(numCourses)
    
    for(let i = 0; i < adjacencyList.length; i++) {
        adjacencyList[i] = new Array(0);
    }

    prerequisites.forEach(p => {
        let a = p[0]; let b = p[1];
        inDegrees[a]++;
        adjacencyList[b].push(a);
    })
    console.log(adjacencyList)
    console.log(inDegrees)
    let zeroInDegrees:number[] = [];
    
    inDegrees.forEach((inDegree, nodeId) => {
        checkInDegrees(nodeId);
    })
    
    function checkInDegrees (nodeId):void {
        if(zeroInDegrees.includes(nodeId)) return
        else if(inDegrees[nodeId] === 0) {
            zeroInDegrees.push(nodeId);
            adjacencyList[nodeId].forEach(neighbor => {
                inDegrees[neighbor]--;
                checkInDegrees(neighbor);
            })
        }
    }

    return zeroInDegrees.length === numCourses ? true : false
};