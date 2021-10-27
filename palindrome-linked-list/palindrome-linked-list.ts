/*
    Time Complexity - O(n)
    Space Complexity - O(n)
*/
function isPalindrome(head: ListNode | null): boolean {
    let slow = head, fast = head;
    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let stack = [];
    while(slow) {
        stack.push(slow.val);
        slow = slow.next;
    }
    slow = head;
    while(stack.length) {
        if(stack.pop() !== slow.val) return false
        slow = slow.next;
    }
    return true
};