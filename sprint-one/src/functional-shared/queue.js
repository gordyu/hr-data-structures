/*//HR Solution
var makeQueue = function(){  
  var someInstance = {};

  someInstance._storage = {};
  someInstance._start = 0;
  someIstance._end = 0;

  _.extend(someInstance, queueMethods); //performs the three assignments that immediately follow.

  //someInstance.enqueue = queueMethods.enqueue;
  //someInstance.dequeue = queueMethods.dequeue;
  //someInstance.size = queueMethods.size 

  return someInstance;
};

queueMethods.enqueue = function(value) {
  this._storage[this._end++] = value;
};

queueMethods.dequeue = function() {
  var result = this._storage[this._start] 
  if(this.size()){
    delete this._storage[this._start];
    this._start++;
  } 
  return result;
};

queueMethods.size = function() {
  return this._end-this._start;;
};
*/

var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.index = 0;
  extend(someInstance, queueMethods);
  return someInstance;
};

var extend = function(objTarget, objPayload) {
  for (var key in objPayload) {
    objTarget[key] = objPayload[key];
  }
  return objTarget;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

queueMethods.dequeue = function() {
  if (this.index === 0) {
    return 0;
  }
  var garbage = this.storage[0];
  this.index--;
  for (var key in this.storage) {
    this.storage[key - 1] = this.storage[key];
  }
  return garbage;
};

queueMethods.size = function() {
  return this.index;
};