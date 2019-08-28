/*//HR Solution
var makeQueue = function(){
  var someInstance = Object.create(queueMethods);  
  //var someInstance = {};
  //In prototypal, used object.Create

  someInstance._storage = {};
  someInstance._start = 0;
  someIstance._end = 0;

  //_.extend(someInstance, queueMethods); //In prototypal, do not use extend.  Rather, delegate to makeQueue to object that has those properties already.

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
  return this._end-this._start;
};
*/

var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.index = 0;
  return someInstance;
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
  for (var key in this.storage) {
    this.storage[key - 1] = this.storage[key];
  }
  this.index--;
  return garbage;
};

queueMethods.size = function() {
  return this.index;
};