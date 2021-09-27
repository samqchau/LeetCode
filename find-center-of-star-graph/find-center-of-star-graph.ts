/*
    Approaches
    1. Iterate through edges. Remember last edge. Check to see what node both prevEdge and currEdge are both are connected to. If this graph is guarenteed to be a star graph, then the common node of the pairs would be the center of the star.
    2. Create an adjacency list - the node with more than 1 connection is the center of the star or every other node's only neighbor is the center.
    
    Time Complexity - O(1)
    Space Complexity - O(1);
*/

function findCenter(edges: number[][]): number {
    let edge1 = edges[0];
    let edge2 = edges[1];
    return edge1[0] === edge2[0] ? edge1[0] : edge1[0] === edge2[1] ? edge1[0] : edge1[1];
};