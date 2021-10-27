/*
    Approach
    Convert the entire linked list to an array {time: n, space: n}
    for every number (i = 0; i < arr.length; i++) {time: n space: 1}
        while (the stack has elements waiting for a larger value and the top value is less than the current number)
            let e = stack.pop(), e needs value for comparison and idx for modifying the correct place in results
            set the results array[index] to arr[i];
        stack.push([arr[i], i])
    every e left in the stack has no greater value.
    update res to be 0 in all these places
    return res
    
    Time Complexity - O()
    Space Complexity - O()
*/

function nextLargerNodes(head: ListNode | null): number[] {
    if(!head) return []
    let arr = []
    
    while(head) {
        arr.push(head.val);
        head = head.next;
    }
    
    let stack = [], res = [];
    
    for(let i = 0; i < arr.length; i++) {
        while(stack.length > 0 && stack[stack.length - 1][0] < arr[i]) {
            let idx = stack.pop()[1];
            res[idx] = arr[i];
        }
        stack.push([arr[i], i]);
    }
    
    while(stack.length) {
        let node = stack.pop();
        res[node[1]] = 0
    }
    return res
};