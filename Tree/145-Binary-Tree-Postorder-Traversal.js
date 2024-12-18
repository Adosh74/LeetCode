/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {

    if (!root) return []
    const result = [];
    const recursive = (node) => {
        if (!node) return;

        if (node.left) recursive(node.left);
        if (node.right) recursive(node.right);
        result.push(node.val);
    }
    recursive(root);
    return result;
};