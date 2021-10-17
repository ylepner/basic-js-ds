const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const newNode = new Node(data)
    if (!this._root) {
      this._root = newNode;
      return
    }

    let currentNode = this._root;

    while (currentNode) {
      if (newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return
        }
        currentNode = currentNode.right;
      }
    }

  }

  has(data) {
    let currentNode = this._root;
    while (currentNode) {
      if (currentNode.data === data) {
        return true
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }
    return false
  }

  find(data) {
    let currentNode = this._root;
    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }
    return null
  }

  remove(data) {/* 
    let currentNode = this._root;
    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }
    return null
  } */
  }

  min() {
    let currentNode = this._root;
    while (currentNode.left) {
      currentNode = currentNode.left
    }
    return currentNode.data
  }

  max() {
    let currentNode = this._root;
    while (currentNode.right) {
      currentNode = currentNode.right
    }
    return currentNode.data
  }
}

const tree = new module.exports()
tree.root()
tree.add(8)
tree.add(3)
tree.add(10)
tree.add(1)
tree.add(6)
tree.add(14)
tree.add(4)
tree.add(7)
tree.add(13)

console.log(tree.max())