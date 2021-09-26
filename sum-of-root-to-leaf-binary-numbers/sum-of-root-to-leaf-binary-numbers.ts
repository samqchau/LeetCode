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
    DFS traversal visit every node once
    
    Space Complexity - O(n)
    Recursive calls use implicit stack space. Worst case is max height of tree.
 */

function sumRootToLeaf(root: TreeNode | null): number {
    let res:string[] = [];
    
    function dfs(node, s=''):void {
        if(node === null) return
        if(node.left === null && node.right === null) res.push(s + node.val);
        dfs(node.left, s+node.val);
        dfs(node.right, s+node.val);
    }
    
    function binaryToInt(string):number {
        let sum:number = 0;
        let i:number = 0;
        while(i < string.length) {
            let char:string = string[string.length - 1 - i];
            if(char === '1') {
                sum += Math.pow(2, i);
            }
            i++;
        }
        return sum
    }
    dfs(root);
    console.log(res)
    return res.reduce((acc,val) => {return acc + binaryToInt(val)}, 0)
};