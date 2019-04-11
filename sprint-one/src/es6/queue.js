class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.elements = [];
  }

  enqueue(element) {
    this.elements.unshift(element);
  }

  dequeue() {
    if(0 === this.elements.length) {
      return;
    }
    var popped = this.elements.pop();
    return popped;
  }

  size() {
    return this.elements.length;
  }
  
}
