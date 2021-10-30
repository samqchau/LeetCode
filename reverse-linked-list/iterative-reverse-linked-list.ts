/*
    Time Complexity - O(n)
    Space Complexity - O(1)
*/

function reverseList(head: ListNode | null): ListNode | null {
    if(!head) return head
    
    let prev = null, curr = head, temp = head;
    while(curr) {
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    
    return prev
};
