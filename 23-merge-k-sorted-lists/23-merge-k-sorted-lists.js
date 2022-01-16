/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let dummyHead = new ListNode();
    let curr = dummyHead; let bool = true;
    while(bool) {
        let minIdx; let min = Infinity;
        for(let i = 0; i < lists.length; i++) {
            let l = lists[i];
            if(l?.val < min) {
                min = l.val;
                minIdx = i;
            }
        }
        if(minIdx == null) break;
        
        curr.next = lists[minIdx];
        lists[minIdx] = lists[minIdx].next;
        curr = curr.next;
    }
    
    return dummyHead.next;
};