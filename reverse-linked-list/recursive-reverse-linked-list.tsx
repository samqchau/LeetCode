/*
    Time Complexity - O(n)
    Space Complexity - O(n)
*/

function reverseList(head: ListNode | null, prev: ListNode | null = null) {
    if(!head) return prev
    
    let temp = head.next;
    head.next = prev;
    prev = head;
    
    return reverseList(temp, prev)
};
