class Stack {
  
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