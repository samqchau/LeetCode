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
    Time Complexity - O(n)
    Iterate through the entire list
    
    Space Complexity - O(1)
    Constant space requirements
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let curr = head;
    while(curr !== null) {
        let next = curr.next;
        if(next === null) break;
        else if(curr.val !== next.val) {
            curr = next;
        } else {
            curr.next = next.next;
            delete next.next;
            delete next.val;
            next = null;
        }
    }
    return head;
};