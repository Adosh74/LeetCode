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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
     if(!root) return false
    // if(!root.left && !root.right && root.val === targetSum) return true
    
    // const queue = [];
    // console.log(root)
    let output= false
    function dfs(node, sum){
        if(!node) return false
        if(!node.left && !node.right && targetSum== sum+node.val) output= true
        if(node.left) dfs(node.left,sum+node.val)
        if(node.right) dfs(node.right,sum+node.val)
    }
    dfs(root,0)
    return output

};