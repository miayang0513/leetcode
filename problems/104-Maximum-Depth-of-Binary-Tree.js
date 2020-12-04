/**
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along
 * the longest path from the root node down to the farthest leaf node.
 * 
 * Example 1:
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 3
 * 
 * Example 2:
 * Input: root = [1,null,2]
 * Output: 2
 * 
 * Example 3:
 * Input: root = []
 * Output: 0
 * 
 * Example 4:
 * Input: root = [0]
 * Output: 1
 */

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
 * @return {number}
 */
var maxDepth = function (root) {
	if (root === null) {
		return 0
	}

	return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

const BinaryTree = require('../generator/binary-tree')
const Example1 = new BinaryTree([3,9,20,null,null,15,7])
console.log(maxDepth(Example1.root))
const Example2 = new BinaryTree([1,null,2])
console.log(maxDepth(Example2.root))
const Example3 = new BinaryTree([])
console.log(maxDepth(Example3.root))
const Example4 = new BinaryTree([0])
console.log(maxDepth(Example4.root))
