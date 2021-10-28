/*
    Approach
    Time Complexity - O(n)
    Space Complexity - O(1)
*/

function hasCycle(head: ListNode | null): boolean {
    let listNode = new ListNode(); listNode.next = head;
    let slow = listNode, fast = head;
    while(fast && fast.next && fast.next.next) {
        if(fast === slow) return true
        fast = fast.next.next;
        slow = slow.next;
    }
    return false
};