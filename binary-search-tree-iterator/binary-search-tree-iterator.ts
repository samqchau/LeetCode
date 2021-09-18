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
    Visits every node once
    
    Space Complexity - O(n)
    DFS recursive calls are the height of the tree.
 */

class BSTIterator {
    arr = []
    constructor(root: TreeNode | null) {
        const DFS = (node) => {
            if(node === null) return
            DFS(node.left)
            this.arr.push(node.val)
            DFS(node.right)
        }
        DFS(root);
    }

    next(): number {
        return this.arr.shift()
    }

    hasNext(): boolean {
        return this.arr.length > 0
    }
}