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
 Visits every node one the tree once.
 
 Space Complexity - O(n)
 Recursive calls to the helper function?
 
 */

function isSymmetric(root: TreeNode | null): boolean {
    if(root === null) return true
    
    function helper(left: TreeNode | null, right: TreeNode | null): boolean {
        if(left === null && right === null) return true
        if(left === null || right === null) return false
        if(left.val !== right.val) return false
        
        return helper(left.left, right.right) && helper(left.right, right.left)
    }
    
    return helper(root.left, root.right)
};