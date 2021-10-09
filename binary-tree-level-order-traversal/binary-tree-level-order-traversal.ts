/*
    Time Complexity - O(n)
    Space Compelxity - O(n)
    
    Approach
    bfs traversal
    add each level to array
*/

function levelOrder(root: TreeNode | null): number[][] {
    if(!root) return [];
    let queue = [root]; let res = [];
    while(queue.length) {
        let size = queue.length;
        let arr = [];
        while(size--) {
            let node = queue.shift();
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
            arr.push(node.val);
        }
        res.push(arr);
    }
    return res;
};