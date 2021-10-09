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
    Next method and has next are constant time.
    
    Space Complexity - O(n)
    DFS recursive calls are the height of the tree.
    Store the preorder traversal as an array in our class initialization. O(n)
 */

class BSTIterator {
    pointer = 0;
    arr;
    constructor(root: TreeNode | null) {
        let arr = [];
        dfs(root);
        function dfs(node) {
            if(!node) return
            if(node.left) dfs(node.left)
            arr.push(node.val)
            if(node.right) dfs(node.right);
        }
        this.arr = arr;
    }

    next(): number {
        if(!this.hasNext()) return;
        let num = this.arr[this.pointer];
        this.pointer++;
        return num
    }

    hasNext(): boolean {
        if(this.pointer < this.arr.length) return true;
        else return false
    }
}