var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.index = 0;
  extend(someInstance, stackMethods);
  return someInstance;
};

var extend = function(objTarget, objPayload) {
  for (var key in objPayload) {
    objTarget[key] = objPayload[key];
  }
  return objTarget;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

stackMethods.pop = function() {
  if (this.index === 0) {
    return 0;
  }
  this.index--;
  var garbage = this.storage[this.index];
  delete this.storage[this.index];
  return garbage;
};

stackMethods.size = function() {
  return this.index;
};