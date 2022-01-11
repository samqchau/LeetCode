/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let queue = [p, q];
    while(queue.length) {
        let n = queue.length / 2;
        while(n--) {
            let i = queue.shift(), j = queue.shift();
            if(i === null && j === null) break;
            else if((i === null && j !== null) || (i !== null && j === null)) return false
            else if(i.val !== j.val) return false
            else {
                queue.push(i.left); queue.push(j.left);
                queue.push(i.right); queue.push(j.right);                
            }
        }
    }
    return true
};