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
 
    Time Complexity - O(m * n)
    For every node in root, we compare the entire subtree to subRoot.
 
    Space Complexity - O(m)
    Implicit stack space used by recursive calls can be the height of subRoot (m).
 */

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    
    function helper(nodeA, nodeB) {
        if(!nodeA && !nodeB) return true
        else if(!nodeA || !nodeB) return false
        else if(nodeA.val === nodeB.val) {
            let res = helper(nodeA.left, nodeB.left) && helper(nodeA.right, nodeB.right);
            if(res) return true
        } else {
            return false
        }
    }
    
    let queue = [root];
    
    while(queue.length) {
        let node = queue.shift();
        if(helper(node, subRoot)) return true
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
    }
    
    return false
};