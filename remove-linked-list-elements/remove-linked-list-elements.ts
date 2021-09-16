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
    While loops iterate directly through the list. No revisiting nodes.
    
    Space Complexity - O(n)
    In the worst case, we return a copy of the entire linked list.
 */

function removeElements(head: ListNode | null, val: number): ListNode | null {
    let newHead: ListNode | null = new ListNode();
    newHead.next = nextNode(head)
    
    function nextNode(node: ListNode | null): ListNode | null {
        if(node === null) return null
        let current = node;
        while(current !== null && current.val === val) {
            current = current.next
        }
        return current;
    }
    
    let curr = newHead.next;
    while(curr) {
        curr.next = nextNode(curr.next);
        curr = curr.next;
    }
    
    return newHead.next
};