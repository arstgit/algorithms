/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root !== null) {
        let x = root.left;
        root.left = root.right;
        root.right = x;
        invertTree(root.left);
        invertTree(root.right);
    }
    return root;
};


var invertTree = function(root) {
    let stack = [];
    let p = root;
    while (p != null) {
        let x = p.left;
        p.left = p.right;
        p.right = x;
        p.left !== null && stack.push(p.left);
        p.right !== null && stack.push(p.right);
        p = stack.pop();
    }
    return root;
};