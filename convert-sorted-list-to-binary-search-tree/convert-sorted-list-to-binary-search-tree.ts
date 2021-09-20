/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

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
 Visit every node once
 
 Space Complexity - O(n)
 O(n + n)
 Implicit stack space for recursive calls is the max height of the binary tree, because we know the tree is going to be balanced it is O(n/2) --> O(n) + Data structure for storing new tree O(n)
 */

function sortedListToBST(head: ListNode | null): TreeNode | null {
    if(head === null) return null
    let arr = []
    while(head !== null) {
        arr.push(head.val);
        head = head.next;
    }
    function helper(l, r) {
        if(l > r) return null
        let mid = Math.floor((l+r) / 2);
        let node = new TreeNode(arr[mid]);
        node.left = helper(l, mid - 1);
        node.right = helper(mid + 1, r);
        return node
    }
    return helper(0, arr.length - 1)
};