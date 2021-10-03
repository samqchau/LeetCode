/*
    Time Complexity - O(n)
    Space Complexity - O(n)
*/

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    l1 = reverseLinkedList(l1); l2 = reverseLinkedList(l2);
    
    let sum = new ListNode(); let carry = 0; let curr = sum;
    while(l1 && l2) {
        let num = l1.val + l2.val + carry;
        if(num >= 10) {carry = 1; num -= 10;} else {carry = 0;}
        curr.next = new ListNode(num); curr = curr.next;
        l1 = l1.next; l2 = l2.next;
    }
    
    let l = l1 || l2;    
    while(l) {
        let num = l.val + carry;
        if(num >= 10) {carry = 1; num -= 10;} else {carry = 0;}
        curr.next = new ListNode(num);
        l = l.next; curr = curr.next;
    }
    
    if(carry) curr.next = new ListNode(carry)   
    return reverseLinkedList(sum.next);
};

function reverseLinkedList (head) {
    let prev = null, curr = head;
    while(curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}