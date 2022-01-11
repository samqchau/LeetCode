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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    function dfs (node) {
        if(!node) return false
        let l = dfs(node.left)
        if(isEqual(node)) return true
        let r = dfs(node.right)
        return l || r
    }
    
    function isEqual(node) {
        let queue = [node, subRoot];
        while(queue.length) {
            let n = queue.length / 2;
            while(n--) {
                let n1 = queue.shift();
                let n2 = queue.shift();
                if(n1 === null && n2 === null) break;
                else if(n1 !== null && n2 === null) return false
                else if (n1 === null && n2 !== null) return false
                else if(n1.val !== n2.val) return false
                else {
                    queue.push(n1.left); queue.push(n2.left);
                    queue.push(n1.right); queue.push(n2.right);
                }
            }
        }
        return true
    }
    
    return dfs(root)
};