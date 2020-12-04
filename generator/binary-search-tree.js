/**
 * 參考 https://break0344.medium.com/data-structures-and-algorithms-8-tree-fc835b8f548e
 */

class Node {
  constructor (val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor (values) {
    this.root = null
    if (values) {
      this.insertMany(values)
    }
  }
  insertMany (values) {
    for (let i = 0; i < values.length; i++) {
      this.insert(values[i])
    }
  }
  insert (val) {
    const node = new Node(val)

    if (!this.root) {
      this.root = node
      return
    }

    let parent = this.root

    while (true) {
      if (val < parent.val) {
        if (parent.left === null) {
          parent.left = node
          break
        }
        parent = parent.left
      }
      else if (val > parent.val) {
        if (parent.right === null) {
          parent.right = node
          break
        }
        parent = parent.right
      }
      else {
        console.log("插入重複節點")
        break
      }
    }
  }

  inOrderTraverse () {
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
    traverse(this.root)
    return nodeList
  }
}

module.exports = BinarySearchTree