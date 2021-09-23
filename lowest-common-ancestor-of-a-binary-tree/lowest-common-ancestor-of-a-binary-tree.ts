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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	function helper(node):TreeNode | null {
		if(node === null) return null
		if(node.val === p.val || node.val === q.val) return node
        let left = helper(node.left);
        let right = helper(node.right);
		if(left !== null && right !== null) return node
		else return left || right
    }
return helper(root)
};