/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 
    Time Complexity - O(n)
    Visit every node once.
    
    Space Complexity - O(n)
    Recursive calls to the helper function. In the worst case the tree is straight down in which case we will have n helper calls in the call stack at once.
 */

function maxDepth(root: Node | null): number {    
    function helper(node: Node | null):number{
        if(root === null) return 0
        let max = 0;
        for(let i = 0; i < node.children.length; i++) {
            max = Math.max(helper(node.children[i]), max)
        }
        return 1 + max;
    }
    return helper(root)
};