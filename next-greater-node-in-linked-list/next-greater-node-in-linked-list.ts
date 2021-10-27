/*
    Time Complexity - O(n**2)
    Space Compelxity - O(n)
*/

function nextLargerNodes(head): number[] {
    let curr = head, prev = null, temp = curr;
    while(curr) {
        curr.prev = prev;
        prev = curr;
        curr = curr.next;
    }
    let ans = [], stack = [];
    
    while(prev) {
        let val = prev.val, res = null
        for(let i = 0; i < stack.length; i++) {
            if(stack[i] > val) {
                res = stack[i]
                break;
            }
        }
        if(res) ans.unshift(res);
        else ans.unshift(0);
        stack.unshift(val);
        prev = prev.prev;
    }
    return ans
};