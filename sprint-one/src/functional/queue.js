var Queue = function() {

  /*HR Solution
  var someInstance = {};
  var storage = {};
  var start = 0;
  var end = 0;

  someInstance.enqueue = function(value) {
    storage[end++] = value;
  };

  someInstance.dequeue = function() {
    var result = storage[start]; 
    if(someInstance.size()){
      delete storage[start];
      start++;
    } 
    return result;
  };

  someInstance.size = function() {
    return end-start;
  };

  return someInstance;
*/

  var someInstance = {};
  var storage = {};
  var index = 0;
  //HR's implementation is better because you don't have to interate through every dequeue.

  someInstance.enqueue = function(value) {
    storage[index] = value; 
    index++;
  };

  someInstance.dequeue = function() {    
    if (storage.length === 0) {
      return;
    }
    var garbage = storage[0];
    index--;
    delete storage[0];
    for (var key in storage) {
      storage[key - 1] = storage[key];
    }
    delete storage[index];
    return garbage;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};