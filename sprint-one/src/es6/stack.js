class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.elements = [];
  }
  push (element) {
    this.elements.push(element);
  }

  pop(element) {
    var popped = this.elements.pop(element);
    return popped;
  }

  size() {
    return this.elements.length;
  }

}