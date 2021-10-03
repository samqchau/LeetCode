/*  
    Time Complexity - O(n)    
    Space Complexity - O(n)
 */

function isPalindrome(head: ListNode | null): boolean {
    let n = 0;
    let p1 = head;
    while(p1) {n++; p1 = p1.next;}
    let mid = Math.ceil(n / 2);
    
    p1 = head; let p2 = head, stack = [];
    while(mid--) {
        stack.push(p2.val);
        p2 = p2.next;
    }
    if(n % 2 === 1) stack.pop();
    
    while(p2) {
        if(p2.val !== stack.pop()) return false
        p2 = p2.next;
    }
    return true;
};