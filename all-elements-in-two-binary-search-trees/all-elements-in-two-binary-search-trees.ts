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
 
    Time Complexity - O(nlogn)
    Space Complexity - O(n)
 */

function getAllElements(root1: TreeNode | null, root2: TreeNode | null): number[] {
    let res:number[] = [];
    function dfsHelper(node): void {
        if(node === null) return
        dfsHelper(node.left);
        res.push(node.val);
        dfsHelper(node.right);        
    }
    dfsHelper(root1);
    dfsHelper(root2);
    res.sort((a,b) => a-b);
    return res
};