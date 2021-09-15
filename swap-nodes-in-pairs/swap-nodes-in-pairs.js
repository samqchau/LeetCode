/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 Time Complexity - O(n)
 Makes recursive calls until the end of the list is reached.
 
 Space Complexity - O(n)
 Makes recursive calls until the end of the list is reached. The stack has to back track returning the nodes to resolve the original call.
 */
var swapPairs = function(head) {    
    function copy(node) {
        if(node === null || node.next === null) return node;
        let curr = node; let next = curr.next; let final = next.next;
        next.next = curr;
        curr.next = copy(final);
        return next
    }
    return copy(head)
};