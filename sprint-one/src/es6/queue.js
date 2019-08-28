class Queue {

  constructor() {
    this.elements = [];
  }

  enqueue(element) {
    this.elements.unshift(element);
  }

  dequeue() {
    if (0 === this.elements.length) {
      return;
    }
    var popped = this.elements.pop();
    return popped;
  }

  size() {
    return this.elements.length;
  }
}
