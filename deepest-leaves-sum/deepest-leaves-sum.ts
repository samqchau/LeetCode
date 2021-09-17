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
    Visit every node once through bfs
    
    Space Complexity - O(n)
    Queue's max size in worst case is the max width of the binary tree. Max width of bst is n/2
 
 */

function deepestLeavesSum(root: TreeNode | null): number {
    if(root === null) return 0
    let res:number = 0;
    let queue:TreeNode[] = [];
    queue.push(root)
    while(queue.length) {
        let size = queue.length;
        let sum = 0;
        while(size--) {
            let node = queue.shift();
            if(node.left) {
                queue.push(node.left)
            }
            if(node.right) {
                queue.push(node.right);
            }
            sum += node.val
        }
        res = sum
    }
    return res
};