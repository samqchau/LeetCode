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
 
   Time Complexity - O(n/2) --> O(n)
   Linked lists have linear traversal. As the input size of the linked list increases, traversal time increases at a rate of (n/2)
   
   Space Complexity - O(1)
   Space requirements are independent from linked list input size
   
 */

function middleNode(head: ListNode | null): ListNode | null {
    let p1:ListNode | null = head;
    let p2:ListNode | null = head;
    while(p2 !== null && p2.next !== null) {
        p1 = p1.next;
        p2 = p2.next.next;
    }
    return p1
};
