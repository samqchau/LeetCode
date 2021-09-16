/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 
    Time Complexity - O(n)
    Visit every node/vertex one time.
    
    Space Complexity - O(logn)
    In the worst case, DFS fills the call stack with the size of the height of the binary tree. Height of binary tree is log2(n).
 */

function maxDepth(root: TreeNode | null): number {    
    function helper(node: TreeNode | null): number {
        if(node === null) return 0
        else {
            let max = Math.max(helper(node.left),helper(node.right))
            return 1 + max;
        }
    }
    return helper(root)
};