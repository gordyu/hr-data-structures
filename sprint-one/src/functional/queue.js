var Queue = function() {
  var someInstance = {};
  var storage = {};

  someInstance.enqueue = function(value) {
    storage.unshift(value);
  };

  someInstance.dequeue = function() {    
    if (storage.length === 0) return;
    var temp = storage[0].pop();
    return temp;
  };

  someInstance.size = function() {
    return storage.length;
  };
};
