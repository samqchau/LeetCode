/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 
 Time Complexity - O(n)
 Iterate through every node on the list and just return
 
 Space Complexity - O(n)
 Creating a deep copy of list, have the new list, the old list, and a map
 */
var copyRandomList = function(head) {
    let map = new Map();
    
    let helper = (node) => {
        if(node == null) return null;
        if(map.get(node) != null) return map.get(node);
        
        const n = new Node(node.val);
        map.set(node, n)
        
        n.next = helper(node.next)
        n.random = helper(node.random)
        return n;
    }
    return helper(head)
};