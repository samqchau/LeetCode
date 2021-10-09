/*
    Time Complexity - O(n)
    Space Complexity - O(n)
*/

function levelOrderBottom(root: TreeNode | null): number[][] {
    if(!root) return []
    let queue = [root], res = [];
    while(queue.length) {
        let size = queue.length, arr = [];
        while(size--) {
            let node = queue.shift();
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
            arr.push(node.val);
        }
        res.push(arr);
    }
    return res.reverse()
};