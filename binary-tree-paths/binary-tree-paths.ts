/**
    Time Complexity - O(n)
    Space Complexity - O(n)
 */

function binaryTreePaths(root: TreeNode | null): string[] {
    let paths = [];
    if(!root) return paths
    dfs(root);
    return paths;
    
    function dfs(node, s = '') {
        let arrow = s.length > 0 ? '->' : '';
        if(!node.left && !node.right) {paths.push(s + arrow + node.val); return;}
        if(node.left) dfs(node.left, s + arrow + node.val);
        if(node.right) dfs(node.right, s + arrow + node.val);
    }
};