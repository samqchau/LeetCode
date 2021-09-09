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
    One while loop that executes until the end of the shorter list is reached. In worst case, we could go to the end of both l1 and l2. O(n1 + n2) --> O(n)
    
    Space Complexity - O(1)
    Space required for execution does not grow with linked list input size. Only a new head is created. Pointers in existing linked lists are modified. If we include the memory these two linked lists are already occupying, they occupy space (n + m) where n is the size of l1 and m is the size of l2.
    
 */

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if(l1 === null) return l2
    else if(l2 === null) return l1
    
    let head = new ListNode(); let curr = head;
    
    while(l1 && l2) {
        if(l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    
    if(l1 === null) {
        curr.next = l2
    } else if (l2 === null) {
        curr.next = l1
    }
    
    return head.next
};