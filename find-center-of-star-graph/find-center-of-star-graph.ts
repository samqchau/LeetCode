/*
    Time Complexity - O(1)
    Space Complexity - O(1);
*/

function findCenter(edges: number[][]): number {
    let edge1 = edges[0];
    let edge2 = edges[1];
    return edge1[0] === edge2[0] ? edge1[0] : edge1[0] === edge2[1] ? edge1[0] : edge1[1];
};
