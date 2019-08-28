var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;
  
  // Implement the methods below
  someInstance.push = function(value) {
    storage[index] = value; // {0: a}
    index++;
  };

  someInstance.pop = function() {
    index--;
    var garbage = storage[index];
    delete storage[index];
    return garbage;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};