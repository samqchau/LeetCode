/*
    Approach --> Top Sort
    
    Top Sort Implementation
    1. DFS
    2. Indegrees
    
    Time Complexity - O(v + e)
    -Visit all edges and vertices once
    -Create adjacency list from edge pairs given (e)
    -DFS Traversal of every node on graph (v)
    
    Space Complexity - O(n)
    -Visiting (n)
    -Visited (n)
    -Order (n)
    
*/

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    if(prerequisites.length === 0) {
        let res = new Array(numCourses).fill(0).map((e,i) => {return i})
        return res
    }
    let adjacencyList:number[][] = new Array(numCourses);
    for(let i = 0; i < numCourses; i++) {
        adjacencyList[i] = new Array()
    }
    prerequisites.forEach(p => {
        let a = p[0]; let b = p[1];
        adjacencyList[b].push(a);
    })
    
    let visited = {}; let visiting = {};
    let order:number[] = []; let foundCycle:boolean = false;
    
    for(let i = 0; i < adjacencyList.length; i++) {        
        dfsHelper(i);
        if(foundCycle) return []
    }
    
    return order
    
    function dfsHelper(nodeId):void {
        if(visiting[nodeId]) {foundCycle = true; return;}
        if(visited[nodeId]) return
        visiting[nodeId] = true;
        let neighbors = adjacencyList[nodeId];
        neighbors.forEach(n => {
            dfsHelper(n);
        })
        order.unshift(nodeId);
        visiting[nodeId] = false;
        visited[nodeId] = true;
    }
};