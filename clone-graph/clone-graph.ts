/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 
    Time Complexity - O(V+E)
    Visit every node and edge once
    
    Space Complexity - O(n)
    Return a clone of the input + implicit stack space for recursive calls that could be the size of the original graph.
 */

function cloneGraph(root: Node | null): Node | null {
    if(root === null) return null
    let map = new Map();
    function clone(node) {
        if(!map.has(node.val)) {
            map.set(node.val, new Node(node.val));
            node.neighbors.forEach(n => map.get(node.val).neighbors.push(clone(n)));
        } return map.get(node.val)
    }
    return clone(root);
};