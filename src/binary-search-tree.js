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
      console.log(newNode.data, currentNode.data)
      if (newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.rigth) {
          currentNode.rigth = newNode;
          return
        }
        currentNode = currentNode.rigth;
      }
    }

  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
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

console.log(tree)