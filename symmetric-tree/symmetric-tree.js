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
 * @return {boolean}
 
    Time Complexity - O(n)
    Visit every node one time
    
    Space Complexity - O(n)
    In the worst case the queue will store the max width of the tree. In a full tree the max leaf nodes is n/2 - 1
 */
function isSymmetric(root){
    if(!root) return true
    let queue = [root, root]
    while(queue.length) {
        let node1 = queue.shift();
        let node2 = queue.shift();
        if(node1 === null && node2 === null) continue;
        if(node1 === null || node2 === null) return false
        if(node1.val !== node2.val) return false
        queue.push(node1.left);
        queue.push(node2.right);
        queue.push(node1.right);
        queue.push(node2.left);
    }
    return true
}