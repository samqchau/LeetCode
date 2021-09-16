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
    Traverse the tree in a DFS manner. Visit every vertex/node once
    
    Space Complexity - O(logn)
    Traverse the tree in a DFS manner. The maximum size of the call stack will be the max height of the BST. Height of BST is log2(n)
 */

function minDepth(root: TreeNode | null): number {
    if(root === null) return 0
    else if(root.left === null) return minDepth(root.right) + 1
    else if (root.right === null) return minDepth(root.left) + 1;
    else return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};