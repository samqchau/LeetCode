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
    While loop is dependent on length of linked list. In the worst case, the entire linked list is a cycle and the fast pointer traverses at least once.
    
    Space Complexity - O(n)
    Space requirements independent from list input.
 */

function detectCycle(head: ListNode | null): ListNode | null {
    let a:ListNode | null = head;
    let b: ListNode | null = head;
    
    while(a && a.next) {
        a = a.next.next;
        b = b.next;        
        if(a === b) break;
    }
    
    if(a === null || a.next === null) return null
    
    b = head;
    while(a !== b) {
        a = a.next;
        b = b.next;
    }
     return a
};