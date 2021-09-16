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
    Visit every node/vertex once
    
    Space Complexity - O(logn)
    DFS approach. Worst case is max height of tree because of recursive calls stored in call stack.
 */

function sumOfLeftLeaves(root: TreeNode | null): number {
    function helper(node:TreeNode | null): number {
        if(node === null) return 0
        let sum = 0;
        if(isLeafNode(node.left)) sum += node.left.val
        sum += helper(node.left) + helper(node.right)
        return sum
    }
    
    function isLeafNode(node: TreeNode | null): boolean {
        if(node === null) return false
        return node.left === null && node.right === null
    }
    return helper(root)
};