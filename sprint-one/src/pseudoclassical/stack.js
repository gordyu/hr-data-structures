var Stack = function() {
  this.storage = {};
  this.index = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

Stack.prototype.pop = function() {
  if (this.index === 0) {
    return;
  }
  this.index--;
  var garbage = this.storage[this.index];
  delete this.storage[this.index];
  return garbage;
};

Stack.prototype.size = function() {
  return this.index;
};