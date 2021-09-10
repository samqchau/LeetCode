/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }

    Time Complexity - O(n)
    Iterate through both lists
    
    Space Complexity - O(1)
    Constant space
*/

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null
    let currA = headA; let currB = headB;
    while(currA !== currB) {
        currA = !currA ? headB : currA.next;
        currB = !currB ? headA : currB.next;
    }
    return currA
};