/**
 * 參考 https://stackoverflow.com/a/62221949/14493172
 */

class Node {
  constructor (val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

class BinaryTree {
  constructor (values) {
    this.root = null

    if (Array.isArray(values) && values.length > 0) {
      this.insertMany(values)
    }
  }

  insertMany (values) {
    if (!this.root) {
      this.root = new Node(values.shift())
    }
    let queue = this.getInsertionPoints()
    for (let value of values) {
      let [current, side] = queue.shift()
      if (value !== null) {
        current[side] = new Node(value)
        queue.push([current[side], "left"], [current[side], "right"])
      }
    }
    return this
  }
  insert (val) {
    this.insertMany([val])
  }

  getInsertionPoints () {
    // find uninterrupted series of leaves in BFS order
    const queue = [this.root]
    const leaves = []
    while (queue.length) {
      let current = queue.shift()
      for (let side of ["left", "right"]) {
        if (current[side]) {
          queue.push(current[side])
          leaves.length = 0 // reset
        } else {
          leaves.push([current, side])
        }
      }
    }
    return leaves
  }
}

module.exports = BinaryTree