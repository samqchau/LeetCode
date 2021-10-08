/*
    Time Complexity - O(n)
    dfs traversal visits every node once
    
    Space Complexity - O(n)
    dfs recursive calls use implicit call stack space which is the max height of the tree.
*/

function recoverTree(root: TreeNode | null): void {
    let prev = null; let highNode = null; let lowNode = null; let min = Infinity;
    function dfs(node){
        if(!node) return
        if(node.left) dfs(node.left)
        if(!prev) prev = node;
        if(!highNode && node.val < prev.val) highNode = prev;
        if(highNode && node.val < min) {min = node.val; lowNode = node;}
        prev = node;        
        if(node.right) dfs(node.right);
    }
    dfs(root)

    let temp = highNode.val;
    highNode.val = lowNode.val;
    lowNode.val = temp;
};