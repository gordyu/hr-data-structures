/*//HR Solution
var makeQueue = function(){
  //var someInstance = Object.create(queueMethods);  
  //Pseudoclassical automatically adds for us

  this._storage = {};
  this._start = 0;
  this._end = 0;

  //_.extend(someInstance, queueMethods); //Pseudoclassical automatically extends based on the keyword this.

  //return someInstance;
  //Pseudoclassical automatically returns.
};

//Store to Queue.prototype, not queueMethods.

Queue.prototype.enqueue = function(value) {
  this._storage[this._end++] = value;
};

Queue.prototype.dequeue = function() {
  var result = this._storage[this._start] 
  if(this.size()){
    delete this._storage[this._start];
    this._start++;
  } 
  return result;
};

Queue.prototype.size = function() {
  return this._end-this._start;
};
*/

var Queue = function() {
  this.storage = {};
  this.index = 0;
};
  
Queue.prototype.enqueue = function(value) { 
  this.storage[this.index] = value;
  this.index++;
};

Queue.prototype.dequeue = function() {
  if (this.index === 0) {
    return;
  }
  var garbage = this.storage[0];
  for (var key in this.storage) {
    this.storage[key - 1] = this.storage[key];
  }
  this.index--;
  delete this.storage[this.index];
  return garbage;
};

Queue.prototype.size = function() {
  return this.index;
};