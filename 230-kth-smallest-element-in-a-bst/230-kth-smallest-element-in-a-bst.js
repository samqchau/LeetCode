/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 
 iterative without recursion
 use stack
 
 we want to go left until no more left nodes, this is the smallest element,
 
 if k = 1 then return this node.val 
 k = 2 wants the parent
 k = 3 wants the right
 
 
 */
var kthSmallest = function(node, k) {
    let stack = [];
    while(stack.length || node) {
        while(node) {
            stack.push(node);
            node = node.left;
        }
        node = stack.pop(); k--;
        if(k == 0) return node.val;
        node = node.right;
    }
};