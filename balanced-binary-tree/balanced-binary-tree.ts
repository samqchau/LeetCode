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
 */

function isBalanced(root: TreeNode | null): boolean {
    if(!root) return true
    if(Math.abs(maxDepth(root.left) - maxDepth(root.right)) > 1) return false
    return isBalanced(root.left) && isBalanced(root.right)
    
    function maxDepth (node) {
        if(!node) return 0
        return Math.max(maxDepth(node.right), maxDepth(node.left)) + 1;
    }
};