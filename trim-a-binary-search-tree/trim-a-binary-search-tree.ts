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
    Traverse entire tree once
    
    Space Complexity - O(n)
    Implicit recursive calls to helper function would be max height of tree.
 */

function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
    function helper(node){
        if(node === null) return null
        else if(node.val > high) {
            return helper(node.left)
        }
        else if(node.val < low) {
            return helper(node.right)
        }
        else if(node.val <= high && node.val >= low) {
            node.left = helper(node.left);
            node.right = helper(node.right);
            return node
        }        
    }
    return helper(root);
};