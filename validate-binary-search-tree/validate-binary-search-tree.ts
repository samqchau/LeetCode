/*
    Approach
    We are given the root of a bst, the bst's inorder traversal will be sorted,
    left => node => right
    if we traverse the tree given to us in inorder traversal the left (smallest) will be printed, then the node, then right
    If the entire preorder traversal is sorted then we have a valid binary search tree
    
    Time Complexity - O(n)
    -Visit every node once writing value to array O(n)
    -For every node, check to see if the neighbor is greater (out of order) O(n)
    
    Space Complexity - O(n)
    Implicit stack space of dfs traversal is max height of tree.
    Arr to store values
    
    To optimize
*/

function isValidBST(root: TreeNode | null): boolean {    
    let arr = []
    function dfs(node) {
        if(!node) return
        if(node.left) dfs(node.left)
        arr.push(node.val)
        if(node.right) dfs(node.right);
    }
    dfs(root);
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] >= arr[i + 1]) return false
    }
    return true;
};