var BinarySearchTree = function(value) {
  var bst = Object.create(bstMethods);
  bst.left = null;
  bst.right = null;
  bst.value = value;
  return bst;
};

var bstMethods = {};

bstMethods.insert = function(value) {
  // recurse right or left through children
  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

bstMethods.contains = function(target) {
  if (target === this.value) {
    return true;
  }
  // recurse right or left through children
  if (this.value > target && this.left) {
    return this.left.contains(target);
  }
  if (this.value < target && this.right) {
    return this.right.contains(target);
  }
  return false;
};

bstMethods.depthFirstLog = function(callback) {
  callback(this.value);
  // recurse right or left through children
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
