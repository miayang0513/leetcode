/**
 * Given the root of a binary search tree,rearrange the tree in in-order
 * so that the leftmost node in the tree is now the root of the tree, and
 * every node has no left child and only one right child.
 * 
 * Example 1:
 * Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
 * Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  function inOrder (root) {
    const nodeList = []
    function traverse (node) {
      if (node.left) {
        traverse(node.left)
      }
      nodeList.push(node.val)
      if (node.right) {
        traverse(node.right)
      }
    }
    traverse(root)
    return nodeList
  }
  function generateTree (values) {
    let tree = null
    for (let i = 0; i < values.length; i++) {
      const node = {
        val: values[i],
        left: null,
        right: null
      }
      if (tree === null) {
        tree = node
        continue
      }
      let currentParent = tree
      while (true) {
        if (currentParent.right === null) {
          currentParent.right = node
          break
        }
        currentParent = currentParent.right
      }
    }
    return tree
  }

  const nodeList = inOrder(root)
  return generateTree(nodeList)
}


const BinarySearchTree = require('../generator/binary-search-tree')
const tree = new BinarySearchTree([10, 5, 20, 15, 1, 8, 30])
console.log(increasingBST(tree.root))
