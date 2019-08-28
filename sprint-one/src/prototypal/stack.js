var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.index = 0;
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

stackMethods.pop = function() {
  if (this.index === 0) {
    return;
  }
  this.index--;
  var garbage = this.storage[this.index];
  delete this.storage[this.size];
  return garbage;
};

stackMethods.size = function() {
  return this.index;
};