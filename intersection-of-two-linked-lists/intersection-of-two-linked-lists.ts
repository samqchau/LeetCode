/**
    Time Complexity - O(n)
    Iterate through both lists once
    
    Space Complexity - O(n)
    Save one list to memory
    
 */

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let visited = new Map();
    let current = headA;
    while(current) {
        visited.set(current, true)
        current = current.next
    }
    current = headB;
    while(current) {
        if(visited.has(current)) return current
        current = current.next;
    }
    return null
};