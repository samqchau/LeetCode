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
    In the worst case of a skewed binary search tree, insertion could take O(n) time.
    
    Space Complexity - O(n)
    Traversing the tree in a way similar to DFS. Implicit call stack usage could be the max height of the tree.
 */

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    let newNode = new TreeNode(val);
    if(root === null) return newNode
    function helper(node){
        if(node.val < val) {
            if(node.right === null) {
                node.right = newNode
                return;
            } else {                
                helper(node.right);
            }
        } else if (node.val > val) {
            if(node.left === null) {
                node.left = newNode;
                return;
            } else {
                helper(node.left)
            }
        }    
    }
    
    helper(root)
    return root
};